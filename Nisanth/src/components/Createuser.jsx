import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";

const Createuser = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/api/user/create", formData)
      .then((response) => {
        alert("User created successfully!");
        navigate("/"); 
      })
      .catch((err) => {
        console.error("Error creating user:", err);
        alert("Failed to create user. Please try again.");
      });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#f0f8ff", 
        height: "100vh", 
        justifyContent: "center", 
      }}
    >
      <h1>Create User</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          width: "300px",
          padding: "20px",
          backgroundColor: "#ffffff", // Form background color
          borderRadius: "8px", // Rounded corners for the form
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow
          border: "1px solid #ccc", // Border for the form
        }}
      >
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Phone:
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <button
          type="submit"
          style={{ padding: "10px", cursor: "pointer", backgroundColor: "#4caf50", color: "white", border: "none", borderRadius: "4px" }}
        >
          Create User
        </button>
      </form>
      <Link to="/" style={{ marginTop: "20px", textDecoration: "none", color: "#007bff" }}>Back to User List</Link>
    </div>
  );
};

export default Createuser;
