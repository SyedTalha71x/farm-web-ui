/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Table} from 'antd';
import { Search } from 'react-feather';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { FiCheck, FiX } from 'react-icons/fi';
import Image1 from '../../../public/images/image-border-fruits.png'
import Image2 from '../../../public/images/image-border (1)-fruits.png'



const ProductApprovals = () => {
    const [searchText, setSearchText] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const navigate = useNavigate();

    const data = [
        {
            key: '1',
            productname: 'Organic Apples',
            farmer: 'Ethan Carter',
            category: 'Fruits',
            status: 'Rejected',
            photo: Image1,
        },
        {
            key: '2',
            productname: 'Free-Range Eggs',
            farmer: 'Olivia Bennett',
            category: 'Poultry',
            status: 'Approved',
            photo: Image2,
        },
    ];
    


    const columns = [
        {
            title: 'Product Name',
            dataIndex: 'productname',
            key: 'productname',
            render: (text, record) => (
                <div className="flex items-center gap-3">
                    <img
                        src={record.photo || "/placeholder.svg"}
                        alt={record.name}
                        className="w-8 h-8 rounded-full object-cover"
                    />
                    <span>{text}</span>
                </div>
            ),
            sorter: (a, b) => a.productname.localeCompare(b.productname),
        },
        {
            title: 'Farmer',
            dataIndex: 'farmer',
            key: 'farmer',
            sorter: (a, b) => a.farmer.localeCompare(b.farmer),
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
            sorter: (a, b) => a.category.localeCompare(b.category),
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (status) => (
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${status === 'Approved' ? 'bg-emerald-500 text-white' : 'bg-gray-200 text-gray-700'}`}>
                    {status}
                </span>
            ),
            sorter: (a, b) => a.status.localeCompare(b.status),
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (_, record) => (
              <div className="flex gap-3 justify-center">
                <FiCheck className="text-gray-300 cursor-pointer text-3xl hover:scale-110 transition-transform" />
                <FiX className="text-gray-300 cursor-pointer text-3xl hover:scale-110 transition-transform" />
              </div>
            ),
          },
          
        
    ];

    const filteredData = data.filter(item =>
        Object.values(item).some(val =>
            val.toString().toLowerCase().includes(searchText.toLowerCase())
        )
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
        <div className="rethink-sans-400  ">
            <div className="">

                <div className="bg-white rounded-xl border border-slate-200/70  lg:p-6 p-3">
                    <div className='flex md:justify-between justify-start flex-col md:flex-row md:items-center items-start'>
                        <div className="mb-4">
                            <h2 className="text-lg rethink-sans-500 mb-1">Product Approvals</h2>
                        </div>
                        <div className='flex md:justify-end justify-start md:mb-0 mb-6 items-center'>
                            <div className='flex items-center gap-5'>

                                <div className="relative    ">
                                    <input
                                        type="text"
                                        placeholder="Search tasks"
                                        className=" pr-4 py-2 pl-8 rethink-sans-400 outline-none bg-[#F8FAFA] rounded-md text-sm"
                                        value={searchText}
                                        onChange={(e) => setSearchText(e.target.value)}
                                    />
                                    <Search size={16} className="absolute md:block hidden left-2 top-2.5 text-gray-400" />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='rethink-sans-400 mt-4'>
                        <Table
                            columns={columns}
                            dataSource={filteredData}
                            pagination={false}
                            className="animal-table md:h-[51vh] h-auto "
                            rowClassName="hover:bg-gray-50"
                            scroll={{ x: 800 }}
                        />
                    </div>

                    <div className="flex md:justify-between justify-start md:items-center items-start gap-4 md:flex-row flex-col mt-8">
                        <div className="flex items-center">
                            <span className="text-[10px] text-gray-700 rethink-sans-400 mr-2">Rows per page:</span>
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

export default ProductApprovals;