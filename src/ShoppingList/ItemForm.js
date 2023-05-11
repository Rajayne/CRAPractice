import React, { useState } from "react";

const NewItemForm = ({ addItem }) => {
  const initialState = {
    name: "",
    qty: "",
  };
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem({ ...formData });
    setFormData(initialState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Product Name: </label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Item Name"
        value={formData.name}
        onChange={handleChange}
      ></input>

      <label htmlFor="qty">Quantity: </label>
      <input
        type="text"
        id="qty"
        name="qty"
        placeholder="Quantity"
        value={formData.qty}
        onChange={handleChange}
      ></input>

      <button>Add Item</button>
    </form>
  );
};

export default NewItemForm;
