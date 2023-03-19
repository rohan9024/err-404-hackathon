import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../../firebase'

function Candidate() {

    const [candidates, setCandidates] = useState([])
    useEffect(() => {
        const getCandidates = async () => {
            const candidateCollectionRef = collection(db, 'users')
            const data = await getDocs(candidateCollectionRef);
            setCandidates(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            console.log(candidates)
                let res = localStorage.getItem("user");
                console.log(res)
        }
        getCandidates();
    }, [])
    
  return (
    <div className='flex justify-center items-center '>
        {/* <img src={} alt="" /> */}
        <h1>This is candidate</h1>

        
    </div>
  )
}

export default Candidate