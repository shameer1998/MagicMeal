import { SingleBed } from '@material-ui/icons';
import React, { Component } from 'react'


import TitleTag from '../SpecialComp/TitleTag';
import SingleRestaurant from './SingleRestaurant';
import './Restaurants.css'



const Restaurants = () => {
    const [restaurant, setRestaurant] = React.useState([
        { imageLoc: "./Pictures/R1.jpg", restaurantTitle: "Alhamra Gardens", restaurantLoc: "Canal Bank Road Multan", rest_link: "/menu-items" },
        { imageLoc: "./Pictures/R2.jpg", restaurantTitle: "Tasty Plus", restaurantLoc: "Canal Bank Road Multan" },
        { imageLoc: "./Pictures/R3.jpg", restaurantTitle: "Shangrilla", restaurantLoc: "Canal Bank Road Multan" },
        { imageLoc: "./Pictures/R4.jpg", restaurantTitle: "Food Festival", restaurantLoc: "Canal Bank Road Multan" },
        { imageLoc: "./Pictures/R5.jpg", restaurantTitle: "Cakes and Bakes", restaurantLoc: "Canal Bank Road Multan" },
        { imageLoc: "./Pictures/R6.jpg", restaurantTitle: "Magic Meal", restaurantLoc: "Canal Bank Road Multan" },
        { imageLoc: "./Pictures/R7.jpg", restaurantTitle: "Sabir Milk Shake", restaurantLoc: "Canal Bank Road Multan" },
        { imageLoc: "./Pictures/R8.jpg", restaurantTitle: "King's Food", restaurantLoc: "Canal Bank Road Multan" },
        { imageLoc: "./Pictures/R9.jpg", restaurantTitle: "BBQ Tonight", restaurantLoc: "Canal Bank Road Multan" },
    ]);
    return (
        <div className="Restaurants">
            <TitleTag title="Restaurants Near-By" />
            <div className="restaurants_grid">
                {restaurant.map((restaurant, index) => (
                    <SingleRestaurant key={index} restaurant={restaurant} />
                ))}
            </div>

        </div>
    );
}

export default Restaurants;