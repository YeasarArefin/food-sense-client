import React, { useEffect, useState } from 'react';
import Sidebar from './Dashboard/Sidebar';
import SingleOrder from './SingleOrder';
import Swal from 'sweetalert2';

const ManageOrders = () => {

    const [orders, setOrders] = useState([]);

    useEffect(() => {

        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data));

    }, []);

    const handleDelete = (_id) => {

        Swal.fire({
            title: 'Are you sure to delete this meal?',
            icon: 'error',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Delete'
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
                            const remainingOrders = orders.filter(order => order?._id !== _id);
                            setOrders(remainingOrders);
                        }

                    });

            }
        });

    };

    return (

        <div className="grid grid-cols-1 lg:grid-cols-7">

            <div className="col-span-1">

                <Sidebar />

            </div>

            <div className="container mt-28 col-span-6">

                <div className=" grid grid-cols-6 items-center place-items-center p-3 bg-red-600 text-white rounded-lg shadow-xl" style={{ width: "1470px" }}>

                    <h1>Image</h1>
                    <h1>Food Name</h1>
                    <h1>User Name</h1>
                    <h1>Emai</h1>
                    <h1>Type</h1>
                    <h1>Actions</h1>

                </div>

                <div className="flex flex-col">
                    {
                        orders.map(order => <SingleOrder key={order._id} order={order} handleDelete={handleDelete} />)
                    }
                </div>

            </div>

        </div>

    );

};

export default ManageOrders;
