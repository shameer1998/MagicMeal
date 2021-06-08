import React from 'react';
import './Signup.css';
import { useState, useEffect } from "react";
import axios from "../../axios";


//=========================Importing=================
//import './Signup.css'
import { Link } from "react-router-dom";
import Button from '../SpecialComp/Button/Button';
import ReactInputVerificationCode from 'react-input-verification-code';




//================================MAterial Ui===================*/
import AccountCircle from '@material-ui/icons/AccountCircle';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import EmailIcon from '@material-ui/icons/Email';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import DraftsIcon from '@material-ui/icons/Drafts';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import ScreenLockPortraitIcon from '@material-ui/icons/ScreenLockPortrait';


const FoodieSignup = () => {
    const [inputData, setData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phone: ''
    });

    const handleChange = (e) => {
        let name = e.target.name;
        let val = e.target.value;
        setData({ [name]: val });
    }

    async function fetchData(e) {
        e.preventDefault();
        const { data } = await axios.post("/api/end-users", inputData).then(console.log("Hi it is ok")).catch(console.log("Death"))
        //console.log(data);
    }

    const handleSubmit = (e) => {
        console.log(inputData);
        fetchData();
    }

    return (
        <div className="foodie_signup_container">

            <div className="image">
                <img src="./Pictures/foodiesignup.jpg" alt="" />

            </div>

            <form className="foodie_signup_form" onSubmit={handleSubmit}>

                <div className="title">
                    <h1>Sign Up</h1>
                </div>


                <div className="form-fields">
                    <TextField
                        className="firstname fields"
                        id="input-with-icon-textfield"
                        label="First Name"
                        type="text"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircle />
                                </InputAdornment>
                            ),
                        }}
                        onChange={handleChange}
                    />
                    <h1>{inputData.firstName}</h1>
                </div>

                <div className="form-fields">
                    <TextField
                        className="lastname fields"
                        id="input-with-icon-textfield"
                        label="Last Name"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircle />
                                </InputAdornment>
                            ),
                        }}
                        onChange={handleChange}
                    />
                </div>


                <div className="form-fields">
                    <TextField
                        className="password fields"
                        id="input-with-icon-textfield"
                        label="Email"
                        type="email"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    < EmailIcon />
                                </InputAdornment>
                            ),
                        }}
                        onChange={handleChange}
                    />


                </div>




                <div className="form-fields">
                    <TextField
                        className="password fields"
                        id="input-with-icon-textfield"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LockOpenIcon />
                                </InputAdornment>
                            ),
                        }}
                        onChange={handleChange}
                    />
                </div>


                <div className="form-fields emailcode_field">
                    <TextField
                        className="emailcode fields"
                        id="input-with-icon-textfield"
                        label="Email Verification Code"
                        autoComplete="current-password"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <DraftsIcon />
                                </InputAdornment>
                            ),
                        }}
                        onChange={handleChange}
                    />


                    <div className="emailcode_button">
                        <Button title="Send Code" height="35px" width="100px" btn_color="orange" />
                    </div>

                </div>



                <div className="form-fields">
                    <TextField
                        className="mobilenumber fields"
                        id="input-with-icon-textfield"
                        label="Mobile Number"
                        type="mobile"
                        autoComplete="current-password"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <PhoneIphoneIcon />
                                </InputAdornment>
                            ),
                        }}
                        onChange={handleChange}
                    />
                </div>


                <div className="form-fields mobilecode_field">
                    <TextField
                        className="mobilecode fields"
                        id="input-with-icon-textfield"
                        label="Mobile Verification Code"
                        color="primary"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <ScreenLockPortraitIcon />
                                </InputAdornment>
                            ),
                        }}
                        onChange={handleChange}
                    />

                    <div className="mobilecode_button">

                        <Button title="Send Code" height="35px" width="100px" btn_color="orange" />
                    </div>

                </div>





                <div className="submit">
                    <input className="foodie_signup_button" title="Signup" height="40px" width="200px" color="white" btn_color="green"
                        font_size="20px" type="submit"
                    />

                    <div className="already">
                        Already registered? Please <Link style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }} to="/foodie-login">Login</Link> as a Foodie
                </div>

                </div>

            </form>
        </div>

    );
}

export default FoodieSignup;