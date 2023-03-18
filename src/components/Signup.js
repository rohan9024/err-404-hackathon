import React, { useRef, useState } from 'react'
import { NavLink,useNavigate } from "react-router-dom"
import sideimage from "../assets/sideimage.jpg"
import axios from "axios";


function Signup() {
    
  const navigate = useNavigate();

    const [firstNameRef, setFirstNameRef] = useState('');
    const [lastNameRef, setLastNameRef] = useState('');
    const [emailRef, setEmailRef] = useState('');
    const [passwordRef, setPasswordRef] = useState('');
    const [confirmPasswordRef, setConfirmPasswordRef] = useState('');

    
    // const uploadData = async () => {

    //         const formData = {
    //             username: firstNameRef,
    //             lastname: lastNameRef,
    //             password: passwordRef,
    //             email: emailRef
    //         }
            
    //         try {
    //             let res;
                
    //             navigate("/genre")                
    //             res = await axios.post(
    //                 `${backendUrl}/api/authentication/register`,
    //                 formData
                    
    //                 );
    //                 console.log(res);
                    
    //                 // if (res.data.SUCCESS == "TRUE") {
    //                 //     setTimeout( () => {
    //                 //     // cancelBtn();
    //                 // }, 1000 );
                    
            
                
    //         } 
    //         catch (ex) {
    //             console.log(ex);
    //         }

    //     }



    // const uploadData = async () => {


    //     if (!firstNameRef) {
    //         console.log("Please Enter Complete data");
    //     }
    //     else if(!lastNameRef)
    //     {
    //         console.log("Please Enter Complete data");
    //     }
    //     else if(!emailRef)
    //     {
    //         console.log("Please Enter Complete data");
    //     }
    //     else if(!passwordRef)
    //     {
    //         console.log("Please Enter Complete data");
    //     }
    //     else if(!confirmPasswordRef)
    //     {
    //         console.log("Please Enter Complete data");
    //     }
    //     else
    //     {
    //         const formData = {
    //             username: firstNameRef,
    //             lastname: lastNameRef,
    //             password: passwordRef,
    //             email: emailRef
    //         }
            
    //         try {
    //           let res = await axios.post(
    //             `${backendUrl}/api/authentication/register`,
    //             formData
    //           );

    //           console.log(res);
    //          if (res.data.SUCCESS == "TRUE") {
    //                     setTimeout( () => {
    //                     navigate('/genre',{state:{email:emailRef}})
    //                 }, 1000 );
    //             }
              
    //         } catch (ex) {
    //             console.log(ex);
    //         }

    //     }
    
    return (
        <>
            <div

                style={{
                    fontFamily: 'Medium',

                }}

                className='flex justify-center items-center w-screen h-screen'
            >

                <div className='w-3/4 h-screen'>
                    <img src={sideimage} alt="sideimage" className='h-full w-full object-contain' />
                </div>
                <div className='flex flex-col justify-center items-center w-screen h-[640px] space-y-5'>
                    {/* <img
                        className='object-contain w-28 h-28 cursor-pointer rounded-full border border-black '
                        src={logo} alt="logo" /> */}
                    <h1 className='text-center text-4xl mb-10'>Help the industries grow!</h1>
                    <div
                
                        className='flex flex-col justify-center items-center space-y-8'>
                        <div className='flex justify-between items-center w-full space-x-12'>
                            <input
                                style={{
                                    fontFamily: 'Medium'
                                }}
                                type="text" placeholder="First Name" className='placeholder:text-gray-600 px-4 py-2 outline-none border border-gray-800 w-64'
                                onChange={(event) => {setFirstNameRef(event.target.value)}}
                            />
                            <input
                                style={{
                                    fontFamily: 'Medium'
                                }}
                                type="text" placeholder="Last Name" className='placeholder:text-gray-600 px-4 py-2  outline-none border border-gray-800 w-64'
                                onChange={(event) => {setLastNameRef(event.target.value)}}
                            
                            />
                        </div>
                        <div className='flex justify-between items-center w-full '>
                            <input
                                style={{
                                    fontFamily: 'Medium'
                                }}  
                                type="email" placeholder="Email address" className='placeholder:text-gray-600 px-5 py-2  outline-none border border-gray-800 w-64 '
                                onChange={(event) => {setEmailRef(event.target.value)}}
                            />
                            <input
                                style={{
                                    fontFamily: 'Medium'
                                }}
                                type="password" placeholder="Password" className='placeholder:text-gray-600 px-5 py-2  outline-none border border-gray-800 w-64'
                                onChange={(event) => {setPasswordRef(event.target.value)}}
                            
                            />
                        </div>

                        <input
                            style={{
                                fontFamily: 'Medium'
                            }}
                           type="password" placeholder="Confirm Password" className='placeholder:text-gray-600 px-5 py-2  outline-none border border-gray-800 w-72'
                           onChange={(event) => {setConfirmPasswordRef(event.target.value)}}
                        />

                        <div className='flex justify-center items-center w-72 bg-black text-white py-2'>
                            <button type='submit'>Sign Up</button>
                            {/* <NavLink to="/genre">Sign Up</NavLink> */}
                        </div>
                        <h1 className='text-gray-500'><NavLink to="/login">Already Registered?</NavLink></h1>
                        {/* <h1 className='underline'> <Link to="/signup">Join us</Link></h1> */}
                    </div>
                </div>
            </div>
        </>

    )
}

export default Signup