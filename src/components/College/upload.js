import React from "react";
import { useState } from "react";
import axios from "axios";
import { backend_url } from "../../App";
import * as XLSX from "xlsx";
import "./upload.css";

const Index = () => {
  let [file, setFile] = useState("");
  let [error, setError] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (file && !error) {
      //const formData = new FormData();
      //formData.append("file", file);
      //console.log(formData);
      console.log("file ");
      console.log(file);
      try {
        const response = await axios.post(`${backend_url}/college`, {
          file: [...file],
        });

        console.log("File uploaded successfully:", response.data);
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    } else {
      console.error("No file selected");
    }
  };
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    // Check if the selected file is an Excel file
    if (selectedFile) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const data = e.target.result;
        //console.log(data);
        try {
          const workbook = XLSX.read(data, { type: "binary" });
          if (workbook.SheetNames.length > 0) {
            console.log("File is an Excel file");
            setFile(selectedFile);
          } else {
            console.log("error");
            console.error("File is not an Excel file");
          }
          const sheetName = workbook.SheetNames[0];
          const sheet = workbook.Sheets[sheetName];
          const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
          setFile(jsonData.slice(0, 10));
        } catch {
          setError(true);
        }
        // Check if the workbook has sheets (indicating it's an Excel file)
      };

      reader.readAsBinaryString(selectedFile);
    }
  };
  return (
    <div id="container">
      <div class="college-container">
        <h2>College Administration</h2>
        <h3>
          Please select and upload an Excel spreadsheet. This spreadsheet may
          contain various columns such as student name, email, endrollmentDate,
          or any other relevant data. Once the file is uploaded, the system
          processes the data
        </h3>
        <form onSubmit={handleSubmit}>
          <label>
            <strong>Select a file:</strong>
          </label>
          <input
            type="file"
            onChange={(event) => handleFileChange(event)}
            id="file"
            required
          />
          <br />
          {error && (
            <h3 class="error">
              Selected file is node spreedsheet. Please select excel file.
            </h3>
          )}
          <br />
          <button
            type="submit"
            class="submit-button"
            onChange={(event) => handleSubmit(event)}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Index;
