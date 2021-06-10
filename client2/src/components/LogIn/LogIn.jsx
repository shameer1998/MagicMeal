import React from "react";
import { useState } from "react";

const LogIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

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
    console.log(formData);
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
      <h1>Log In</h1>
      <div className="container">
        <form onSubmit={handleSubmit}>
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

export default LogIn;
