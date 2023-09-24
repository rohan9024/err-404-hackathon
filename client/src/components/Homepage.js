import React from 'react'
import Header from './Header'
import Main from "./Main"

function Homepage() {
  return (
    <div>
       <div className='flex-1 bg-[#F5F7FB] p-6 '>
            <Header />
            <Main />
        </div>
  </div>
  )
}

export default Homepage