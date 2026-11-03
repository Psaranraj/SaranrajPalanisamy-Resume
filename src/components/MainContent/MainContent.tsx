import "./MainContent.css";

import ResumeHeader from "../ResumeHeader/ResumeHeader";
import Profile from "../Profile/Profile";
import Projects from "../Projects/Projects";
import Experience from "../Experience/Experience";
import Education from "../Education/Education";

function MainContent() {
  return (
    <div className="main-content">

      <ResumeHeader />

      <Profile />

      <Projects />

      <Experience />

      <Education />

    </div>
  );
}

export default MainContent;