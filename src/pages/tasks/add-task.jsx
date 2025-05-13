/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from "react"
import {
    FlagIcon as FlagOutlined,
    CalendarIcon as CalendarOutlined,
    CircleIcon as ClockCircleFilled,
    X,
} from "lucide-react"
import { LuUsers } from "react-icons/lu";
import { LuFlag } from "react-icons/lu";

import { CiCalendarDate } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const AddTaskModal = ({ visible, onCancel, onSubmit }) => {
    const navigate = useNavigate();
    const [taskName, setTaskName] = useState("")
    const [description, setDescription] = useState("")
    const [priority, setPriority] = useState("medium")
    const [dueDate, setDueDate] = useState("")
    const [status, setStatus] = useState("todo")
    const [isVisible, setIsVisible] = useState(false)
    const modalRef = useRef(null)

    // Handle animation states
    useEffect(() => {
        if (visible) {
            setIsVisible(true)
        } else {
            setTimeout(() => setIsVisible(false), 300)
        }
    }, [visible])

    const handleSubmit = () => {
        navigate("/main-dashboard/task-manager/task-list")
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target) && visible) {
                onCancel()
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [visible, onCancel])

    if (!isVisible && !visible) return null

    return (
        <div
            className={`fixed inset-0 z-50 p-3  flex items-center justify-center ${visible ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}
        >
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[4px]" />

            <div
                ref={modalRef}
                className={`bg-white rounded-lg w-full max-w-[500px] shadow-xl z-10 transform ${visible ? "scale-100 opacity-100" : "scale-95 opacity-0"} transition-all duration-500`}
            >
                <div className="p-4 border-b flex justify-between items-center">
                    <h3 className="text-lg rethink-sans-400">New Task</h3>
                    <div>
                        <X  onClick={onCancel}  size={18} className="cursor-pointer" />
                    </div>
                </div>

                <div className="py-4 px-4 rethink-sans-400 max-w-sm mx-auto w-full">
                    <div className="mb-4">
                        <p className="text-xs text-gray-500 mb-1">Task Name</p>
                        <input
                            type="text"
                            placeholder="Add a task name"
                            value={taskName}
                            onChange={(e) => setTaskName(e.target.value)}
                            className="w-full  text-sm cursor-pointer rounded-md px-3 outline-none py-2 bg-[#F5F8F8]"
                        />
                    </div>

                    <div className="mb-4">
                        <textarea
                            placeholder="Write something or type '/' for commands"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full  text-sm cursor-pointer rounded-md outline-none px-3 py-2 min-h-[80px] bg-[#F5F8F8]"
                        />
                    </div>

                    <div className="mb-4">
                        <p className="text-xs text-gray-500 mb-1">Status</p>
                        <select
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            className="w-full  text-sm cursor-pointer  outline-none rounded-md px-3 py-2 bg-[#F5F8F8]"
                        >
                            <option value="todo">To Do</option>
                            <option value="inProgress">In Progress</option>
                            <option value="completed">Completed</option>
                        </select>
                    </div>

                    <div className="flex gap-3 mb-6 flex-wrap">
                        <button
                            className={`flex items-center px-3 border border-slate-200 text-gray-600 text-sm cursor-pointer py-1.5 rounded-md `}
                        >
                            <LuUsers className="w-4 h-4 mr-1" />
                            Assignee
                        </button>

                        <div className="flex items-center px-3 border border-slate-200 text-sm cursor-pointer py-1.5 rounded-md  text-gray-600">
                            <CiCalendarDate className="w-4 h-4 mr-1" />
                            Due Date
                        </div>

                        <button className="flex items-center text-sm border border-slate-200 cursor-pointer px-3 py-1.5 rounded-md  text-gray-600">
                            <LuFlag className="w-4 h-4 mr-1" />
                            Priority
                        </button>
                    </div>


                </div>
                <div className="border-t p-4 border-slate-200 w-full rethink-sans-400">


                    <div className="flex  justify-center items-center gap-2">
                        <button
                            onClick={onCancel}
                            className="px-6    py-2  rounded-md text-sm cursor-pointer text-gray-700 border border-slate-500 hover:bg-gray-50 transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleSubmit}
                            className="px-4 py-2 bg-[#01575C] text-sm cursor-pointer hover:bg-teal-900 text-white rounded-md transition-colors"
                        >
                            Create Task
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddTaskModal
