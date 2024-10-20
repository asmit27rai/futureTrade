import React from 'react';

const Header = () => {
  return (
    <nav className="bg-gray-800 h-24 w-full flex items-center justify-center px-8 shadow-lg rounded-lg mb-8">
      <div className="flex space-x-12 text-center">
        <div className="text-white">
          <h1 className="text-md font-semibold uppercase tracking-widest">Mark Price</h1>
          <span className="text-2xl font-extrabold text-green-500">$2745.21</span>
        </div>
        <div className="text-white">
          <h1 className="text-md font-semibold uppercase tracking-widest">Index Price</h1>
          <span className="text-2xl font-extrabold text-blue-500">$2745.21</span>
        </div>
        <div className="text-white">
          <h1 className="text-md font-semibold uppercase tracking-widest">24h Changes</h1>
          <span className="text-2xl font-extrabold text-red-500">-2.45%</span>
        </div>
        <div className="text-white">
          <h1 className="text-md font-semibold uppercase tracking-widest">24h Volume</h1>
          <span className="text-2xl font-extrabold text-yellow-500">$500M</span>
        </div>
      </div>
    </nav>
  );
};

export default Header;