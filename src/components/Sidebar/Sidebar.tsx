import "./Sidebar.css";

import ProfileImage from "../ProfileImage/ProfileImage";
import Contact from "../Contact/Contact";
import Skills from "../Skills/Skills";
import Languages from "../Languages/Languages";
import Hobbies from "../Hobbies/Hobbies";

function Sidebar() {
  return (
    <div className="sidebar">

      <ProfileImage />

      <Contact />

      <Skills />

      <Languages />

      <Hobbies />

    </div>
  );
}

export default Sidebar;