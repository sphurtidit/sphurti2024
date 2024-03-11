import { BrowserRouter as Router,Route, Routes } from "react-router-dom"
import App from "./App"
import Navbar from "./pages/Result_Page/Navbar/Navbar"
import Nav from "./Components/Navbar/nav"

export const Home=()=>{
    return(
        <main>
        <Nav/>
       <Router>
        <Routes>
        <Route path="/" element={<App/>} />
        <Route exact path="/live-results" element={<Navbar/>} />
        </Routes>
       </Router>
       </main>
    )
}