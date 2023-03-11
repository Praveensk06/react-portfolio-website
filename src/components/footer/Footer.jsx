import React from "react";
import "./footer.css";

import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Praveen
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">portfolio</a>
        </li>
        <li>
          <a href="#testimonial">Testimonial</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/praveen.sk.790">
          <BsFacebook />
        </a>
        <a href="https://www.instagram.com/invites/contact/?i=rxhx5rr8te60&utm_content=3ogcg90">
          <BsInstagram />
        </a>
        <a href="https://twitter.com/Praveen46268923?t=Vt38C4Nr42XNP6HUTp7u1w&s=09">
          <BsTwitter />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy;Praveen .All rights reservice</small>
      </div>
    </footer>
  );
};

export default Footer;
