import React from 'react';
import { MdArrowBackIosNew } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Notfound = () => {
    return (

        <div className="container flex h-screen items-center justify-center">

            <div className="flex flex-col items-center gap-y-20">

                <div>
                    <img width="800px" src="https://img.freepik.com/free-vector/page-found-with-people-connecting-plug-concept-illustration_114360-1927.jpg" alt="404" />
                </div>

                <Link to="/home">
                    <button className="btn flex items-center gap-x-3 w-52"><MdArrowBackIosNew /> Back To Home</button>
                </Link>

            </div>

        </div>

    );

};

export default Notfound;
