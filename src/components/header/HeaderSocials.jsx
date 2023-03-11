import React from "react";

import { BsLinkedin } from "react-icons/bs";

import { FaGithub } from "react-icons/fa";

import { FiTwitter } from "react-icons/fi";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/praveen-s-237916250" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/Praveensk06" target="_blank">
        <FaGithub />
      </a>
      <a
        href="https://twitter.com/Praveen46268923?t=Vt38C4Nr42XNP6HUTp7u1w&s=09"
        target="_blank"
      >
        <FiTwitter />
      </a>
    </div>
  );
};

export default HeaderSocials;
