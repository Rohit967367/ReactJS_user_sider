import React from "react";
import Nav from "./Nav";
import Classes from "./Intro.module.css";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Nav />
      <div className={Classes.introsSection}>
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
