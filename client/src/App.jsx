import React from 'react';
import Navbar from "./components/Navbar";
import Graph from "./components/Graph";
import BuySell from "./components/BuySell";
import Header from './components/Header';
import History from './components/History';
import Orderbook from './components/OrderBook';

function App() {
  return (
    <div className="flex flex-col w-full bg-black text-white">
      <Navbar />
      <Header />
      <div className="flex flex-grow h-[calc(100vh-64px)] space-x-4 p-4 overflow-y-auto">
        <div className="w-3/5">
          <Graph />
        </div>
        <div className="w-1/5">
          <Orderbook />
        </div>
        <div className="w-1/5">
          <BuySell />
        </div>
      </div>
      <History />
    </div>
  );
}

export default App;