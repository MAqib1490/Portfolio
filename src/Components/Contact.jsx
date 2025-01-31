import React from "react";
import { FaPhone } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

const Contact = () => {
  return (
    <>
      <div className="container contact" id="contact">
        <h1>CONTACT ME</h1>
        <div className="contact-icon">
          <a href="tel:+923091468292" className="items">
            <FaPhone className="Icons" />
          </a>
          <a href="https://www.github.com" target="_black" className="items">
            <FaGithub className="Icons" />
          </a>
          <a href="https://www.linkedin.com/" target="_black" className="items">
            <FaLinkedin className="Icons" />
          </a>
          <a href="mailto:maqib8373@gmai.com" target="_black" className="items">
            <CgMail className="Icons" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
