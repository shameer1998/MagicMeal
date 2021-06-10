import React from "react";
import { useState } from "react";
const AddMenuForm = ({
  handleChange,
  handleSubmit,
  itemName,
  price,
  category,
  description,
}) => {
  return (
    <div>
      <h1>Add your items!</h1>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <input
            name="itemName"
            type="text"
            placeholder="Item Name"
            id="itemName"
            onChange={handleChange}
            value={itemName}
          />
          <br></br>

          <input
            name="price"
            type="text"
            placeholder="price"
            id="price"
            onChange={handleChange}
            value={price}
          />

          <br></br>
          <input
            name="category"
            type="text"
            placeholder="category"
            id="category"
            onChange={handleChange}
            value={category}
          />
          <br></br>
          <input
            name="description"
            type="text"
            placeholder="description"
            id="description"
            onChange={handleChange}
            value={description}
          />
          <br></br>
          <button type="submit"> Submit </button>
        </form>
      </div>
    </div>
  );
};

export default AddMenuForm;
