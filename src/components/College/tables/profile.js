import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { backend_url } from "../../../App";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import "./index.css";
const Index = () => {
  const [profile, setProfile] = useState([]);
  const [update, setUpdate] = useState(null);
  const [object, setObject] = useState({});
  useEffect(() => {
    fetchProfiles();
  }, []);
  const fetchProfiles = async () => {
    try {
      const result = await axios.get(`${backend_url}/college`);
      setProfile(result.data);
    } catch {}
  };

  const handleDelete = async (id) => {
    const result = await axios.delete(`${backend_url}/college/${id}`);
    if (result) fetchProfiles();
  };

  const handleChange = async (e) => {
    object[e.target.name] = e.target.value;
  };

  const updateRecord = async () => {
    console.log(object);
    const result = await axios.put(`${backend_url}/college/${update}`, {
      ...object,
    });
    if (result) fetchProfiles();
    setUpdate(null);
  };
  return (
    <div className="container">
      <table>
        <tr class="table-heading">
          <th>Name</th>
          <th>Email</th>
          <th>Enrollment Date</th>
          <th>Action</th>
        </tr>
        {profile.map((element) =>
          element._id !== update ? (
            <tr>
              <td>{element.name}</td>
              <td>{element.email}</td>
              <td>{new Date(element.enrollmentDate).toLocaleDateString()}</td>
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
                  name="name"
                  placeholder={element.name}
                  onChange={(e) => handleChange(e)}
                />
              </td>
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
                  name="enrollmentDate"
                  placeholder={new Date(
                    element.enrollmentDate
                  ).toLocaleDateString()}
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
