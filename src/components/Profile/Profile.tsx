import resumeData from "../../data/resumeData.json";

function Profile() {
  return (
    <section className="section">
      <h2>Professional Summary</h2>
      <p>{resumeData.profile}</p>
    </section>
  );
}

export default Profile;
