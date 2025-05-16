import React from 'react';

const TotalVisitors = () => {
  return (
    <div className="bg-white rounded-lg border border-slate-200/70  p-5 w-full">
      <div className="flex justify-between border-b border-slate-200/70 items-start mb-8">
        <div>
          <h2 className="text-xl rethink-sans-700 text-gray-900">Total Visitors</h2>
          <p className="text-sm text-gray-500 rethink-sans-400 mb-3">8,320 compared to last period visits</p>
        </div>
        <div className="bg-red-500 rethink-sans-400 text-white text-xs font-medium px-2.5 py-1 rounded-full flex items-center">
          <svg className="w-3 h-3 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 13L12 6L5 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          25%
        </div>
      </div>
      
      <div className="mt-8 rethink-sans-400">
        <div className="flex justify-between mb-2">
          <div className="font-bold text-3xl text-gray-900">75%</div>
          <div className="font-bold text-3xl text-gray-900  ">25%</div>
        </div>
        
        <div className="flex justify-between mb-1">
          <div className="text-sm rethink-sans-400 text-gray-500">Web Users</div>
          <div className="text-sm rethink-sans-400 text-gray-500">Mobile Users</div>
        </div>
        
        <div className="flex w-full h-2 mt-2 mb-6 ">
          <div className="bg-[#17A24A] rounded-l-full w-3/4"></div>
          <div className="bg-gray-200 rounded-r-full w-1/4"></div>
        </div>
        
        <div className="flex justify-between rethink-sans-700 text-sm text-gray-500 mt-4">
          <div>17 Nov 2025</div>
          <div>17 Dec 2025</div>
        </div>
      </div>
    </div>
  );
};

export default TotalVisitors;