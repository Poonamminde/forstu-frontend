import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { backend_url } from "../../../App";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import "./index.css";
const Index = () => {
  const [student, setStudent] = useState([]);
  const [update, setUpdate] = useState(null);
  const [object, setObject] = useState({});
  useEffect(() => {
    fetchProfiles();
  }, []);
  const fetchProfiles = async () => {
    try {
      const result = await axios.get(`${backend_url}/student`);
      console.log(result.data);
      setStudent(result.data);
    } catch {}
  };

  const handleDelete = async (id) => {
    const result = await axios.delete(`${backend_url}/student/${id}`);
    if (result) fetchProfiles();
  };

  const handleChange = async (e) => {
    object[e.target.name] = e.target.value;
  };

  const updateRecord = async () => {
    console.log(object);
    const result = await axios.put(`${backend_url}/student/${update}`, {
      ...object,
    });
    if (result) fetchProfiles();
    setUpdate(null);
  };

  return (
    <div className="container">
      <table>
        <tr class="table-heading">
          <th>Email</th>
          <th>Gender</th>
          <th>Annual Income</th>
          <th>Academic Marks</th>
          <th>Disability</th>
          <th>Category</th>
          <th>Scholarship</th>
          <th>Action</th>
        </tr>
        {student.map((element) =>
          element._id !== update ? (
            <tr>
              <td>{element.email}</td>
              <td>{element.gender}</td>
              <td>{element.annual_income}</td>
              <td>{element.academic_marks}</td>
              <td>{element.disability}</td>
              <td>{element.category}</td>
              <td>{element.scholarship}</td>
              <td>
                <EditIcon onClick={() => setUpdate(element._id)} />
                <DeleteIcon onClick={() => handleDelete(element._id)} />
              </td>
            </tr>
          ) : (
            <tr>
              <td>
                <input
                  type="text"
                  name="email"
                  placeholder={element.email}
                  onChange={(e) => handleChange(e)}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="gender"
                  placeholder={element.gender}
                  onChange={(e) => handleChange(e)}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="annual_income"
                  placeholder={element.annual_income}
                  onChange={(e) => handleChange(e)}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="academic_marks"
                  placeholder={element.academic_marks}
                  onChange={(e) => handleChange(e)}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="disability"
                  placeholder={element.disability}
                  onChange={(e) => handleChange(e)}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="category"
                  placeholder={element.category}
                  onChange={(e) => handleChange(e)}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="scholarship"
                  placeholder={element.scholarship}
                  onChange={(e) => handleChange(e)}
                />
              </td>
              <td>
                <button type="submit" value="Update" onClick={updateRecord}>
                  Update
                </button>
              </td>
            </tr>
          )
        )}
      </table>
    </div>
  );
};

export default Index;
