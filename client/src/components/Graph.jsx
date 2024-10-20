import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

function Graph() {
  const [timeframe, setTimeframe] = useState('30');

  const generateData = (count) => {
    const data = [];
    let date = new Date('2023-01-01');
    let price = 100;
    for (let i = 0; i < count; i++) {
      const open = price + (Math.random() - 0.5) * 5;
      const close = open + (Math.random() - 0.5) * 5;
      const high = Math.max(open, close) + Math.random() * 2;
      const low = Math.min(open, close) - Math.random() * 2;
      data.push({
        x: date.getTime(),
        y: [open, high, low, close].map(val => parseFloat(val.toFixed(2)))
      });
      date.setDate(date.getDate() + 1);
      price = close;
    }
    return data;
  };

  const series = [{
    data: generateData(parseInt(timeframe))
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
      text: 'ACME Corp Stock Price',
      align: 'left',
      style: {
        fontSize: '20px',
        fontWeight: 'bold',
        color: '#ffffff'
      }
    },
    xaxis: {
      type: 'datetime',
      labels: {
        style: {
          colors: '#9ca3af'
        }
      }
    },
    yaxis: {
      tooltip: {
        enabled: true
      },
      labels: {
        style: {
          colors: '#9ca3af'
        }
      }
    },
    plotOptions: {
      candlestick: {
        colors: {
          upward: '#10b981',
          downward: '#ef4444'
        }
      }
    },
    tooltip: {
      theme: 'dark'
    }
  };

  return (
    <div className="w-full h-full bg-gray-900 p-6 mt-4 text-white rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Candlestick Chart</h2>
        <select 
          className="bg-gray-700 text-white rounded px-3 py-1"
          value={timeframe}
          onChange={(e) => setTimeframe(e.target.value)}
        >
          <option value="30">30 Days</option>
          <option value="60">60 Days</option>
          <option value="90">90 Days</option>
        </select>
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