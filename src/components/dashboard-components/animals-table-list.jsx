/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Table, Input, Button, Dropdown } from 'antd';
import { SearchOutlined, MoreOutlined, PlusOutlined, EditOutlined } from '@ant-design/icons';
import { ArrowDown, Link, Plus, Search } from 'react-feather';
import { ArrowUpDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import VectorArrow from '../../../public/images/Vector - arrow.svg'


const AnimalListTable = () => {
    const [searchText, setSearchText] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const navigate = useNavigate();

    const data = [
        {
            key: '1',
            name: 'Bella',
            id: '325-AML-CRH205',
            breed: 'Holstein Friesian',
            animalType: 'Cow',
            lastUpdated: '2023-12-01 (12:00)',
            vetContact: '+1 925-555-7890',
            status: 'Active',
        },
    ];

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            sorter: (a, b) => a.name.localeCompare(b.name),
        },
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            sorter: (a, b) => a.id.localeCompare(b.id),
        },
        {
            title: 'Breed',
            dataIndex: 'breed',
            key: 'breed',
            sorter: (a, b) => a.breed.localeCompare(b.breed),
        },
        // {
        //     title: 'Animal Type',
        //     dataIndex: 'animalType',
        //     key: 'animalType',
        //     sorter: (a, b) => a.animalType.localeCompare(b.animalType),
        // },
        // {
        //     title: 'Last Updated',
        //     dataIndex: 'lastUpdated',
        //     key: 'lastUpdated',
        //     sorter: (a, b) => a.lastUpdated.localeCompare(b.lastUpdated),
        // },
        // {
        //     title: 'Vet Contact No',
        //     dataIndex: 'vetContact',
        //     key: 'vetContact',
        //     sorter: (a, b) => a.vetContact.localeCompare(b.vetContact),
        // },
        // {
        //     title: 'Status',
        //     dataIndex: 'status',
        //     key: 'status',
        //     render: (status) => (
        //         <span className={`px-3 py-1 rounded-full text-xs font-medium ${status === 'Active' ? 'bg-emerald-500 text-white' : 'bg-gray-200 text-gray-700'}`}>
        //             {status}
        //         </span>
        //     ),
        //     sorter: (a, b) => a.status.localeCompare(b.status),
        // },
        // {
        //     title: '',
        //     key: 'action',
        //     render: () => (
        //         <button className="text-gray-500 hover:text-blue-500">
        //             <EditOutlined />
        //         </button>
        //     ),
        // },
    ];


    const filteredData = data.filter(item =>
        Object.values(item).some(val =>
            val.toString().toLowerCase().includes(searchText.toLowerCase())
        )
    );

    const CustomPagination = () => {
        const totalPages = Math.ceil(50 / pageSize);
        
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

                <div className="bg-white rounded-xl border border-slate-200/70  lg:p-6 p-5">
                    <div className='flex md:justify-between justify-start flex-col md:flex-row md:items-center items-start'>
                        <div className="mb-4">
                            <h2 className="text-lg rethink-sans-500 mb-1">Animals Summary</h2>
                            <p className="text-sm text-gray-500 rethink-sans-400">Data of your animal records</p>
                        </div>
                        <div>
                            <img src={VectorArrow} alt="" />
                        </div>
                       
                    </div>
                    <div className='rethink-sans-400'>
                        <Table
                            columns={columns}
                            dataSource={filteredData}
                            pagination={false}
                            className="animal-table h-[38vh]"
                            rowClassName="hover:bg-gray-50"
                            // scroll={{ x: 800 }}
                        />
                    </div>

                    <div className="flex md:justify-start justify-center md:items-center items-start gap-4 md:flex-row flex-col mt-8">
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

export default AnimalListTable;