import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import CropImage from '../../../public/images/ChatGPT Image May 23, 2025, 12_13_59 PM 1-roles.png'
import { useState } from 'react'
import AddRole from './add-role'
import { Search } from 'react-feather'

const RolesAndPermission = () => {
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [activeTab, setActiveTab] = useState("roles") // Default to roles tab
    const [searchText, setsearchText] = useState("")

    const showModal = () => {
        setIsModalVisible(true)
    }

    const handleCancel = () => {
        setIsModalVisible(false)
    }

    const handleSubmit = (taskData) => {
        console.log("New task created:", taskData)
        setIsModalVisible(false)
    }

    const renderTabContent = () => {
        switch (activeTab) {
            case "security":
                return (
                    <div className="flex flex-col items-center justify-center py-8">
                        <div className="relative w-34 h-34 mb-2">
                            <div>
                                <img src={CropImage} alt="Security illustration" />
                            </div>
                        </div>
                        <h2 className="text-xl rethink-sans-700 text-gray-900 mb-1">Security Settings</h2>
                        <p className="text-sm text-gray-500 mb-4 rethink-sans-400">Manage your account security settings and preferences.</p>
                        <p className="text-sm text-gray-500 mb-4 rethink-sans-400">Security features are coming soon.</p>
                    </div>
                )
            case "roles":
                return (
                    <div className="flex flex-col items-center justify-center py-8">
                        <div className="relative w-34 h-34 mb-2">
                            <div>
                                <img src={CropImage} alt="Roles illustration" />
                            </div>
                        </div>
                        <h2 className="text-xl rethink-sans-700 text-gray-900 mb-1">No Roles & Permissions Created</h2>
                        <p className="text-sm text-gray-500 mb-4 rethink-sans-400">Manage roles and permissions for users within the platform.</p>
                        <button onClick={showModal} className="bg-[#01575C] rethink-sans-400 cursor-pointer hover:bg-teal-900 text-white px-6 py-2 rounded-md text-sm transition-colors">
                            Add Roles
                        </button>
                        <AddRole visible={isModalVisible} onCancel={handleCancel} onSubmit={handleSubmit} />
                    </div>
                )
            case "subscription":
                return (
                    <div className="flex flex-col items-center justify-center py-8">
                        <div className="relative w-34 h-34 mb-2">
                            <div>
                                <img src={CropImage} alt="Subscription illustration" />
                            </div>
                        </div>
                        <h2 className="text-xl rethink-sans-700 text-gray-900 mb-1">Subscription Management</h2>
                        <p className="text-sm text-gray-500 mb-4 rethink-sans-400">View and manage your subscription plans and billing.</p>
                        <p className="text-sm text-gray-500 mb-4 rethink-sans-400">Subscription features are coming soon.</p>
                    </div>
                )
            case "notification":
                return (
                    <div className="flex flex-col items-center justify-center py-8">
                        <div className="relative w-34 h-34 mb-2">
                            <div>
                                <img src={CropImage} alt="Notification illustration" />
                            </div>
                        </div>
                        <h2 className="text-xl rethink-sans-700 text-gray-900 mb-1">Notification Settings</h2>
                        <p className="text-sm text-gray-500 mb-4 rethink-sans-400">Configure your notification preferences.</p>
                        <p className="text-sm text-gray-500 mb-4 rethink-sans-400">Notification settings are coming soon.</p>
                    </div>
                )
            case "api":
                return (
                    <div className="flex flex-col items-center justify-center py-8">
                        <div className="relative w-34 h-34 mb-2">
                            <div>
                                <img src={CropImage} alt="API illustration" />
                            </div>
                        </div>
                        <h2 className="text-xl rethink-sans-700 text-gray-900 mb-1">API & System Settings</h2>
                        <p className="text-sm text-gray-500 mb-4 rethink-sans-400">Manage API keys and system configurations.</p>
                        <p className="text-sm text-gray-500 mb-4 rethink-sans-400">API & System features are coming soon.</p>
                    </div>
                )
            default:
                return null
        }
    }

    return (
        <div className="mt-10">
            <div className="flex md:justify-between justify-start md:flex-row flex-col md:items-center items-start md:gap-0 gap-4 mb-6">
                <div>
                    <h1 className="text-2xl rethink-sans-700 ">Anthony Gutkowski</h1>
                    <p className="rethink-sans-400 text-gray-700">Manage your personal account.</p>
                </div>
                <button className="flex items-center rethink-sans-400 gap-1 px-5 py-2 border border-gray-700 rounded-md md:text-sm text-xs">
                    <span className="inline">Edit Profile</span>
                    <MdOutlineKeyboardArrowDown size={16} />
                </button>
            </div>
            <div className='bg-white rounded-lg shadow-sm p-8'>
                <div className="flex md:justify-between justify-start flex-col md:flex-row md:items-center items-start">
                    <div className="">
                        {/* Tab Toggle Switch */}
                        <div className="flex items-center md:gap-4 gap-2 ">
                            <div className="flex bg-gray-100 rounded-lg p-1">
                                <button
                                    onClick={() => setActiveTab("security")}
                                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === "security" ? "bg-green-600 text-white shadow-sm" : "text-gray-600 hover:text-gray-900"
                                        }`}
                                >
                                    Security
                                </button>
                                <button
                                    onClick={() => setActiveTab("roles")}
                                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === "roles"
                                            ? "bg-green-600 text-white shadow-sm"
                                            : "text-gray-600 hover:text-gray-900"
                                        }`}
                                >
                                    Roles
                                </button>
                                <button
                                    onClick={() => setActiveTab("subscription")}
                                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === "subscription"
                                            ? "bg-green-600 text-white shadow-sm"
                                            : "text-gray-600 hover:text-gray-900"
                                        }`}
                                >
                                    Subscription
                                </button>
                                <button
                                    onClick={() => setActiveTab("notification")}
                                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === "notification"
                                            ? "bg-green-600 text-white shadow-sm"
                                            : "text-gray-600 hover:text-gray-900"
                                        }`}
                                >
                                    Notification
                                </button>
                                <button
                                    onClick={() => setActiveTab("api")}
                                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === "api"
                                            ? "bg-green-600 text-white shadow-sm"
                                            : "text-gray-600 hover:text-gray-900"
                                        }`}
                                >
                                    API & System
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex md:justify-end justify-start md:mb-0 mb-6 items-center">
                        <div className="flex items-center gap-5">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder={`Search ${activeTab}`}
                                    className="pr-4 py-2 pl-8 rethink-sans-400 outline-none bg-[#F8FAFA] rounded-md text-sm"
                                    value={searchText}
                                    onChange={(e) => setsearchText(e.target.value)}
                                />
                                <Search size={16} className="absolute md:block hidden left-2 top-2.5 text-gray-400" />
                            </div>
                        </div>
                    </div>
                </div>

                {renderTabContent()}
            </div>
        </div>
    )
}

export default RolesAndPermission