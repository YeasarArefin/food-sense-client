import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Sidebar = () => {

    const { user } = useAuth();

    return (

        <div className="w-1/6 h-screen fixed p-3 left-0 shadow-md">

            <div className="mt-32 mb-5">

                <img className="mx-auto rounded-full" src={user?.photoURL} alt="Admin" />

            </div>

            <div className="flex flex-col gap-y-10">

                <div className="text-center">
                    <h1>{user?.displayName}</h1>
                    <h1>{user?.email}</h1>
                </div>

                <div className="text-center flex flex-col gap-y-7 font-bold">

                    <Link to="/dashboard/manageorders">
                        <button className="px-12 py-3 border-2 focus:outline-none focus:ring-4 focus:ring-red-300 focus:shadow-md  transition duration-500 border-red-500 font-bold rounded-full">Manage Orders</button>
                    </Link>

                    <Link to="/dashboard/addmeal">
                        <button className="px-12 py-3 border-2 focus:outline-none focus:ring-4 focus:ring-red-300 focus:shadow-md  transition duration-500 border-red-500 font-bold rounded-full">Add New Meal</button>
                    </Link>

                    <Link to="/dashboard/managemeals">
                        <button className="px-12 py-3 border-2 focus:outline-none focus:ring-4 focus:ring-red-300 focus:shadow-md  transition duration-500 border-red-500 font-bold rounded-full">Manage Meals</button>
                    </Link>

                </div>

            </div>

        </div>
    );
};

export default Sidebar;
