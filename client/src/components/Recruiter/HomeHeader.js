import React, { useState } from 'react'

function HomeHeader() {
    const [Shortlisted, setShortlisted] = useState(false)
    const [InterviewRound, setInterviewRound] = useState(false)
    const [Offer, setOffer] = useState(false)
    const [Hired, setHired] = useState(false)

    return (
        <div            style={{
            fontFamily: 'Medium',

        }}>

            <div className='flex justify-start items-center space-x-12 p-4 border border-gray-600'>

                <div onClick={() => {
                    setShortlisted(true)
                    setOffer(false)
                    setInterviewRound(false)
                    setHired(false)

                }} className={`hover:cursor-pointer ${Shortlisted && 'text-green-600 border-b-2 border-green-600 transition hover:duration-150 hover:scale-105 hover:ease-in-out'}`}>
                    <h1>Shortlisted</h1>
                </div>
                <div onClick={() => {
                    setShortlisted(false)
                    setOffer(false)
                    setInterviewRound(true)
                    setHired(false)
                    
                }} className={`hover:cursor-pointer ${InterviewRound && 'text-green-600 border-b-2 border-green-600 transition hover:duration-150 hover:scale-105 hover:ease-in-out'}`}>
                    <h1>Interview Round</h1>
                </div>
                <div onClick={() => {
                    setShortlisted(false)
                    setOffer(true)
                    setInterviewRound(false)
                    setHired(false)
                    
                }} className={`hover:cursor-pointer ${Offer && 'text-green-600 border-b-2 border-green-600 transition hover:duration-150 hover:scale-105 hover:ease-in-out'}`}>
                    <h1>Offer</h1>
                </div>
                <div onClick={() => {

                    setShortlisted(false)
                    setOffer(false)
                    setInterviewRound(false)
                    setHired(true)
                    
                }} className={`hover:cursor-pointer ${Hired && 'text-green-600 border-b-2 border-green-600 transition hover:duration-150 hover:scale-105 hover:ease-in-out'}`}>
                    <h1>Hired</h1>
                </div>

            </div>

        </div>
    )
}

export default HomeHeader