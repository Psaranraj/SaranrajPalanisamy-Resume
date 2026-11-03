import "./Hobbies.css";
import resumeData from "../../data/resumeData.json";

function Hobbies() {
  return (
    <div className="hobbies">

      <h2>Hobbies</h2>

      <hr />

      <ul>
        {resumeData.hobbies.map((hobby) => (
        <li key={hobby}>{hobby}</li>
        ))}
    </ul>

    </div>
  );
}

export default Hobbies;