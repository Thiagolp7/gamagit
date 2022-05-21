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
  getUserApiData: (user: string) => Promise<void>;
}

const GithubUserContext = createContext<GithubUserContextData>({} as GithubUserContextData)

export function GithubUserProvider({children}: GithubUserProviderProps){
  const [userData, setUserData] = useState<IUserData>({} as IUserData)
  const [userRepositories, setUserRepositories] = useState<IUserRepositorie[]>([] as IUserRepositorie[] )

  async function getUserApiData(user: string){
    const response = await githubApi.get(`/${user}`)
    .then(res => res.data);

    const userData:IUserData = {
      name: response.name, 
      login: response.login,
      avatar_url: response.avatar_url,
      repos_url: response.repos_url,
      email: response.email,
      blog: response.blog,
      bio: response.bio
    }

    setUserData(userData)
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