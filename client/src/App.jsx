import React from 'react';
import Navbar from "./components/Navbar";
import Graph from "./components/Graph";
import BuySell from "./components/BuySell";
import Header from './components/Header';
import History from './components/History';

function App() {
  return (
    <div className="flex flex-col w-full bg-black text-white">
      <Navbar />
      <Header />
      <div className="flex flex-grow h-[calc(100vh-64px)] space-x-8 p-8 overflow-y-auto">
        <div className="w-2/3">
          <Graph />
        </div>
        <div className="w-1/3">
          <BuySell />
        </div>
      </div>
      <History />
    </div>
  );
}

export default App;