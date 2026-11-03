import "./Contact.css";
import resumeData from "../../data/resumeData.json";

function Contact() {
  return (
    <div className="contact">

      <h2>Contact</h2>

      <hr />

      <div className="contact-item">
        <h4>Address</h4>
        <p>{resumeData.contact.location}</p>
      </div>

      <div className="contact-item">
        <h4>Mobile No</h4>
        <p>{resumeData.contact.phone}</p>
      </div>

      <div className="contact-item">
        <h4>Email</h4>
        <p>{resumeData.contact.email}</p>
      </div>

      <div className="contact-item">
        <h4>GitHub</h4>
        <p>
          <a href={`https://${resumeData.contact.github}`} target="_blank" rel="noreferrer">
            {resumeData.contact.github}
          </a>
        </p>
      </div>

      <div className="contact-item">
        <h4>LinkedIn</h4>
        <p>
          <a href={`https://${resumeData.contact.linkedin}`} target="_blank" rel="noreferrer">
            {resumeData.contact.linkedin}
          </a>
        </p>
      </div>

    </div>
  );
}

export default Contact;