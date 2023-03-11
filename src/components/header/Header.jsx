import React from "react";
import "./header.css";
import CTA from "./CTA";
import Me from "../../assets/me-2.jpg";
import HeaderSocial from "./HeaderSocials";

const Header = () => {
  return (
    <header className="container header__container">
      <div>
        <h5>Hello I'm</h5>
        <h1>Praveen </h1>
        <h5 className="text-light">React Front-End-Developer</h5>
        <CTA />
        <HeaderSocial />

        <div>
          <img src={Me} className="me" alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
