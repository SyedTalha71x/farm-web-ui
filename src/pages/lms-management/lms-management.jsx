import CropImage from '../../../public/images/ChatGPT Image May 23, 2025, 12_13_59 PM 1-content.png'
import { useState } from 'react'
import AddContent from './add-content'



const LMSManagement = () => {
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
        <div className="md:mt-10 mt-5">
            <div className="flex md:justify-start justify-start md:flex-row flex-col md:items-center items-start md:gap-0 gap-4 mb-6">
                <div>
                    <h1 className="text-2xl rethink-sans-700 ">Content Management</h1>
                    <p className="rethink-sans-400 text-gray-700">Manage user certificates, courses and quizzes..</p>
                </div>
                
            </div>
            <div className='bg-white rounded-lg shadow-sm p-8'>


                <div className="flex flex-col items-center justify-center py-8">
                    <div className="relative w-34 h-34 mb-2">
                        <div>
                            <img src={CropImage} alt="" />
                        </div>
                    </div>

                    <h2 className="text-xl rethink-sans-700 text-gray-900 mb-1">No Content Added</h2>
                    <p className="text-sm text-gray-500 mb-4 rethink-sans-400">Add a new content to see it here.</p>

                        <button onClick={showModal} className="bg-[#01575C] rethink-sans-400 cursor-pointer hover:bg-teal-900 text-white px-6 py-2  rounded-md text-sm transition-colors">
                            Add Content
                        </button>

                        <AddContent visible={isModalVisible} onCancel={handleCancel} onSubmit={handleSubmit} />

                </div>
            </div>
        </div>
    )
}

export default LMSManagement
