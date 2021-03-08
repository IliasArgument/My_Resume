import React from "react";
import "./Header.css";

import { Link } from "react-scroll";

const Header = () => {
  return (
    <div className="Head">
      <div className="Header">
        <div className="logo"></div>
        <ul>
          <Link
            to="about"
            className="li"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            About me
          </Link>

          <Link
            to="skills"
            className="li"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-120}
            duration={500}
          >
            My Skills
          </Link>

          <Link
            to="cards"
            className="li"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            My project
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
