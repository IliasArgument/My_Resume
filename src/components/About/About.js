import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="About_me" id="about">
      <h2 className="About_me_head">About me</h2>
      <div className="About_me_body">
        <div className="About_me_cv about">
          <p className="paragraf">
            Good knowledge of JavaScript and JavaScript frameworks such as
            React. I am also hardworking, efficient, flexible and can work under
            pressure. I easily make new acquaintances, I am sociable, I
            appreciate straightforwardness, openness and a sense of humor. I
            quickly adapt to new conditions, I complete the assigned tasks on
            time and as productively as possible.
          </p>
          <br />
          <h4 className="About_me_cv_head">EDUCATION/DEGREES:</h4>
          <p  className="paragraf">
            OO Bogomolets Kyiv Medical University. Specialty: Traumatology and
            Orthopedics. 2010 – 2016
          </p>
          <br />
          <p  className="paragraf">
            Passed 8 month UDEMI course (html, css), (JavaScript, React & Redux)
          </p>
          <br />
          <p  className="paragraf">
            Passed 3 month Coursehounter (html, css), (React/redux in 2020-2021)
          </p>
        </div>
        <div className="About_me_cv">
          <h3 className="Personal_info">Personal Information</h3>
          <ul className="Personal_info_me">
            <li className="Personal_info_li">Full name: Ilia Koliesnikov</li>
            <li className="Personal_info_li">
              Place of residence: Kiev - Odessa
            </li>
            <li className="Personal_info_li">Tel: +380632865495</li>
            <li className="Personal_info_li">Email: ilakoles96@gmail.com</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
