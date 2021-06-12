import React from "react";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
const SignUp = () => {
  /*
    const [firstName, setFirstName] = useState({ firstName: "" });
  const [lastName, setlastName] = useState({ lastName: "" });
  const [email, setEmail] = useState({ email: "" });
  const [password, setPassword] = useState({ password: "" });
  const [phone, setPhone] = useState({ phone: "" });
*/
  const history = useHistory();

  const [formData, setFormData] = useState({
    restaurantName: "",
    email: "",
    password: "",
    address: "",
    phone: "",
  });

  const handleChange = (event) => {
    //console.log(event.target.value);
    //console.log(event.target.name);
    const value = event.target.value;
    const name = event.target.name;

    setFormData((preVal) => {
      if (name === "restaurantName") {
        return {
          restaurantName: value,
          email: preVal.email,
          password: preVal.password,
          address: preVal.address,
          phone: preVal.phone,
        };
      } else if (name === "email") {
        return {
          restaurantName: preVal.restaurantName,
          email: value,
          password: preVal.password,
          address: preVal.address,
          phone: preVal.phone,
        };
      } else if (name === "password") {
        return {
          restaurantName: preVal.restaurantName,
          email: preVal.email,
          password: value,
          address: preVal.address,
          phone: preVal.phone,
        };
      } else if (name === "address") {
        return {
          restaurantName: preVal.restaurantName,
          email: preVal.email,
          password: preVal.password,
          address: value,
          phone: preVal.phone,
        };
      } else if (name === "phone") {
        return {
          restaurantName: preVal.restaurantName,
          email: preVal.email,
          password: preVal.password,
          address: preVal.address,
          phone: value,
        };
      }
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { restaurantName, email, password, address, phone } = formData;

    const res = await fetch("http://localhost:3001/api/restaurants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        restaurantName,
        email,
        password,
        address,
        phone,
      }),
    });

    const data = res.json();
    if (!data) {
      window.alert("Could not sign up");
    } else {
      window.alert("Sign up Successfull.");
    }
    /*
    console.log(firstName);
    console.log(lastName);
    console.log(email);
    console.log(password);
    console.log(phone);
*/
  };
  return (
    <div className="container">
      <form method="POST" onSubmit={handleSubmit}>
        <h1>Sign Up</h1>

        <input
          name="restaurantName"
          type="text"
          placeholder="Restaurant Name"
          id="restaurantName"
          onChange={handleChange}
          value={formData.restaurantName}
        />
        <br></br>
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
        <input
          name="address"
          type="text"
          placeholder="address"
          id="address"
          onChange={handleChange}
          value={formData.address}
        />
        <br></br>
        <input
          name="phone"
          type="text"
          placeholder="phone"
          id="phone"
          onChange={handleChange}
          value={formData.phone}
        />
        <br></br>
        <button type="submmit"> Sign Up </button>
      </form>
    </div>
  );
};

export default SignUp;
