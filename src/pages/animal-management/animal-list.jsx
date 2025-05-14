/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Table, Input, Button, Dropdown, Pagination } from 'antd';
import { SearchOutlined, MoreOutlined, PlusOutlined, EditOutlined } from '@ant-design/icons';
import { ArrowDown, Link, Plus, Search } from 'react-feather';
import { ArrowUpDown } from 'lucide-react';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useNavigate } from 'react-router-dom';


const AnimalManagement = () => {
    const [searchText, setSearchText] = useState('');
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
        {
            title: 'Animal Type',
            dataIndex: 'animalType',
            key: 'animalType',
            sorter: (a, b) => a.animalType.localeCompare(b.animalType),
        },
        {
            title: 'Last Updated',
            dataIndex: 'lastUpdated',
            key: 'lastUpdated',
            sorter: (a, b) => a.lastUpdated.localeCompare(b.lastUpdated),
        },
        {
            title: 'Vet Contact No',
            dataIndex: 'vetContact',
            key: 'vetContact',
            sorter: (a, b) => a.vetContact.localeCompare(b.vetContact),
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (status) => (
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${status === 'Active' ? 'bg-emerald-500 text-white' : 'bg-gray-200 text-gray-700'}`}>
                    {status}
                </span>
            ),
            sorter: (a, b) => a.status.localeCompare(b.status),
        },
        {
            title: '',
            key: 'action',
            render: () => (
                <button className="text-gray-500 hover:text-blue-500">
                    <EditOutlined />
                </button>
            ),
        },
    ];

    const redirecToAddAnimal = () => {
        navigate('/main-dashboard/animal-management/add-animal');
    }

    const filteredData = data.filter(item =>
        Object.values(item).some(val =>
            val.toString().toLowerCase().includes(searchText.toLowerCase())
        )
    );

    return (
        <div className="rethink-sans-400 ">
            <div className="">
                <header className="flex md:justify-end justify-start items-center mb-6">
                    <div className="flex gap-2">
                        <button className="flex items-center rethink-sans-400 gap-1 px-5 py-2 border border-gray-700 rounded-md bg-white md:text-sm text-xs">
                            <span className="inline">Many Options</span>
                            <MdOutlineKeyboardArrowDown size={16} />
                        </button>
                        <button onClick={redirecToAddAnimal} className="flex items-center rethink-sans-400 gap-1 px-5 py-2 bg-[#01575C] text-white rounded-md md:text-sm text-xs">
                            <Plus size={16} />
                            <span className="inline">Add Animal</span>
                        </button>
                    </div>
                </header>

                <div className="bg-white rounded-xl shadow-sm lg:p-6 p-5    ">
                    <div className='flex md:justify-between justify-start flex-col   md:flex-row  md:items-center items-start'>

                        <div className="mb-4">
                            <h2 className="text-lg rethink-sans-500 mb-1">Animals Summary</h2>
                            <p className="text-sm text-gray-500 rethink-sans-400">Data of your animal records</p>
                        </div>
                        <div className='flex justify-end items-center'>

                            <div className="relative mb-4  ">
                                <input
                                    type="text"
                                    placeholder="Search tasks"
                                    className="pl-8 pr-4 py-2  rethink-sans-400 outline-none bg-[#F8FAFA] rounded-md text-sm"
                                />
                                <Search size={16} className="absolute left-2.5 top-2.5 text-gray-400" />
                            </div>
                        </div>
                    </div>
                    <div className='rethink-sans-400 '>


                    <Table
                        columns={columns}
                        dataSource={filteredData}
                        pagination={false}
                        className="animal-table  md:mt-10 mt-3"
                        rowClassName="hover:bg-gray-50 "
                        size="middle"
                        scroll={{ x: 800 }}
                        />
                        </div>

                    <div className="flex md:justify-between  justify-center md:items-center items-start gap-4 md:flex-row flex-col mt-8">
                        <div className="flex items-center">
                            <span className="text-sm text-gray-700 rethink-sans-400 mr-2">Rows per page:</span>
                            <select className="border rethink-sans-400 border-gray-300 rounded px-2 py-1 text-sm">
                                <option>10</option>
                                <option>20</option>
                                <option>50</option>
                            </select>
                        </div>
                        <Pagination
                            defaultCurrent={1}
                            total={50}
                            showSizeChanger={false}
                            size="small"

                        />
                        <div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnimalManagement;