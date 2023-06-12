import './About.css'
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { MdMail} from 'react-icons/md'
import Curriculum from '../../assets/CV-AGUSTIN BARRIONUEVO (English).pdf'
import {HiOutlineDownload} from 'react-icons/hi'
export default function About () {
	return(
		<div className='about-container'>
			<div className='about'>
				<h1>Full-Stack Developer</h1>
				<h2>I'm Agustin Barrionuevo, a Full-Stack Developer and Business student based in Argentina. </h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem nostrum ex excepturi ad animi voluptates, quos earum iure molestiae accusantium reprehenderit, voluptate mollitia. Libero, et quo delectus magni soluta quod! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel non cupiditate, impedit veritatis necessitatibus culpa consequatur excepturi obcaecati molestiae officia soluta, repellat deleniti tenetur modi quidem minima, corporis aut voluptas!</p>
			</div>
			<div className='social-links'>
				<button className='link-btn'><a className='link' href='https://www.linkedin.com/in/agustin-barrionuevo-a7a25b238/'L target='_blank'><BsLinkedin/></a></button>
				<button className='link-btn' ><a className='link' href='https://github.com/agusbarrionuevo2' target='_blank'><BsGithub/></a></button>
				<button className='link-btn'><a className='link' href="mailto:agubarrionuevo@gmail.com" target="_blank" without rel="noreferrer" ><MdMail/></a></button>
				<button className='link-btn'><a href={Curriculum} download className='btn-cv'>Download CV Here <HiOutlineDownload/></a></button>
			</div>
		</div>
	)
}