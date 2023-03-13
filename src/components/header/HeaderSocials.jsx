import React from "react";

import { BsLinkedin } from "react-icons/bs";

import { FaGithub } from "react-icons/fa";

import { SiHashnode } from "react-icons/si";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/praveen-s-237916250" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/Praveensk06" target="_blank">
        <FaGithub />
      </a>
      <a href="https://praveensk.hashnode.dev/" target="_blank">
        <SiHashnode />
      </a>
    </div>
  );
};

export default HeaderSocials;
