import React, { useState } from 'react';
import { FaCaretDown, FaSearch, FaShoppingCart} from "react-icons/fa";
import Hero from '../hero/hero';


const Navbar = () => {

  const [cartOpen , setCartOpen] = useState(false)

  const MenuItems = [
    {
      id:1,
      name: 'Home',
      link : '/#'
    },
    {
      id:2,
      name: 'Shop',
      link : '/#shop'
    },
    {
      id:1,
      name: 'About',
      link : '/#about'
    },
    {
      id:1,
      name: 'Blogs',
      link : '/#blogs'
    },
];

  const opencart =()=>{
    setCartOpen(true)
  }

  return (
    <div className=' flex items-center bg-gray-950 min-h-[70px] gap-9 justify-between '>
      <div className='flex items-center  gap-9'>
      <div>
        <button className="text-red-600 text-4xl font-bold ml-9">ESHOP</button>
        </div>
        <div className='text-gray-400 flex gap-9 '>
           
             <ul className='flex ml-[350px] gap-9'>
              {
             MenuItems.map((data,index)=>(
  
                  <li key={index}>
                    <a href={data.link} className='hover:text-white'> {data.name} </a>
                  </li>

              ))
             }
              <li className='relative cursor-pointer group flex items-center hover:text-white'>
               <a href='#' className=''> Quick Links </a>
               <span><FaCaretDown className='group-hover:rotate-180 duration-300 size-2em'/></span>
                <div className='absolute z-[9999] mt-[150px] ml-9 hidden group-hover:block w-[200px] rounded-md bg-white p-1'>
                <ul className='space-y-2'>
                  <li className='flex flex-col gap-2 font-semibold'>
                    <a href='#' className='text-black  p-1 hover:bg-slate-300' >Trending Products</a>
                   <a href='#'  className='text-black p-1  hover:bg-slate-300'>Best Selling</a>
                    <a href='#'  className='text-black p-1  hover:bg-slate-300'>Top Rated</a>
                  </li>
                </ul>
                </div>
                </li>
              </ul>
             
             </div>
             </div>
       
       
        <div className='flex gap-7 items-center mr-9'>
          <div className='flex justify-end items-center group'>
            <input type='text' placeholder='Search' className='search-bar relative'></input>
            <FaSearch className="text-l text-gray-600 absolute hover:text-red-600 size-4 mr-1" />
            </div>
            
            <button className='text-white' onClick={opencart}>
            <FaShoppingCart  size='1.5em'/>
            {
              cartOpen && (
                
                <div className='flex justify-center items-center'>
                     <Hero/>
                </div>
              )
            }
             </button>
        </div>
      </div>
    
  )
}

export default Navbar
