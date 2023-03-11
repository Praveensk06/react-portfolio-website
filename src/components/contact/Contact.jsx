import React, { useState, useRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";

const Contact = () => {
  const [buttonText, setButtonText] = useState("Send");

  function handleClick() {
    setButtonText("Message sent!");

    setTimeout(() => {
      setButtonText(buttonText);
    }, 3000);
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_yc371uh",
      "template_4mgrg4d",
      form.current,
      "asBxc-JVxWKmwH1SK"
    );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>praveensk1819@gmail.com</h5>
            <a href="mailto:praveensk1819@gmail.com" target="_blank">
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <BsInstagram className="contact__option-icon" />
            <h4>Instagram</h4>
            <h5>_2stroke_smoker</h5>
            <a
              href="https://www.instagram.com/invites/contact/?i=rxhx5rr8te60&utm_content=3ogcg90"
              target="_blank"
            >
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>9751383930</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+919751383930"
              target="_blank"
            >
              Click here to Send me a message
            </a>
          </article>
        </div>
        {/* end form */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your message"
            required
          ></textarea>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleClick}
          >
            {buttonText}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
