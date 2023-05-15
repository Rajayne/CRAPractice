import React from "react";
import useFields from "../Hooks/useField";

const Form = () => {
  const [formData, handleChange, resetFormData] = useFields({
    username: "",
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    resetFormData();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
      />
      <label htmlFor="email">Email</label>
      <input
        type="text"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <label htmlFor="password">Password</label>
      <input
        type="text"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <button>Submit!</button>
    </form>
  );
};

export default Form;
