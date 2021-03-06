import React, { useEffect, useState } from 'react';
import Sidebar from './Dashboard/Sidebar';
import SingleOrder from './SingleOrder';
import Swal from 'sweetalert2';

const ManageOrders = () => {

    const [orders, setOrders] = useState([]);

    useEffect(() => {

        fetch('https://ghastly-flesh-48656.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
            .catch((err) => {
                console.log(err);
            });

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

                fetch(`https://ghastly-flesh-48656.herokuapp.com/orders/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {

                        if (data.deletedCount > 0) {
                            const remainingOrders = orders.filter(order => order?._id !== _id);
                            setOrders(remainingOrders);
                        }

                    })
                    .catch((err) => {
                        console.log(err);
                    });

            }
        });

    };

    const handleStatus = (_id) => {

        Swal.fire({
            title: 'Are you sure to update this order?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then((result) => {

            if (result.isConfirmed) {

                Swal.fire(
                    'Updated',
                    'Your file has been updated',
                    'success'
                );

                fetch(`https://ghastly-flesh-48656.herokuapp.com/orders/${_id}`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({ type: "delevered" })
                })
                    .then(res => res.json())
                    .then(data => {

                        if (data.modifiedCount > 0) {
                            window.location.reload();
                        }

                    }).catch((err) => {
                        console.log(err);
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

                {
                    orders.length !== 0 ? (

                        <div className="flex flex-col">
                            {
                                orders.map(order => <SingleOrder key={order._id} order={order} handleDelete={handleDelete} handleStatus={handleStatus} />)
                            }
                        </div>

                    ) : (

                        <div className="flex flex-col h-full items-center justify-center mt-16">
                            <img width="300px" src="https://media.istockphoto.com/vectors/gift-box-vector-id525353196?k=20&m=525353196&s=612x612&w=0&h=shwWPYYYsnEdMSg6yiuW9jX9gztuMvHYKthGQY8mf1U=" alt="empty" />

                            <h1 className="text-3xl font-bold">No Order Yet!</h1>

                        </div>

                    )
                }



            </div>

        </div>

    );

};

export default ManageOrders;
