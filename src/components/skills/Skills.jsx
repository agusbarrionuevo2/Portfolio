import "./Skills.css";
import * as Icons from "../../helpers/icons.js";

const Skill = ({ name }) => (
  <div className="skill">
    <img src={Icons[name]} alt="" className="skill-img" />
    <h4>{name}</h4>
  </div>
);

export default function Skills() {
  return (
    <section>
      <h2>Technologies</h2>
      <div className="skills">
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
  );
}
