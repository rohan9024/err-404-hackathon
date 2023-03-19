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
import { db } from "../firebase"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addDoc, collection } from 'firebase/firestore';
import DropDown from "./Dropdown"

function Signup() {

    const navigate = useNavigate();
    // const [Pref, setPref] = useState({
    //     "First": true,
    //     "Second": false,
    //     "Third": false
    // });

    const [choice, setChoice] = useState({ recruiter: false, candidate: false, })

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
    const [workExperience, setWorkExperience] = useState(0)

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
        data.append('name', name);
        data.append('workExperience', workExperience);
        data.append('education', education);
        data.append('contact', contact);
        data.append('skills', skills);
        data.append('city', city);

        const result = await fetch('http://127.0.0.1:8001/app/upload_file/', {
            method: 'POST',
            body: data,
            mode: 'cors',
        });

        const jsonResult = await result.json();

        console.log(';jsonResult', jsonResult);
        console.log(parsedResumeData);
        setParsedResumeData(jsonResult);
        setName(parsedResumeData.name)
        setContact(parsedResumeData.phone)
        setEmail(parsedResumeData.email)
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


    const uploadData = async () => {
        // Access the Firestore database
        const Skills = skills.split(",");
        if (!/^\d{10}$/.test(contact)) {
            toast.error("Contact number not valid");
        } if (!name) {
            toast.error("Please Enter Complete data");
        }
        else if (!contact) {
            toast.error("Please Enter Complete data");
        }
        else if (!workExperience) {
            toast.error("Please Enter Complete data");
        }
        else if (!passwordRef) {
            toast.error("Please Enter Complete data");
        }
        else if (!confirmPasswordRef) {
            toast.error("Please Enter Complete data");
        }
        else if (!education) {
            toast.error("Please Enter Complete data");
        }
        else {


            // Get a reference to the "myCollection" collection
            // const myCollectionRef = db.collection('myCollection');

            // // Create a new document with some data
            // await myCollectionRef.add({

            // });

            const docRef = await addDoc(collection(db, "users"), {
                name: name,
                email: email,
                workExperience: workExperience,
                education: education,
                contact: contact,
                skills: Skills,
                city: city
            });
            toast.success("Signed up successfully");

            localStorage.getItem("userId", docRef.id);
            navigate('/CandidateLogin')

        }
    }





    return (
        <>
            <ToastContainer />
            {
                first && (
                    <div
                        style={{
                            fontFamily: 'Medium',

                        }}
                        className='flex justify-center items-center w-screen h-screen space-y-8'

                    >
                        <div className='w-3/4 h-screen p-2'>
                            <img src={sideimage} alt="sideimage" className='h-full w-full object-contain' />
                        </div>
                        <div className='w-3/4 flex flex-col justify-center items-center'>
                            <h1 className='text-center text-4xl mb-10'>Get your dream job in 3 steps!</h1>

                            <div className='flex flex-col justify-center items-center '>
                                <div className='flex justify-center items-center space-x-12 mt-12'>

                                    <div onClick={() => {
                                        setChoice({
                                            recruiter: false,
                                            candidate: true
                                        })
                                    }} className={`flex justify-around items-center border-2 px-3 py-3 rounded-lg cursor-pointer hover:shadow-md shadow-sm  ${choice.candidate ? 'border-blue-300 bg-blue-200' : 'border-gray-300 bg-gray-200 '}`}>
                                        <h1 className='font-bold text-xl'>Candidate</h1>
                                    </div>
                                    <div onClick={() => {
                                        setChoice({
                                            recruiter: true,
                                            candidate: false
                                        })
                                    }} className={`flex justify-around items-center border-2 px-3 py-3 rounded-lg cursor-pointer hover:shadow-md shadow-sm  ${choice.recruiter ? 'border-blue-300 bg-blue-200' : 'border-gray-300 bg-gray-200 '}`}>
                                        <h1 className='font-bold text-xl'>Recruiter</h1>
                                    </div>
                                </div>

                                {
                                    choice.recruiter && (
                                        <button onClick={() => {
                                        }} class=" mt-10 hover:transition hover:duration-150 hover:ease-in-out hover:scale-105 px-12 py-2 rounded-lg bg-blue-800 text-gray-200" >
                                            <NavLink to="/RecruiterSignup">Recruiter Signup</NavLink>
                                        </button>

                                    )
                                }
                                {/* {
                                    choice.candidate && (
                                        <button onClick={() => {
                                            setFirst(false)
                                            setSecond(true)
                                            setThird(false)
                                        }} class="mt-10 hover:transition hover:duration-150 hover:ease-in-out hover:scale-105 px-12 py-2 rounded-lg bg-blue-800 text-gray-200" >
                                            Next
                                        </button>

                                    )
                                } */}

                                <button onClick={() => {
                                    if (choice.candidate) {
                                        setFirst(false)
                                        setSecond(true)
                                        setThird(false)
                                    }
                                    else {
                                        toast.error("Please select choice")
                                    }
                                }} class=" mt-10 hover:transition hover:duration-150 hover:ease-in-out hover:scale-105 px-12 py-2 rounded-lg bg-blue-800 text-gray-200" >Next</button>

                            </div>

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
                )
            }

            {
                third && (
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
                            <h1 className='text-center text-4xl mb-10'>Just one step left!</h1>
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
                                        type="number" placeholder="Work Experience(in yrs)" className='placeholder:text-gray-600 px-5 py-2  outline-none border border-gray-800 w-64'
                                        onChange={(event) => { setWorkExperience(event.target.value) }}
                                    />
                                </div>
                                <div className='flex justify-center items-center w-72 bg-black text-white py-3' onClick={(e) => { uploadData(); handleSubmit(e) }}>
                                    <button type='submit'>Sign Up</button>
                                    {/* <NavLink to="/genre">Sign Up</NavLink> */}
                                </div>


                                <div className='flex justify-center items-center space-x-24'>
                                    <button onClick={(e) => {
                                        setFirst(false)
                                        setSecond(true)
                                        setThird(false)
                                    }} class="mt-10 hover:transition hover:duration-150 hover:ease-in-out hover:scale-105 px-12 py-4 rounded-lg bg-blue-800 text-gray-200">Previous</button>

                                    <button class=" mt-10 hover:transition hover:duration-150 hover:ease-in-out hover:scale-105 px-12 py-4 rounded-lg bg-blue-800 text-gray-200"><NavLink to="/candidate">Proceed</NavLink></button>
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