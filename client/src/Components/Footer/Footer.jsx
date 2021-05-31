import React from 'react';
import {Link} from "react-router-dom";
import '../Footer/Footer.css'


const Footer = () => {
    return (
        <div className="Footer">
            <div className="footer-child">
                <ul>
                <h1> About Q-Food</h1>
                    <li><Link style= {{textDecoration: 'none',color: 'black'  }} to= "/about-us">About Us</Link></li>
                    <li><Link style= {{textDecoration: 'none',color: 'black'  }} to= "/contact-us">Contact Us</Link></li>
                    <li><Link style= {{textDecoration: 'none',color: 'black'  }} to= "/privacy-policy">Privacy Policy</Link></li>
                </ul>
            </div>

            <div className="footer-child">
                <ul>
                    <h1>Customer Care</h1>
                    <li><Link style= {{textDecoration: 'none',color: 'black'  }} to= "/complaint-form">Complaint Form</Link></li>
                    <li><Link style= {{textDecoration: 'none',color: 'black'  }} to= "/FAQs">FAQ's</Link></li>
                </ul>
            </div>


            <div className="footer-child">
                <ul>
                <h1>Payment Partners</h1>
                    <li>
                        <img style={{height: '20px', marginLeft: '5px'}} src="./Pictures/hbl.png" alt="hbl"/>
                        <img style={{height: '20px' , marginLeft: '5px'}} src="./Pictures/mcb.png" alt="mcb"/>
                        <img style={{height: '20px' , marginLeft: '5px'}} src="./Pictures/visa.png" alt="visa"/>
                    </li>
                </ul>
            </div>

            <div className="footer-child">
                <ul>
                    <h1>Partners</h1>
                    <li>
                        <img style={{height: '20px' , marginLeft: '5px'}} src="./Pictures/tcs.png" alt="tcs"/>
                        <img style={{height: '20px' , marginLeft: '5px'}} src="./Pictures/dhl.png" alt="dnl"/>
                    </li>
                </ul>
            </div>

        </div>
    );
}
 
export default Footer;