import React, { useContext } from 'react'
import model from "../assets/model.gif"
import { motion } from "framer-motion"


function Main() {

    return (
        <div
        style={{
            fontFamily: 'Medium'
        }}
        className='text-[#37364d] flex mt-20 justify-center w-full tracking-wide	'>
            <motion.div
                className='ml-20 mt-64 mr-20 transition duration-300 ease-in-out scale-105'>
                <motion.h1
                    animate={{
                        x: [-100, 0],
                        opacity: [0, 1]
                    }}
                    className='text-extrabold text-5xl text-center'>IntelliHire</motion.h1>
                <motion.h1
             animate={{ x: 0, y: [100,0], opacity: [0,1] }}
                    className=' text-2xl  mt-12'>Hire Smart. Scale Fast</motion.h1>
                <motion.h1 animate={{ x: 0, y: [100,0], opacity: [0,1] }}
                
                    className=' text-2xl  '>Instagram verified.</motion.h1>
            </motion.div>
            <motion.div initial="hidden"
                animate="visible"
                variants={{
                    visible: { opacity: 1 },
                    hidden: { opacity: 0 },
                }}
                className=' flex w-1/2 justify-center items-center ml-20 transition duration-300 ease-in-out scale-95' >
                <img src={model} alt="model" className='w-[700px] h-[600px] object-contain' />
            </motion.div>

        </div>
    )
}

export default Main