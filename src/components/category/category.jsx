import React from 'react'

const Category = () => {

  return (
    <div className='flex items-center bg-gray-950 min-h-[500px]  text-white'>
            <div className='grid grid-cols-4 gap-16 p-8'>
               
                <div className='bg-gradient-to-br from-black/90 to-black/70 h-[350px]  w-[320px]
                py-10 pl-5 flex items-end rounded-3xl ' >
                 <div className='mb-4 flex gap-3 flex-col absolute'>
                    <h1 className='text-gray-300'>Enjoy</h1>
                    <h1 className='font-semi-bold text-4xl'>with</h1>
                    <h1 className='font-semibold text-6xl opacity-15 '> Earphones </h1>
                    <div>
                        <button className='p-3 bg-rose-600 rounded-lg font-semibold hover:bg-rose-400'>Browse</button>
                    </div>
                    </div>

                          <div className='ml-18'>
                        <img src='./images/earphone.png' alt='earpohnes' className='max-w-[250px] mx-auto relative'/>
                         </div>
                </div>

     <div>
                 <div className='bg-yellow-400 h-[350px]  w-[320px]
                                 py-10 pl-5 flex items-end rounded-3xl ' >
                   <div className='mb-4 flex gap-3 flex-col absolute'>
                          <h1 className='text-gray-300'>Enjoy</h1>
                         <h1 className='font-semi-bold text-4xl'>with</h1>
                            <h1 className='font-bold text-6xl opacity-20 '> Gadget </h1>
                    <div>
                        <button className='p-3 bg-white text-rose-800 rounded-lg font-semibold hover:opacity-5'>Browse</button>
                    </div>
                    </div>

                          <div className='ml-20 mb-24'>
                        <img src='./images/watch.png' alt='earpohnes' className='max-w-[250px] mx-auto relative'/>
                         </div>
                </div>
    </div>

    <div className='col-span-2'>
         <div className='bg-red-600 h-[350px] 
                 py-10 pl-5 flex items-end rounded-3xl ' >
                 <div className='mb-4 flex gap-3 flex-col absolute'>
                    <h1 className='text-gray-300'>Enjoy</h1>
                    <h1 className='font-semi-bold text-4xl'>with</h1>
                    <h1 className='font-bold text-6xl opacity-20 '> Laptops </h1>
                    <div>
                        <button className='p-3 bg-white text-rose-800 rounded-lg font-semibold hover:opacity-5'>Browse</button>
                    </div>
                    </div>

                          <div className= 'ml-80'>
                        <img src='./images/macbook.png' alt='earpohnes' className='max-w-[250px] mx-auto'/>
                         </div>
                </div>
    </div>


            </div>
    </div>
  )
}

export default Category;
