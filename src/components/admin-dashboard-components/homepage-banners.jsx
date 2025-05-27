import React from 'react';

const HomePageBanners = () => {
  const banners = [
    {
      id: 'item-12',
      name: 'item-12',
      size: '5 MB',
      selected: true,
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2025-05-27_14-15-DTuGuLPEwXnKmQ0usczP02smxeqmpn.png', // Orange gradient design
      bgColor: 'bg-gradient-to-br from-orange-400 via-orange-500 to-yellow-400'
    },
    {
      id: 'item-134',
      name: 'item-134',
      size: '10 MB',
      selected: false,
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2025-05-27_14-15-DTuGuLPEwXnKmQ0usczP02smxeqmpn.png', // Pink hearts pattern
      bgColor: 'bg-gradient-to-br from-pink-200 to-pink-300'
    },
    {
      id: 'item-1200',
      name: 'item-1200',
      size: '15 MB',
      selected: false,
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2025-05-27_14-15-DTuGuLPEwXnKmQ0usczP02smxeqmpn.png', // Mountain landscape
      bgColor: 'bg-gradient-to-br from-blue-400 to-blue-600'
    },
    {
      id: 'item-123',
      name: 'item-123',
      size: '20 MB',
      selected: false,
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2025-05-27_14-15-DTuGuLPEwXnKmQ0usczP02smxeqmpn.png', // Workspace/desk
      bgColor: 'bg-gradient-to-br from-gray-100 to-gray-200'
    }
  ];

  return (
    <div className="bg-white rounded-lg border border-slate-200/70 max-w-xl w-full">
      <div className="p-4 sm:p-5 flex justify-between items-center">
        <div>
          <h2 className="text-lg sm:text-xl rethink-sans-700 text-gray-900">Homepage Banners</h2>
          <p className="text-xs sm:text-sm rethink-sans-400 text-gray-500">No new products added today</p>
        </div>
        <div className="text-xs sm:text-sm bg-[#01575C] py-2 px-5 cursor-pointer rounded-md text-white rethink-sans-400">Upload</div>
      </div>

      <div className="border-t border-gray-100 md:h-[1000px] h-auto p-4 sm:p-5">
        <div className="grid grid-cols-2 gap-4">
          {banners.map((banner, index) => (
            <div key={index} className="relative group">
              {/* Banner Image/Preview */}
              <div className={`${banner.bgColor} rounded-lg aspect-[4/3] relative overflow-hidden`}>
                {/* Delete Icon */}
                <button className="absolute top-2 right-2 w-6 h-6 bg-white/80 hover:bg-white rounded-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600">
                    <path d="M3 6h18M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6M8 6V4c0-1 1-2 2-2h4c0 1 1 2 2 2v2M10 11v6M14 11v6"/>
                  </svg>
                </button>

                {/* Content based on banner type */}
                {banner.id === 'item-12' && (
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-orange-500 to-yellow-400">
                    <div className="absolute top-2 left-2 w-4 h-4 border-2 border-white rounded-sm"></div>
                  </div>
                )}
                
                {banner.id === 'item-134' && (
                  <div className="absolute inset-0 bg-pink-200" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ec4899' fill-opacity='0.3'%3E%3Cpath d='M10 3.5c1.5-2 4-2 5.5 0s1.5 4 0 5.5L10 14 4.5 9c-1.5-1.5-1.5-4 0-5.5s4-2 5.5 0z'/%3E%3C/g%3E%3C/svg%3E")`,
                  }}>
                    <div className="absolute top-2 right-2 w-4 h-4 border-2 border-white rounded-sm"></div>
                  </div>
                )}
                
                {banner.id === 'item-1200' && (
                  <div className="absolute inset-0 bg-gradient-to-b from-blue-400 via-blue-500 to-blue-800">
                    <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-orange-300 to-transparent"></div>
                  </div>
                )}
                
                {banner.id === 'item-123' && (
                  <div className="absolute inset-0 bg-gray-50 p-2">
                    <div className="w-full h-2 bg-gray-200 rounded mb-1"></div>
                    <div className="w-3/4 h-2 bg-gray-200 rounded mb-2"></div>
                    <div className="absolute bottom-2 right-2 w-3 h-3 bg-gray-300 rounded-full"></div>
                    <div className="absolute bottom-2 left-2 w-4 h-1 bg-gray-400 rounded"></div>
                  </div>
                )}
              </div>

              {/* Banner Info */}
              <div className="mt-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-900">{banner.name}</h3>
                  {banner.selected && (
                    <span className="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded-full font-medium">
                      Selected
                    </span>
                  )}
                </div>
                <p className="text-xs text-gray-500 mt-0.5">{banner.size}</p>
              </div>
            </div>
          ))}
        </div>
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

export default HomePageBanners;