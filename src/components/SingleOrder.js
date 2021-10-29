import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';

const SingleOrder = ({ order }) => {
    console.log(order);
    const { data, meal } = order;
    return (
        <div>

            <div className="grid grid-cols-6 items-center place-items-center p-3 border-b">

                <div>
                    <img width="100px" className="rounded-2xl" src={meal?.img} alt="order-img" />
                </div>

                <h1>{meal?.name}</h1>
                <h1>{data?.name}</h1>
                <h1>{data?.email}</h1>
                <h1>Pending</h1>
                <button className="p-2 border rounded-full shadow-md hover:bg-red-600 text-red-700 hover:text-white transition duration-300">
                    <AiOutlineDelete className="text-2xl" />
                </button>

            </div>

        </div>
    );
};

export default SingleOrder;;
