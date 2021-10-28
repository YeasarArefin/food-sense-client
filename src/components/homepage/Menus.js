import React from 'react';

const Menus = () => {

    const menus = [

        {
            img: "https://templatekit.tokomoo.com/deliverykit/wp-content/uploads/sites/26/2021/07/Pizza.png",
            name: "Pizza"
        },
        {
            img: "https://templatekit.tokomoo.com/deliverykit/wp-content/uploads/sites/26/2021/07/Asian.png",
            name: "Asian"
        },
        {
            img: "https://templatekit.tokomoo.com/deliverykit/wp-content/uploads/sites/26/2021/07/Burger.png",
            name: "Burger"
        },
        {
            img: "https://templatekit.tokomoo.com/deliverykit/wp-content/uploads/sites/26/2021/07/Drink.png",
            name: "Drink"
        },
        {
            img: "https://templatekit.tokomoo.com/deliverykit/wp-content/uploads/sites/26/2021/07/Salad.png",
            name: "Salad"
        },
        {
            img: "https://templatekit.tokomoo.com/deliverykit/wp-content/uploads/sites/26/2021/07/Bakery.png",
            name: "Bakery"
        },

    ];

    return (

        <div>
            <h1 className="text-6xl text-center mb-16 my-36">
                Our Menus
                <div className="w-20 h-1 bg-red-500 rounded-full mx-auto mt-3"></div>
            </h1>
            <div className='container flex justify-evenly '>

                {
                    menus.map((menu, index) => <div className="flex p-3 flex-col items-center border rounded-xl shadow-lg hover:bg-red-500 hover:text-white transition duration-500" key={index}>

                        <div>
                            <img src={menu.img} alt="menu" />
                        </div>
                        {menu.name}

                    </div>)
                }

            </div>

        </div>



    );

};

export default Menus;
