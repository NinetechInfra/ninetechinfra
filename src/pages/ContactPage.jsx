import React from "react";
import Contact from "../components/Contact";
import contact from "../images/NineTech-contact.png";
import { contactPage } from "../services/DataService";

const ContactPage = (props) => {
  return (
    <>
      <Contact data={contactPage} head="Contact Us" src={contact} />
    </>
  );
};

export default ContactPage;
