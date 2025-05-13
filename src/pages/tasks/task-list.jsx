
import { useState } from "react"
import { Search, Plus, ArrowUpDown } from "lucide-react"
import Avatar from '../../../public/images/avatar.svg'
import { LuFlag } from "react-icons/lu";


function TaskList() {
    const [tasks, setTasks] = useState([
        { id: 1, title: "Add Animals to Database", date: "Mon, 21 Apr", tasker: "John Doe", taskerProfile: Avatar, priority: "High", completed: false },
        { id: 2, title: "Manage Company Finances", date: "Mon, 21 Apr", tasker: "John Doe", taskerProfile: Avatar, priority: "High", completed: false },
        { id: 3, title: "Work on E-commerce Store", date: "Mon, 21 Apr", tasker: "John Doe", taskerProfile: Avatar, priority: "Medium", completed: false },
        { id: 4, title: "Audit Company Finances", date: "Mon, 21 Apr", tasker: "John Doe", taskerProfile: Avatar, priority: "Low", completed: false },
        { id: 5, title: "Farm New Crops", date: "Mon, 23 Apr", tasker: "John Doe", taskerProfile: Avatar, priority: "Medium", completed: false },
    ])

    const [searchQuery, setSearchQuery] = useState("")

    const toggleTaskCompletion = (id) => {
        setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)))
    }

    const filteredTasks = tasks.filter((task) => task.title.toLowerCase().includes(searchQuery.toLowerCase()))

    return (
        <div className="min-h-screen ">
            <div className="">
                <header className="flex md:justify-end justify-start  items-center mb-6">
                    <div className="flex gap-2">
                        <button className="flex items-center rethink-sans-400 gap-1 px-5 py-2 border border-gray-700 rounded-md bg-white md:text-sm text-xs">
                            <ArrowUpDown size={16} />
                            <span className="inline">Sort By: Default</span>
                            {/* <span className="sm:hidden">Sort</span> */}
                        </button>
                        <button className="flex items-center rethink-sans-400  gap-1 px-5 py-2 bg-[#01575C] text-white rounded-md md:text-sm text-xs">
                            <Plus size={16} />
                            <span className="inline">Add New Task</span>
                            {/* <span className="sm:hidden">New </span> */}
                        </button>
                    </div>
                </header>

                <div className="bg-white rounded-lg  shadow-sm p-4 sm:p-6">
                    <div className="flex flex-col border-b border-slate-200 md:flex-row       md:justify-between justify-start  md:items-center items-start ">
                        <div className="mb-4">
                            <h2 className="text-xl rethink-sans-700 text-black">
                                <span className="rethink-sans-700 text-[#17A24A]">{tasks.length} Tasks</span> due Today
                            </h2>
                            <p className="text-md rethink-sans-400 mt-1 text-gray-500"> <span className="text-black rethink-sans-700 ">10 Tasks</span> scheduled for Tomorrow</p>
                        </div>
                        <div className="relative mb-4   ">
                            <input
                                type="text"
                                placeholder="Search tasks"
                                className="pl-8 pr-4 py-2 rethink-sans-400 outline-none  bg-[#F8FAFA] rounded-md text-sm "
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <Search size={16} className="absolute left-2.5 top-2 text-gray-400" />
                        </div>
                    </div>

                    <div className="space-y-3 mt-8      ">
                        {filteredTasks.map((task) => (
                            <div
                                key={task.id}
                                className="flex items-start gap-3 p-3 border border-gray-100 rounded-md hover:bg-gray-50"
                            >
                                <input
                                    type="checkbox"
                                    checked={task.completed}
                                    onChange={() => toggleTaskCompletion(task.id)}
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
                                                <img src={task.taskerProfile} className="h-4 w-4" alt="" />
                                            </div>
                                            {task.tasker}
                                        </span>
                                        <span
                                            className={`flex items-center gap-1 px-1.5 py-0.5 rounded-sm text-xs ${task.priority === "High"
                                                ? " text-red-600"
                                                : task.priority === "Medium"
                                                    ? " text-orange-600"
                                                    : " text-blue-600"
                                                }`}
                                        >
                                            <LuFlag
                                                size={12} className="shrink-0" />
                                            {task.priority}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <footer className="mt-10  text-sm w-full text-gray-900 rethink-sans-500 p-4 border-t border-slate-200">Footer</footer>

                </div>

            </div>
        </div>
    )
}

export default TaskList
