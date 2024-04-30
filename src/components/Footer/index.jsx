import React from 'react'
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';


const Footer = () => {
  return (
    <div className='bg-gray-950 text-white min-h-[300px]' >
        <div className='grid grid-cols-4 gap-3'>
      <div className='flex flex-col gap-5 items-start justify-center p-14'>
        <div>
        <button className="text-red-600 text-3xl font-semibold ml-9" >ESHOP</button>
        </div>
        <div className='gap-3 flex flex-col'>
        <h1>Made with 💖 by Yogesh </h1>
        <button className="bg-red-600 text-white p-1 rounded-lg" >
            <a href="#">Visit My Instagram Profile</a>
        </button>
        </div>
    </div>
    

        <div className='flex flex-col gap-5 items-start justify-center p-14'>
            <p className='text-2xl font-semibold'>Important Links</p>
            <div className='text-gray-400 flex flex-col gap-3'>
            <a href='#'> Home</a>
            <a href='#'> about</a>
            <a href='#'> shop</a>
            <a href='#'> blogs</a>
            </div>
        </div>
        <div className='flex flex-col gap-5 items-start justify-center p-14'>
            <p className='text-2xl font-semibold'>Quick Links</p>
            <div className='text-gray-400 flex flex-col gap-3'>
            <a href='#'> Home</a>
            <a href='#'> about</a>
            <a href='#'> shop</a>
            <a href='#'> blogs</a>
            </div>
        </div>
        <div className='flex flex-col gap-5 items-start justify-center p-14'>
            <h1 className='text-2xl font-semibold'>Address</h1>
            <div className='flex flex-col gap-3'>
                <span>
                📌 Noida , Uttar Pradesh
                </span>
                <span>
                📱 +91 123456789
                </span>
                <div className='flex gap-5'>
                <FaInstagram size={30} color='orange'/>
                <FaTwitter size={30} color='blue' />
                <FaFacebook size={30} color='lightblue' />
                </div>
            </div>
        </div>
        </div>  
    </div>
  )
}

export default Footer
