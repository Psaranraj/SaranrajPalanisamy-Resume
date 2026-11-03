import "./Profile.css";
import resumeData from "../../data/resumeData.json";

function Profile() {
  return (
    <div className="profile">

      <h2>Profile</h2>

      <hr />

      <p>{resumeData.profile}</p>

    </div>
  );
}

export default Profile;