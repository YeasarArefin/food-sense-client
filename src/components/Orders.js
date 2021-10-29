import React, { useEffect, useState } from 'react';
import SingleOrder from './SingleOrder';

const Orders = () => {

    const [orders, setOrders] = useState([]);
    useEffect(() => {

        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data));

    }, []);
    return (

        <div>

            <div className="container mt-28">

                <div className="grid grid-cols-6 items-center place-items-center p-3 bg-red-600 text-white rounded-lg">

                    <h1>Image</h1>
                    <h1>Food Name</h1>
                    <h1>User Name</h1>
                    <h1>Emai</h1>
                    <h1>Type</h1>
                    <h1>Actions</h1>

                </div>

                <div className="flex flex-col">
                    {
                        orders.map(order => <SingleOrder key={order._id} order={order} />)
                    }
                </div>

            </div>

        </div>

    );

};

export default Orders;
