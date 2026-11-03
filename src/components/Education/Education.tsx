import "./Education.css";
import resumeData from "../../data/resumeData.json";

function Education() {
  return (
    <div className="education">

      <h2>Education</h2>

      <hr />

      {resumeData.education.map((item) => (
        <div className="education-item" key={item.degree}>

          <div className="education-header">

        <div>
            <h3>{item.degree}</h3>

            <p className="institution">
                {item.college}
            </p>
        </div>

            <p className="year">
            {item.year}
            </p>

    </div>

        <p className="percentage">
            {item.percentage}
        </p>

        </div>
      ))}

    </div>
  );
}

export default Education;