import React from "react";
import { useEffect, useState } from "react";
const SignUp = () => {
  /*
    const [firstName, setFirstName] = useState({ firstName: "" });
  const [lastName, setlastName] = useState({ lastName: "" });
  const [email, setEmail] = useState({ email: "" });
  const [password, setPassword] = useState({ password: "" });
  const [phone, setPhone] = useState({ phone: "" });
*/
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
  });

  const handleChange = (event) => {
    //console.log(event.target.value);
    //console.log(event.target.name);
    const value = event.target.value;
    const name = event.target.name;

    //setFormData({ [name]: value });
    /*
    setFirstName({ [event.target.name]: event.target.value });
    setlastName({ [event.target.name]: event.target.value });
    setEmail({ [event.target.name]: event.target.value });
    setPassword({ [event.target.name]: event.target.value });
    setPhone({ [event.target.name]: event.target.value });
    */
    setFormData((preVal) => {
      if (name === "firstName") {
        return {
          firstName: value,
          lastName: preVal.lastName,
          email: preVal.email,
          password: preVal.password,
          phone: preVal.phone,
        };
      } else if (name === "lastName") {
        return {
          firstName: preVal.firstName,
          lastName: value,
          email: preVal.email,
          password: preVal.password,
          phone: preVal.phone,
        };
      } else if (name === "email") {
        return {
          firstName: preVal.firstName,
          lastName: preVal.lastName,
          email: value,
          password: preVal.password,
          phone: preVal.phone,
        };
      } else if (name === "password") {
        return {
          firstName: preVal.firstName,
          lastName: preVal.lastName,
          email: preVal.email,
          password: value,
          phone: preVal.phone,
        };
      } else if (name === "phone") {
        return {
          firstName: preVal.firstName,
          lastName: preVal.lastName,
          email: preVal.email,
          password: preVal.password,
          phone: value,
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
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>

        <input
          name="firstName"
          type="text"
          placeholder="firstName"
          id="firstName"
          onChange={handleChange}
          value={formData.firstName}
        />
        <br></br>
        <input
          type="text"
          id="lastName"
          placeholder="lastName"
          name="lastName"
          onChange={handleChange}
          value={formData.lastName}
        />
        <br></br>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="email"
          onChange={handleChange}
          value={formData.email}
        />
        <br></br>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="password"
          onChange={handleChange}
          value={formData.password}
        />
        <br></br>
        <input
          placeholder="phone"
          type="text"
          id="phone"
          name="phone"
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
