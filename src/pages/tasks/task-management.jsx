import { useState } from "react"
import TaskImage from "../../../public/images/illustration.png"
import AddTaskModal from "./add-task"

const CropManagement = () => {
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
            <img src={TaskImage || "/placeholder.svg"} alt="No tasks" />
          </div>
        </div>

        <h2 className="text-xl rethink-sans-700 text-gray-900 mb-1">No Tasks Listed</h2>
        <p className="text-sm text-gray-500 text-center mb-4 rethink-sans-400">Add a new task to see it listed here.</p>

        <button
          onClick={showModal}
          className="bg-[#01575C] cursor-pointer hover:bg-teal-900 text-white px-6 py-2 rounded-md text-sm transition-colors"
        >
          Add Task  
        </button>
      </div>

      <AddTaskModal visible={isModalVisible} onCancel={handleCancel} onSubmit={handleSubmit} />
    </div>
  )
}

export default CropManagement
