import resumeData from "../../data/resumeData.json";

function Languages() {
  return (
    <section className="section">
      <h2>Languages</h2>
      <p>{resumeData.languages.join(", ")}</p>
    </section>
  );
}

export default Languages;
