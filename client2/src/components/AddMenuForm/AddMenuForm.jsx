import React from "react";
import { useState } from "react";
const AddMenuForm = () => {
  const [formData, setFormData] = useState({
    itemName: "",
    price: "",
    category: "",
    description: "",
  });

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    //console.log(name);
    //console.log(value);

    setFormData((preVal) => {
      if (name === "itemName") {
        return {
          itemName: value,
          category: preVal.category,
          price: preVal.price,
          description: preVal.description,
        };
      } else if (name === "price") {
        return {
          itemName: preVal.itemName,
          category: preVal.category,
          price: value,
          descrption: preVal.description,
        };
      } else if (name === "category") {
        return {
          itemName: preVal,
          category: value,
          price: preVal.price,
          description: preVal.description,
        };
      } else if (name === "description") {
        return {
          itemName: preVal.itemName,
          category: preVal.category,
          price: preVal.price,
          description: value,
        };
      }
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };
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
            value={formData.itemName}
          />
          <br></br>

          <input
            name="price"
            type="text"
            placeholder="price"
            id="price"
            onChange={handleChange}
            value={formData.price}
          />

          <br></br>
          <input
            name="category"
            type="text"
            placeholder="category"
            id="category"
            onChange={handleChange}
            value={formData.category}
          />
          <br></br>
          <input
            name="description"
            type="text"
            placeholder="description"
            id="description"
            onChange={handleChange}
            value={formData.description}
          />
          <br></br>
          <button type="submit"> Submit </button>
        </form>
      </div>
    </div>
  );
};

export default AddMenuForm;
