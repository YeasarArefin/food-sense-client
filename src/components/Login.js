import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import useAuth from '../hooks/useAuth';
import { useHistory } from 'react-router-dom';

const Login = () => {

    const { GoogleLogin } = useAuth();
    const history = useHistory();

    return (
        <div>

            <div className="flex h-screen items-center justify-center">

                <div>
                    <button onClick={GoogleLogin} className="text-3xl px-7 py-4 hover:bg-gray-50 border-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-xl hover:border-red-600 font-bold border-gray-300 rounded-full flex items-center gap-x-3"><FcGoogle />Sing In With Google</button>
                </div>

            </div>

        </div>
    );
};

export default Login;
