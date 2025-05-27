import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area } from 'recharts';

const data = [
  { period: '17 - 19', revenue: 15000 },
  { period: '20 - 22', revenue: 25000 },
  { period: '23 - 25', revenue: 35000 },
  { period: '26 - 28', revenue: 45000 },
  { period: '29 - 1', revenue: 50000 },
  { period: '2 - 5', revenue: 35000 },
  { period: '6 - 9', revenue: 38000 },
  { period: '10 - 13', revenue: 45000 },
  { period: '14 - 17', revenue: 65000 },
];

const formatYAxis = (value) => {
  if (value === 0) return '$0k';
  return `$${value / 1000}k`;
};

const RevenueTrends = () => {
  return (
    <div className="bg-white rounded-lg p-5 border border-slate-200/70 w-full max-w-3xl">
      <div className="flex justify-between items-start mb-4">
        <div>
          <div className='flex md:flex-row flex-col md:gap-2 gap-0'>

            <h2 className="text-lg  rethink-sans-700 text-gray-900">Revenue Trends</h2>
          </div>
          <p className="text-sm text-gray-500 rethink-sans-500">$120,000 more compared to last period</p>
        </div>
        <div className="flex rethink-sans-400 items-center text-sm text-gray-500">
          <span className="bg-[#F1F4F5] py-1 px-4 rounded-md cursor-pointer text-xs">Last 30 Days</span>
        </div>
      </div>

      <div className="md:h-[435px] h-auto mt-10 overflow-x-auto scrollbar">
        <div className="min-w-[700px] w-full">
          <ResponsiveContainer width="100%" height={430}>
            <LineChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 10 }}>
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10B981" stopOpacity={0.1} />
                  <stop offset="95%" stopColor="#10B981" stopOpacity={0.01} />
                </linearGradient>
              </defs>
              <CartesianGrid vertical={false} stroke="#f5f5f5" />
              <XAxis
                dataKey="period"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#6B7280' }}
                dy={10}
                style={{ fontWeight: 800, color: 'black' }}
              />
              <YAxis
                tickFormatter={formatYAxis}
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#6B7280' }}
                width={40}
                style={{ fontWeight: 800, color: 'black' }}
              />
              <Tooltip
                formatter={(value) => [`$${value.toLocaleString()}`, 'Revenue']}
                contentStyle={{ backgroundColor: 'white', border: 'none', borderRadius: '6px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', padding: '8px 12px' }}
                labelStyle={{ fontWeight: 'bold', marginBottom: '4px' }}
              />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="none"
                fill="url(#colorRevenue)"
              />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#10B981"
                strokeWidth={2}
                dot={{ r: 4, strokeWidth: 2, fill: 'white' }}
                activeDot={{ r: 6, strokeWidth: 2, fill: 'white' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default RevenueTrends;
