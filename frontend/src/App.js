import "./App.css";
//import Footer from "./components/Footer/Footer";
//import Header from "./components/Header/Header";
import LandingPage from "./screens/LandingPage/LandingPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home"
import LoginPage from "./screens/LoginPage/LoginPage";
import Contact from "./components/Contact/Contact";
import AboutUs from "./components/AboutUs/AboutUs";
import Jobs from "./components/Jobs/Jobs";
import { useState } from "react";
//import MainScreen from "./components/MainScreen";

import { useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      // Redirect to /home if the user is logged in
      window.location.href = "/home";
    }
  }, [userInfo]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/aboutus" element={<AboutUs />}></Route>
        <Route path="/jobs" element={<Jobs />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </Router>
  );
}

export default App;