import React, { useState } from "react";
import Item from "./Item";
import NewItemForm from "./ItemForm";

const ShoppingList = () => {
  const initialState = [
    { id: 1, name: "Peanut Butter", qty: 2 },
    { id: 2, name: "Lactaid Milk", qty: 1 },
  ];
  const [items, setItems] = useState(initialState);

  const addItem = (name, qty) => {
    setItems((items) => [...items, { name, qty }]);
  };

  return (
    <div>
      <h3>Shopping List</h3>
      <NewItemForm addItem={addItem} />
      {items.map(({ id, name, qty }) => (
        <Item id={id} name={name} qty={qty} key={id} />
      ))}
    </div>
  );
};

export default ShoppingList;
