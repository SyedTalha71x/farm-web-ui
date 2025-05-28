import React from 'react';
import Image1 from '../../../public/images/image-border.png';
import Image2 from '../../../public/images/image-border (3).png';
import Image3 from '../../../public/images/image-border (2).png';
import Image4 from '../../../public/images/image-border (1).png';
import { FaTrash } from 'react-icons/fa';

const HomePageBanners = () => {
  const banners = [
    {
      id: 'item-12',
      name: 'item-12',
      size: '5 MB',
      selected: true,
      image: Image1
    },
    {
      id: 'item-134',
      name: 'item-134',
      size: '10 MB',
      selected: false,
      image: Image2
    },
    {
      id: 'item-1200',
      name: 'item-1200',
      size: '15 MB',
      selected: false,
      image: Image3
    },
    {
      id: 'item-123',
      name: 'item-123',
      size: '20 MB',
      selected: false,
      image: Image4
    }
  ];

  const handleDelete = (id) => {
    console.log('Delete clicked for banner:', id);
    // You can add delete functionality here
  };

  return (
    <div className="bg-white rounded-lg border border-slate-200/70 max-w-xl w-full">
      {/* Header */}
      <div className="p-4 sm:p-5 flex justify-between items-center">
        <div>
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Homepage Banners</h2>
          <p className="text-xs sm:text-sm text-gray-500">No new products added today</p>
        </div>
        <div className="text-xs sm:text-sm bg-[#01575C] py-2 px-5 cursor-pointer rounded-md text-white">Upload</div>
      </div>

      {/* Banner Grid */}
      <div className="border-t border-gray-100 md:h-[1000px] h-auto p-4 sm:p-5">
        <div className="grid grid-cols-2 gap-4">
          {banners.map((banner, index) => (
            <div key={index} className="relative group">
              {/* Image with Delete Icon */}
              <div className="rounded-lg aspect-[4/3] relative overflow-hidden">
                <img
                  src={banner.image}
                  alt={banner.name}
                  className="object-cover w-full h-full"
                  layout="fill"
                />
                <button
                  onClick={() => handleDelete(banner.id)}
                  className="absolute top-2 right-2 w-7 h-7 bg-white/80 hover:bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10"
                >
                  <FaTrash className="text-gray-600 text-sm" />
                </button>
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

      {/* Footer Pagination */}
      <div className="border-t border-gray-100 p-3 sm:p-4 flex justify-between items-center">
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
