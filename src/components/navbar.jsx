import React, { useState } from 'react';
import { FiMenu, FiSearch } from 'react-icons/fi';
import { Badge, Button, Dropdown, Menu } from 'antd';
import { ShoppingCartOutlined, UserOutlined, LogoutOutlined, OrderedListOutlined, UserSwitchOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import LocationSelector from '../lib/location';

const Navbar = () => {

  const [user , setUser] = useState(false)

  const categories = [
    { id: 1, name: 'Electronics', icon: '📱', subCategories: ['Mobiles', 'TVs', 'Laptops'] },
    { id: 2, name: 'Clothing', icon: '👗', subCategories: ['Men', 'Women', 'Kids'] },
    { id: 3, name: 'Books', icon: '📚', subCategories: ['Fiction', 'Non-Fiction', 'Comics'] },
    { id: 4, name: 'Home & Living', icon: '🏠', subCategories: ['Furniture', 'Decor', 'Kitchen'] },
    { id: 5, name: 'Sports', icon: '🏀', subCategories: ['Basketball', 'Football', 'Tennis'] },
    { id: 6, name: 'Toys', icon: '🧸', subCategories: ['Action Figures', 'Board Games', 'Dolls'] },
  ];

  const accountMenu = (
    <Menu
      items={[
        { label: 'My Account', key: '1', icon: <UserSwitchOutlined /> },
        { label: 'Orders', key: '2', icon: <OrderedListOutlined /> },
        { label: 'My List', key: '3', icon: <UserOutlined /> },
        { label: 'Logout', key: '4', danger: true, icon: <LogoutOutlined /> },
      ]}
    />
  );

  const getCategoryMenu = (subCategories) => (
    <Menu
      items={subCategories.map((subCat, index) => ({
        label: subCat,
        key: index,
      }))}
    />
  );

  return (
    <>
      {/* Announcement Bar */}
      <div className='bg-purple-800 text-white flex justify-center items-center w-full'>
        <h1 className='text-center text-sm md:text-base'>Due to the COVID-19 epidemic, orders may be processed with a slight delay</h1>
      </div>

      {/* Main Navbar */}
      <div className='flex flex-wrap md:flex-nowrap items-center min-h-[150px] bg-white gap-6 justify-evenly'>
        {/* Logo and App Name */}
        <div className="flex items-center gap-3 md:gap-6">
          <img
            src='/images/png-clipart-green-shopping-bag-illustration-shopify-logo-icons-logos-emojis-tech-companies-thumbnail.png'
            alt="logo"
            className='h-12 w-12 md:h-14 md:w-14'
          />
          <button className="text-black text-2xl md:text-4xl font-bold">Shopify</button>
        </div>

        {/* loction box */}
        <LocationSelector />

        {/* Search Box */}
        <div className="w-full md:w-[500px] relative mt-4 md:mt-0">
          <input
            type="text"
            placeholder="Search your product here ..."
            className="w-full h-12 px-4 py-2 text-lg border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-12"
          />
          <div className="absolute top-0 right-0 h-full flex items-center pr-4 text-gray-400">
            <FiSearch size={24} />
          </div>
        </div>

        {/* Cart and Account Buttons */}
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <Badge count={1}>
          <Button
            type="primary"
            icon={<ShoppingCartOutlined className='text-black' />}
            size="large"
            className='rounded-full bg-purple-300'
            />
            </Badge>
          { 
              user && 
              <>
              <span className='font-semibold'>$0.00</span>

              <Dropdown menu={accountMenu} trigger={['click']} placement="bottomRight">
                <Button
                  type="primary"
                  icon={<UserOutlined className='text-black' />}
                  size="large"
                  className='rounded-full bg-green-200'
                  />
              </Dropdown>
               </>
          }
          {
            !user && 
             <Button
            type="primary"
            size="large"
            className='rounded-full bg-purple-800 text-white font-bold'
            >  
           <Link to={"/signin"}>Sign In</Link> 
            </Button>
          }
        
        </div>
      </div>

      {/* Second Row with Categories */}
      <div className="flex flex-wrap justify-evenly items-center gap-6 p-2">
        {/* All Categories Button */}
        <Button
          type="primary"
          shape="round"
          icon={<FiMenu />}
          size="large"
          className='bg-purple-500 text-white'
        >
          All Categories
        </Button>

        {/* Category Buttons with Dropdown */}
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <Dropdown
              key={category.id}
              menu={getCategoryMenu(category.subCategories)}
              trigger={['click']}
            >
              <Button
                type="default"
                shape="round"
                size="large"
                className="flex items-center gap-2"
              >
                {category.icon} {category.name}
              </Button>
            </Dropdown>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
