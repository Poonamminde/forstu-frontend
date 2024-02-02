import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
const Index = () => {
  return (
    <div class="home-container">
      <h1>Scholarship Management System</h1>
      <Link to="/college">
        <button class="button">College</button>
      </Link>
      <Link to="/student">
        <button class="button">Student</button>
      </Link>
    </div>
  );
};

export default Index;
