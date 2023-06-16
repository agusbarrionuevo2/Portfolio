import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { MdMail} from 'react-icons/md'
import Curriculum from '../../assets/CV-AGUSTIN BARRIONUEVO (English).pdf'
import {HiOutlineDownload} from 'react-icons/hi'
import './Links.css'

export default function Links () {
	return(
		<>
			<div className='social-links'>
				<a className='link' href='https://www.linkedin.com/in/agustin-barrionuevo-a7a25b238/'L target='_blank'><BsLinkedin size={40} color='#386EE9'/><span></span></a>
				<a className='link' href='https://github.com/agusbarrionuevo2' target='_blank'><BsGithub size={40} color='#6F3EAD'/><span></span></a>
				<a className='link' href="mailto:agubarrionuevo@gmail.com" target="_blank" without rel="noreferrer" ><MdMail size={40} color='red'/><span></span></a>
				<a className='link' href={Curriculum} download> <HiOutlineDownload size={40} color='white'/><span></span></a>
			</div>
		</>
	)
}