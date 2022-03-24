import React from "react";
import { useNavigate, Link } from "react-router-dom";
import Classes from "./Nav.module.css";
import { signOut } from "firebase/auth";
import { auth } from "../../Additional/DB/DB";
import logo from "../../Image/logo.jpg";

const Nav = () => {
  const navigate = useNavigate();

  return (
    <div className={Classes.nav}>
      <div className={Classes.contained}>
        <div className={Classes.left}>
          <div className={Classes.logo}>
            <img src={logo} alt={logo} />
          </div>
        </div>
        <div className={Classes.right}>
          <div className={Classes.navBar}>
            <ul className={Classes.list}>
              <li className={Classes.activeNav}>
                <Link to={"/"}>Home</Link>
              </li>
              <li className={Classes.activeNav}>
                <Link to={"/live-streaming"}>Live</Link>
              </li>
              <li className={Classes.activeNav}>
                <Link to={"/live-video-recorded"}>Recorded Video</Link>
              </li>
              <li className={Classes.activeNav}>
                <Link to={"/contact"}>Contact Us</Link>
              </li>
              <li className={Classes.activeNav}>
                {auth.currentUser && (
                  <button
                    onClick={() =>
                      signOut(auth)
                        .then(() => navigate("/signIn", { replace: true }))
                        .catch((error) => alert(error.message))
                    }
                  >
                    Sign-out
                  </button>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
