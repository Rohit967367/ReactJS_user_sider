import React from "react";
import Classes from "./Intro.module.css";
import liveStream from "../../Image/Video.svg";

const Intro = () => {
  return (
    <div className={Classes.intro}>
      <div className={Classes.container}>
        <div className={Classes.leftIntro}>
          <h1>Live streaming site</h1>
        </div>
        <div className={Classes.rightIntro}>
          <img src={liveStream} alt={liveStream} />
        </div>
      </div>
    </div>
  );
};

export default Intro;
