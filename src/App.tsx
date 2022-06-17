import { BrowserRouter } from "react-router-dom"
import { GithubSeacrhUserProvider } from "./hooks/useGithubSearchUser"
import { GithubUserProvider } from "./hooks/useGithubUser"
import { LoadingProvider } from "./hooks/useLoading"
import AppRoutes from "./routes"
import { GlobalStyles } from "./styles/globalstyles"

function App() {
  return (
    <BrowserRouter>
      <LoadingProvider>
        <GithubSeacrhUserProvider>
          <GithubUserProvider>
            <AppRoutes/>
            <GlobalStyles/>
          </GithubUserProvider>
        </GithubSeacrhUserProvider>
      </LoadingProvider>
    </BrowserRouter>
  )
}

export default App
