import { NavLink, Route, Routes } from "react-router-dom";
import ContactMe from "./components/contactMe/ContactMe";
import NavBar from "./components/navBar/NavBar.jsx";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import About from "./components/about/About";
import img from './assets/Yo2.png'
import './App.css'

function App() {
  // const box = document.querySelector('.background')
  // const boxContent = document.querySelector('.blur')
  // const sensitivity = 15

  // box.addEventListener('mousemove', addCoors)
  // boxContent.addEventListener('mousemove', addCoors)

  // function addCoors(e){
  //   const x = e.clientX;
  //   const y = e.clientY
  //   box.style.backgroundPosition = `${x / sensitivity}px ${y / sensitivity}px`
  // }
  return (
    <div className="background">
      <div className="blur">
        <NavLink to='/'><img src={img} className="me"/></NavLink>
        <NavBar />
        <Routes>
          <Route exact path="/" Component={About} />
          <Route exact path="Skills" Component={Skills} />
          <Route exact path="Projects" Component={Projects} />
          <Route exact path="ContactMe" Component={ContactMe} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
