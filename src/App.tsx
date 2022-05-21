import { BrowserRouter } from "react-router-dom"
import { GithubUserProvider } from "./hooks/useGithubUser"
import AppRoutes from "./routes"
import { GlobalStyles } from "./styles/globalstyles"

function App() {
  return (
    <BrowserRouter>
      <GithubUserProvider>
        <AppRoutes/>
        <GlobalStyles/>
      </GithubUserProvider>
    </BrowserRouter>
  )
}

export default App
