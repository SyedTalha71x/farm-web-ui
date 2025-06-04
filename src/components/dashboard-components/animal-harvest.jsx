/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import { ChevronDown } from 'lucide-react';

const data = [
    { period: '17 - 19', actualYield: 6000, forecast: 0 },
    { period: '20 - 22', actualYield: 1000, forecast: 3000 },
    { period: '23 - 25', actualYield: 4200, forecast: 0 },
    { period: '26 - 28', actualYield: 2800, forecast: 0 },
    { period: '29 - 1', actualYield: 200, forecast: 0 },
    { period: '2 - 5', actualYield: 4800, forecast: 0 },
    { period: '6 - 9', actualYield: 600, forecast: 0 },
    { period: '10 - 13', actualYield: 5000, forecast: 0 },
    { period: '14 - 17', actualYield: 3000, forecast: 0 },
];

const formatYAxis = (value) => {
    if (value === 0) return '0';
    if (value >= 1000) return `${value}`;
    return `${value}`;
};

const AnimalHarvest = () => {
    const [dateRange, setDateRange] = useState("Chickens");

    return (
        <div className="bg-white rounded-lg p-6 border border-gray-200 w-full mt-2">
            <div className="flex justify-between items-start mb-6">
                <div>
                    <h2 className="text-xl rethink-sans-500 text-gray-900">Animal Harvest</h2>
                    <p className="text-sm text-gray-500 rethink-sans mt-1">5000 lbs</p>
                </div>
                <div className="flex items-center md:flex-row flex-col gap-3">
                    <span className="bg-gray-100 text-gray-600 px-4 py-2 rounded-md text-sm font-medium">
                        Last 30 days
                    </span>
                    <div className=" md:flex hidden items-center gap-2 bg-white border border-gray-300 px-4 py-2 rounded-lg shadow-sm text-sm cursor-pointer hover:bg-gray-50">
                        <span className="font-medium">{dateRange}</span>
                        <ChevronDown className="w-4 h-4 text-gray-500" />
                    </div>
                </div>
              
            </div>
            <div className="flex md:hidden justify-center   items-center gap-2 bg-white border border-gray-300 px-4 py-2 rounded-lg shadow-sm text-sm cursor-pointer hover:bg-gray-50">
                        <span className="font-medium">{dateRange}</span>
                        <ChevronDown className="w-4 h-4 text-gray-500" />
                    </div>

            {/* Chart */}
            <div className="mt-6 overflow-x-auto">
                <div className="min-w-[700px] w-full">
                    <ResponsiveContainer width="100%" height={360}>
                        <BarChart 
                            data={data} 
                            margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                            barCategoryGap="20%"
                        >
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
                            
                            {/* Forecast bars (gray) */}
                            <Bar 
                                dataKey="forecast" 
                                fill="#D1D5DB" 
                                radius={[4, 4, 0, 0]} 
                                name="Forecast"
                                barSize={24}
                            />
                            
                            {/* Actual yield bars (green) */}
                            <Bar 
                                dataKey="actualYield" 
                                fill="#10B981" 
                                radius={[4, 4, 0, 0]} 
                                name="Actual Yield"
                                barSize={24}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Description Text */}
            <div className="mt-6 pt-4 border-t border-gray-100 rethink-sans">
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

export default AnimalHarvest;