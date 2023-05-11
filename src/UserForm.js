import React, { useState } from "react";

const UserForm = () => {
  const [username, setUsername] = useState("");
  const handleChange = (e) => {
    setUsername(e.target.value);
    console.log(e.target.value);
  };
  return (
    <form>
      <input
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
