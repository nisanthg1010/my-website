import React, { useState } from 'react';
import './App.css';

// The Forms1 component receives the "data" prop
const Forms1 = ({ data }) => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    dob: '',
    hobbies: '',
    gender: '',
    nickname: '',
    phone: '',
    address: '',
    school: '',
    college: '',
    favoriteColor: '',
    bestFriend: '',
    favoriteSubject: '',
    dreamJob: '',
    interests: [] // Array to store selected checkboxes
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prevState) => {
        const newInterests = checked
          ? [...prevState.interests, value]
          : prevState.interests.filter((interest) => interest !== value);
        return { ...prevState, interests: newInterests };
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    console.log('Form Submitted:', formData); // Log the form data to the console
    alert('Form Submitted Successfully!');
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <fieldset>
        <legend style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px", color: "#333" }}>
          Slam Book
        </legend>

        {/* Display the data passed from the parent */}
        {data && (
          <div>
            <h3>Received Data from Parent:</h3>
            <p>{data}</p>
          </div>
        )}

        {/* Form fields */}
        {/* Name */}
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        {/* Age */}
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </div>

        {/* Email */}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        {/* Date of Birth */}
        <div className="form-group">
          <label htmlFor="dob">Date of Birth:</label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
          />
        </div>

        {/* Hobbies */}
        <div className="form-group">
          <label htmlFor="hobbies">Hobbies:</label>
          <input
            type="text"
            id="hobbies"
            name="hobbies"
            value={formData.hobbies}
            onChange={handleChange}
          />
        </div>

        {/* Gender */}
        <div className="form-group">
          <label>Gender:</label>
          <div>
            <input
              type="radio"
              id="male"
              name="gender"
              value="male"
              checked={formData.gender === 'male'}
              onChange={handleChange}
            />
            <label htmlFor="male">Male</label>
          </div>
          <div>
            <input
              type="radio"
              id="female"
              name="gender"
              value="female"
              checked={formData.gender === 'female'}
              onChange={handleChange}
            />
            <label htmlFor="female">Female</label>
          </div>
        </div>

        {/* Nickname */}
        <div className="form-group">
          <label htmlFor="nickname">Nickname:</label>
          <input
            type="text"
            id="nickname"
            name="nickname"
            value={formData.nickname}
            onChange={handleChange}
          />
        </div>

        {/* Phone */}
        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            pattern="[0-9]{10}"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        {/* Address */}
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>

        {/* School */}
        <div className="form-group">
          <label htmlFor="school">School:</label>
          <select
            id="school"
            name="school"
            value={formData.school}
            onChange={handleChange}
          >
            <option value="">Select School</option>
            <option value="school1">KVM Chennimalai</option>
            <option value="school2">KVM Perundurai</option>
            <option value="school3">Government School</option>
          </select>
        </div>

        {/* College */}
        <div className="form-group">
          <label htmlFor="college">College:</label>
          <select
            id="college"
            name="college"
            value={formData.college}
            onChange={handleChange}
          >
            <option value="">Select College</option>
            <option value="college1">KEC Engineering</option>
            <option value="college2">Kongu Arts and Science</option>
            <option value="college3">KEC Medical</option>
          </select>
        </div>

        {/* Favorite Color */}
        <div className="form-group">
          <label htmlFor="favoriteColor">Favorite Color:</label>
          <input
            type="text"
            id="favoriteColor"
            name="favoriteColor"
            value={formData.favoriteColor}
            onChange={handleChange}
          />
        </div>

        {/* Best Friend */}
        <div className="form-group">
          <label htmlFor="bestFriend">Best Friend:</label>
          <input
            type="text"
            id="bestFriend"
            name="bestFriend"
            value={formData.bestFriend}
            onChange={handleChange}
          />
        </div>

        {/* Favorite Subject */}
        <div className="form-group">
          <label htmlFor="favoriteSubject">Favorite Subject:</label>
          <input
            type="text"
            id="favoriteSubject"
            name="favoriteSubject"
            value={formData.favoriteSubject}
            onChange={handleChange}
          />
        </div>

        {/* Dream Job */}
        <div className="form-group">
          <label htmlFor="dreamJob">Dream Job:</label>
          <input
            type="text"
            id="dreamJob"
            name="dreamJob"
            value={formData.dreamJob}
            onChange={handleChange}
          />
        </div>

        {/* Interests */}
        <div className="form-group">
          <label>Interests:</label>
          <div>
            <input
              type="checkbox"
              id="music"
              name="interests"
              value="Music"
              checked={formData.interests.includes("Music")}
              onChange={handleChange}
            />
            <label htmlFor="music">Music</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="sports"
              name="interests"
              value="Sports"
              checked={formData.interests.includes("Sports")}
              onChange={handleChange}
            />
            <label htmlFor="sports">Sports</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="reading"
              name="interests"
              value="Reading"
              checked={formData.interests.includes("Reading")}
              onChange={handleChange}
            />
            <label htmlFor="reading">Reading</label>
          </div>
        </div>

        {/* Submit Button */}
        <button type="submit" className="form-submit">Submit</button>
      </fieldset>
    </form>
  );
};

export default Forms1;
