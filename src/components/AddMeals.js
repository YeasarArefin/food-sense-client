import React from 'react';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import Sidebar from './Dashboard/Sidebar';

const AddMeals = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        fetch('http://localhost:5000/meals', {

            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)

        })
            .then(res => res.json())
            .then(data => {

                console.log(data);
                if (data) {
                    Swal.fire(
                        'Good job!',
                        'Your Meal Has Been Added',
                        'success',
                        reset()
                    );
                }

            });

    };

    return (

        <div className="grid grid-cols-1 lg:grid-cols-7">

            <div className="col-span-1">

                <Sidebar />

            </div>

            <div className="flex h-full items-center mt-32 col-span-6">

                <div className="container flex flex-col items-center">

                    <h1 className="text-6xl text-center mb-10">
                        Add Meal
                        <div className="w-20 h-1 bg-red-500 rounded-full mx-auto mt-3"></div>
                    </h1>

                    <form className="grid w-full gap-x-5 grid-cols-2" onSubmit={handleSubmit(onSubmit)}>

                        <div className="flex flex-col items-end gap-y-7">
                            <input className="input" {...register("name", { required: true })} placeholder="Name" />
                            <input className="input h-52" {...register("discription", { required: true })} placeholder="Discription" />

                        </div>

                        <div className="flex flex-col items-start gap-y-7">

                            <input className="input" {...register("title", { required: true })} placeholder="Title" />
                            <input className="input" {...register("img", { required: true })} placeholder="Img URL" />
                            <input className="input" {...register("price", { required: true })} placeholder="Price" />
                            <input className="input" type="number" {...register("rating", { required: true })} placeholder="Rating" />
                            <input className="btn w-40" type="submit" />

                        </div>

                    </form>

                </div>

            </div>
        </div>




    );

};

export default AddMeals;
