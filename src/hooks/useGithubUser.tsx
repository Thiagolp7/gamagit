import { createContext, ReactNode, useContext, useState } from "react";
import { githubApi } from "../services/githubApi";

interface IUserData {
  name: string;
  login: string;
  avatar_url: string;
  repos_url: string;
  email: string;
  blog: string;
  bio: string;
}

interface IUserRepositorie {
  name: string;
  html_url: string;
  description: string;
}

interface GithubUserProviderProps {
  children: ReactNode;
}

interface GithubUserContextData {
  userData: IUserData;
  userRepositories: IUserRepositorie[];
  getUserApiData: (userName: string) => Promise<void>;
}

const GithubUserContext = createContext<GithubUserContextData>({} as GithubUserContextData)

export function GithubUserProvider({children}: GithubUserProviderProps){
  const [userData, setUserData] = useState<IUserData>({} as IUserData)
  const [userRepositories, setUserRepositories] = useState<IUserRepositorie[]>([] as IUserRepositorie[] )

  async function getUserApiData(userName: string){
    const userData = await githubApi.get(`/${userName}`)
    .then(res => res.data);
    const userRepositories = await githubApi.get(`/${userName}/repos`)
    .then(res => res.data);

    const user:IUserData = {
      name: userData.name, 
      login: userData.login,
      avatar_url: userData.avatar_url,
      repos_url: userData.repos_url,
      email: userData.email,
      blog: userData.blog,
      bio: userData.bio
    }

    const repositories: IUserRepositorie[] = userRepositories.map(
      (repo: IUserRepositorie ) => {
        return { 
          name: repo.name, 
          html_url: repo.html_url,
          description: repo.description 
        }
      }
    )

    setUserData(user);
    setUserRepositories(repositories);
  } 

  return (
    <GithubUserContext.Provider
      value={{ userData, userRepositories, getUserApiData }}
    >
      {children}
    </GithubUserContext.Provider>
  );
}

export function useGithubUser(): GithubUserContextData {
  const context = useContext(GithubUserContext)

  return context
}