import React from "react";
import "./certificate.css";

import crt from "../../assets/cource-certificate.jpeg";

const Certificate = () => {
  return (
    <div className="certificate">
      <h1> My Certificate</h1>
     
     

      <img src={crt} alt={"certificate"} className="certificate-img" />
    </div>
  );
};

export default Certificate;
