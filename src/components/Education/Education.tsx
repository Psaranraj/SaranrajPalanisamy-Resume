import resumeData from "../../data/resumeData.json";

// One line per qualification: "Degree | College | Year | Percentage"
function Education() {
  return (
    <section className="section">
      <h2>Education</h2>

      {resumeData.education.map((item) => (
        <p className="line" key={item.degree}>
          <strong>{item.degree}</strong> | {item.college} | {item.year} | {item.percentage}
        </p>
      ))}
    </section>
  );
}

export default Education;
