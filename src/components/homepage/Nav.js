import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {

    return (

        <div>

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

                    <button className="btn">
                        <Link to="/">Order</Link>
                    </button>

                </ul>

            </div>

        </div>

    );

};

export default Nav;
