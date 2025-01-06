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
      .post("https://backendhost-npt5.onrender.com/api/user/create", formData)
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
        padding: "20px", // Added padding for smaller screens
      }}
    >
      <h1>Create User</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          width: "100%", // Adjust width for responsiveness
          maxWidth: "400px", // Limit maximum width for larger screens
          padding: "20px",
          backgroundColor: "#ffffff",
          borderRadius: "10px",
          border: "1px solid #e0e0e0",
          boxShadow:
            "4px 4px 6px rgba(0, 0, 0, 0.2), -4px -4px 6px rgba(255, 255, 255, 0.8)", // 3D shadow effect
          transform: "translateY(-2px)", // Slight lift
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
            style={{
              padding: "8px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              boxShadow:
                "inset 2px 2px 5px rgba(0, 0, 0, 0.1), inset -2px -2px 5px rgba(255, 255, 255, 0.7)", // Inner shadow for input
              width: "100%",
            }}
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
            style={{
              padding: "8px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              boxShadow:
                "inset 2px 2px 5px rgba(0, 0, 0, 0.1), inset -2px -2px 5px rgba(255, 255, 255, 0.7)", // Inner shadow for input
              width: "100%",
            }}
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
            style={{
              padding: "8px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              boxShadow:
                "inset 2px 2px 5px rgba(0, 0, 0, 0.1), inset -2px -2px 5px rgba(255, 255, 255, 0.7)", // Inner shadow for input
              width: "100%",
            }}
          />
        </label>
        <button
          type="submit"
          style={{
            padding: "10px",
            cursor: "pointer",
            backgroundColor: "#4caf50",
            color: "white",
            border: "none",
            borderRadius: "4px",
            boxShadow:
              "2px 2px 6px rgba(0, 0, 0, 0.2), -2px -2px 6px rgba(255, 255, 255, 0.8)", // 3D button shadow
            width: "100%", // Full-width button
          }}
        >
          Create User
        </button>
      </form>
      <Link
        to="/"
        style={{
          marginTop: "20px",
          textDecoration: "none",
          color: "#007bff",
          fontWeight: "bold",
        }}
      >
        Back to User List
      </Link>
      <style>
        {`
          @media (max-width: 600px) {
            h1 {
              font-size: 24px;
            }
            form {
              padding: 15px;
            }
          }
          @media (max-width: 400px) {
            h1 {
              font-size: 20px;
            }
            button {
              padding: 8px;
              font-size: 14px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Createuser;
