import React from 'react'
import { FaCar, FaCheck, FaSpeakap, FaWallet } from 'react-icons/fa';
const Trust = () => {

    const data =[
        {
            id:1,
            icon: <FaCar size='3rem'/>,
            title: "Free Shipping",
            desc: "Free Shipping On All Order"
        },
        {
            id:2,
            icon: <FaCheck size='3rem'/>,
            title: "Safe Money",
            desc: "30 Days Money Back"
        },
        {
            id:2,
            icon: <FaWallet size='3rem'/>,
            title: "Secure Payment",
            desc: "All Payment Secure"
        },
        {
            id:2,
            icon: <FaSpeakap size='3rem'/>,
            title: "Online Supoort 24/7",
            desc: "Technical Support 24/7"
        },
    ] 
  return (
    <div className='min-h-[200px] bg-gray-950 text-white'>
      <div className='flex justify-evenly'>
        {
            data.map((item)=>(
                <div key={item.id} className='flex gap-6 items-center'>
                    <span className='text-red-600'>{item.icon}</span>
                    <div>
                        <h1 className='font-semibold text-xl'>{item.title}</h1>
                        <p className='text-s text-gray-600'>{item.desc}</p>
                    </div>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default Trust
