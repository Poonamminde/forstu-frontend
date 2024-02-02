import React from "react";
//import { useState } from "react";
import "./form.css";

const Index = ({ studentObject, setStep }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const arr = Array.from(event.target.form);
    arr.forEach((element) => {
      if (element.name !== "gender" && element.name) {
        const name = element.name;
        const value = element.value;
        studentObject[name] = value;
      }
    });
    console.log(studentObject);
    setStep(3);
  };
  const setGender = (e) => {
    studentObject.gender = e.target.value;
  };
  return (
    <div id="container">
      <div class="form-container">
        <h2>Student Details Form</h2>
        <form class="student-form">
          <label>Annual Income:&nbsp;</label>
          <input
            type="text"
            placeholder="Enter annual salary"
            name="annual_income"
            required
          />

          <br />
          <label>
            Category:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <select name="category" required>
              <option>cate-A</option>
              <option>cate-B</option>
              <option>cate-C</option>
              <option>cate-D</option>
            </select>
          </label>
          <br />
          <label>
            Acadamic Marks:&nbsp;&nbsp;
            <input type="number" name="academic_marks" required></input>
          </label>
          <br />
          <label>
            Gender:&nbsp;
            <input
              type="radio"
              value="Male"
              name="gender"
              onClick={(e) => {
                setGender(e);
              }}
            />
            Male &nbsp;
            <input
              type="radio"
              value="Female"
              name="gender"
              onClick={(e) => {
                setGender(e);
              }}
            />
            Female
          </label>

          <br />
          <label>
            Disability:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <select name="disability" required>
              <option>yes</option>
              <option>no</option>
            </select>
          </label>
          <br />
          <input
            type="submit"
            class="submit-button"
            value="Submit"
            onClick={(event) => {
              handleSubmit(event);
            }}
          />
        </form>
      </div>
    </div>
  );
};

export default Index;
