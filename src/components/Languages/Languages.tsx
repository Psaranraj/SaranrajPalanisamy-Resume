import "./Languages.css";
import resumeData from "../../data/resumeData.json";

function Languages() {
  return (
    <div className="languages">

      <h2>Languages</h2>

      <hr />

      <ul>
  {resumeData.languages.map((language) => (
    <li key={language}>{language}</li>
  ))}
</ul>

    </div>
  );
}

export default Languages;