import React from 'react';
import './Login.css'

//=========================Importing=================
import {Link} from "react-router-dom";

import '../Header/Header'
import Button from '../SpecialComp/Button/Button';
const RestaurantLogin = () => {
    return ( 
  <form className="restaurant_signup_form">
                <h3>Partner Details Form</h3>

                <div className="form-group">
                    <label>Name of Restaurant </label>
                    <input className="restaurant_field" type="text" placeholder="Restaurant Name" />
                </div>

                <div className="form-group">
                    <label>Name of Owner</label>
                    <input className="restaurant_field" type="text" placeholder="Owner Name" />
                </div>

                <div className="form-group">
                    <label>Type of Restaurant </label>
                    <input className="restaurant_field" type="text" placeholder="Type of Restaurant" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input className="restaurant_field" type="email" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Phone Number</label>
                    <input className="restaurant_field" type="text" placeholder="Enter Phone Number" />
                </div>

                <div className="form-group">
                    <label>Restaurant Location</label>
                    <input className="restaurant_field" type="text" placeholder="Enter Address of Restaurant" />
                </div>

                <div className="form-group">
                    <label>Menu Pictures</label>
                    <p>Click on the "Choose File" button to upload a file:</p>
                    <input type="file" id="myFile" name="filename"/>
                </div>

                <Button title="Submit Response" height="50px" width="300px"/> 
                    <div>
                    Already registered? Please <Link style= {{textDecoration: 'none',color: 'black', fontWeight: 'bold'  }} to= "/restaurant-login">Login</Link> as Ammin
                    </div>
            </form>
     );
}
 
export default RestaurantLogin;