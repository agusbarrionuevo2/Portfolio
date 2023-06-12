import { NavLink, Route, Routes } from "react-router-dom";
import ContactMe from "./components/contactMe/ContactMe";
import NavBar from "./components/navBar/NavBar.jsx";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import About from "./components/about/About";
import img from './assets/Yo2.png'
import './App.css'

function App() {
  return (
    <div className="crop">
      <NavLink to='About'><img src={img} className="me"/></NavLink>
      <NavBar />
      <Routes>
        <Route exact path="About" Component={About} />
        <Route exact path="Skills" Component={Skills} />
        <Route exact path="Projects" Component={Projects} />
        <Route exact path="ContactMe" Component={ContactMe} />
      </Routes>
    </div>
  );
}

export default App;
