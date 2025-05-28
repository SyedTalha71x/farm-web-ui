/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Table, Input, Button, Dropdown, Switch } from 'antd';
import { SearchOutlined, MoreOutlined, PlusOutlined, EditOutlined } from '@ant-design/icons';
import { ArrowDown, Link, Plus, Search, X, User, Clock, Edit3, Trash2 } from 'react-feather';
import { ArrowUpDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import AddUser from './add-user';

const UserList = () => {
    const [searchText, setSearchText] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [deleteModalVisible, setDeleteModalVisible] = useState(false);
    const [roleDropdownOpen, setRoleDropdownOpen] = useState(false);
    const [selectedRole, setSelectedRole] = useState('');
    const [confirmDeletion, setConfirmDeletion] = useState(false);

    const roleOptions = [
        {
            value: 'Assistant',
            label: 'Assistant',
            description: 'Content management, customization access, view analytics, order viewing.'
        },
        {
            value: 'Co-Admin',
            label: 'Co-Admin',
            description: 'Full administrative permissions, shared duties with primary admin.'
        },
        {
            value: 'Deputy',
            label: 'Deputy',
            description: 'Order management, customer support, user permissions, report generation.'
        },
        {
            value: 'Junior',
            label: 'Junior',
            description: 'Form customization, translation management, high-level analytics access.'
        },
        {
            value: 'Moderator',
            label: 'Moderator',
            description: 'Content moderation, customer support assistance, issue reporting.'
        },
        {
            value: 'Support',
            label: 'Support',
            description: 'User support, account management, handle order issues, password resets.'
        }
    ];

    const [users, setUsers] = useState([
        {
            key: '1',
            name: 'John Smith',
            photo: 'https://i.pravatar.cc/40?img=1',
            email: 'john.smith@example.com',
            role: 'Admin',
            status: 'Active',
            isActive: true,
            lastActive: 'Online',
            password: '••••••••••••',
            activityLog: [
                { action: 'Logged in', time: '2 hours ago', icon: 'login' },
                { action: 'Updated profile', time: '1 day ago', icon: 'edit' },
                { action: 'Deleted e-commerce store', time: '3 days ago', icon: 'delete' }
            ]
        },
        {
            key: '2',
            name: 'Sarah Johnson',
            photo: 'https://i.pravatar.cc/40?img=2',
            email: 'sarah.johnson@example.com',
            role: 'Manager',
            status: 'Active',
            isActive: true,
            lastActive: 'Online',
            password: '••••••••••••',
            activityLog: [
                { action: 'Logged in', time: '1 hour ago', icon: 'login' },
                { action: 'Updated profile', time: '2 days ago', icon: 'edit' }
            ]
        },
        {
            key: '3',
            name: 'Mike Wilson',
            photo: 'https://i.pravatar.cc/40?img=3',
            email: 'mike.wilson@example.com',
            role: 'User',
            status: 'Inactive',
            isActive: false,
            lastActive: '2 days ago',
            password: '••••••••••••',
            activityLog: [
                { action: 'Logged in', time: '2 days ago', icon: 'login' },
                { action: 'Updated profile', time: '5 days ago', icon: 'edit' }
            ]
        },
        {
            key: '4',
            name: 'Emily Davis',
            photo: 'https://i.pravatar.cc/40?img=4',
            email: 'emily.davis@example.com',
            role: 'User',
            status: 'Active',
            isActive: true,
            lastActive: 'Online',
            password: '••••••••••••',
            activityLog: [
                { action: 'Logged in', time: '30 minutes ago', icon: 'login' },
                { action: 'Updated profile', time: '1 day ago', icon: 'edit' },
                { action: 'Deleted e-commerce store', time: '4 days ago', icon: 'delete' }
            ]
        },
    ]);
    const navigate = useNavigate();
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const handleSubmit = (taskData) => {
        console.log("New task created:", taskData);
        setIsModalVisible(false);
    };

    const handleToggleStatus = (key) => {
        setUsers(users.map(user =>
            user.key === key
                ? {
                    ...user,
                    isActive: !user.isActive,
                    status: !user.isActive ? 'Active' : 'Inactive'
                }
                : user
        ));
    };

    const handleRowClick = (record) => {
        setSelectedUser(record);
        setSelectedRole(record.role);
        setSidebarOpen(true);
    };

    const closeSidebar = () => {
        setSidebarOpen(false);
        setSelectedUser(null);
        setRoleDropdownOpen(false);
    };

    const showDeleteModal = () => {
        setDeleteModalVisible(true);
        setConfirmDeletion(false);
    };

    const handleDeleteConfirm = () => {
        if (selectedUser && confirmDeletion) {
            setUsers(users.filter(user => user.key !== selectedUser.key));
            setDeleteModalVisible(false);
            setConfirmDeletion(false);
            closeSidebar();
        }
    };

    const handleDeleteCancel = () => {
        setDeleteModalVisible(false);
        setConfirmDeletion(false);
    };

    const handleSaveChanges = () => {
        console.log('Saving changes for user:', selectedUser);
        closeSidebar();
    };

    const handleRoleSelect = (role) => {
        setSelectedRole(role);
        setRoleDropdownOpen(false);
        if (selectedUser) {
            setSelectedUser({ ...selectedUser, role: role });
        }
    };

    const getActivityIcon = (iconType) => {
        switch (iconType) {
            case 'login':
                return <User size={16} className="text-gray-600" />;
            case 'edit':
                return <Edit3 size={16} className="text-gray-600" />;
            case 'delete':
                return <Trash2 size={16} className="text-gray-600" />;
            default:
                return <Clock size={16} className="text-gray-600" />;
        }
    };

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
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
            sorter: (a, b) => a.name.localeCompare(b.name),
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            sorter: (a, b) => a.email.localeCompare(b.email),
        },
        {
            title: 'Role',
            dataIndex: 'role',
            key: 'role',
            sorter: (a, b) => a.role.localeCompare(b.role),
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (status) => (
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${status === 'Active' ? 'bg-[#59BA89] text-white' : 'bg-[#DC3545] text-white'}`}>
                    {status}
                </span>
            ),
            sorter: (a, b) => a.status.localeCompare(b.status),
        },
        {
            title: 'Actions',
            key: 'action',
            render: (_, record) => (
                <div className="flex items-center gap-2">
                    <Switch
                        checked={record.isActive}
                        onChange={() => handleToggleStatus(record.key)}
                        size="small"
                        style={{ backgroundColor: '#01575C' }}
                    />
                    <span className="text-sm text-gray-600">
                        {record.isActive ? 'Activate' : 'Deactivate'}
                    </span>
                </div>
            ),
        },
    ];

    const redirecToAddUser = () => {
        navigate('/main-dashboard/user-management/add-user');
    };

const filteredData = users.filter(item =>
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

            buttons.push(
                <button
                    key={1}
                    onClick={() => handlePageChange(1)}
                    className={`w-8 h-8 flex items-center justify-center rounded-full ${currentPage === 1 ? 'bg-black text-white' : 'hover:bg-gray-100'}`}
                >
                    1
                </button>
            );

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
        <div className="rethink-sans-400 mt-10 relative">
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/30 bg-opacity-50 z-40"
                    onClick={closeSidebar}
                />
            )}

            {deleteModalVisible && (
                <div className="fixed inset-0 bg-black/50 bg-opacity-50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl shadow-xl max-w-md w-full mx-4 relative">
                        <div className="flex items-center justify-between p-6 pb-4">
                            <h2 className="text-xl font-semibold text-gray-900">Delete User</h2>
                            <button 
                                onClick={handleDeleteCancel}
                                className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                            >
                                <X size={20} className="text-gray-500" />
                            </button>
                        </div>

                        <div className="px-6 pb-6">
                            {selectedUser && (
                                <>
                                    <div className="flex justify-center mb-6">
                                        <img 
                                            src={selectedUser.photo || "/placeholder.svg"} 
                                            alt={selectedUser.name}
                                            className="w-24 h-24 rounded-full object-cover"
                                        />
                                    </div>

                                    <div className="text-center mb-6">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                            Remove {selectedUser.name}?
                                        </h3>
                                        <p className="text-gray-600 text-sm">
                                            This action cannot be undone.
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-3 mb-8">
                                        <div 
                                            onClick={() => setConfirmDeletion(!confirmDeletion)}
                                            className="cursor-pointer"
                                        >
                                            <div className={`w-5 h-5 border-2 rounded ${confirmDeletion ? 'bg-teal-600 border-teal-600' : 'border-gray-300'} flex items-center justify-center`}>
                                                {confirmDeletion && (
                                                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                )}
                                            </div>
                                        </div>
                                        <label 
                                            onClick={() => setConfirmDeletion(!confirmDeletion)}
                                            className="text-sm text-gray-700 cursor-pointer"
                                        >
                                            Confirm deletion
                                        </label>
                                    </div>

                                    <div className="flex gap-3">
                                        <button 
                                            onClick={handleDeleteCancel}
                                            className="flex-1 px-4 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                                        >
                                            Cancel
                                        </button>
                                        <button 
                                            onClick={handleDeleteConfirm}
                                            disabled={!confirmDeletion}
                                            className={`flex-1 px-4 py-2.5 rounded-lg font-medium transition-colors ${
                                                confirmDeletion 
                                                    ? 'bg-red-600 text-white hover:bg-red-700' 
                                                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                            }`}
                                        >
                                            Delete User
                                        </button>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}

            <div className={`fixed top-0 right-0 h-full md:w-96 w-full bg-white shadow-xl z-50 transform transition-transform duration-500 ease-in-out ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'} overflow-y-auto`}>
                {selectedUser && (
                    <div className="h-full flex flex-col">
                        <div className="p-6 sticky top-0 bg-white z-10">
                            <button
                                onClick={closeSidebar}
                                className="absolute top-2 right-6 cursor-pointer p-2 border border-slate-500 rounded-md"
                            >
                                <X size={20} className="text-gray-600" />
                            </button>
                        </div>

                        <div className="p-6 border-b border-gray-200">
                            <div className="flex flex-col items-center text-center mb-6">
                                <img
                                    src={selectedUser.photo || "/placeholder.svg"}
                                    alt={selectedUser.name}
                                    className="w-20 h-20 rounded-full object-cover mb-4"
                                />
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                    <input
                                        type="text"
                                        value={selectedUser.name}
                                        className="w-full px-3 py-2 bg-[#F5F8F8] outline-none text-sm rounded-md"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                    <input
                                        type="email"
                                        value={selectedUser.email}
                                        className="w-full px-3 py-2 bg-[#F5F8F8] outline-none text-sm rounded-md"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                                    <div className="relative">
                                        <input
                                            type="password"
                                            value={selectedUser.password}
                                            className="w-full px-3 py-2 bg-[#F5F8F8] outline-none text-sm rounded-md"
                                        />
                                        <button className="absolute right-3 top-2.5">
                                            <Edit3 size={16} className="text-teal-600" />
                                        </button>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Role & Permissions</label>
                                    <div className="relative">
                                        <button
                                            onClick={() => setRoleDropdownOpen(!roleDropdownOpen)}
                                            className="w-full px-3 py-2 bg-[#F5F8F8] outline-none text-sm rounded-md text-left flex items-center justify-between"
                                        >
                                            <span>{selectedRole}</span>
                                            <MdOutlineKeyboardArrowDown className={`text-gray-400 transition-transform ${roleDropdownOpen ? 'rotate-180' : ''}`} size={16} />
                                        </button>

                                        {roleDropdownOpen && (
                                            <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-md shadow-lg z-50 max-h-80 overflow-y-auto">
                                                <div className="p-4 border-b border-gray-200">
                                                    <div className="flex items-center justify-between">
                                                        <h3 className="text-sm font-medium text-gray-900">Select an option</h3>
                                                        <button className="text-teal-600 text-sm hover:text-teal-700 flex items-center gap-1">
                                                            Edit Roles
                                                            <Edit3 size={12} />
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="p-2">
                                                    {roleOptions.map((role) => (
                                                        <div
                                                            key={role.value}
                                                            onClick={() => handleRoleSelect(role.value)}
                                                            className="flex items-start gap-3 p-3 hover:bg-gray-50 cursor-pointer rounded-md"
                                                        >
                                                            <div className="flex-shrink-0 mt-0.5">
                                                                <div className={`w-4 h-4 border-2 rounded ${selectedRole === role.value ? 'bg-teal-600 border-teal-600' : 'border-gray-300'} flex items-center justify-center`}>
                                                                    {selectedRole === role.value && (
                                                                        <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                                        </svg>
                                                                    )}
                                                                </div>
                                                            </div>
                                                            <div className="flex-1">
                                                                <div className="font-medium text-gray-900 text-sm">{role.label}</div>
                                                                <div className="text-xs text-gray-500 mt-1">{role.description}</div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-medium text-gray-700">Account Status</span>
                                    <div className="flex items-center gap-2">
                                        <Switch
                                            checked={selectedUser.isActive}
                                            size="small"
                                            style={{ backgroundColor: selectedUser.isActive ? '#10B981' : '#6B7280' }}
                                        />
                                        <span className="text-sm text-gray-600">
                                            {selectedUser.isActive ? 'Activated' : 'Deactivated'}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 p-6 overflow-y-auto">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Activity log</h3>
                            <div className="mb-4">
                                <div className="flex items-center gap-2 text-sm">
                                    <span className="font-medium">Last Active:</span>
                                    <span className="text-green-600 font-medium">{selectedUser.lastActive}</span>
                                </div>
                            </div>

                            <div className="space-y-3">
                                {selectedUser.activityLog.map((activity, index) => (
                                    <div key={index} className="flex items-center gap-3 py-2">
                                        <div className="flex-shrink-0">
                                            {getActivityIcon(activity.icon)}
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                                            <p className="text-xs text-gray-500">{activity.time}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="p-6 border-t border-gray-200 flex md:flex-row flex-col gap-3 sticky bottom-0 bg-white">
                            <button
                                onClick={showDeleteModal}
                                className="flex-1 px-4 py-2 text-sm text-red-600 cursor-pointer transition-colors flex items-center justify-center gap-2"
                            >
                                <Trash2 size={16} />
                                Delete User
                            </button>
                            <button
                                onClick={handleSaveChanges}
                                className="flex-1 px-4 py-2 text-sm bg-gray-600 text-white rounded-md cursor-pointer hover:bg-gray-700 transition-colors"
                            >
                                Save Changes
                            </button>
                        </div>
                    </div>
                )}
            </div>

            <div className="">
                <header className="flex md:justify-between justify-start md:flex-row flex-col md:items-center items-start md:gap-0 gap-4 mb-6">
                    <div>
                        <h1 className='text-2xl rethink-sans-700'>User Management</h1>
                        <p className='rethink-sans-400 text-gray-700'>Manage user accounts, roles, and permissions.</p>
                    </div>
                    <div className="flex gap-2">
                        <button className="flex items-center rethink-sans-400 gap-1 px-5 py-2 border border-gray-700 rounded-md bg-white md:text-sm text-xs">
                            <span className="inline">Many Options</span>
                            <MdOutlineKeyboardArrowDown size={16} />
                        </button>
                        <button onClick={showModal} className="flex items-center rethink-sans-400 gap-1 px-5 py-2 bg-[#01575C] text-white rounded-md md:text-sm text-xs">
                            <Plus size={16} />
                            <span className="inline">Add User</span>
                        </button>
                        <AddUser visible={isModalVisible} onCancel={handleCancel} onSubmit={handleSubmit} />
                    </div>
                </header>

                <div className="bg-white rounded-xl shadow-sm lg:p-6 p-3">
                    <div className='flex md:justify-between justify-start flex-col md:flex-row md:items-center items-start'>
                        <div className="mb-4">
                            <h2 className="text-lg rethink-sans-500 mb-1">Members</h2>
                        </div>
                        <div className='flex justify-end items-center'>
                            <div className="relative mb-4">
                                <input
                                    type="text"
                                    placeholder="Search users"
                                    className="pl-8 pr-4 py-2 rethink-sans-400 outline-none bg-[#F8FAFA] rounded-md text-sm"
                                    value={searchText}
                                    onChange={(e) => setSearchText(e.target.value)}
                                />
                                <Search size={16} className="absolute left-2.5 top-2.5 text-gray-400" />
                            </div>
                        </div>
                    </div>
                    <div className='rethink-sans-400'>
                        <Table
                            columns={columns}
                            dataSource={filteredData}
                            pagination={false}
                            className="user-table md:mt-10 mt-3 h-[45vh]"
                            rowClassName="hover:bg-gray-50 cursor-pointer"
                            size="middle"
                            scroll={{ x: 800 }}
                            onRow={(record) => ({
                                onClick: () => handleRowClick(record),
                            })}
                        />
                    </div>

                    <div className='h-[1px] border border-slate-100/70'></div>

                    <div className="flex md:justify-between justify-center md:items-center items-start gap-4 md:flex-row flex-col mt-8">
                        <div className="flex items-center">
                            <span className="text-sm text-gray-700 rethink-sans-400 mr-2">Rows per page:</span>
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

export default UserList;