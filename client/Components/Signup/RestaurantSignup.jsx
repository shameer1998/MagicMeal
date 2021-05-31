import React from 'react';


//=========================Importing=================
import {Link} from "react-router-dom";


const RestaurantSignup = () => {
    return ( 
        <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>Name of Restaurant </label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Name of Owner</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Type of Restaurant </label>
                    <input type="text" className="form-control" placeholder="Type of Restaurant" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <label>Phone Number</label>
                    <input type="text" className="form-control" placeholder="Enter Phone Number" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                Already registered? Please <Link style= {{textDecoration: 'none',color: 'black'  }} to= "/restaurant-login">Login as a Restaurant</Link>
                </p>
            </form>
     );
}
 
export default RestaurantSignup;