import React from 'react';
import Image1 from '../../../public/images/avatar.png'
import Image2 from '../../../public/images/avatar-1.png'
import Image3 from '../../../public/images/avatar-2.png'
import Image4 from '../../../public/images/avatar-3.png'


const TopRankingFarms = () => {
  const countries = [
    {
      name: 'Golden Dragon Acres',
      flag: Image1,
      users: 76543,
      rank: 1,
      badgeColor: 'bg-yellow-400'
    },
    {
      name: 'Rainbow Valley Farm',
      flag: Image2,
      users: 62789,
      rank: 2,
      badgeColor: 'bg-gray-200'
    },
    {
      name: 'Tropical Breeze Homestead',
      flag: Image3,
      users: 53210,
      rank: 3,
      badgeColor: 'bg-orange-400'
    },
    {
      name: 'Sunset Ridge Farm',
      flag: Image4,
      users: 45678,
      rank: 3,
      badgeColor: 'bg-gray-200'
    },
  ];

  return (
    <div className="bg-white rounded-lg border border-slate-200/70 max-w-xl w-full">
      <div className="p-4 sm:p-5 flex justify-between items-center">
        <div>
          <h2 className="text-lg sm:text-xl rethink-sans-700 text-gray-900">Top Ranking Farms   </h2>
          <p className="text-xs sm:text-sm rethink-sans-400 text-gray-500">Reach out to your top customers</p>
        </div>
        <div className="text-xs sm:text-sm text-gray-500 rethink-sans-400">Last 30 Days</div>
      </div>

      <div className="border-t border-gray-100 pb-6">
        {countries.map((country, index) => (
          <div key={index} className="p-4 sm:p-5 flex items-center justify-between">
            <div className="flex gap-2 items-center">
             <div className='h-14 w-14  '>
              <img src={country.flag} alt="" />
             </div>
              <div>
                <h3 className="text-sm sm:text-base font-semibold text-gray-900">{country.name}</h3>
                <p className="text-xs sm:text-sm text-gray-500">{country.users.toLocaleString()} Users</p>
              </div>
            </div>
            <div className={`${country.badgeColor} text-[10px] sm:text-xs rethink-sans-400 font-medium px-2 py-1 sm:px-2.5 sm:py-1.5 rounded-full`}>
              Rank #{country.rank}
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-100 p-3 sm:p-4 flex justify-between items-center rethink-sans-400">
        <button className="text-gray-400 hover:text-gray-600">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="flex space-x-1 sm:space-x-2">
          {['1', '2', '3', '4'].map((num, i) => (
            <button
              key={i}
              className={`w-7 h-7 sm:w-8 sm:h-8 text-xs sm:text-sm rounded-full flex items-center justify-center ${num === '1' ? 'bg-green-500 text-white' : 'text-gray-500 hover:bg-gray-100'}`}
            >
              {num}
            </button>
          ))}
          <span className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-xs sm:text-sm text-gray-500">...</span>
          <button className="w-7 h-7 sm:w-8 sm:h-8 text-xs sm:text-sm rounded-full text-gray-500 flex items-center justify-center hover:bg-gray-100">99+</button>
        </div>

        <button className="text-gray-400 hover:text-gray-600">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TopRankingFarms;
