import React, { useState } from "react";

const UserForm = () => {
  const [username, setUsername] = useState("");
  const handleChange = (e) => {
    setUsername(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Created user: ${username}`);
  };

  //Alternative: button onClick={handleSubmit}
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input
        id="username"
        type="text"
        placeholder="username"
        value={username}
        onChange={handleChange}
      ></input>
      <button>Add me!</button>
    </form>
  );
};

export default UserForm;
