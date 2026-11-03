import resumeData from "../../data/resumeData.json";

// One line per group, e.g. "Frontend: HTML, CSS, ..."
function Skills() {
  return (
    <section className="section">
      <h2>Technical Skills</h2>

      {resumeData.skills.map((group) => (
        <p className="line" key={group.category}>
          <strong>{group.category}:</strong> {group.items}
        </p>
      ))}
    </section>
  );
}

export default Skills;
