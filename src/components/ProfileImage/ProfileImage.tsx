import "./ProfileImage.css";
import profile from "../../assets/Profile.png";

function ProfileImage() {
  return (
    <div className="profile-image">
      <img src={profile} alt="Profile" />
    </div>
  );
}

export default ProfileImage;