import React, { useRef, useState } from 'react'
import { NavLink, useNavigate } from "react-router-dom"
import sideimage from "../assets/sideimage.gif"
import sideimage2 from "../assets/sideimage2.gif"
import axios from "axios";
import DropZone from './DropZone';
import { storage } from '../firebase';
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import upload from "../assets/upload.jpg"
import { toast } from 'react-toastify';

function Signup() {

    const navigate = useNavigate();
    // const [Pref, setPref] = useState({
    //     "First": true,
    //     "Second": false,
    //     "Third": false
    // });

    const [first, setFirst] = useState(true)
    const [second, setSecond] = useState(false)
    const [third, setThird] = useState(false)
    const [skills, setSkills] = useState('')
    const [city, setCity] = useState('')
    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [email, setEmail] = useState('');
    const [education, setEducation] = useState('');
    const [passwordRef, setPasswordRef] = useState('');
    const [confirmPasswordRef, setConfirmPasswordRef] = useState('');
    const [parsedResumeData, setParsedResumeData] = useState('');
    const [workExperience, setWorkExperience] = useState('')

    const [imgUrl, setImgUrl] = useState(null);
    const [progresspercent, setProgresspercent] = useState(0);


    const handleSubmit = async (e) => {
        e.preventDefault()
        const file = e.target[0]?.files[0]
        if (!file) return;
        // const storageRef = ref(storage, `files/${file.name}`);
        // const uploadTask = uploadBytesResumable(storageRef, file);

        // uploadTask.on("state_changed",
        //     (snapshot) => {
        //         const progress =
        //             Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        //         setProgresspercent(progress);
        //     },
        //     (error) => {
        //         alert(error);
        //     },
        //     () => {
        //         getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        //             setImgUrl(downloadURL);
        //             alert("Uploaded");
        //         });
        //     }
        // );
        var data = new FormData();
        data.append('resume', file);
        const result = await fetch('http://127.0.0.1:8001/app/upload_file/', {
            method: 'POST',
            body: data,
            mode: 'cors',
        });
        const jsonResult = await result.json();
        alert("File uploaded")
        console.log('result', jsonResult)
        setParsedResumeData(jsonResult);
        setName(parsedResumeData.Name)
        setContact(parsedResumeData.Phone)
        setEmail(parsedResumeData.Email)
    };
    // function handleSubmit(event) {
    //     // event.preventDefault();
    //     // const formData = new FormData();
    //     // formData.append('file', file);
    //     // axios.post('/api/upload/', formData).then(response => {
    //     //   console.log(response.data);
    //     // });
    // }
    function handleFileChange(event) {
        // const file = event.target.files[0];
        // setFile(file);
    }
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
            {

                first && (
                    <div
                        style={{
                            fontFamily: 'Medium',

                        }}
                        className='flex justify-center items-center w-screen h-screen space-y-8'
                    >
                        <div className='w-3/4 h-screen'>
                            <img src={sideimage} alt="sideimage" className='h-full w-full object-contain' />
                        </div>
                        <div className='w-3/4 flex flex-col justify-center items-center'>
                            {/* <h1 className='text-center text-4xl mb-10'>Get your dream job in 3 steps!</h1> */}
                            <h3 className='text-center text-4xl mb-10'>Upload your resume</h3>

                            <form onSubmit={handleSubmit} className='flex justify-center items-center flex-col space-y-4'>
                                <input type='file' className='ml-40' />
                                <button type='submit' class="hover:transition hover:duration-150 hover:ease-in-out hover:scale-105 px-5 py-2 rounded-lg bg-gray-800 text-gray-200">Upload</button>
                            </form>
                            {
                                !imgUrl &&
                                <div className='outerbar'>
                                    <div className='innerbar' style={{ width: `${progresspercent}%` }}>{progresspercent}%</div>
                                </div>
                            }
                            <div>
                            </div>
                            <button onClick={() => {
                                setFirst(false)
                                setSecond(true)
                                setThird(false)
                            }} class="ml-[400px] mt-10 hover:transition hover:duration-150 hover:ease-in-out hover:scale-105 px-12 py-2 rounded-lg bg-blue-800 text-gray-200">Next</button>
                        </div>

                    </div>
                )
            }

            {
                second && (
                    <div
                        style={{
                            fontFamily: 'Medium',

                        }}
                        className='flex justify-center items-center w-screen h-screen'
                    >
                        <div className='w-3/4 h-screen'>
                            <img src={sideimage2} alt="sideimage2" className='h-full w-full object-contain' />
                        </div>
                        <div className='flex flex-col justify-center items-center w-screen h-[640px] space-y-5'>
                            {/* <img
        className='object-contain w-28 h-28 cursor-pointer rounded-full border border-black '
        src={logo} alt="logo" /> */}
                            <h1 className='text-center text-4xl mb-10'>Get your dream job in 3 steps!</h1>
                            <div

                                className='flex flex-col justify-center items-center space-y-8'>
                                <div className='flex justify-between items-center w-full space-x-12'>
                                    <input
                                        style={{
                                            fontFamily: 'Medium'
                                        }}
                                        value={name}
                                        type="text" placeholder="Name" className='placeholder:text-gray-600 px-4 py-2 outline-none border border-gray-800 w-64'
                                        onChange={(event) => { setName(event.target.value) }}
                                    />
                                    <input
                                        style={{
                                            fontFamily: 'Medium'
                                        }}
                                        type="text"
                                        value={contact}
                                        placeholder="Contact" className='placeholder:text-gray-600 px-4 py-2  outline-none border border-gray-800 w-64'
                                        onChange={(event) => { setContact(event.target.value) }}
                                    />
                                </div>
                                <div className='flex justify-between items-center w-full '>
                                    <input
                                        style={{
                                            fontFamily: 'Medium'
                                        }}
                                        type="email" placeholder="Email address" className='placeholder:text-gray-600 px-5 py-2  outline-none border border-gray-800 w-64 '
                                        value={email}
                                        onChange={(event) => { setEmail(event.target.value) }}
                                    />
                                    <input
                                        style={{
                                            fontFamily: 'Medium'
                                        }}
                                        type="description" placeholder="City" className='placeholder:text-gray-600 px-5 py-2  outline-none border border-gray-800 w-64'
                                        onChange={(event) => { setCity(event.target.value) }}
                                    />
                                </div>
                                <input
                                    style={{
                                        fontFamily: 'Medium'
                                    }}
                                    type="description" placeholder="Skills" className='placeholder:text-gray-600 px-5 py-2  outline-none border border-gray-800 w-[600px]'
                                    onChange={(event) => { setSkills(event.target.value) }}
                                />
                                <div className='flex justify-between items-center w-full '>

                                <input
                                    style={{
                                        fontFamily: 'Medium'
                                    }}
                                    type="password" placeholder="Password" className='placeholder:text-gray-600 px-5 py-2  outline-none border border-gray-800 w-64'
                                    onChange={(event) => { setPasswordRef(event.target.value) }}
                                />
                                    <input
                                    style={{
                                        fontFamily: 'Medium'
                                    }}
                                    type="password" placeholder="Confirm Password" className='placeholder:text-gray-600 px-5 py-2  outline-none border border-gray-800 w-64'
                                    onChange={(event) => { setConfirmPasswordRef(event.target.value) }}
                                />
                                </div>

                                <div className='flex justify-between items-center w-full '>
                                    <input
                                        style={{
                                            fontFamily: 'Medium'
                                        }}
                                        type="description" placeholder="Education" className='placeholder:text-gray-600 px-5 py-2  outline-none border border-gray-800 w-64 '
                                        onChange={(event) => { setEducation(event.target.value) }}
                                    />
                                    <input
                                        style={{
                                            fontFamily: 'Medium'
                                        }}
                                        type="description" placeholder="Work Experience" className='placeholder:text-gray-600 px-5 py-2  outline-none border border-gray-800 w-64'
                                        onChange={(event) => { setWorkExperience(event.target.value) }}
                                    />
                                </div>
                                <div className='flex justify-center items-center w-72 bg-black text-white py-2'>
                                    <button type='submit'>Sign Up</button>
                                    {/* <NavLink to="/genre">Sign Up</NavLink> */}
                                </div>


                                <div className='flex justify-center items-center space-x-24'>
                                    <button onClick={() => {
                                        setFirst(true)
                                        setSecond(false)
                                        setThird(false)
                                    }} class=" mt-10 hover:transition hover:duration-150 hover:ease-in-out hover:scale-105 px-12 py-4 rounded-lg bg-blue-800 text-gray-200">Previous</button>
                                    <button onClick={() => {
                                        setFirst(false)
                                        setSecond(false)
                                        setThird(true)
                                    }} class=" mt-10 hover:transition hover:duration-150 hover:ease-in-out hover:scale-105 px-12 py-4 rounded-lg bg-blue-800 text-gray-200">Next</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }

        </>

    )
}

export default Signup