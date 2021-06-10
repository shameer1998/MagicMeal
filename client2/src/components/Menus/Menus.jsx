import React from "react";
import { useState } from "react";
import AddMenuForm from "../AddMenuForm/AddMenuForm";
import MenuCard from "../MenuCard/MenuCard";

const Menus = () => {
  const [data, setData] = useState({
    itemName: "",
    price: "",
    category: "",
    description: "",
  });

  let menuItems = [{ ...data }];

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    setData((preVal) => {
      if (name === "itemName")
        return {
          itemName: value,
          price: preVal.price,
          category: preVal.category,
          description: preVal.description,
        };
      else if (name === "price")
        return {
          itemName: preVal.itemName,
          price: value,
          category: preVal.category,
          description: preVal.description,
        };
      else if (name === "category")
        return {
          itemName: preVal.itemName,
          price: preVal.price,
          category: value,
          description: preVal.description,
        };
      else if (name === "description")
        return {
          itemName: preVal.itemName,
          price: preVal.price,
          category: preVal.category,
          description: value,
        };
    });
    console.log(name);
    console.log(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Form is submitted");
    console.log(data);
    //console.log("Menu Items" + menuItems);
  };

  return (
    <div>
      <AddMenuForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        itemName={data ? data.itemName : null}
        price={data ? data.price : null}
        category={data ? data.category : null}
        description={data ? data.description : null}
      />
      <MenuCard menu={menuItems} />
    </div>
  );
};

export default Menus;
