import React, { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import initApp from '../components/firebase/firebase.init';
import Swal from 'sweetalert2';

initApp();

const useFirebase = () => {

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState();

    const GoogleLogin = () => {

        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                setUser(user);
                console.log(user);
            })
            .catch((error) => {

                console.log(error.message);

            });

    };

    const LogOut = () => {

        signOut(auth).then(() => {
            // Sign-out successful.
            setUser({});
            Swal.fire(
                'Good job!',
                'You Are Successfully Logged Out',
                'success'
            );

        }).catch((error) => {
            console.log(error.message);
        });

    };

    useEffect(() => {

        onAuthStateChanged(auth, (user) => {

            if (user) {
                setUser(user);
            } else {
                setUser({});
            }

        });

    }, [auth]);

    return {
        user,
        GoogleLogin,
        LogOut
    };

};

export default useFirebase;
