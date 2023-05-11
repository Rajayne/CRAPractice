import React, { useState } from "react";

const UserForm = () => {
  const initialState = {
    username: "",
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialState);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password } = formData;
    alert(
      `Created user: ${username} with email ${email} and password ${password}`
    );
    setFormData(initialState);
  };

  //Alternative: button onClick={handleSubmit}
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input
        id="username"
        type="text"
        name="username"
        placeholder="username"
        value={formData.username}
        onChange={handleChange}
      ></input>

      <label htmlFor="email">Email:</label>
      <input
        id="email"
        type="text"
        name="email"
        placeholder="email"
        value={formData.email}
        onChange={handleChange}
      ></input>

      <label htmlFor="password">Email:</label>
      <input
        id="password"
        type="text"
        name="password"
        placeholder="password"
        value={formData.password}
        onChange={handleChange}
      ></input>
      <button>Add me!</button>
    </form>
  );
};

export default UserForm;
