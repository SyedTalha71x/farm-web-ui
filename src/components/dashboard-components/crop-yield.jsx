/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area } from 'recharts';
import { ChevronDown } from 'lucide-react';

const data = [
    { period: '17 - 19', actualYield: 500, forecast: 5000 },
    { period: '20 - 22', actualYield: 800, forecast: 4200 },
    { period: '23 - 25', actualYield: 1200, forecast: 3200 },
    { period: '26 - 28', actualYield: 1800, forecast: 3800 },
    { period: '29 - 1', actualYield: 2800, forecast: 4800 },
    { period: '2 - 5', actualYield: 2200, forecast: 4200 },
    { period: '6 - 9', actualYield: 1800, forecast: 3800 },
    { period: '10 - 13', actualYield: 2400, forecast: 1800 },
    { period: '14 - 17', actualYield: 3200, forecast: 3600 },
];

const formatYAxis = (value) => {
    if (value === 0) return '0';
    if (value >= 1000) return `${value}`;
    return `${value}`;
};

const CropYield = () => {
    const [dateRange, setDateRange] = useState("Corn Crops");
    
    return (
        <div className="bg-white rounded-lg p-6 border border-gray-200 w-full">
            <div className="flex justify-between items-start mb-6">
                <div>
                    <h2 className="text-xl rethink-sans-500  text-gray-900">Crop Yield</h2>
                    <p className="text-sm text-gray-500 rethink-sans  mt-1">1200 bushels</p>
                </div>
                <div className="flex items-center gap-3">
                    <span className="bg-gray-100 text-gray-600 rethink-sans px-4 py-2 rounded-md text-sm font-medium">
                        Last 30 days
                    </span>
                    <div className="md:flex hidden items-center gap-2 bg-white border border-gray-300 px-4 py-1.5 rounded-lg shadow-sm text-sm cursor-pointer hover:bg-gray-50">
                        <span className="font-medium">{dateRange}</span>
                        <ChevronDown className="w-4 h-4 text-gray-500" />
                    </div>
                </div>
            </div>

            <div className="md:hidden flex justify-center items-center gap-2 bg-white border border-gray-300 px-4 py-1.5 rounded-lg shadow-sm text-sm cursor-pointer hover:bg-gray-50">
                        <span className="font-medium">{dateRange}</span>
                        <ChevronDown className="w-4 h-4 text-gray-500" />
                    </div>
            {/* Chart */}
            <div className="mt-6 overflow-x-auto">
                <div className="min-w-[700px] w-full">
                    <ResponsiveContainer width="100%" height={360}>
                        <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                            <defs>
                                <linearGradient id="colorActual" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#10B981" stopOpacity={0.2} />
                                    <stop offset="95%" stopColor="#10B981" stopOpacity={0.02} />
                                </linearGradient>
                                <linearGradient id="colorForecast" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#9CA3AF" stopOpacity={0.2} />
                                    <stop offset="95%" stopColor="#9CA3AF" stopOpacity={0.02} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid vertical={false} stroke="#f3f4f6" strokeDasharray="0" />
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
                                domain={[0, 6000]}
                                ticks={[0, 1000, 2000, 3000, 4000, 5000, 6000]}
                                style={{ fontWeight: 800, color: 'black' }}
                            />
                            <Tooltip
                                formatter={(value, name) => [
                                    `${value.toLocaleString()}`,
                                    name === 'actualYield' ? 'Actual Yield' : 'Forecast'
                                ]}
                                contentStyle={{
                                    backgroundColor: 'white',
                                    border: '1px solid #e5e7eb',
                                    borderRadius: '8px',
                                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                                    padding: '12px'
                                }}
                                labelStyle={{ fontWeight: '600', marginBottom: '4px', color: '#374151' }}
                            />
                            
                            {/* Forecast area */}
                            <Area
                                type="monotone"
                                dataKey="forecast"
                                stroke="none"
                                fill="url(#colorForecast)"
                            />
                            
                            {/* Actual yield area */}
                            <Area
                                type="monotone"
                                dataKey="actualYield"
                                stroke="none"
                                fill="url(#colorActual)"
                            />
                            
                            {/* Forecast line */}
                            <Line
                                type="monotone"
                                dataKey="forecast"
                                stroke="#9CA3AF"
                                strokeWidth={2}
                                dot={false}
                                activeDot={{ r: 4, strokeWidth: 2, fill: 'white', stroke: '#9CA3AF' }}
                            />
                            
                            {/* Actual yield line */}
                            <Line
                                type="monotone"
                                dataKey="actualYield"
                                stroke="#10B981"
                                strokeWidth={3}
                                dot={false}
                                activeDot={{ r: 5, strokeWidth: 2, fill: 'white', stroke: '#10B981' }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100">
                <p className="text-sm text-gray-800 leading-relaxed rethink-sans-400">
                    This chart visualizes the predicted yield for corn based on your activity records compared to the actual yield. The forecast accuracy is currently high due to complete input data. 
                    Ensure all activities are logged to maintain accuracy.
                </p>
                
                {/* Legend */}
                <div className="flex items-center gap-6 mt-4 rethink-sans-400">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <span className="text-sm text-gray-600 font-medium">Actual Yield</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                        <span className="text-sm text-gray-600 font-medium">Forecast</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CropYield;