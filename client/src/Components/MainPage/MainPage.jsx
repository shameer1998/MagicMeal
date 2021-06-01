import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';



/*=========================Importing CSS File=========================*/
import '../MainPage/MainPage.css'
import NewsLetter from '../SpecialComp/NewsLetter/NewsLetter';


/**=============================Importing Components====================== */
import PartenerImage from '../SpecialComp/PartenerImage/PartenerImage.jsx';
import ScrollToTop from '../SpecialComp/ScrollToTop';




const MainPage = () => {

    return (  
        <div className="MainPage">
            <PartenerImage/>
            <NewsLetter/>
        </div>
    );
}
 
export default MainPage;