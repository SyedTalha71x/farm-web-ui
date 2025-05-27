import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import CropImage from '../../../public/images/ChatGPT Image May 23, 2025, 12_13_59 PM 1.png'
import { Link } from 'react-router-dom'
import AddUser from './add-user'
import { useState } from 'react'



const UserManagement = () => {
          const [isModalVisible, setIsModalVisible] = useState(false)
        
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
    return (
        <div className="mt-10">
            <div className="flex md:justify-between justify-start md:flex-row flex-col md:items-center items-start md:gap-0 gap-4 mb-6">
                <div>
                    <h1 className="text-2xl rethink-sans-700 ">User Management</h1>
                    <p className="rethink-sans-400 text-gray-700">Manage user accounts, roles, and permissions.</p>
                </div>
                <button className="flex items-center rethink-sans-400 gap-1 px-5 py-2 border border-gray-700 rounded-md md:text-sm text-xs">
                    <span className="inline">Many Options</span>
                    <MdOutlineKeyboardArrowDown size={16} />
                </button>
            </div>
            <div className='bg-white rounded-lg shadow-sm p-8'>


                <div className="flex flex-col items-center justify-center py-8">
                    <div className="relative w-34 h-34 mb-2">
                        <div>
                            <img src={CropImage} alt="" />
                        </div>
                    </div>

                    <h2 className="text-xl rethink-sans-700 text-gray-900 mb-1">No User Added</h2>
                    <p className="text-sm text-gray-500 mb-4 rethink-sans-400">Add a new sub-admins here to see them here.</p>

                        <button onClick={showModal} className="bg-[#01575C] rethink-sans-400 cursor-pointer hover:bg-teal-900 text-white px-6 py-2  rounded-md text-sm transition-colors">
                            Add User
                        </button>

                        <AddUser visible={isModalVisible} onCancel={handleCancel} onSubmit={handleSubmit} />

                </div>
            </div>
        </div>
    )
}

export default UserManagement
