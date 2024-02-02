import React from "react";
import axios from "axios";
import { backend_url } from "../../App";
import { useSnackbar } from "notistack";
import "./login.css";
const Login = ({ studentObject, step, setStep }) => {
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(studentObject);
    try {
      const result = await axios.get(
        `${backend_url}/college/${studentObject.email}`
      );

      console.log(result);
      if (result.data.length === 1) {
        enqueueSnackbar("Logged in successfully", {
          varient: "success",
        });
        setStep(2);
      } else {
        enqueueSnackbar("Email is not registerd, Invalid student", {
          varient: "error",
        });
      }
    } catch {
      console.log("login error");
      enqueueSnackbar("Server Down , please try again", {
        varient: "error",
      });
      console.log("dddd");
    }
  };
  const handleChange = (e) => {
    studentObject.email = e.target.value;
  };
  return (
    <div id="container">
      <div class="login-container">
        <h2>Schollarship Form Details:</h2>
        <form>
          <label>
            Enter Your Email:
            <input type="email" onChange={(e) => handleChange(e)} required />
          </label>
          <br />
          <input
            type="submit"
            value="Register"
            class="submit-button"
            onClick={(e) => handleSubmit(e)}
          ></input>
        </form>
      </div>
    </div>
  );
};

export default Login;
