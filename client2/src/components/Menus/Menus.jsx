import React from "react";
import { useState } from "react";
import MenuCard from "../MenuCard/MenuCard";
import AddMenuForm from "../AddMenuForm/AddMenuForm";

const Menus = () => {
  const [formData, setFormData] = useState({
    itemName: "",
    price: "",
    category: "",
    description: "",
    items: [],
  });

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    console.log(name);
    console.log(value);

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
    let items = [{ ...formData.items }];
    items.push({
      itemmName: formData.itemName,
      price: formData.price,
      category: formData.category,
      description: formData.description,
    });
    console.log("After form submission my array is" + items);

    setFormData({
      items,
      itemName: "",
      price: "",
      category: "",
      description: "",
    });

    console.log("After form submission my state is" + formData);
    //console.log(items);
  };

  return (
    <div className="container">
      <AddMenuForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        itemName={formData.itemName}
        price={formData.price}
        category={formData.category}
        description={formData.description}
      />
      <MenuCard formData={formData.items} />
    </div>
  );
};

export default Menus;
