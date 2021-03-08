import React from "react";
import "./Footer.css";
import git from "../../img/github.png";
import facebook from "../../img/facebook.png";
import link from "../../img/LinkedIn.png";

const Footer = () => {
  return (
    <>
      <div className="Footer">
        <div className="Footer_info">
          <span>
            <a href="https://github.com/IliasArgument">
              <img className="Contact" src={git} alt="git"></img>
            </a>
          </span>
          <span>
            <a href="https://www.facebook.com/profile.php?id=10000">
              <img className="Contact" src={facebook} alt="facebook"></img>
            </a>
          </span>
          <span>
            <a href="https://www.linkedin.com/in/%D0%B8%D0%BB%D1%8C%D1%8F-%D0%BA%D0%BE%D0%BB%D0%B5%D1%81-7328461b6/">
              {" "}
              <img className="Contact" src={link} alt="link"></img>
            </a>
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
