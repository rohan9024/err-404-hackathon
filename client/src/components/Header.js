import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../assets/logo.jpg"

function Header() {

    return (
        <div className='flex justify-between ml-10 mr-10 mt-6 text-[#37364d]'>
            <div className='flex justify-between space-x-6'>
                <img className='w-12 border-gray-400 border-2 rounded-full' src={logo} alt="logo" />
                <h1 className='text-bold text-2xl mt-2 transition duration-300 ease-in-out '></h1>
            </div>
            <div className=' border-gray-700 border-2 px-7 py-2 flex justify-center items-center hover:cursor-pointer hover:bg-gray-800 rounded-lg hover:text-white hover:ease-in-out hover:duration-300 hover:scale-105'>
            <h1 className='text-bold text-xl '><NavLink to="/login">Login</NavLink></h1>
            </div>
        </div>
    )
}

export default Header