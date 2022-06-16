import { BrowserRouter } from "react-router-dom"
import { GithubSeacrhUserProvider } from "./hooks/useGithubSearchUser"
import { GithubUserProvider } from "./hooks/useGithubUser"
import AppRoutes from "./routes"
import { GlobalStyles } from "./styles/globalstyles"

function App() {
  return (
    <BrowserRouter>
      <GithubSeacrhUserProvider>
        <GithubUserProvider>
          <AppRoutes/>
          <GlobalStyles/>
        </GithubUserProvider>
      </GithubSeacrhUserProvider>
    </BrowserRouter>
  )
}

export default App
