import React, { useEffect, useState } from 'react';
import SingleMeal from './homepage/SingleMeal';
import Slide from 'react-reveal/Slide';

const AllMeals = () => {

    const [meals, setMeals] = useState([]);

    useEffect(() => {

        fetch('https://ghastly-flesh-48656.herokuapp.com/meals')
            .then(res => res.json())
            .then(data => setMeals(data))
            .catch((err) => {
                console.log(err);
            });

    }, []);

    return (
        <Slide left>

            <div className="container">

                <h1 className="text-6xl text-center mt-36 mb-20">
                    Delicious Food For You
                    <div className="w-20 h-1 bg-red-500 rounded-full mx-auto mt-3"></div>
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20">

                    {
                        meals.map(meal => <SingleMeal key={meal._id} meal={meal} />)
                    }

                </div>

            </div>

        </Slide>

    );
};

export default AllMeals;
