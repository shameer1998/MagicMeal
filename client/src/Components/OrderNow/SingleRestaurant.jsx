import React, { Component } from 'react'

import './SingleRestaurant.css'

import { Link } from "react-router-dom";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


const SingleRestaurant = ({ restaurant }) => {
    const [value, setValue] = React.useState(4);
    return (
        <div className="Single_Restaurant">

            <div className="container">
                <img className="restaurant_image" src={restaurant.imageLoc} alt={restaurant.imageAlt} />

            </div>
            <div>
                <FavoriteBorderIcon style={{ fontSize: 40, color: 'red', float: 'left' }} />
            </div>
            <div>
                <Link className="restaurant_link" to={restaurant.rest_link}>
                    <h1 >

                        {restaurant.restaurantTitle}

                    </h1>
                </Link>
            </div>
            <div>
                <h3>
                    {restaurant.restaurantLoc}
                </h3>
            </div>



            <div className="rating">
                <Box component="fieldset" mb={3} borderColor="transparent">
                    <Typography component="legend" className="rating_title">Rating</Typography>
                    <Rating name="read-only" value={value} readOnly />
                </Box>
            </div>


        </div>
    );
}

export default SingleRestaurant;