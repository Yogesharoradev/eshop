import React from 'react';
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  const footerSections = [
    {
      title: 'FRUIT & VEGETABLES',
      items: [
        'Fresh Vegetables',
        'Herbs & Seasonings',
        'Fresh Fruits',
        'Cuts & Sprouts',
        'Exotic Fruits & Veggies',
        'Packaged Produce',
        'Party Trays',
      ],
    },
    {
      title: 'BREAKFAST & DAIRY',
      items: [
        'Fresh Vegetables',
        'Herbs & Seasonings',
        'Fresh Fruits',
        'Cuts & Sprouts',
        'Exotic Fruits & Veggies',
        'Packaged Produce',
        'Party Trays',
      ],
    },
    {
      title: 'MEAT & SEAFOOD',
      items: [
        'Fresh Vegetables',
        'Herbs & Seasonings',
        'Fresh Fruits',
        'Cuts & Sprouts',
        'Exotic Fruits & Veggies',
        'Packaged Produce',
        'Party Trays',
      ],
    },
    {
      title: 'BEVERAGES',
      items: [
        'Fresh Vegetables',
        'Herbs & Seasonings',
        'Fresh Fruits',
        'Cuts & Sprouts',
        'Exotic Fruits & Veggies',
        'Packaged Produce',
        'Party Trays',
      ],
    },
    {
      title: 'BREADS & BAKERY',
      items: [
        'Fresh Vegetables',
        'Herbs & Seasonings',
        'Fresh Fruits',
        'Cuts & Sprouts',
        'Exotic Fruits & Veggies',
        'Packaged Produce',
        'Party Trays',
      ],
    },
  ];

  return (
    <div className=" p-5 ">
        <div className='flex justify-evenly items-center p-6 gap-5 '>

            <h1 className=' font-semibold border border-t-0 p-5 text-start'>Everyday fresh products  </h1>
            <h1 className=' font-semibold  border border-t-0  p-5'>Free delivery for order over $70  </h1>
            <h1 className=' font-semibold  border border-t-0  p-5'>Daily Mega Discounts</h1>
            <h1 className=' font-semibold  border border-t-0  p-5'>Best price on the market</h1>

        </div>
       
        <hr/>
        <div className='p-2'>
            <div className="grid grid-cols-5 gap-3">
                {footerSections.map((section, index) => (
                    <div key={index} className="flex flex-col gap-4">
                    <h2 className="font-semibold text-lg text-purple-500">{section.title}</h2>
                    <ul className="text-gray-600">
                    {section.items.map((item, idx) => (
                        <li key={idx } className='gap-4'>{item}</li>
                        ))}
                    </ul>
                </div>
                ))}

            </div>

            <div className=" flex justify-evenly items-center  mt-8 text-gray-500">
                <p>Copyright 2024. All rights reserved</p>
                <div className="flex gap-5">
                    <FaInstagram size={30} color="orange" />
                    <FaTwitter size={30} color="blue" />
                    <FaFacebook size={30} color="lightblue" />
                </div>
            </div>
        </div>
    </div>
  );
};

export default Footer;
