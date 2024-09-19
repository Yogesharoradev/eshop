import React from 'react';
import AppLayout from './applayout';
import Categories from '../lib/categories';

const HomePage = () => {
  return (
    <AppLayout>
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Featured Categories</h2>
        <Categories />
      </div>
    </AppLayout>
  );
};

export default HomePage;
