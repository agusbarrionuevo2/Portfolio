import { NavLink } from "react-router-dom";
import './Navbar.css'


export default function NavBar () {
	return(
		<nav>
			<NavLink to="About">About</NavLink>
			<NavLink to='ContactMe'>Contact Me</NavLink>
			<NavLink to='Skills'>Skills</NavLink>
			<NavLink to='Projects'>Projects</NavLink>
		</nav>
	)
}