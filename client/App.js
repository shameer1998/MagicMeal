import React from 'react';



/*==============================================Importing CSS Files===================================*/
import './App.css';




/*=============================================Importing Bootstrap CSS===============================*/
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

//============== Importing Browser Routet======================
import {BrowserRouter as Router,Switch,Route,Redirect} from "react-router-dom";



//=================================Importing Components================================//
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import RestaurantLogin from './Components/Login/RestaurantLogin';
import NotFound from './Components/SpecialComp/NotFound';
import PrivacyPolicy from './Components/Footer/PrivacyPolicy';
import ContactUs from './Components/Footer/ContactUs';
import AboutUs from './Components/Footer/AboutUs';
import ScrollToTop from './Components/SpecialComp/ScrollToTop';
import MainPage from './Components/MainPage/MainPage';
import RestaurantSignup from './Components/Signup/RestaurantSignup';
import FoodieLogin from './Components/Login/FoodieLogin';
import FoodieSignup from './Components/Signup/FoodieSignup';
import ComplaintForm from './Components/Footer/ComplaintForm';
import FAQ from './Components/Footer/FAQ';


function App() {
  return (
  
  <Router>


    <div className= "App">

      <ScrollToTop/>
      
      <Header/>


      <Switch>
        <Route path= "/restaurant-login" component= {RestaurantLogin} />
        <Route path= "/restaurant-signup" component= {RestaurantSignup} />
        <Route path= "/foodie-login" component= {FoodieLogin} />
        <Route path= "/foodie-signup" component= {FoodieSignup} />

        <Route path= "/complaint-form" component= {ComplaintForm} />
        <Route path= "/FAQs" component= {FAQ} />


        <Route path= "/about-us" component= {AboutUs} />
        <Route path= "/contact-us" component= {ContactUs} />
        <Route path= "/privacy-policy" component= {PrivacyPolicy} />


        <Route path= "/notfound" component= {NotFound} />
        <Route path= "/" exact component= {MainPage} />
        <Route path= "/notfound" component= {NotFound} />


      </Switch>


      <Footer/>

    </div>


    
  </Router>
  );
}

export default App;
