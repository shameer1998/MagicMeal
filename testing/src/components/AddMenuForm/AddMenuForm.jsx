import React from "react";
const AddMenuForm = ({
  handleChange,
  handleSubmit,
  itemName,
  price,
  category,
  description,
}) => {
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input
          name="itemName"
          placeholder="Item Name"
          onChange={handleChange}
          value={itemName}
        />
        {itemName}
        <br></br>
        <input
          name="price"
          placeholder="Price"
          onChange={handleChange}
          value={price}
        />
        {price}
        <br></br>
        <input
          name="category"
          placeholder="Category"
          onChange={handleChange}
          value={category}
        />
        {category}
        <br></br>
        <input
          name="description"
          placeholder="Description"
          onChange={handleChange}
          value={description}
        />
        {description}
        <br></br>
        <button type="submit"> Add Menu! </button>
      </form>
    </div>
  );
};

export default AddMenuForm;
