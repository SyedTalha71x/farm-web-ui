import { useState } from "react"
import { Search, Plus, ArrowUpDown, X, Calendar, ChevronDown, Trash2 } from "lucide-react"
import Avatar from "../../../public/images/avatar.svg"
import { LuFlag } from "react-icons/lu"
import BackBtn from '../../../public/images/Vector (1).png'
import Flag from '../../../public/images/priorty.png'

import AddTaskModal from "./add-task"

function TaskList() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Add Animals to Database",
      date: "Mon, 21 Apr",
      dueDate: "Apr 21, 2025",
      tasker: "M Garcia",
      taskerProfile: Avatar,
      priority: "High",
      completed: false,
      status: "To Do",
      description: "Add Animals to Database",
    },
    {
      id: 2,
      title: "Manage Company Finances",
      date: "Mon, 21 Apr",
      dueDate: "Apr 21, 2025",
      tasker: "M Garcia",
      taskerProfile: Avatar,
      priority: "High",
      completed: false,
      status: "To Do",
      description: "Manage Company Finances",
    },
    {
      id: 3,
      title: "Work on E-commerce Store",
      date: "Mon, 21 Apr",
      dueDate: "Apr 21, 2025",
      tasker: "M Garcia",
      taskerProfile: Avatar,
      priority: "Medium",
      completed: false,
      status: "To Do",
      description: "Work on E-commerce Store",
    },
    {
      id: 4,
      title: "Audit Company Finances",
      date: "Mon, 21 Apr",
      dueDate: "Apr 21, 2025",
      tasker: "M Garcia",
      taskerProfile: Avatar,
      priority: "Low",
      completed: false,
      status: "To Do",
      description: "Audit Company Finances",
    },
    {
      id: 5,
      title: "Farm New Crops",
      date: "Mon, 23 Apr",
      dueDate: "Apr 23, 2025",
      tasker: "M Garcia",
      taskerProfile: Avatar,
      priority: "Medium",
      completed: false,
      status: "To Do",
      description: "Farm New Crops",
    },
  ])
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

  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTask, setSelectedTask] = useState(null)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleTaskCompletion = (id, e) => {
    e.stopPropagation() // Prevent opening sidebar when clicking checkbox
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)))
  }

  const handleTaskClick = (task) => {
    setSelectedTask(task)
    // First set the task, then trigger the animation
    setTimeout(() => {
      setIsSidebarOpen(true)
    }, 50)
  }

  const closeSidebar = () => {
    // First close the sidebar with animation
    setIsSidebarOpen(false)
    // Then remove the selected task after animation completes
    setTimeout(() => {
      setSelectedTask(null)
    }, 500) // Match this with the transition duration
  }

  const filteredTasks = tasks.filter((task) => task.title.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <div className="min-h-screen relative">
      <div className="w-full">
        <header className="flex md:justify-end justify-start items-center mb-6">
          <div className="flex gap-2">
            <button className="flex items-center rethink-sans-400 gap-1 px-5 py-2 border border-gray-700 rounded-md bg-white md:text-sm text-xs">
              <ArrowUpDown size={16} />
              <span className="inline">Sort By: Default</span>
            </button>
            <button onClick={showModal} className="flex items-center rethink-sans-400 gap-1 px-5 py-2 bg-[#01575C] text-white rounded-md md:text-sm text-xs">
              <Plus size={16} />
              <span className="inline">Add New Task</span>
            </button>

            <AddTaskModal visible={isModalVisible} onCancel={handleCancel} onSubmit={handleSubmit} />
          </div>
        </header>

        <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
          <div className="flex flex-col border-b border-slate-200 md:flex-row md:justify-between justify-start md:items-center items-start">
            <div className="mb-4">
              <h2 className="text-xl rethink-sans-700 text-black">
                <span className="rethink-sans-700 text-[#17A24A]">{tasks.length} Tasks</span> due Today
              </h2>
              <p className="text-md rethink-sans-400 mt-1 text-gray-500">
                {" "}
                <span className="text-black rethink-sans-700 ">10 Tasks</span> scheduled for Tomorrow
              </p>
            </div>
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Search tasks"
                className="pl-8 pr-4 py-2 rethink-sans-400 outline-none bg-[#F8FAFA] rounded-md text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search size={16} className="absolute left-2.5 top-2 text-gray-400" />
            </div>
          </div>

          <div className="space-y-3 mt-8">
            {filteredTasks.map((task) => (
              <div
                key={task.id}
                className="flex items-start gap-3 p-3 border border-gray-100 rounded-md hover:bg-gray-50 cursor-pointer"
                onClick={() => handleTaskClick(task)}
              >
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={(e) => toggleTaskCompletion(task.id, e)}
                  className="mt-1 h-5 w-5 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                />
                <div className="flex-1">
                  <h3 className={`rethink-sans-500 ${task.completed ? "line-through text-gray-400" : "text-gray-800"}`}>
                    {task.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-1 rethink-sans-400 text-xs text-gray-500">
                    <span className="flex items-center">
                      <svg
                        className="w-3 h-3 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      {task.date}
                    </span>
                    <span className="flex items-center gap-2">
                      <div>
                        <img src={task.taskerProfile || "/placeholder.svg"} className="h-4 w-4" alt="" />
                      </div>
                      {task.tasker}
                    </span>
                    <span
                      className={`flex items-center gap-1 px-1.5 py-0.5 rounded-sm text-xs ${task.priority === "High"
                        ? "text-red-600"
                        : task.priority === "Medium"
                          ? "text-orange-600"
                          : "text-blue-600"
                        }`}
                    >
                      <LuFlag size={12} className="shrink-0" />
                      {task.priority}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <footer className="mt-10 text-sm w-full text-gray-900 rethink-sans-500 p-4 border-t border-slate-200">
            Footer
          </footer>
        </div>
      </div>

      {selectedTask && (
        <>
          <div
            className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-500 ease-in-out ${isSidebarOpen ? "opacity-100" : "opacity-0"
              }`}
            onClick={closeSidebar}
          ></div>
          <div
            className={`md:w-[380px] w-full bg-white border-l border-gray-200 h-screen fixed right-0 top-0 overflow-y-auto shadow-lg z-50 transition-transform duration-500 ease-in-out ${isSidebarOpen ? "translate-x-0" : "translate-x-full"
              }`}
          >
            <div className="p-4  flex justify-between items-center">
              <button onClick={closeSidebar} className="text-gray-500 hover:text-gray-700">
                <img src={BackBtn} alt="" />
              </button>
            </div>

            <div className="p-4 space-y-4 rethink-sans-400">
              <div className="bg-[#F5F8F8] p-4 rounded-md">
                <h3 className="text-sm text-gray-500 mb-1">Task Name</h3>
                <h2 className="text-base ">{selectedTask.title}</h2>
              </div>

              <div>
                <h3 className="text-sm text-gray-500 mb-1">Description</h3>
                <textarea
                  className="w-full p-2 text-sm border-none outline-none rounded-md min-h-[100px] bg-[#F5F8F8]"
                  defaultValue={selectedTask.description}
                ></textarea>
              </div>

              <div className="text-sm text-gray-500">Updated on {selectedTask.date}</div>

              <div>
                <h3 className="text-sm text-gray-500 mb-1">Due Date</h3>
                <div className="flex items-center justify-between text-sm border-none rounded-md p-4 bg-[#F5F8F8]">
                  <span>{selectedTask.dueDate}</span>
                  <Calendar size={16} className="text-teal-600" />
                </div>
              </div>

              <div>
                <h3 className="text-sm text-gray-500 mb-1">Assignee</h3>
                <div className="flex items-center bg-[#F5F8F8] justify-between border-none rounded-md p-4">
                  <div className="flex items-center gap-2">
                    <img
                      src={selectedTask.taskerProfile || "/placeholder.svg"}
                      className="h-6 w-6 rounded-full"
                      alt=""
                    />
                    <span>{selectedTask.tasker}</span>
                  </div>
                  <ChevronDown size={16} className="text-gray-400" />
                </div>
              </div>

              <div>
                <h3 className="text-sm text-gray-500 mb-1">Status</h3>
                <div className="flex items-center justify-between bg-[#F5F8F8] border-none rounded-md p-4">
                  <span>{selectedTask.status}</span>
                  <ChevronDown size={16} className="text-gray-400" />
                </div>
              </div>

              <div>
                <h3 className="text-sm text-gray-500 mb-1">Priority</h3>
                <div className="flex gap-2">
                  <button
                    className={`px-4 py-2 text-sm rounded-md flex items-center gap-1 ${selectedTask.priority === "High"
                      ? "bg-[#DC3545] text-white"
                      : "bg-transparent text-[#DC3545] border border-[DC3545]"
                      }`}
                  >
                    {/* <img src={Flag} alt="" /> */}
                    <LuFlag className="mr-1" />
                    <span>High</span>
                    {selectedTask.priority === "High" && <X size={14} />}
                  </button>
                  <button
                    className={`px-4 py-2 text-sm rounded-md flex items-center gap-1 ${selectedTask.priority === "Medium"
                      ? "bg-orange-500 text-white"
                      : "text-[#ff9844] border border-[#ff9844]"
                      }`}
                  >
                    {/* <img src={Flag} alt="" className="bg-" /> */}
                    <LuFlag className="mr-1 text-[#ff9844]" />                    <span>Medium</span>
                  </button>
                  <button
                    className={`px-4 py-2 text-sm rounded-md flex items-center gap-1 ${selectedTask.priority === "Low"
                      ? "bg-blue-500 text-white"
                      : "bg-transparent text-gray-700 border border-slate-200/70"
                      }`}
                  >
                    {/* <img src={Flag} alt="" /> */}
                    <LuFlag className="mr-1" />                    <span>Low</span>
                  </button>
                </div>
              </div>


              {/* Note */}
              <div className="flex items-center border border-slate-100/70 text-sm gap-2 text-gray-500">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8 12H16M8 16H12M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.8214 2.48697 15.5291 3.33782 17L2.5 21.5L7 20.6622C8.47087 21.513 10.1786 22 12 22Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>None</span>
              </div>

              {/* Delete Task */}
              <div className="pt-4">
                <button className="w-full text-sm rethink-sans-400 cursor-pointer flex items-center justify-center gap-2 text-red-500 border-dashed border border-red-500 rounded-md py-2">
                  <Trash2 size={16} />
                  <span>Delete Task</span>
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default TaskList
