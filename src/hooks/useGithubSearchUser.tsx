import { createContext, ReactNode, useContext, useState } from "react";
import { apiSearchUser } from "../services/githubApi";
import { useLoading } from "./useLoading";

interface IUser {
  avatar_url: string;
  login: string;
  url: string;
}

interface GithubSearchUserProviderProps {
  children: ReactNode;
}

interface GithubSearchUserData {
  searchResults: IUser[];
  searchUsers: (userName: string) => Promise<void>;
}

const GithubSearchUserContext = createContext<GithubSearchUserData>({} as GithubSearchUserData)

export function GithubSeacrhUserProvider({children}: GithubSearchUserProviderProps){
  const [searchResults, setSearchResults] = useState<IUser[]>([] as IUser[]);

  const { setIsLoading } = useLoading();


  async function searchUsers(userName: string){
    setIsLoading(true);
    const options = {
      params: {q: userName}
    }

    const searchResults: IUser[] = await apiSearchUser.get('/users', options)
    .then(res => { 
      const results: IUser[] = res.data.items.map((user: IUser) => {
        return {
          avatar_url: user.avatar_url,
          login: user.login,
          url: user.url
        }
      })

      return results
    })

    setSearchResults(searchResults)
    setTimeout(() => {
      setIsLoading(false);
    }, 1500)
  }
  
  return(
    <GithubSearchUserContext.Provider value={{searchResults, searchUsers}}>
      { children }
    </GithubSearchUserContext.Provider>
  )
}

export function useGithubSearchUser(): GithubSearchUserData {
  const context = useContext(GithubSearchUserContext)
  return context
}