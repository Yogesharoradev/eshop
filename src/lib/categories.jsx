import React from 'react';
import { FaTshirt, FaLaptop, FaShoePrints, FaShoppingBasket, FaStar, FaSpa, FaGem } from 'react-icons/fa';

const categories = [
  { name: 'Fashion', icon: <FaTshirt size={40} />, color: 'bg-blue-200' },
  { name: 'Electronics', icon: <FaLaptop size={40} />, color: 'bg-green-200' },
  { name: 'Footwear', icon: <FaShoePrints size={40} />, color: 'bg-red-200' },
  { name: 'Groceries', icon: <FaShoppingBasket size={40} />, color: 'bg-yellow-200' },
  { name: 'Beauty', icon: <FaStar size={40} />, color: 'bg-pink-200' },
  { name: 'Wellness', icon: <FaSpa size={40} />, color: 'bg-purple-200' },
  { name: 'Jewelry', icon: <FaGem size={40} />, color: 'bg-teal-200' },

];

const Categories = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-evenly items-center p-4">
      {categories.map((category, index) => (
        <div
          key={index}
          className={`flex flex-col items-center justify-center w-32 h-32 rounded-full ${category.color} p-4`}
        >
          <div className="flex items-center justify-center w-full h-full text-center">
            {category.icon}
          </div>
          <span className="mt-2 text-lg font-semibold">{category.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Categories;
