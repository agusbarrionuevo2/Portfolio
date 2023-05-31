import { NavLink } from "react-router-dom";
import './Navbar.css'
import img from '../assets/Yo.jpg'
import  {FiSun} from 'react-icons/fi' //es oara el button de dark/ligt mode
export default function NavBar () {
	return(
		<>
			<NavLink to='About'><img src={img} className="me"/></NavLink>
			<nav>
				<NavLink to="About">About</NavLink>
				<NavLink to='ContactMe'>Contact Me</NavLink>
				<NavLink to='Skills'>Skills</NavLink>
				<NavLink to='Projects'>Projects</NavLink>
			</nav>
		</>
	)
}