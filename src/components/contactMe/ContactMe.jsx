import { useRef } from 'react'
import './ContactMe.css'
export default function ContactMe () {
	const form = useRef();
	return(
		<div className='containerAbout'>
			<h1>Slide in my Dms</h1>
			<form ref={form}>
				<input className='inputs' type='text' name='name' placeholder='Name'/>
				<input className='inputs' type='text' name='email' placeholder='Email'/>
				<textarea className='inputs' type='text' name='message' placeholder='Message'/>
				<button type='submit'>Send Email</button>
			</form>
		</div>
	)
}