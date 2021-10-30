import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { RiLogoutCircleRLine } from 'react-icons/ri';
import useAuth from '../../hooks/useAuth';

const Nav = () => {

    const { user, GoogleLogin, LogOut } = useAuth();

    return (

        <div className={`fixed top-0 w-full z-50 bg-white shadow-lg`}>

            <div className="container py-3 flex items-center justify-between">

                <div>
                    <Link to="/">
                        <img src="https://templatekit.tokomoo.com/deliverykit/wp-content/uploads/sites/26/2021/07/Logo-1.png" alt="brand" />
                    </Link>
                </div>

                <ul className="flex items-center gap-x-6 text-lg">

                    <li>
                        <NavLink exact activeStyle={{ borderBottom: "3px solid red" }} to="/">Home</NavLink>
                    </li>

                    {/* <li>
                        <NavLink exact activeStyle={{ color: "red" }} to="/">About</NavLink>
                    </li>

                    <li>
                        <NavLink exact activeStyle={{ color: "red" }} to="/">Contact</NavLink>
                    </li> */}

                    <li>
                        <NavLink exact activeStyle={{ borderBottom: "3px solid red" }} to="/dashboard/orders">Dashboard</NavLink>
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

                                <button onClick={LogOut} className="px-4 py-2 rounded-full border-3px solid red-500 border-2 border-red-500 flex items-center gap-x-2 focus:ring-4 focus:ring-3px solid red-200 transition duration-500">

                                    Sing Out
                                    <RiLogoutCircleRLine className="text-xl" />

                                </button>

                            </div>

                        ) : (

                            <button onClick={GoogleLogin} className="px-4 py-2 rounded-full border-3px solid red-500 border-2 flex items-center gap-x-2 focus:ring-4 focus:ring-3px solid red-200 transition duration-500">
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
