import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../App.css";

const User = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get("https://backendhost-npt5.onrender.com/api/user/fetch")
      .then((data) => {
        setUser(data.data.users);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`https://backendhost-npt5.onrender.com/api/user/delete/${id}`)
      .then(() => {
        setUser(user.filter((user) => user._id !== id));
      })
      .catch((err) => {
        console.error("Error deleting user:", err);
      });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#f0f8ff", // Light blue background
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h1 style={{ color: "#333" }}>User's Data</h1>
      <h2>
        <Link
          to="/create"
          style={{
            color: "#4caf50",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Create User
        </Link>
      </h2>
      <table
        id="ut"
        border="1"
        style={{
          borderCollapse: "collapse",
          width: "80%",
          marginTop: "20px",
          backgroundColor: "#fff", 
          border: "1px solid #ccc",
        }}
      >
        <thead
          style={{
            backgroundColor: "#4caf50", 
            color: "white",
          }}
        >
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {user.map((user) => (
            <tr
              key={user._id}
              style={{
                backgroundColor: "#f9f9f9", 
                textAlign: "center",
              }}
            >
              <td>{user._id}</td>
              <td>{user.name}</td>
              <td>{user.phone}</td>
              <td>{user.email}</td>
              <td>
                <Link
                  id="link"
                  to={`/update/${user._id}`}
                  style={{
                    marginRight: "10px",
                    padding: "5px 10px",
                    backgroundColor: "#2196f3",
                    color: "white",
                    textDecoration: "none",
                    borderRadius: "4px",
                  }}
                >
                  Update User
                </Link>
                <button
                  id="kem"
                  onClick={() => handleDelete(user._id)}
                  style={{
                    padding: "5px 10px",
                    backgroundColor: "#f44336", 
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default User;
