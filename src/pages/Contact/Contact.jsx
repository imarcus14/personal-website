import "./Contact.scss";

import ContactForm from "../../components/ContactForm/ContactForm";
import toronto from "../../assets/photos/toronto.png";

const Contact = () => {
  return (
    <div className="container">
      <div className="contact">
        <h2>Contact Me:</h2>
        <p>
          Don't hesitate to contact me for any developer work you may be looking
          for.
        </p>

        <p>
          Happy to discuss freelance, part-time, and full-time roles and discuss
          how I am able to contribute my skills with the background I have to
          your goals. The form to contact is below.
        </p>
      </div>
      <ContactForm />
      <div className="toronto-container">
        <img className="toronto" src={toronto} alt="Toronto skyline" />
      </div>
    </div>
  );
};

export default Contact;
