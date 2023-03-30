import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <div>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/aboutus">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/jobs">Jobs</Link>
      </nav>
    </div>
  );
}
