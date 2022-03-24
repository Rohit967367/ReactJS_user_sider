import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "./Component/Additional/Action/Loading";
import { auth } from "./Component/Additional/DB/DB";
import {
  CheckRouter,
  ProtectedRoute,
} from "./Component/Additional/ProtecterRouter/ProtectedRout";
import ForgotPassword from "./Component/Pages/Auth/ForgotPassword";
import Login from "./Component/Pages/Auth/Login";
import Register from "./Component/Pages/Auth/Register";
import Reset from "./Component/Pages/Auth/Reset";
import LiveStream from "./Component/Pages/LiveStream/LiveStream";
import Home from "./Component/Pages/Home/Home";
import Intro from "./Component/Pages/Home/Intro";
import Toster from "./Component/Additional/Action/Toster";
import Contact from "./Component/Pages/Contact/Contact";
import Recorded from "./Component/Pages/Recorded/Recorded";
// import { Testing } from "./Component/Pages/Home/Testing";

const App = () => {
  console.log(process.env.API_Key);

  const [load, setload] = useState(true);

  useEffect(() => {
    const cheakUser = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user.email);
      }
      setload(false);
    });

    cheakUser();
  }, []);
  if (load) {
    return <Loading style={{ minHeight: "100vh" }} />;
  }

  return (
    <div>
      <Toster />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="" element={<Intro />} />
          <Route
            path="/live-streaming"
            element={
              <ProtectedRoute>
                <LiveStream />
              </ProtectedRoute>
            }
          />
          <Route
            path="/contact"
            element={
              <ProtectedRoute>
                <Contact />
              </ProtectedRoute>
            }
          />
          <Route
            path="/live-video-recorded"
            element={
              <ProtectedRoute>
                <Recorded />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route
          path={"/signIn"}
          element={
            <CheckRouter>
              <Login />
            </CheckRouter>
          }
        />
        <Route
          path={"/signUp"}
          element={
            <CheckRouter>
              <Register />
            </CheckRouter>
          }
        />
        <Route
          path={"/forgot-password"}
          element={
            <CheckRouter>
              <ForgotPassword />
            </CheckRouter>
          }
        />
        <Route
          path={"/reset"}
          element={
            <CheckRouter>
              <Reset />
            </CheckRouter>
          }
        />

        {/* <Route path={"/test"} element={<Testing />} /> */}
      </Routes>
    </div>
  );
};

export default App;
