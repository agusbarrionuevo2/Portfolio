import { Route, Routes } from "react-router-dom"
import ContactMe from "./Contact Me/ContactMe"
import NavBar from "./NavBar/NavBar"
import Projects from "./Projects/Projects"
import Skills from "./Skills/Skills"
import About from "./About/About"

function App() {

  return (
    <>
    <NavBar/>
    <Routes>
      <Route exact path='About' Component={About}/>
      <Route exact path='Skills' Component={Skills}/>
      <Route exact path='Projects' Component={Projects}/>
      <Route exact path='ContactMe' Component={ContactMe}/>
    </Routes>
    </>
  )
}

export default App
