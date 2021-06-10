import React from "react";

const MenuCard = ({ menu }) => {
  return (
    <div className="container">
      {menu.map((item) => (
        <div className="card" style={{ width: "400px" }}>
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
