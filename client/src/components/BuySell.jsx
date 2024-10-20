import React, { useState } from 'react';

const BuySell = () => {
  const [leverage, setLeverage] = useState(1); 
  const [size, setSize] = useState(0);        

  const handleBuy = () => {
    console.log(`Buying futures with leverage: ${leverage}, size: ${size}`);
  };

  const handleSell = () => {
    console.log(`Selling futures with leverage: ${leverage}, size: ${size}`);
  };

  return (
    <div className="w-full h-full bg-gray-800 p-6 flex flex-col text-white rounded-lg shadow-lg space-y-6">
      <h2 className="text-2xl font-bold mb-4">Buy/Sell Futures</h2>

      <div className="mb-6">
        <label className="block text-sm font-medium mb-2" htmlFor="leverage">
          Leverage: <span className="font-bold">{leverage}x</span>
        </label>
        <input
          type="range"
          id="leverage"
          value={leverage}
          onChange={(e) => setLeverage(e.target.value)}
          min="1"
          max="100"
          className="w-full h-2 bg-blue-500 rounded-lg cursor-pointer transition-all"
        />
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium mb-2" htmlFor="size">
          Size: <span className="font-bold">{size}</span> units
        </label>
        <input
          type="range"
          id="size"
          value={size}
          onChange={(e) => setSize(e.target.value)}
          min="0"
          max="1000"
          step="1"
          className="w-full h-2 bg-green-500 rounded-lg cursor-pointer transition-all"
        />
      </div>

      <div className="flex space-x-4">
        <button
          onClick={handleBuy}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-lg transition-transform transform hover:scale-105"
        >
          Buy
        </button>
        <button
          onClick={handleSell}
          className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-4 rounded-lg transition-transform transform hover:scale-105"
        >
          Sell
        </button>
      </div>
    </div>
  );
};

export default BuySell;