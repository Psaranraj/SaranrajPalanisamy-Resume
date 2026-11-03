import "./Experience.css";
import resumeData from "../../data/resumeData.json";

function Experience() {
  return (
    <div className="experience">

      <h2>Experience</h2>

      <hr />

      {resumeData.experience.map((item) => (
        <div className="experience-item" key={item.company}>

          <div className="experience-header">

        <div>
            <h3>{item.company}</h3>
            <h4>{item.role}</h4>
        </div>

        <p className="duration">
            {item.duration}
        </p>

        </div>

        <ul>
          {item.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>

            </div>
        ))}

    </div>
  );
}

export default Experience;