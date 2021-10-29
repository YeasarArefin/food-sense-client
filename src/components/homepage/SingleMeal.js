import React from 'react';
import { Link } from 'react-router-dom';

const SingleMeal = ({ meal }) => {

    const { _id, name, img, title, rating, price } = meal;

    return (

        <div className="border rounded-xl w-80 mx-auto shadow-lg">

            <div>
                <img className="rounded-t-xl" src={img} alt="meal" />
            </div>

            <div className="flex flex-col gap-y-2 p-5">

                <h1 className="font-semibold text-xl">{name}</h1>
                <h1 className="text-xl">{rating}</h1>
                <h1 className="font-light text-sm">{title}</h1>

                <div className="flex justify-between items-center">
                    <h1 className="font-bold text-xl">${price}</h1>
                    <Link to={`/details/${_id}`}>
                        <button className="btn">Order Now</button>
                    </Link>
                </div>

            </div>

        </div>

    );

};

export default SingleMeal;
