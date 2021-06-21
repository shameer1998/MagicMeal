import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const RestaurantLogIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const history = useHistory();

  const handleChange = (event) => {
    //console.log(event.target.value);
    //console.log(event.target.name);
    const value = event.target.value;
    const name = event.target.name;

    setFormData((preVal) => {
      if (name === "email") {
        return {
          email: value,
          password: preVal.password,
        };
      } else if (name === "password") {
        return {
          password: value,
          email: preVal.email,
        };
      }
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = formData;

    axios
      .post("http://localhost:3001/api/auth/restaurant", {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("token", JSON.stringify(response.data));
        history.push("/menus");
      });

    //const data = res.json();
    //console.log("This is the response data", data);
    /*if (!data) {
      window.alert("Could not login");
    } else {
      window.alert("Logged In Successfully");
    }*/

    //console.log(formData);
    /*
      console.log(firstName);
      console.log(lastName);
      console.log(email);
      console.log(password);
      console.log(phone);
  */
  };

  return (
    <div>
      <h1>Restaurant Log In</h1>
      <div className="container">
        <form method="POST" onSubmit={handleSubmit}>
          <input
            name="email"
            type="email"
            placeholder="email"
            id="email"
            onChange={handleChange}
            value={formData.email}
          />
          <br></br>
          <input
            name="password"
            type="password"
            placeholder="password"
            id="password"
            onChange={handleChange}
            value={formData.password}
          />
          <br></br>
          <button type="submmit"> Log In </button>
        </form>
      </div>
    </div>
  );
};

export default RestaurantLogIn;
