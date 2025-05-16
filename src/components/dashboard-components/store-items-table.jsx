import React, { useState } from 'react';
import { Input } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { ArrowDown, Link, Plus, Search } from 'react-feather';
import { ArrowUpDown, ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import VectorArrow from '../../../public/images/Vector - arrow.svg'


import Image1 from '../../../public/images/image-border.svg'
import Image2 from '../../../public/images/image-border (1).svg'
import Image3 from '../../../public/images/image-border (2).svg'
import Image4 from '../../../public/images/image-border (3).svg'


const StoreItemsList = () => {
    const [searchText, setSearchText] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);

    const products = [
        {
            id: 1,
            name: 'Cherries',
            price: 12.00,
            unit: 'PU',
            discount: '60% OFF',
            image: Image1,
            views: 48
        },
        {
            id: 2,
            name: 'Apples',
            price: 12.00,
            unit: 'PU',
            stock: '15 Left',
            image: Image2,
            views: 42
        },
        {
            id: 3,
            name: 'Cows',
            price: 1200.00,
            unit: 'PU',
            image: Image3,
            views: 56
        },
        {
            id: 4,
            name: 'Chickens',
            price: 12.00,
            unit: 'PU',
            image: Image4,
            views: 60
        },
    ];


    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchText.toLowerCase())
    );

    // Custom pagination component
    const CustomPagination = () => {
        const totalPages = Math.ceil(50 / pageSize); // Assuming 50 total records

        const handlePageChange = (page) => {
            setCurrentPage(page);
        };

        const renderPageButtons = () => {
            const buttons = [];
            const maxDisplayPages = 5;

            // Previous button
            buttons.push(
                <button
                    key="prev"
                    onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                    className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 hover:bg-gray-100"
                    disabled={currentPage === 1}
                >
                    <ChevronLeft size={18} className={currentPage === 1 ? "text-gray-300" : "text-gray-600"} />
                </button>
            );

            // First page
            buttons.push(
                <button
                    key={1}
                    onClick={() => handlePageChange(1)}
                    className={`w-8 h-8 flex items-center justify-center rounded-full ${currentPage === 1 ? 'bg-black text-white' : 'hover:bg-gray-100'}`}
                >
                    1
                </button>
            );

            // Middle pages
            if (totalPages > maxDisplayPages) {
                let startPage = Math.max(2, currentPage - 1);
                let endPage = Math.min(startPage + 2, totalPages - 1);

                if (currentPage > 3) {
                    buttons.push(
                        <button key="dots1" className="w-8 h-8 flex items-center justify-center">
                            ...
                        </button>
                    );
                }

                for (let i = startPage; i <= endPage; i++) {
                    buttons.push(
                        <button
                            key={i}
                            onClick={() => handlePageChange(i)}
                            className={`w-8 h-8 flex items-center justify-center rounded-full ${currentPage === i ? 'bg-black text-white' : 'hover:bg-gray-100'}`}
                        >
                            {i}
                        </button>
                    );
                }

                if (endPage < totalPages - 1) {
                    buttons.push(
                        <button key="dots2" className="w-8 h-8 flex items-center justify-center">
                            ...
                        </button>
                    );
                }

                // Last page or "99+"
                if (totalPages > 99) {
                    buttons.push(
                        <button
                            key="last"
                            onClick={() => handlePageChange(totalPages)}
                            className={`w-8 h-8 flex items-center justify-center rounded-full ${currentPage === totalPages ? 'bg-black text-white' : 'hover:bg-gray-100'}`}
                        >
                            99+
                        </button>
                    );
                } else {
                    buttons.push(
                        <button
                            key={totalPages}
                            onClick={() => handlePageChange(totalPages)}
                            className={`w-8 h-8 flex items-center justify-center rounded-full ${currentPage === totalPages ? 'bg-black text-white' : 'hover:bg-gray-100'}`}
                        >
                            {totalPages}
                        </button>
                    );
                }
            } else {
                // Display all pages if total pages <= maxDisplayPages
                for (let i = 2; i <= totalPages; i++) {
                    buttons.push(
                        <button
                            key={i}
                            onClick={() => handlePageChange(i)}
                            className={`w-8 h-8 flex items-center justify-center rounded-full ${currentPage === i ? 'bg-black text-white' : 'hover:bg-gray-100'}`}
                        >
                            {i}
                        </button>
                    );
                }
            }

            // Next button
            buttons.push(
                <button
                    key="next"
                    onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                    className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 hover:bg-gray-100"
                    disabled={currentPage === totalPages}
                >
                    <ChevronRight size={18} className={currentPage === totalPages ? "text-gray-300" : "text-gray-600"} />
                </button>
            );

            return buttons;
        };

        return (
            <div className="flex items-center gap-2">
                {renderPageButtons()}
            </div>
        );
    };

    return (
        <div className="rethink-sans-400">
            <div className="">  

                <div className="bg-white rounded-xl border border-slate-200/70  lg:p-6 p-5">
                    <div className='flex md:justify-between border-b border-slate-200/50 justify-start flex-col md:flex-row md:items-center items-start'>
                        <div className="mb-4">
                            <h2 className="text-lg rethink-sans-500 mb-1">List Products</h2>
                            <p className="text-sm text-gray-500 rethink-sans-400">No new products added today</p>
                        </div>
                        <div className='flex justify-end items-center'>
                            <div className='flex items-center gap-5'>

                            <div className="relative    ">
                                <input
                                    type="text"
                                    placeholder="Search tasks"
                                    className="pl-8 pr-4 py-2 rethink-sans-400 outline-none bg-[#F8FAFA] rounded-md text-sm"
                                    value={searchText}
                                    onChange={(e) => setSearchText(e.target.value)}
                                />
                                <Search size={16} className="absolute left-2.5 top-2.5 text-gray-400" />
                            </div>
                            <div>
                                <img src={VectorArrow} alt="" className='cursor-pointer' />
                            </div>
                                    </div>
                        </div>
                    </div>

                    <div className='h-[72vh]'>

                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
                            {filteredProducts.map((product) => (
                                <div key={product.id} className="rounded-lg overflow-hidden  relative">
                                    <div className="relative">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = "https://via.placeholder.com/150";
                                            }}
                                        />
                                        {/* <button className="absolute top-2 right-2 w-8 h-8  rounded-full flex items-center justify-center shadow-sm">
                                            <Heart size={22} className="text-white" />
                                        </button> */}
                                        {/* <div className="absolute bottom-2 left-2  bg-opacity-60 text-white text-xs px-2 py-1 rounded-md flex items-center">
                                          <div className='flex items-center gap-1   '><img src={RatingImage} className='h-4 w-4' alt="" /><div className='text-md'>4.5</div></div>
                                        </div> */}
                                    </div>
                                    <div className="p-1 rethink-sans-400">
                                        <div className="flex md:justify-between md:flex-row flex-col gap-1 justify-start items-start">
                                            <div>
                                                <div className="font-medium text-md">${product.price.toFixed(2)}/{product.unit}</div>
                                                <div className="text-gray-700 text-sm">{product.name}</div>
                                            </div>
                                            {product.discount && (
                                                <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-md font-medium">
                                                    {product.discount}
                                                </span>
                                            )}
                                            {product.stock && (
                                                <span className="bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded-md font-medium">
                                                    {product.stock}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='bg-slate-200 h-[1px]'></div>

                    <div className="flex md:justify-start   justify-center md:items-center items-start gap-4 md:flex-row flex-col mt-4">
                        <div className="flex items-center ">
                            <span className="text-xs text-gray-700 rethink-sans-400 mr-2">Rows per page:</span>
                            <select
                                className="border rethink-sans-400 border-gray-300 rounded px-2 py-1 text-sm"
                                value={pageSize}
                                onChange={(e) => setPageSize(Number(e.target.value))}
                            >
                                <option value={10}>10</option>
                                <option value={20}>20</option>
                                <option value={50}>50</option>
                            </select>
                        </div>

                        <CustomPagination />

                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StoreItemsList;