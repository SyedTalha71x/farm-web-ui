import React from 'react';

const TotalOrders = () => {
  const orderData = [
    0.4, 0.7, 0.3, 0.3, 0.3, 0.2, 0.9, 0.6, 0.8, 0.3, 0.2, 0.5, 0.2, 0.4, 0.3, 0.6, 0.2, 0.3, 0.5, 0.3, 0.4, 0.3, 0.2, 
    0.1, 0.2, 0.3, 0.2, 0.4, 0.3, 0.3, 0.4, 0.5, 0.7
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-5 max-w-xl">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-xl rethink-sans-700 text-gray-900">Total Orders</h2>
          <p className="text-sm text-gray-500 rethink-sans-400">4,235 compared to last period orders</p>
        </div>
        <div className="bg-green-500 rethink-sans-400 text-white text-xs font-medium px-2.5 py-1 rounded-full flex items-center">
          <svg className="w-3 h-3 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 13L12 6L19 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          25%
        </div>
      </div>
      
      <div className="border-t rethink-sans-400 border-gray-100 -mx-5 px-5 pt-5">
        <div className="h-32 flex items-end space-x-1">
          {orderData.map((value, index) => {
            // Calculate color based on position - green for first half, fading to gray for second half
            const isGreen = index < orderData.length * 0.6;
            const barColor = isGreen ? 'bg-green-500' : 'bg-gray-200';
            
            return (
              <div 
                key={index} 
                className={`${barColor} rounded-sm w-2`} 
                style={{ height: `${value * 100}%` }}
              ></div>
            );
          })}
        </div>
        
        <div className="flex rethink-sans-500 justify-between text-sm text-gray-500 mt-4">
          <div>17 Nov 2025</div>
          <div>17 Dec 2025</div>
        </div>
      </div>
    </div>
  );
};

export default TotalOrders;