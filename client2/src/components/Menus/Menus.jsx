import React from "react";
import { useState } from "react";
import AddMenuForm from "../AddMenuForm/AddMenuForm";
import MenuCard from "../MenuCard/MenuCard";
import axios from "axios";

const Menus = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [data, setData] = useState({
    itemName: "",
    price: "",
    category: "",
    description: "",
  });

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMenuItems([...menuItems, data]);
    //console.log("State changed ", data);
    const { itemName, price, category, description } = data;
    // let token = JSON.parse(localStorage.getItem("token"));
    // console.log(token.token);
    // let t = token.token;
    // console.log(t);
    axios
      .post("http://localhost:3001/api/menu/addmenu", {
        itemName: itemName,
        price: price,
        category: category,
        description: description,
      })
      .then((response) => {
        console.log(response.data);
      });

    // const res = await fetch("http://localhost:3001/api/menu/addmenu", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     // "x-auth-token": localStorage.getItem
    //   },
    //   body: JSON.stringify({
    //     itemName,
    //     price,
    //     category,
    //     description,
    //   }),
    // })
    //   .then((response) => {
    //     console.log("Database Updated", response.json());
    //   })
    //   .catch("response Error");

    /* const datas = await res.json();
    console.log("Menu Items", datas);*/
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
      <MenuCard />
    </div>
  );
};

export default Menus;
