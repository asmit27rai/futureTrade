import React from 'react';

const dummyData = [
  { date: '2024-10-21', type: 'Buy', asset: 'BTC/USD', size: '1.5', leverage: '10x', profitLoss: '+$150' },
  { date: '2024-10-20', type: 'Sell', asset: 'ETH/USD', size: '2.0', leverage: '5x', profitLoss: '-$100' },
  { date: '2024-10-19', type: 'Buy', asset: 'SOL/USD', size: '3.0', leverage: '20x', profitLoss: '+$400' },
  { date: '2024-10-18', type: 'Sell', asset: 'XRP/USD', size: '5.0', leverage: '2x', profitLoss: '-$50' },
];

const History = () => {
  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-6xl mx-auto mt-4">
      <h2 className="text-2xl font-extrabold text-white mb-6">Trade History</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto bg-gray-800 rounded-lg">
          <thead>
            <tr className="text-left text-gray-400 uppercase text-sm border-b border-gray-700">
              <th className="p-4">Date</th>
              <th className="p-4">Type</th>
              <th className="p-4">Asset</th>
              <th className="p-4">Size</th>
              <th className="p-4">Leverage</th>
              <th className="p-4">Profit/Loss</th>
            </tr>
          </thead>
          <tbody>
            {dummyData.map((trade, index) => (
              <tr key={index} className="text-white border-b border-gray-700 hover:bg-gray-700 transition-colors">
                <td className="p-4">{trade.date}</td>
                <td className={`p-4 font-bold ${trade.type === 'Buy' ? 'text-green-400' : 'text-red-400'}`}>
                  {trade.type}
                </td>
                <td className="p-4">{trade.asset}</td>
                <td className="p-4">{trade.size}</td>
                <td className="p-4">{trade.leverage}</td>
                <td className={`p-4 font-bold ${trade.profitLoss.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                  {trade.profitLoss}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default History;
