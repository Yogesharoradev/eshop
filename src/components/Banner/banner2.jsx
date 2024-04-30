import React from 'react'

const Banner2 = () => {
  return (
    <div className='min-h-[300px] bg-gray-950 text-white flex justify-evenly items-center p-16 '>
    <div className='grid grid-cols-3 gap-8 bg-green-600 p-98 rounded-xl'>
      <div className='flex justify-center items-start flex-col gap-3 p-4'>
          <h1 className='animate__animated animate__fadeInLeft'>30% off</h1>
         <div>
          <h1 className='text-9xl font-semibold'> Happy Hours</h1>
          <h2>14Jan to 28Jan</h2>
          </div>
      </div>
      <div>
          <img src='\images\smartwatch2-removebg-preview.png'  alt='watch' className='max-w-[400px] mx-auto animate__animated animate__zoomIn'/>
      </div>
      <div className='flex flex-col items-start justify-center gap-4'>
          <h1 className='text-xl font-bold'>Smart Solo</h1>
          <h1 className='text-6xl font-bold'>Winter Sale</h1>
          <p className='text-gray-300'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis</p>
          <button className='p-3 text-red-500 bg-white rounded-full font-bold'> Shop Now</button>
      </div>

    </div>
  </div>
  )
}

export default Banner2
