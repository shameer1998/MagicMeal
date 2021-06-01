import React from 'react';
import './Login.css'

//=========================Importing=================
import {Link} from "react-router-dom";
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


const FoodieLogin = () => {
    return ( 
        <div className="foodie_login_container">

        <form className="foodie_login_form">

            <div className="title">
            <h1>Login</h1>
            </div>


           

            


            <div className="form-fields">
                        <TextField
                            className= "email fields"
                            id="input-with-icon-textfield"
                            label="Email or Phone"
                            type="email"
                            InputProps={{
                            startAdornment: (
                            <InputAdornment position="start">
                                < EmailIcon/>
                            </InputAdornment>
                            ),
                            }}
                         />

                    
            </div>


            
            <div className="form-fields">
                        <TextField
                            className= "password fields"
                            id="input-with-icon-textfield"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            InputProps={{
                            startAdornment: (
                            <InputAdornment position="start">
                                <LockOpenIcon/>
                            </InputAdornment>
                            ),
                            }}
                         />
            </div>




                        <div className="mobilecode_button1">
                         
                             <Button  title="Send Code to Mobile Number" height="35px" width="300px" btn_color="lightskyblue"/> 
                        </div>
                        <p>
                            OR
                        </p>
                        <div className="mobilecode_button2">
                      
                            <Button  title="Send Code to Email Address" height="35px" width="300px" btn_color="lightskyblue"/> 
                        </div>

            




            <div className="form-fields code_field">
                        <TextField
                            className= "code fields"
                            id="input-with-icon-textfield"
                            label="Verification Code"
                            color="primary"
                            InputProps={{
                            startAdornment: (
                            <InputAdornment position="start">
                                <ScreenLockPortraitIcon/>
                            </InputAdornment>
                            ),
                            }}
                         />
                         
            </div>








            
            <div className="submit">
            <Button className="foodie_signup_button" title="Login" height="40px" width="200px" color="black" btn_color="white"
            font_size="20px"
            />

            <div className="already">
            Not Registered yet? <Link style= {{textDecoration: 'none',color: 'black', fontWeight: 'bold' }} to= "/foodie-signup">Signup</Link> as a Foodie
            </div>
            
            </div>
               
        </form>
    </div>
     );
}
 
export default FoodieLogin;