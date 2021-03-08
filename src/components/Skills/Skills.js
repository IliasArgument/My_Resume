import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="My_skills" id="skills">
      <h2 className="Info_profi">My Skills</h2>
      <div className="Info_skills">
        <div>
          <h3 className="Skills_head">Hard Skills</h3>
          <div className="Skills_softs">
            <ul className="Skills_soft">
              <li>JavaScript (ES6+)</li>
              <li>React.js(Router, Hooks..)</li>
              <li>HTML</li>
              <li>CSS, (Sass/Scss, Flex, Grid, BootStrap)</li>
              <li>BEM</li>
              <li>Redux</li>
            </ul>
            <ul className="Skills_soft">
              <li>Git and GitHub</li>
              <li>Webpack</li>
              <li>Npm</li>
              <li>Babel</li>
              <li>Figma</li>
              <li>English (pre-intermediate )</li>
            </ul>
          </div>
        </div>
        <div>
          <h3 className="Skills_head">Soft Skills</h3>
          <ul className="Skills_hard">
            <li>Responsibility</li>
            <li>Hardworking</li>
            <li>High degree of self-organization</li>
            <li>Easygoing</li>
            <li>Focus on achieving results</li>
            <li>punctual</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
