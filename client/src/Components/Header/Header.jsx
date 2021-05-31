import React, { Component } from 'react';


//=========================Importing=================
import {Link} from "react-router-dom";
import '../Header/Header.css'

const Header = () => {
    return ( 
        <div className="Header">
            <div className="header-child">
                <ul>
                    <li><Link style= {{textDecoration: 'none',color: 'black'  }} className="Logo" to= "/"><img src="./Pictures/Logo.JPG" alt=""/></Link></li>
                    <li><Link className="menu" to= "/restaurant-login">Restaurant Login</Link></li>
                    <li><Link className="menu" to= "/foodie-login">Foodie Login</Link></li>
                </ul>
            </div>

        </div>
     );
}
 
export default Header;