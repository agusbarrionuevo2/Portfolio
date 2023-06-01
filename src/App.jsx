import { Route, Routes } from "react-router-dom";
import ContactMe from "./components/contactMe/ContactMe";
import NavBar from "./components/navBar/NavBar.jsx";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import About from "./components/about/About";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="About" Component={About} />
        <Route exact path="Skills" Component={Skills} />
        <Route exact path="Projects" Component={Projects} />
        <Route exact path="ContactMe" Component={ContactMe} />
      </Routes>
    </>
  );
}

export default App;
