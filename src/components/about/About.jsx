import React from "react";
import "./about.css";
import Me from "../../assets/portfolioicon-2.png";

import { FaAward } from "react-icons/fa";
import { GiCoffeeCup } from "react-icons/gi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Fresher</h5>
              <small>6+Month Training</small>
            </article>

            <article className="about__card">
              <GiCoffeeCup className="about__icon" />
              <h5>Cup of coffee</h5>
              <small>5000+</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>30+Projects</small>
            </article>
          </div>
          <p>
            I am a highly motivated Front End Developer with a passion for
            creating user-friendly websites and applications. I specialise in
            HTML5, CSS3, JavaScript, React . I have a proven ability to
            collaborate effectively with both technical and non-technical teams,
            and am always looking for ways to improve my knowledge and skills. I
            am looking forward to prove my excellence with the dynamically
            growing company who appreciates quality.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
