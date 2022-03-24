import React from "react";
import Classes from "../Home/Intro.module.css";
import contact from "../../Image/Contact.svg";
import ContactForm from "./ContactForm";

const Contact = () => {
  console.log("first");
  return (
    <div className={Classes.intro}>
      <div className={Classes.container}>
        <div className={Classes.leftIntro}>
          <ContactForm />
        </div>
        <div className={Classes.rightIntro}>
          <img src={contact} alt={contact} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
