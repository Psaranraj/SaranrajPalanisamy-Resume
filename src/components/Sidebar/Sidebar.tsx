import "./Sidebar.css";

import ProfileImage from "../ProfileImage/ProfileImage";
import Contact from "../Contact/Contact";
import Skills from "../Skills/Skills";
import Languages from "../Languages/Languages";

function Sidebar() {
  return (
    <div className="sidebar">

      <ProfileImage />

      <Contact />

      <Skills />

      <Languages />

    </div>
  );
}

export default Sidebar;