import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

function Graph() {
  const [timeframe, setTimeframe] = useState('1');

  const generateData = (count, interval) => {
    const data = [];
    let date = new Date('2023-01-01T00:00:00');
    let price = 2000;
    for (let i = 0; i < count; i++) {
      const open = price + (Math.random() - 0.5) * 20;
      const close = open + (Math.random() - 0.5) * 20;
      const high = Math.max(open, close) + Math.random() * 10;
      const low = Math.min(open, close) - Math.random() * 10;
      data.push({
        x: date.getTime(),
        y: [open, high, low, close].map(val => parseFloat(val.toFixed(2)))
      });
      date.setMinutes(date.getMinutes() + interval);
      price = close;
    }
    return data;
  };

  const intervals = {
    '1': 1,
    '30': 30,
    '60': 60,
    '240': 240
  };

  const series = [{
    data: generateData(30, intervals[timeframe])
  }];

  const options = {
    chart: {
      type: 'candlestick',
      height: 350,
      toolbar: {
        show: false
      },
      background: 'transparent'
    },
    title: {
      text: 'ETH Token Price',
      align: 'left',
      style: {
        fontSize: '22px',
        fontWeight: 'bold',
        color: '#ffffff'
      }
    },
    xaxis: {
      type: 'datetime',
      labels: {
        style: {
          colors: '#a1a1aa',
          fontSize: '12px',
          fontWeight: '600'
        }
      },
      axisBorder: {
        color: '#4b5563'
      },
      axisTicks: {
        color: '#4b5563'
      }
    },
    yaxis: {
      tooltip: {
        enabled: true
      },
      labels: {
        style: {
          colors: '#a1a1aa',
          fontSize: '12px',
          fontWeight: '600'
        }
      }
    },
    plotOptions: {
      candlestick: {
        colors: {
          upward: '#22c55e',
          downward: '#ef4444'
        }
      }
    },
    tooltip: {
      theme: 'dark'
    }
  };

  return (
    <div className="w-full h-full bg-gradient-to-r from-gray-800 via-gray-900 to-black p-6 mt-4 text-white rounded-lg shadow-2xl shadow-gray-900">
      <div className="flex items-center justify-start mb-6 space-x-4">
        <select 
          className="bg-gray-700 hover:bg-gray-600 text-white rounded-lg px-4 py-2 transition-all duration-200 ease-in-out cursor-pointer"
          value={timeframe}
          onChange={(e) => setTimeframe(e.target.value)}
        >
          <option value="1">1 Min</option>
          <option value="30">30 Min</option>
          <option value="60">1 Hour</option>
          <option value="240">4 Hours</option>
        </select>
        <h2 className="text-2xl font-bold text-gray-200">ETH Candlestick Chart</h2>
      </div>
      <div className="mixed-chart">
        <ReactApexChart
          options={options}
          series={series}
          type="candlestick"
          height={350}
        />
      </div>
    </div>
  );
}

export default Graph;
