/* eslint-disable no-unused-vars */
import { NavLink } from "react-router-dom"
import DashboardImage from '../../public/images/fi-rr-house-blank.svg'
import CropImage from '../../public/images/fi-sr-seedling.svg'
import FinanceImage from '../../public/images/fi-rr-chart-pie.svg'
import AnimalImage from '../../public/images/Vector.svg'
import TaskImage from '../../public/images/Vector (1).svg'
import EcommerceImage from '../../public/images/fi-rr-store-alt.svg'

import Sidebarlogo from '../../public/images/Logo Mark-dashboard.svg'
import { X } from "lucide-react"
const Sidebar = ({ isOpen, toggleSidebar, isClose }) => {
    return (
        <div
            className={`bg-[#FFFFFF] w-64 border-r border-gray-200 p-2 fixed inset-y-0 left-0 z-40 transition-transform duration-500 ease-in-out md:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"
                }`}
        >
            <div onClick={isClose} className="absolute md:hidden top-2 right-2 ">
                <X/>
            </div>
            <div className="flex items-center p-4 ">
                <div>
                    <img src={Sidebarlogo} alt="" />
                </div>
                <span className="ml-2 text-gray-800 rethink-sans-700">Lucolyx Design</span>
            </div>

            <nav className="mt-4 px-2">
                <div className="space-y-1">
                    <NavItem to="/main-dashboard" image={DashboardImage} text="Dashboard" />
                    <NavItem to="/main-dashboard/crop-management" image={CropImage} text="Crop Management" />
                    <NavItem to="/main-dashboard/finance-analytics" image={FinanceImage} text="Finance & Analytics" />
                    <NavItem to="/main-dashboard/animal-management" image={AnimalImage} text="Animal Management" />
                    <NavItem to="/main-dashboard/task-manager" image={TaskImage} text="Task Manager" />
                    <NavItem to="/main-dashboard/ecommerce" image={EcommerceImage} text="Ecommerce Store" />
                </div>
            </nav>
        </div>
    )
}

const NavItem = ({ image, text, to }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) => `
                flex items-center px-3 py-3 rethink-sans-500 text-sm rounded-lg transition-colors
                ${isActive ? "bg-[#17A24A] text-white font-medium" : "text-gray-600 hover:bg-gray-100"}
            `}
        >
            {({ isActive }) => (
                <>
                    <img
                        src={image}
                        alt={text}
                        className={`w-5 h-5 mr-3 ${isActive ? "" : "opacity-60"}`}
                    />
                    {text}
                </>
            )}
        </NavLink>
    )
}

export default Sidebar
