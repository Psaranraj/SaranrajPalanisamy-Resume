import "./Skills.css";
import resumeData from "../../data/resumeData.json";

function Skills() {
  return (
    <div className="skills">

      <h2>Skills</h2>

      <hr />

      {resumeData.skills.map((group) => (
        <div className="skill-group" key={group.category}>
          <h4>{group.category}</h4>
          <p>{group.items}</p>
        </div>
      ))}

    </div>
  );
}

export default Skills;
