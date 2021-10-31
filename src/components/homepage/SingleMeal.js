import React from 'react';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';
import { AiOutlineStar } from 'react-icons/ai';
import { AiFillStar } from 'react-icons/ai';

const SingleMeal = ({ meal }) => {

    const { _id, name, img, title, rating, price } = meal;

    return (

        <div className="border rounded-xl w-80 hover:shadow-2xl transition duration-300 h-auto mx-auto shadow-lg ">

            <div>
                <img className="rounded-t-xl" src={img} alt="meal" />
            </div>

            <div className="flex flex-col gap-y-2 p-5">

                <h1 className="font-semibold text-xl">{name}</h1>

                <div className="flex gap-x-3">

                    <Rating className="text-2xl"
                        emptySymbol={<AiOutlineStar className="text-yellow-500" />}
                        fullSymbol={<AiFillStar className="text-yellow-500" />}
                        initialRating={rating}
                        readonly
                    />
                    <h1 className="text-xl">({rating})</h1>

                </div>

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
