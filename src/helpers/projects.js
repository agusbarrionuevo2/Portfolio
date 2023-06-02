import VideogamesApp from '../assets/VideogamesApp.jpg'
import Microservices from '../assets/Microservices-Architecture.jpg'
import CandyShop from '../assets/CandyShop.jpg'



const projects = [
	{
		id: 1,
		title: 'Candy Shop',
		// img: CandyShop,
		descr: 'E-commerce for a candy wholesaler.',
		tech: 'Postgres, ChakraUI, Express, Vite, React, Redux and Node.',
		link: 'https://www.youtube.com/watch?v=hsnoTkX3F24&ab_channel=AgusBarrionuevo',
		github: 'https://github.com/agusbarrionuevo2/CandyShop',
		liveDemo: 'https://candy-shop-sage.vercel.app/'
	},
	{
		id: 2,
		title: 'Videogames App',
		// img: VideogamesApp,
		descr: 'Single Page Application, that includes search, order, filter and create functionalities.',
		tech: 'Postgres, Express, React, Redux and Node',
		link: '',
		github: 'https://github.com/agusbarrionuevo2/SPA-Videogames-IP-Henry'
	},
	{
		id: 3,
		title: 'Microservices App',
		// img: Microservices,
		descr: 'Back-end App created with microservices architecture.',
		tech:'Node, Express, MongoDb, Mongoose, Google Cloud and Docker' ,
		link: '',
		github: 'https://github.com/agusbarrionuevo2/Microservices',
	}
]

export default projects