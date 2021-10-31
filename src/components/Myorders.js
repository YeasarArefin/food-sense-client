import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import Rating from 'react-rating';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import Swal from 'sweetalert2';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Myorders = () => {

    const [meals, setMeals] = useState([]);
    const { user } = useAuth();

    const loadData = async () => {

        const res = await fetch('http://localhost:5000/orders');
        const data = await res.json();
        setMeals(data);

    };

    useEffect(() => {
        loadData();
    }, []);

    const handleDelete = (_id) => {

        Swal.fire({
            title: 'Are you sure to cancel this order?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then((result) => {

            if (result.isConfirmed) {

                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                );

                fetch(`http://localhost:5000/orders/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {

                        if (data.deletedCount > 0) {
                            const remainingOrders = meals.filter(meal => meal?._id !== _id);
                            setMeals(remainingOrders);
                        }

                    });

            }

        });

    };

    const myMeal = meals.filter(meal => meal?.data.email == user?.email);

    return (

        <div className="mt-28 container">

            <div className="flex flex-col items-center gap-y-3 mb-8">
                <h1 className="text-5xl font-extrabold">My Orders</h1>
                <div className="w-16 h-1 bg-red-500 rounded-full"></div>
            </div>

            <div className="flex flex-col gap-y-10">

                {

                    meals.length !== 0 ? (

                        myMeal.map(meal => <div key={meal._id}>

                            <div className="w-4/5 mx-auto flex items-center gap-x-4 p-4 border border-gray-300 rounded-xl hover:shadow-xl transition duration-300">

                                <div>
                                    <img className="rounded-md" src={meal?.meal.img} alt="my-img" />
                                </div>

                                <div className="flex flex-col gap-y-4">

                                    <h1 className="text-3xl font-bold">{meal?.meal.name}</h1>
                                    <p className="w-5/6 text-gray-600">{meal?.meal.discription}</p>

                                    <div className="flex  gap-x-3">

                                        <h1 className="text-2xl font-bold">${meal?.meal.price}</h1>

                                        <Rating className="text-2xl"
                                            emptySymbol={<AiOutlineStar className="text-yellow-500" />}
                                            fullSymbol={<AiFillStar className="text-yellow-500" />}
                                            initialRating={meal?.meal.rating}
                                            readonly
                                        />

                                        <span className="text-lg">({meal?.meal.rating})</span>
                                        <h1 className="px-3 py-1 text-white rounded-full bg-yellow-600 w-20">Pending</h1>

                                    </div>

                                </div>

                                <div>
                                    <button onClick={() => handleDelete(meal?._id)} className="btn">Cancle</button>
                                </div>

                            </div>

                        </div>)

                    ) : (

                        <div className="flex flex-col h-full items-center justify-center">
                            <img width="300px" src="https://media.istockphoto.com/vectors/gift-box-vector-id525353196?k=20&m=525353196&s=612x612&w=0&h=shwWPYYYsnEdMSg6yiuW9jX9gztuMvHYKthGQY8mf1U=" alt="empty" />

                            <Link to="/home">
                                <button className="btn flex items-center gap-x-3 text-xl"><MdOutlineArrowBackIosNew /> Order From Home</button>
                            </Link>


                        </div>

                    )

                }

            </div>

        </div>
    );
};

export default Myorders;
