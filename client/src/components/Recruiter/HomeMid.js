import React, { useEffect, useState } from 'react'
import search from "../../assets/search.svg"
import Dropdown from "./Dropdown"
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase'
// import '../../../process.py'



function HomeMid() {

  const [isChecked, setIsChecked] = useState(false)
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
    <div style={{
      fontFamily: 'Medium',

    }} >



      <form>
        <div class="flex p-10">

          <div style={{
            fontFamily: 'Medium',
          }} class="relative w-full">
            <input type="search" id="search-dropdown" class="rounded-lg outline-none block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search" required />
            <button type="submit" class="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <svg aria-hidden="true" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              <span class="sr-only">Search</span>
            </button>
          </div>
        </div>
      </form>


      <div
        style={{
          fontFamily: 'Medium',
        }}
        className='flex justify-center items-center rounded-lg bg-gray-800 px-3 py-2 w-24 ml-[1200px] hover:transition hover:scale-105 hover:cursor-pointer hover:duration-300 hover:ease-in-out '>
        <h1>Filters</h1>
      </div>
      <div
        className={`checkbox ${isChecked ? 'checkbox--active' : ''}`}
        onClick={() => { setIsChecked(!isChecked) }}

      />
      <div className='flex justify-center items-center '>
        <h1>Email</h1>
        <input type="checkbox" className='w-3 h-3' />
      </div>
<div className='flex justify-center items-center space-x-12 max-w-2/3'>



      {/* Profiles */}
      {
        candidates.map((candidate) => (
          <div class="flex-grow max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h1 className='text-center bg-green-600 flex p-2 rounded-full absolute font-bold '>{candidate.JFS}</h1>
            <img class="rounded-t-lg" src="https://media.istockphoto.com/id/1324786380/photo/young-handsome-smiling-man-in-brown-shirt-and-glasses-feeling-confident-isolated-on-gray.jpg?b=1&s=170667a&w=0&k=20&c=7yoJXyEpncSC4wXBuuDeRgelV1lfAEqWmzCuu3JfRqg=" alt="" />
            <div class="p-5">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{candidate.name}</h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{candidate.email}</p>
              <div className='flex justify-center items-center space-x-2'>
                {candidate.skills?.map((skill) => (
                  <div className='flex-grow flex justify-center items-center rounded-lg bg-blue-900 text-blue-400 p-2 w-56 '>
                    <h1 className='text-wrap '>{skill}</h1>
                  </div>
                ))}
              </div>
              <button
                class="hover:transition hover:duration-150 hover:ease-in-out hover:scale-105 px-5 py-2 rounded-lg bg-gray-800 text-gray-200"
                onClick={() => {

                }}>Upload</button>
            </div>
          </div>
        ))

      }

</div>

    </div>
  )
}

export default HomeMid