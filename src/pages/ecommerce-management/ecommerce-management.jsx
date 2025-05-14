import { useState } from 'react'
import EcommerceImage from '../../../public/images/illustration-ecommerce.png'
import { Link } from 'react-router-dom'
import AddStoreItemModal from './add-store-item'


const EcommerceManagement = () => {
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
        <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="flex flex-col items-center justify-center py-8">
                <div className="relative w-34 h-34 mb-2">
                    <div>
                        <img src={EcommerceImage} alt="" />
                    </div>
                </div>  
                <h2 className="text-xl rethink-sans-700 text-gray-900 mb-1">No Store Items</h2>
                <p className="text-sm text-gray-500 mb-4 rethink-sans-400">We don’t have any items listed here
                so you can add them here.</p>

                    <button onClick={showModal} className="bg-[#01575C] rethink-sans-400 cursor-pointer hover:bg-teal-900 text-white px-6 py-2  rounded-md text-sm transition-colors">
                        Add Store Item
                    </button>
                <AddStoreItemModal visible={isModalVisible} onCancel={handleCancel} onSubmit={handleSubmit} />

            </div>
        </div>
    )
}

export default EcommerceManagement
