import { BrowserRouter } from "react-router-dom"
import { GithubUserProvider } from "./hooks/useGithubUser"
import AppRoutes from "./routes"

function App() {
  return (
    <BrowserRouter>
      <GithubUserProvider>
        <AppRoutes/>
      </GithubUserProvider>
    </BrowserRouter>
  )
}

export default App
