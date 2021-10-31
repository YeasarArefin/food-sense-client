import React, { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import initApp from '../components/firebase/firebase.init';
import Swal from 'sweetalert2';

initApp();

const useFirebase = () => {

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    const GoogleLogin = () => {

        setLoading(true);

        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                setUser(user);
            })
            .catch((error) => {

                console.log(error.message);

            })
            .finally(() => { setLoading(false); });

    };

    const LogOut = () => {

        setLoading(true);

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
        })
            .finally(() => setLoading(false));

    };

    useEffect(() => {

        onAuthStateChanged(auth, (user) => {

            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setLoading(false);
        });

    }, [auth]);

    return {
        user,
        GoogleLogin,
        LogOut,
        loading
    };

};

export default useFirebase;
