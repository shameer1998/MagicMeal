import React from "react";
import {
  AppBar,
  ToolBar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from "@matterial-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import useStyles from "./styles"



const NavBar = () => {
  const classes = useStyles();
  return (<>
    <AppBar position = "fixed" className = {classes.appBar} color ="inherit">
        <ToolBar>
            <Typography variant = "h6" className = {classes.title} color ="inherit">
                <img src = {} alt = "Magic Meal.js" height = "25px" className = {classes.image}/>
                Magic Meal
            </Typography>
            <div className = {classes.grow}/>
            <div className = {classes.button}>
                <IconButton arial-label = "Show cart Items" color ="inherit">
                    <Badge bodyContent = {2} color = "secondary">
                        <ShoppingCart/>
                    </Badge>    
                </IconButton>
                </div>
        </ToolBar>
    </AppBar>
  </>);
};

export default NavBar;
