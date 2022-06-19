import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { UserPage } from "./pages/UserPage";

const AppRoutes = ():JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/user-page" element={<UserPage/>}/>
      <Route path="/*" element={<NotFound/>}/>
    </Routes>
  )
}

export default AppRoutes