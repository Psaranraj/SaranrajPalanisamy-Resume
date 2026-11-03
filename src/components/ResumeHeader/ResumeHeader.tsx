import resumeData from "../../data/resumeData.json";

// Name, title and contact details, centred at the top of the page.
function ResumeHeader() {
  const { personalInfo, contact } = resumeData;

  return (
    <header className="resume-header">
      <h1>{personalInfo.name}</h1>
      <p className="resume-title">{personalInfo.title}</p>

      <p>
        {contact.location} | {contact.phone} |{" "}
        <a href={`mailto:${contact.email}`}>{contact.email}</a>
      </p>

      <p>
        GitHub:{" "}
        <a href={`https://${contact.github}`} target="_blank" rel="noreferrer">
          {contact.github}
        </a>{" "}
        | LinkedIn:{" "}
        <a href={`https://${contact.linkedin}`} target="_blank" rel="noreferrer">
          {contact.linkedin}
        </a>
      </p>
    </header>
  );
}

export default ResumeHeader;
