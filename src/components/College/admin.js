import React from "react";
import { useState } from "react";
import Profile from "./tables/profile";
import Student from "./tables/student";
import "./admin.css";
const Admin = () => {
  const [display, setDisplay] = useState("");
  return (
    <div class="admin-container">
      <input
        type="button"
        value="Student Profiles"
        class="button"
        name="profile"
        onClick={(e) => setDisplay(e.target.name)}
      />
      {display === "profile" && <Profile />}
      <input
        type="button"
        value="Student Details"
        class="button"
        name="details"
        onClick={(e) => setDisplay(e.target.name)}
      />
      {display === "details" && <Student />}
    </div>
  );
};

export default Admin;
