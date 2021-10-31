import React from 'react';
import AllMeals from '../AllMeals';
import Footer from './Footer';
import Header from './Header';
import Menus from './Menus';
import Ourapp from './Ourapp';

const HomePage = () => {
    return (
        <>

            <Header />
            <Menus />
            <AllMeals />
            <Ourapp />
            <Footer />

        </>
    );
};

export default HomePage;
