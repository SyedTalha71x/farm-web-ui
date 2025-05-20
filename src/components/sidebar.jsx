/* eslint-disable no-unused-vars */
import { NavLink } from "react-router-dom"
import { X } from "lucide-react"

// React Icons
import { FiHome, FiPieChart, FiShoppingBag } from "react-icons/fi"
import { GiPlantSeed } from "react-icons/gi"
import { FaCow } from "react-icons/fa6"
import { BsListTask } from "react-icons/bs"

import Sidebarlogo from '../../public/images/Logo Mark-dashboard.svg'

const Sidebar = ({ isOpen, toggleSidebar, isClose }) => {
    return (
        <div
            className={`bg-[#FFFFFF] w-64 border-r border-gray-200 p-2 fixed inset-y-0 left-0 z-40 transition-transform duration-500 ease-in-out md:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"
                }`}
        >
            <div onClick={isClose} className="absolute md:hidden top-2 right-2 cursor-pointer">
                <X />
            </div>
            <div className="flex items-center p-4">
                <div>
                    <img src={Sidebarlogo} alt="Logo" />
                </div>
                <span className="ml-2 text-gray-800 rethink-sans-700">Lucolyx Design</span>
            </div>

            <nav className="mt-4 px-2">
                <div className="space-y-1">
                    <NavItem to="/main-dashboard" icon={FiHome} text="Dashboard" isClose={isClose} />
                    <NavItem to="/main-dashboard/crop-management" icon={GiPlantSeed} text="Crop Management" isClose={isClose} />
                    <NavItem to="/main-dashboard/finance-analytics" icon={FiPieChart} text="Finance & Analytics" isClose={isClose} />
                    <NavItem to="/main-dashboard/animal-management" icon={FaCow} text="Animal Management" isClose={isClose} />
                    <NavItem to="/main-dashboard/task-manager" icon={BsListTask} text="Task Manager" isClose={isClose} />
                    <NavItem to="/main-dashboard/ecommerce" icon={FiShoppingBag} text="Ecommerce Store" isClose={isClose} />
                </div>
            </nav>
        </div>
    )
}

const NavItem = ({ icon: Icon, text, to, isClose }) => {
    return (
        <NavLink
            to={to}
            onClick={isClose} // 👈 Close sidebar on navigation
            className={({ isActive }) =>
                `flex items-center px-3 py-3 rethink-sans-500 text-sm rounded-lg transition-colors ${
                    isActive
                        ? "bg-[#17A24A] text-white font-medium"
                        : "text-gray-600 hover:bg-gray-100"
                }`
            }
        >
            {({ isActive }) => (
                <>
                    <Icon className={`w-5 h-5 mr-3 ${isActive ? "text-white" : "text-gray-400"}`} />
                    {text}
                </>
            )}
        </NavLink>
    )
}

export default Sidebar
