import projects from '../../helpers/projects.js'
import './Projects.css'

export default function Projects () {
	return (
		<section id="portfolio">
		  <div className="projects-container">
			{projects.map((p) => (
			  <article className="project" key={p.id}>
				  <img src={p.img} alt={p.title}  className='project-img'/>
				<div className="project-content">
				  <h3 className='project-title'>{p.title}</h3>
				  <p className='project-text'>{p.descr}</p>
				  <p className='project-text'>Made with: {p.tech}</p>
				</div>
				<div className="project-links">
				  <a
					href={p.github}
					target="_blank"
					className="btn-github"
					rel="noreferrer"
				  >
					GitHub
				  </a>
				  <a
					href={p.link}
					target="_blank"
					className="btn-video"
					rel="noreferrer"
				  >
					Video
				  </a>
				</div>
			  </article>
			))}
		  </div>
		</section>
	  );
	};
