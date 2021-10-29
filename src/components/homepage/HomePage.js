import React from 'react';
import AllMeals from '../AllMeals';
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

        </>
    );
};

export default HomePage;
