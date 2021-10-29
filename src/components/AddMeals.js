import React from 'react';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';

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

        <div className="flex items-center my-20">

            <div className="container flex flex-col items-center">

                <h1 className="text-6xl text-center mb-16">
                    Add Meal
                    <div className="w-20 h-1 bg-red-500 rounded-full mx-auto mt-3"></div>
                </h1>
                <form className="w-2/5 flex flex-col items-center gap-y-6" onSubmit={handleSubmit(onSubmit)}>

                    <input className="input" {...register("name", { required: true })} placeholder="Name" />
                    <input className="input" {...register("title", { required: true })} placeholder="Title" />
                    <input className="input" {...register("img", { required: true })} placeholder="Img URL" />
                    <input className="input" {...register("discription", { required: true })} placeholder="Discription" />
                    <input className="input" {...register("price", { required: true })} placeholder="Price" />
                    <input className="input" type="number" {...register("rating", { required: true })} placeholder="Rating" />
                    <input className="btn w-40" type="submit" />

                </form>

            </div>

        </div>


    );

};

export default AddMeals;
