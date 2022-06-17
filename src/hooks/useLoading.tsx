import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";

interface LoadingContextData {
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

interface LoadingProviderProps {
  children: ReactNode;
}

const LoadingContext = createContext<LoadingContextData>({} as LoadingContextData);

export function LoadingProvider({children}: LoadingProviderProps){
  const [ isLoading, setIsLoading ] = useState(false);

  return (
    <LoadingContext.Provider value={{isLoading, setIsLoading}}>
      { children }
    </LoadingContext.Provider>
  )
}

export function useLoading(): LoadingContextData {
  const context = useContext(LoadingContext);
  
  return context
}