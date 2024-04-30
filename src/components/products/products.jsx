import React from 'react'


const Products = () => {

  
  const productsData = [
    {
      "id": 1,
      "name": "Laptop",
      "brand": "Brand A",
      "price": 999,
      "description": "A powerful laptop with high performance.",
      "image": "/images/p-1.jpg"
    },
    {
      "id": 2,
      "name": "Smartphone",
      "brand": "Brand B",
      "price": 599,
      "description": "A sleek smartphone with advanced features.",
      "image":  "/images/p-2.jpg"
    },
    {
      "id": 3,
      "name": "Tablet",
      "brand": "Brand C",
      "price": 399,
      "description": "A versatile tablet for work and entertainment.",
      "image" :  "/images/p-3.jpg"
    },
    {
      "id": 4,
      "name": "Headphones",
      "brand": "Brand D",
      "price": 149,
      "description": "High-quality headphones for immersive audio experience.",
      "image":  "/images/p-4.jpg"
    },
    {
      "id": 5,
      "name": "Smartwatch",
      "brand": "Brand E",
      "price": 4999,
      "description": "A stylish smartwatch with health and fitness tracking.",
      "image":  "/images/p-2.jpg"
    },
    {
      "id": 6,
      "name": "Camera",
      "brand": "Brand F",
      "price": 799,
      "description": "Professional-grade camera for stunning photography.",
      "image":  "/images/p-5.jpg"
    },
    {
      "id": 7,
      "name": "Wireless Speaker",
      "brand": "Brand G",
      "price": 129,
      "description": "Portable wireless speaker for music on the go.",
      "image":  "/images/p-7.jpg"
    },
    {
      "id": 8,
      "name": "Gaming Console",
      "brand": "Brand H",
      "price": 499,
      "description": "High-performance gaming console for immersive gaming experience.",
      "image":  "/images/p-9.jpg"
    }
  ]
  
  return (
    <div className='bg-gray-950 min-h-[400px] text-white'>
        <div className='flex flex-col justify-center items-center '>
          <h1 className='text-4xl'>Our Products</h1>
          <h2 className='text-gray-500'>Explore Our Products</h2>
          <div className='grid grid-cols-4 p-9 gap-20 relative'>
            {
              productsData.map((item,index)=>(
                <div key={index} className='w-[200px] mx-auto flex flex-col gap-4 group rounded border border-l-slate-500'>
                  <img src={item.image} alt='pics'/>
                  <div className=' hidden group-hover:flex justify-center items-center absolute mt-16 ml-12'>
                    <button
                    className='bg-red-600 text-white rounded-full p-2'
                    >Add to Cart</button>
                  </div>
                 <div className='flex flex-col justify-center items-center'> 
                  <h1 className='font-semibold text-lg' >{item.brand}</h1>
                  <span className='text-slate-300'> 💲{item.price}</span>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
    </div>
  )
}

export default Products
