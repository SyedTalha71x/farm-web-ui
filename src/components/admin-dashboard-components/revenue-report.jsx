import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from 'recharts';
import VectorArrow from '../../../public/images/Vector - arrow.svg';

const data = [
  { period: '17 - 19', previous: 35000, current: 65000 },
  { period: '20 - 22', previous: 18000, current: 25000 },
  { period: '23 - 25', previous: 45000, current: 0 },
  { period: '26 - 28', previous: 35000, current: 15000 },
  { period: '29 - 1', previous: 38000, current: 5000 },
  { period: '2 - 5', previous: 47000, current: 50000 },
  { period: '6 - 9', previous: 14000, current: 17000 },
  { period: '10 - 13', previous: 52000, current: 0 },
  { period: '14 - 17', previous: 57000, current: 35000 },
];

const formatYAxis = (value) => {
  if (value === 0) return '$0k';
  return `$${value / 1000}k`;
};

const RevenueChart = () => {
  return (
    <div className="bg-white rounded-lg lg:p-5 p-3 border border-slate-200/70 w-full max-w-3xl">
      <div className="flex justify-between items-start mb-4">
        <div>
          <div className='flex md:flex-row flex-col md:gap-2 gap-0'>
            <h2 className="text-lg  rethink-sans-700 text-gray-900">Revenue Report</h2>
          </div>
          <p className="text-sm text-gray-500 rethink-sans-500">$10,732 compared to previous period</p>
        </div>
        <div className="flex rethink-sans-400 items-center text-sm text-gray-500">
          <span className="bg-[#F1F4F5] py-1 px-4 rounded-md cursor-pointer text-xs">Last 30 Days</span>
         
        </div>
      </div>

      <div className="md:h-[435px] h-auto mt-10 overflow-x-auto scrollbar">
        <div className="min-w-[700px] w-full">
          <ResponsiveContainer width="100%" height={430}>
            <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 10 }}>
              <CartesianGrid vertical={false} stroke="#f5f5f5" />
              <XAxis
                dataKey="period"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#6B7280' }}
                dy={10}
                style={{ fontWeight: 800 }}
              />
              <YAxis
                tickFormatter={formatYAxis}
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#6B7280' }}
                width={40}
              />
              <Tooltip
                formatter={(value) => [`$${value.toLocaleString()}`, 'Revenue']}
                contentStyle={{
                  backgroundColor: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                  padding: '8px 12px'
                }}
                labelStyle={{ fontWeight: 'bold', marginBottom: '4px' }}
              />
              {/* <Legend verticalAlign="top" height={36} iconSize={10} /> */}
              <Bar dataKey="previous" fill="#D1D5DB" radius={[4, 4, 0, 0]} name="Previous" barSize={16} />
              <Bar dataKey="current" fill="#10B981" radius={[4, 4, 0, 0]} name="Current" barSize={16} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default RevenueChart;
