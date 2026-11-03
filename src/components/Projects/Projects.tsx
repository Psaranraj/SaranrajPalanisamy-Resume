import resumeData from "../../data/resumeData.json";

// "Project name | tech stack" followed by its bullet points.
function Projects() {
  return (
    <section className="section">
      <h2>Projects</h2>

      {resumeData.projects.map((project) => (
        <div className="entry" key={project.name}>
          <p className="line">
            <strong>{project.name}</strong> | {project.tech}
          </p>

          <ul>
            {project.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Projects;
