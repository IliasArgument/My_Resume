import React from "react";
import myFoto from "../../img/art.png";
import "./MyInfo.css";

const MyInfo = () => {
  return (
    <div className="Block">
      <div className="My_info">
        <div className="Info">
          <h1 className="Info_name">Hi, my name is Ilya Kolesnikov</h1>
          <h2 className="Info_profi">I'm a front-end developer</h2>
          <p className="Info_text">
            I have been doing web development for over a year, I am happy that I
            found something that brings me pleasure.
          </p>
          <div className="Link_to_git">
          <a href="https://github.com/IliasArgument"><p className="Link_git">GitHub</p></a>
          </div>
        </div>
        <div className="Foto">
          <p>
            <img className="My_self" src={myFoto} alt="myFoto"></img>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyInfo;
