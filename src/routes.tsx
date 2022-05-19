import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { UserPage } from "./pages/UserPage";

export function AppRoutes(){
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/user-page" element={<UserPage/>}/>
      </Routes>
    </Router>
  )
}