import React from "react";
import "./scholarship.css";
import axios from "axios";
import { backend_url } from "../../App";

const scholarship = ({ studentObject, setStep }) => {
  const scholarships = [];
  if (studentObject.gender === "Female") {
    scholarships.push("Women Empowerment Scholarship");
  }
  if (Number(studentObject.academic_marks) > 90) {
    scholarships.push("Study Abroad Scholarships");
    scholarships.push("Research Scholarships");
    scholarships.push("Merit-Based Scholarships");
  }
  if (Number(studentObject.annual_income) <= 500000) {
    scholarships.push("Need-Based Scholarships");
  }
  if (studentObject.category.includes("cate-C", "cate-D")) {
    scholarships.push("Category-Based Scholarships");
  }
  if (studentObject.disability === "yes") {
    scholarships.push("Special-Need Scholarship");
  }

  const selectScholarship = (event) => {
    studentObject.scholarship = event.target.value;
    console.log(studentObject);
  };

  const postDetails = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(`${backend_url}/student`, {
        ...studentObject,
      });
      if (result) setStep(4);
    } catch {}
  };
  return (
    <div>
      <div class="scholarship-container">
        <h2>Available Scholarships</h2>
        <h3>
          According to criteria you are eligible for following scholarships, you
          can select on of the scholarship from them.
        </h3>
        <form>
          <label>Select Scholarship:</label>
          <select onClick={(e) => selectScholarship(e)}>
            {scholarships.map((element) => (
              <option>{element}</option>
            ))}
          </select>
          <br />
          <input type="submit" value="Submit" onClick={(e) => postDetails(e)} />
        </form>
      </div>
    </div>
  );
};

export default scholarship;
