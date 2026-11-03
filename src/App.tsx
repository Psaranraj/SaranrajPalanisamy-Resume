import ResumeHeader from "./components/ResumeHeader/ResumeHeader";
import Profile from "./components/Profile/Profile";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import Languages from "./components/Languages/Languages";

// Single-column resume, same section order as the PDF resume.
// All text comes from src/data/resumeData.json.
function App() {
  return (
    <>
      <button className="print-button" onClick={() => window.print()}>
        Download PDF
      </button>

      <main className="resume">
        <ResumeHeader />
        <Profile />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Languages />
      </main>
    </>
  );
}

export default App;
