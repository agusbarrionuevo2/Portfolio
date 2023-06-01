import './Skills.css'
import * as Icons from "../helpers/icons.js";

const Skill = ({name}) => (
	<div className="experience__details">
	  <img src={Icons[name]} alt=""/>
	  <h4>{name === "Cpp" ? "C++" : name}</h4>
	</div>
  )

export default function Skills () {
	return(
	<section id="experience">
		<h2>Technologies</h2>
		<div className="experience__content">
			<Skill name="HTML" />
			<Skill name="CSS" />
			<Skill name="JavaScript" />
			<Skill name="React" />
			<Skill name="Redux" />
			<Skill name="PostgreSQL" />
			<Skill name="MongoDB" />
			<Skill name="NodeJS" />
			<Skill name="ExpressJS" />
			<Skill name="Sequelize" />
			<Skill name="Git" />
			<Skill name="Bootstrap" />
		</div>
		</section>
	)
}