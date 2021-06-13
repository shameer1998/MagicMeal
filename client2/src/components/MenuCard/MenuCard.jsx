import React, { useEffect, useState } from "react";
import axios from "axios";

const MenuCard = () => {
  let [d, setD] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/api/menu").then((response) => {
      console.log(response.data);
      setD(response.data);
      console.log(d);
    });
  }, []);

  return (
    <div className="container">
      {d.map((item, key) => (
        <div className="card" key={key} style={{ width: "400px" }}>
          <img src="images/pizza.jpg" alt="Pizza" style={{ width: "100%" }} />
          <div className="card-body">
            <h4 className="card-title">Item{item.itemName}</h4>
            <p className="card-text"> Des{item.description}</p>
            <span>{item.price}Price</span>
            <br></br>
            <span>{item.category}Category</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuCard;
