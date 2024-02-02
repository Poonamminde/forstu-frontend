import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import College from "./components/College";
import Student from "./components/Student";
import Upload from "./components/College/upload";
import Admin from "./components/College/admin";
import "./App.css";

export const backend_url = "https://forstu-backend.onrender.com";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/college" Component={College} />
        <Route path="/student" Component={Student} />
        <Route path="/upload" Component={Upload} />
        <Route path="/admin" Component={Admin} />
      </Routes>
    </div>
  );
}

export default App;
