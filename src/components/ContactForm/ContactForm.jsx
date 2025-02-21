import "./ContactForm.scss";

import emailjs from "@emailjs/browser";
import { useRef } from "react";

const ContactForm = () => {
  const refForm = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nvzk8km",
        "template_45afwgu",
        refForm.current,
        "HYmF-JQL0Pl-xbNNY"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          alert("Failed to send the message. Error: " + error.text);
        }
      );
  };

  return (
    <form className="contact-form" ref={refForm} onSubmit={sendEmail}>
      <div className="form-upper">
        <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email" required />
      </div>
      <div className="form-lower">
        <input type="text" name="subject" placeholder="Subject" required />
        <textarea
          placeholder="Please put your message here"
          name="message"
          required
        ></textarea>
        <input type="submit" className="flat-button" value="SEND" />
      </div>
    </form>
  );
};

export default ContactForm;
