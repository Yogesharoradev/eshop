import React from 'react'

const Blogs = () => {

    const Data = [
        {
            id:1,
            img:'./images/blog-1.jpg',
            time:'Jan 20, 2024 by Dilshad',
            title: 'How to choose perfect smartwatch',
            desc : 'minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae'
        },
        {
            id:2,
            img:"./images/blog-2.jpg",
            time:'Jan 20, 2024 by Satya',
            title: 'How to choose perfect gadget',
            desc : 'minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae'
        },
        {
            id:3,
            img:'./images/blog-3.jpg',
            time:'Jan 20, 2024 by Sabir',
            title: 'How to choose perfect VR headset',
            desc : 'minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae'
        },
]

  return (
    
       <div className='bg-gray-950 min-h-[400px] text-white'>
        <div className='flex flex-col justify-center items-center '>
          <h1 className='text-4xl'>Recent News</h1>
          <h2 className='text-gray-500'>Explore Our Blogs</h2>
          <div className='grid grid-cols-3 p-5 gap-6'>
                {
                    Data.map((item,index)=>(
                        <div key={index} className='flex flex-col justify-center items-start gap-3 p-6'> 
                        <div>
                            <img src={item.img} alt="pics" className='max-w-[370px] mx-auto rounded-lg'/>
                        </div>
                            <span className='text-sm text-gray-500'>{item.time}</span>
                            <h1 className='text-2xl font-bold'>{item.title}</h1>
                            <p className='text-sm text-gray-500'>{item.desc}</p>
                        </div>
                    ))
                }
          </div>
        </div>
    </div>
    
  )
}

export default Blogs
