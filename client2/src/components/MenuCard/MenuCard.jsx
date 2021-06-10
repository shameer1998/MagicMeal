import React from "react";
const MenuCard = ({ formData }) => {
  return (
    <div className="container">
      {formData.map((item) => {
        return (
          <div className="card-columns">
            <div className="card" style={{ width: "400px" }}>
              <img
                className="card-img-top"
                src="images/pizza.jpg"
                alt="Pizza Image"
                style={{ width: "100%" }}
              />
              <div className="card-body">
                <h4 className="card-title"> {item.itemName}</h4>
                <p className="card-text"> {item.description}</p>
                <p className="card-text">{item.category}</p>
                <span>{item.price}</span>
                <br></br>
                <button>Add to card</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MenuCard;
