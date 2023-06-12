import { NavLink } from "react-router-dom";
import './Navbar.css'
import  {FiSun} from 'react-icons/fi' //es oara el button de dark/ligt mode
export default function NavBar () {
	return(
		<div>
			<nav>
				<NavLink to="/">About</NavLink>
				<NavLink to='Skills'>Skills</NavLink>
				<NavLink to='Projects'>Projects</NavLink>
				<NavLink to='ContactMe'>Contact Me</NavLink>
			</nav>
		</div>
	)
}