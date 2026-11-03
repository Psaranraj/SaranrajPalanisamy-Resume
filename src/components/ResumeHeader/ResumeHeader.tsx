import "./ResumeHeader.css";
import resumeData from "../../data/resumeData.json";

function ResumeHeader() {
  return (
    <div className="resume-header">

      <h1>{resumeData.personalInfo.name}</h1>

      <h3>{resumeData.personalInfo.title}</h3>

    </div>
  );
}

export default ResumeHeader;