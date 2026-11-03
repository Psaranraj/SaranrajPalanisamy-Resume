import resumeData from "../../data/resumeData.json";

// "Role | Company | Duration" followed by its bullet points.
function Experience() {
  return (
    <section className="section">
      <h2>Experience and Training</h2>

      {resumeData.experience.map((item) => (
        <div className="entry" key={item.role}>
          <p className="line">
            <strong>{item.role}</strong> | {item.company} | {item.duration}
          </p>

          <ul>
            {item.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Experience;
