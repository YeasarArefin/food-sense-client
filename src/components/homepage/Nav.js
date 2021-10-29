import React from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { RiLogoutCircleRLine } from 'react-icons/ri';
import useAuth from '../../hooks/useAuth';

const Nav = () => {

    const { user, GoogleLogin, LogOut } = useAuth();

    return (

        <div className="fixed top-0 w-full z-50 bg-white">

            <div className="container py-3 flex items-center justify-between">

                <div>
                    <Link to="/">
                        <img src="https://templatekit.tokomoo.com/deliverykit/wp-content/uploads/sites/26/2021/07/Logo-1.png" alt="brand" />
                    </Link>
                </div>

                <ul className="flex items-center gap-x-6">

                    <li>
                        <Link to="/">Home</Link>
                    </li>

                    <li>
                        <Link to="/">About</Link>
                    </li>

                    <li>
                        <Link to="/addmeal">Add Meal</Link>
                    </li>

                    <li>
                        <Link to="/">Contact</Link>
                    </li>

                    {
                        user?.email ? (

                            <div className="flex items-center gap-x-4">

                                <div className="flex items-center gap-x-3">

                                    <div>
                                        <img width="40px" className="rounded-full" src={user.photoURL} alt="user" />
                                    </div>

                                    <h1 className="text-lg font-semibold">{user?.displayName}</h1>

                                </div>

                                <button onClick={LogOut} className="px-4 py-2 rounded-full border-red-500 border-2 flex items-center gap-x-2 focus:ring-4 focus:ring-red-200 transition duration-500">

                                    Sing Out
                                    <RiLogoutCircleRLine className="text-xl" />

                                </button>

                            </div>

                        ) : (

                            <button onClick={GoogleLogin} className="px-4 py-2 rounded-full border-red-500 border-2 flex items-center gap-x-2 focus:ring-4 focus:ring-red-200 transition duration-500">
                                <FcGoogle className="text-2xl" />Sing In
                            </button>

                        )

                    }

                </ul>

            </div>

        </div>

    );

};

export default Nav;
