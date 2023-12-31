import React, { useRef } from 'react'
import logo from "../assets/logo.jpeg"
import { ToastContainer, toast } from 'react-toastify';
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom"
import sideimage from "../assets/sideimage.gif"
import { useState } from 'react';
import axios from 'axios';
import { ReactSession } from 'react-client-session';
import google from "../assets/google.png"
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth";
import firebase from "../firebase"
import 'react-toastify/dist/ReactToastify.css';
import show from "../assets/show.svg"

function RecruiterLogin() {
    const provider = new GoogleAuthProvider();

    const auth = getAuth();
    const [choice, setChoice] = useState({ admin: false, recruiter: false, candidate: false, })
    const [first, setFirst] = useState(true)
    const [second, setSecond] = useState(false)

    let location = useLocation()
    ReactSession.set("email", location.state?.email);
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = async () => {

        if (!email) {
            toast.error("Please Enter email");
        }
        else if (!password) {
            toast.error("Please Enter password");
        }

        else {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user)
                    toast.success(`You logged in as : ${user.email}`)
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;

                    toast.error("Wrong credentials")
                    console.log(errorMessage)
                });
        }

    }


    const login = (e) => {
        e.preventDefault();
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                console.log(user)
                toast.success("Logged in successfully")
                navigate('/Recruiter')

                
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                toast.error("Wrong Credentials")
                // ...
            });
    }


    // Notify for successful login
    const notifySuccess = () => toast.success('Logged in successfully', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    //Notify if unsuccessfull error
    const notifyError = () => toast.error('Invalid email or password', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });



        
    return (
        <div>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <div
                style={{
                    fontFamily: 'Medium',
                }}

                className='flex justify-center items-center w-screen h-screen'
            >

                <div className='w-3/4 h-screen p-2'>
                    <img src={sideimage} alt="sideimage" className='h-full w-full object-contain' />
                </div>
                <div className='flex flex-col justify-center items-center w-screen h-[640px] space-y-5'>
                    {/* <img
                        className='object-contain w-28 h-28 cursor-pointer rounded-full border border-black '
                        src={logo} alt="logo" /> */}
                    <h1 className='text-center text-4xl mb-10'>Recruiter Login!</h1>
                    <div className='flex flex-col justify-center items-center space-y-5'>

                        {/* Email */}
                        <input
                            style={{
                                fontFamily: 'Medium'
                            }}
                            type="email" placeholder="Email address" className='placeholder:text-gray-600 px-5 py-2  outline-none border border-gray-800 w-72'
                            onChange={(event) => { setEmail(event.target.value) }}
                        />

                        {/* Password */}
                        <div className=''>
                            <input
                                style={{
                                    fontFamily: 'Medium'
                                }}
                                type="password" placeholder="Password" className='placeholder:text-gray-600 px-5 py-2  outline-none border border-gray-800 w-72'
                                onChange={(event) => { setPassword(event.target.value) }}
                            />
                            {/* <img src={show} alt="show" className='h-5 w-5 object-contain absolute z-10 -mt-10 -mr-[2000px]'/> */}
                        </div>



                        {/* Forgot Password */}
                        <div className='flex justify-between items-center cursor-pointer \'>
                            <h1 className='font-normal text-sm text-right ml-24 text-gray-500'>Forgot your Password?</h1>
                        </div>

                        {/* Sign In */}
                        <div className='flex justify-center items-center w-72 bg-black text-white py-2'>
                            <button type='submit' onClick={signIn}>Sign In</button>
                        </div>

                        {/* Sign Up Link */}
                        <h1 className='text-gray-500'><NavLink to="/signup">Not a member?</NavLink></h1>

                        <div className='h-[1px] w-64 bg-gray-500' />

                        <div className='flex justify-center items-center bg-gray-200 p-3 px-4 py-3 rounded-lg text-gray-700 w-64 hover:cursor-pointer' onClick={login}>
                            <img src={google} alt="google" className='h-4 w-4 object-contain' />
                            <h1 className='ml-4'>Sign In using google</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecruiterLogin