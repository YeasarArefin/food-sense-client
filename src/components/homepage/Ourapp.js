import React from 'react';
import Slide from 'react-reveal/Slide';
import Bounce from 'react-reveal/Bounce';

const Ourapp = () => {

    return (

        <Slide right>

            <div>

                <div className="container my-36">

                    <h1 className="text-6xl text-center mb-16">
                        Our App
                        <div className="w-20 h-1 bg-red-500 rounded-full mx-auto mt-3"></div>
                    </h1>

                    <div className="relative grid grid-cols-1 md:grid-cols-2">
                        {/* flex flex-wrap justify-center lg:justify-start gap-x-5 gap-y-5 lg:gap-y-0 z-10 */}
                        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center lg:place-items-start place-content-center gap-x-5 gap-y-5 lg:gap-y-0 z-10 ">

                            <img src="https://templatekit.tokomoo.com/deliverykit/wp-content/uploads/sites/26/2021/07/X-31.png" alt="app1" />
                            <img src="https://templatekit.tokomoo.com/deliverykit/wp-content/uploads/sites/26/2021/07/X-20.png" alt="app2" />

                        </div>

                        <div className="flex flex-col md:justify-center lg:justify-start gap-y-10 z-10 mt-10">

                            <h1 className="text-5xl font-black text-center lg:text-left">Simple Way to Order Your Food Faster</h1>

                            <p className="text-gray-600 text-center lg:text-left">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>

                            <div className="flex ">

                                <Bounce botom>
                                    <div>
                                        <img src="https://templatekit.tokomoo.com/deliverykit/wp-content/uploads/sites/26/2021/07/google-play-badge.png" alt="play-store" />
                                    </div>
                                </Bounce>

                                <Bounce botom>
                                    <div>
                                        <img src="https://templatekit.tokomoo.com/deliverykit/wp-content/uploads/sites/26/2021/07/5847e95fcef1014c0b5e4822.png" alt="app-store" />
                                    </div>
                                </Bounce>

                            </div>

                        </div>

                        <div className="">
                            <svg className="absolute top-56 z-0 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#DC2626" fillOpacity="1" d="M0,192L60,165.3C120,139,240,85,360,80C480,75,600,117,720,154.7C840,192,960,224,1080,197.3C1200,171,1320,85,1380,42.7L1440,0L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>

                        </div>
                    </div>

                </div>

            </div>

        </Slide>

    );

};

export default Ourapp;
