import React, { useEffect, useState } from 'react';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import { useForm } from "react-hook-form";
import useAuth from '../hooks/useAuth';
import { Link, useParams, useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

const MealDetails = () => {
    const { register, handleSubmit, reset } = useForm();
    const { _id } = useParams();
    const [meal, setMeal] = useState({});
    const { user } = useAuth();
    const history = useHistory();

    const onSubmit = data => {

        const newData = { data, meal };
        newData.status = { type: "pending" };

        fetch('http://localhost:5000/orders', {

            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newData)

        })
            .then(res => res.json())
            .then(data => {

                if (data) {

                    Swal.fire(
                        'Good job!',
                        'Your Order Has Been Placed',
                        'success',
                        reset()
                    );
                }
                history.push('/');
            });

    };

    useEffect(() => {

        fetch(`http://localhost:5000/meals/${_id}`)
            .then(res => res.json())
            .then(data => setMeal(data));

    }, []);


    return (

        <div>

            <div className="container flex h-screen items-center">

                <div className="grid grid-cols-2 items-center">

                    <div className="p-5 border-2 border-gray-200 rounded-3xl">

                        <div>
                            <img className="mx-auto mb-5 rounded-xl" src={meal?.img} alt="meal" />
                        </div>

                        <div className="flex flex-col gap-y-10">

                            <h1 className="text-center text-5xl font-bold">{meal?.name}</h1>
                            <p className="text-center w-4/6 mx-auto text-gray-500">{meal?.discription}</p>
                            <h1 className="text-center text-4xl font-extrabold">${meal?.price}</h1>

                            <div className="flex gap-x-3 justify-center">

                                <Link to="/">
                                    <button className="px-3 py-3 border border-red-500 hover:bg-red-500 hover:text-white transition duration-300 rounded-full flex items-center gap-x-3">
                                        <MdOutlineArrowBackIosNew />
                                        Back To Home
                                    </button>
                                </Link>

                            </div>

                        </div>

                    </div>

                    <div>

                        <h1 className="text-5xl text-center mb-16 my-36">
                            Place Order
                            <div className="w-20 h-1 bg-red-500 rounded-full mx-auto mt-3"></div>
                        </h1>

                        <form className="flex flex-col items-center gap-y-8" onSubmit={handleSubmit(onSubmit)}>

                            <input className="input" {...register("name", { required: true })} defaultValue={user?.displayName} placeholder="Name" />
                            <input className="input" {...register("email", { required: true })} defaultValue={user?.email} placeholder="Email" />
                            <input className="input"  {...register("adress", { required: true })} placeholder="Adress" />
                            <input className="btn w-40 mx-auto" type="submit" />

                        </form>

                    </div>

                </div>

            </div>

        </div>

    );

};

export default MealDetails;
