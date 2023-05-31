import { Router } from "react-router-dom"
import ContactMe from "./Contact Me/ContactMe"
import NavBar from "./NavBar/NavBar"
import Projects from "./Projects/Projects"
import Skills from "./Skills/Skills"

function App() {

  return (
    <>
      <Router path='NavBar' ><NavBar/></Router>
      <Router path='Skills' ><Skills/></Router>
      <Router path='Projects' ><Projects/></Router>
      <Router path='ConctactMe' ><ContactMe/></Router>
    </>
  )
}

export default App
