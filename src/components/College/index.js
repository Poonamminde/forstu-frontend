import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
const Index = () => {
  return (
    <div class="c-container">
      <h1>Scholarship Management System</h1>
      <Link to="/upload">
        <button class="button">upload File</button>
      </Link>
      <Link to="/admin">
        <button class="button">Admin Pannel</button>
      </Link>
    </div>
  );
};

export default Index;
