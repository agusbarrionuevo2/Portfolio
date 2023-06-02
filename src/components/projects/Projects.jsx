import projects from '../../helpers/projects.js'
import './Projects.css'

export default function Projects () {
	return (
		<section id="portfolio">
		  <div className="container portfolio__container">
			{projects.map((p) => (
			  <article className="portfolio__item" key={p.id}>
				<div className="portfolio__item-image">
				  <img src={p.img} alt={p.title} />
				</div>
				<div className="portfolio__item-content">
				  <h3>{p.title}</h3>
				  <p>{p.descr}</p>
				  <p>{p.tech}</p>
				</div>
				<div className="portfolio__item-cta">
				  <a
					href={p.github}
					target="_blank"
					className="btn"
					rel="noreferrer"
				  >
					GitHub
				  </a>
				  <a
					href={p.link}
					target="_blank"
					className="btn btn-primary"
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
