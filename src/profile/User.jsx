import React from 'react'
import mypic from '../assets/mypic.jpg'
import no from '../assets/no.jpg'

const User = () => {
  return (
    <div className='flex gap-3 items-center bg-white p-4 rounded-full dark:bg-gray-600 dark:text-gray-300'>
        <img src={mypic} alt="user image" className='w-14 h-14 rounded-full'/>
        <div className='font-semibold text-2xl'>
            <h3>Somphors</h3>
            <p>Developer</p>
        </div>
    </div>
  )
}

export default User