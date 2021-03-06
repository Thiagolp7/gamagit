import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { githubApi } from "../services/githubApi";
import { useLoading } from "./useLoading";

interface IUserData {
  name: string;
  login: string;
  avatar_url: string;
  html_url: string;
  email: string;
  blog: string;
  bio: string;
  location: string;
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
  const { setIsLoading } = useLoading();

  useEffect(() => {
    const userData = getLocalStorage("@Gamagit:user");
    const userRepositories = getLocalStorage('@Gamagit:repositories');

    if(userData){
      setUserData(userData);
    } else {
      setUserData({} as IUserData);
    }

    if(userRepositories) {
      setUserRepositories(userRepositories);
    } else {
      setUserRepositories([] as IUserRepositorie[]);
    }
  }, [])

  function setLocalStorage(key: string, data: IUserData | IUserRepositorie[]){
    localStorage.setItem(key, JSON.stringify(data))
  }

  function getLocalStorage(key: '@Gamagit:user' | '@Gamagit:repositories'){
    const data = localStorage.getItem(key)
    
    if(data){
      return JSON.parse(data)
    }
  }

  async function getUserApiData(userName: string){
    setIsLoading(true);
    const userData = await githubApi.get(`/${userName}`)
    .then(res => res.data);
    const userRepositories = await githubApi.get(`/${userName}/repos`)
    .then(res => res.data);

    const user:IUserData = {
      name: userData.name, 
      login: userData.login,
      avatar_url: userData.avatar_url,
      html_url: userData.html_url,
      email: userData.email,
      blog: userData.blog,
      bio: userData.bio,
      location: userData.location
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
    setLocalStorage('@Gamagit:user', user)
    setUserRepositories(repositories);
    setLocalStorage('@Gamagit:repositories', repositories)
    setTimeout(() => {
      setIsLoading(false);
    }, 1500)
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