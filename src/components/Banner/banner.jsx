import React from 'react'

const Banner = () => {
  return (
     <div className='min-h-[300px] bg-gray-950 text-white flex justify-evenly items-center p-16'>
      <div className='mb-14'>
      <div className='grid grid-cols-3 gap-8 bg-red-600  rounded-xl'>
        <div className='flex justify-center items-start flex-col gap-3 p-4'>
            <h1 className='animate__animated animate__fadeInLeft'>30% off</h1>
           <div>
            <h1 className='text-9xl font-semibold'> Fine Smile</h1>
            <h2>10Jan to 29Jan</h2>
            </div>
        </div>
        <div>
            <img src='./images/headphone.png'  alt='headpones' className='max-w-[400px] mx-auto animate__animated animate__zoomIn'/>
        </div>
        <div className='flex flex-col items-start justify-center gap-4'>
            <h1 className='text-xl font-bold'>Air Solo Bass</h1>
            <h1 className='text-6xl font-bold'>Winter Sale</h1>
            <p className='text-gray-300'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis</p>
            <button className='p-3 text-red-500 bg-white rounded-full font-bold'> Shop Now</button>
        </div>

      </div>
      </div>
    </div>
  )
}

export default Banner
