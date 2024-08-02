// Login.js
import React from 'react';
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import app from '../firebase/firebase.config'; // Adjust the import according to your project structure

const Login = () => {
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth(app);

    const handleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                console.log(user); // Handle successful login
            })
            .catch((error) => {
                const errorMessage = error.message;
                const email = error.customData?.email;
                const credential = GoogleAuthProvider.credentialFromError(error);

            });
    };

    return (
        <div className='h-screen w-full flex items-center justify-center'>
            <button className='bg-blue-600 px-8 py-2 text-white' onClick={handleLogin}>
                Login with Google
            </button>
        </div>
    );
};

export default Login;
