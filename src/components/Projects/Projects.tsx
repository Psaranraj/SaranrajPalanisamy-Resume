import "./Projects.css";
import resumeData from "../../data/resumeData.json";

function Projects() {
  return (
    <div className="projects">

      <h2>Projects</h2>

      <hr />

      {resumeData.projects.map((project) => (
        <div className="project-item" key={project.name}>

          <h3>{project.name}</h3>
          <p className="tech">{project.tech}</p>

          <ul>
            {project.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>

        </div>
      ))}

    </div>
  );
}

export default Projects;
