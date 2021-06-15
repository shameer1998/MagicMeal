import React, { useState } from "react";
import { Link } from "react-router-dom";
import restaurants from "../../services/restaurants";
import "bootstrap/dist/css/bootstrap.css";

const RestaurantCard = () => {
  return (
    <div className="container">
      {restaurants.map((item, key) => (
        <div className="card" key={key} style={{ width: "400px" }}>
          <img src="images/kfc.jpg" alt="KFC" style={{ width: "100%" }} />
          <div className="card-body">
            <h4 className="card-title">Name: {item.restaurantName}</h4>
            <p className="card-text"> Email: {item.email}</p>
            <span>{item.phone}Phone</span>
            <br></br>
            <span>Address: {item.address}</span>
            <br></br>
            <span>City: {item.city}</span>
            <br></br>
            <Link to="/viewmenus" className="btn btn-primary">
              Click Me!
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestaurantCard;
