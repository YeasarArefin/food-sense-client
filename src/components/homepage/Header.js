import React from 'react';
import bg from '../../assets/bg.mp4';

const Header = () => {
    return (
        <>

            <div className="relative mb-32">

                <video autoPlay loop>
                    <source src={bg} />
                </video>

                <div>
                    <img className="w-40 mx-auto lg:w-2/6 absolute top-5 lg:top-40 left-32 lg:left-1/3" src="https://eatsy.bold-themes.com/wp-content/uploads/2021/05/image_hero-1.png" alt="logo" />
                </div>

            </div>

            <div className="container grid grid-cols-1 md:grid-cols-2 gap-y-10 lg:gap-y-10 items-center">

                <div className="flex flex-col gap-y-10">

                    <h1 className="text-5xl lg:text-7xl font-black text-center lg:text-left">
                        Order Your <br /> Food & Enjoy <br /> The Taste
                    </h1>

                    <p className="text-gray-600 text-center lg:text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Atque, delectus?Lorem ipsum dolor sit amet.</p>

                    <button className="btn w-40 mx-auto lg:mx-0">Order Now</button>

                </div>

                <div >

                    <img className="rounded-3xl" src="https://templatekit.tokomoo.com/deliverykit/wp-content/uploads/sites/26/elementor/thumbs/delivery-man-giving-take-away-food-DBXUQTG-p9noymjjtdze0o8ib6wcqa6zvt6bhjpn7iy3hm0jyg.jpg" alt="delevery-man" />

                </div>

            </div>

        </>

    );
};

export default Header;
