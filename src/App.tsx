import { CssBaseline } from "@mui/material"
import Footer from "./components/Footer/Footer"
import NavBar from "./components/Navbar/Navbar"
import About from "./pages/about/about"
import Clients from "./pages/clients/clients"
import Home from "./pages/home/Home"


function App() {


  return (
  <>
  <CssBaseline>
    <NavBar/>
    <Home/>
    <About/>
    <Clients/>
    <Footer/></CssBaseline>
  </>
  )
}

export default App
