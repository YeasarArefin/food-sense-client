import React, { useEffect, useState } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import Swal from 'sweetalert2';
import Sidebar from './Dashboard/Sidebar';

const ManageMeals = () => {

    const [meals, setMeals] = useState([]);

    useEffect(() => {

        fetch(`https://ghastly-flesh-48656.herokuapp.com/meals`)
            .then(res => res.json())
            .then(data => setMeals(data));

    }, []);

    const handleDelete = (_id) => {

        Swal.fire({
            title: 'Are you sure to delete this meal?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {

            if (result.isConfirmed) {

                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                );

                fetch(`https://ghastly-flesh-48656.herokuapp.com/meals/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            const remainingMeals = meals.filter(meal => meal._id !== _id);
                            setMeals(remainingMeals);
                        }
                    });

            }
        });

    };
    return (
        <div>

            <div className="grid grid-cols-1 lg:grid-cols-7">

                <div className="col-span-1">

                    <Sidebar />

                </div>

                <div className="col-span-6 ">

                    <div className="w-4/5 mx-auto mt-24 ">

                        <div className="mb-5">
                            <h1 className="text-center text-4xl mb-3 font-bold">Manage Meals</h1>
                            <div className="w-16 h-1 bg-red-600 mx-auto"></div>
                        </div>

                        <div className="bg-red-600 text-white h-12 rounded-lg mb-5 grid grid-cols-5 place-items-center">

                            <h1>Image</h1>
                            <h1>Name</h1>
                            <h1>Price</h1>
                            <h1>Rating</h1>
                            <h1>Actions</h1>

                        </div>

                        <div className="flex flex-col gap-y-5 text-xl">

                            {
                                meals.map(meal => <div className="grid grid-cols-5 place-items-center border-2 p-3 rounded-2xl shadow-sm">

                                    <div>
                                        <img width="100px" src={meal?.img} alt="meal" />
                                    </div>

                                    <h1>{meal?.name}</h1>
                                    <h1 className="font-bold">${meal?.price}</h1>
                                    <h1>{meal?.rating}</h1>
                                    <button title="Delete" onClick={() => handleDelete(meal?._id)} className="p-2 border rounded-full shadow-md bg-red-600 text-white transition duration-300">
                                        <AiOutlineDelete className="text-2xl" />
                                    </button>

                                </div>)
                            }

                        </div>

                    </div>

                </div>

            </div>





        </div>
    );
};

export default ManageMeals;
