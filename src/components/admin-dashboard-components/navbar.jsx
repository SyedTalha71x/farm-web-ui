import { useEffect, useRef, useState } from "react"
import LoginPageLogo from '../../../public/images/Logo-login.svg'
import Avatar from "../../../public/images/avatar.svg"
import { Bell, LogOut, User } from "lucide-react"
import { FiPlus } from "react-icons/fi";
import { PiHouseSimpleLight } from "react-icons/pi";
import { GrAnalytics } from "react-icons/gr";

import { TbUsersGroup } from "react-icons/tb";
import { BiShoppingBag } from "react-icons/bi";
import { PiBooks } from "react-icons/pi";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";



export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [searchQuery, setSearchQuery] = useState("")
    const [showDropdown, setShowDropdown] = useState(false)
    const [isClockedIn, setIsClockedIn] = useState(false)
    const [clockedTime, setClockedTime] = useState("00:00:00")
    const dropdownRef = useRef(null)

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    const toggleClockIn = () => {
        setIsClockedIn(!isClockedIn)
        if (!isClockedIn) {
            setClockedTime("03:08:55")
        } else {
            setClockedTime("00:00:00")
        }
    }


    const location = useLocation();

    const navigationItems = [
        { name: "Dashboard", href: "/admin-dashboard/dashboard", icon: <PiHouseSimpleLight size={16} /> },
        { name: "Users", href: "/admin-dashboard/user-management", icon: <TbUsersGroup size={16} /> },
        { name: "LMS", href: "/admin-dashboard/content-management", icon: <PiBooks size={16} /> },
        { name: "Roles", href: "/admin-dashboard/roles-and-permissions", icon: <User size={16} /> },
        { name: "Analytics", href: "/admin-dashboard/admin-analytics", icon: <GrAnalytics size={16} /> },
        { name: "Ecommerce", href: "/admin-dashboard/admin-ecommerce-management", icon: <BiShoppingBag size={16} /> },
    ];

    const isActive = (href) => location.pathname === href;

    return (
        <nav className="bg-white border-b border-gray-200 px-4 py-3">
            <div className="flex items-center justify-between">
                {/* Left Logo */}
                <div className="flex items-center">
                    <img src={LoginPageLogo} alt="Logo" className="h-8 mr-2" />
                    <span className="text-xl md:block hidden rethink-sans-700 font-semibold text-gray-800">
                        Farm <span className="text-green-600">Connect</span>
                    </span>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center rethink-sans-400 space-x-1">
                    {navigationItems.map((item) => (
                        <Link
                            key={item.name}
                            to={item.href}
                            className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-colors 
            ${isActive(item.href)
                                    ? "bg-green-500 text-white"
                                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                                }`}
                        >
                            {item.icon}
                            <span>{item.name}</span>
                        </Link>
                    ))}

                </div>

                {/* Right side - Search and Profile */}
                <div className="flex items-center space-x-4 rethink-sans-400">
                    {/* Search Bar (Desktop) */}
                    <div className="hidden md:block relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </div>
                        <input
                            type="text"
                            placeholder="Search platform..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-10 pr-4 py-2 w-64 border-none outline-none bg-[#F5F8F8] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>

                    {/* Search Icon (Mobile) */}
                    <button className="md:hidden p-2 text-gray-600 hover:text-gray-900">
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </button>

                    <Bell className="h-5 w-5 text-gray-600 cursor-pointer" />

                    {/* User Profile */}
                    <div onClick={() => setShowDropdown(!showDropdown)} ref={dropdownRef} className="h-10 w-10 rounded-full cursor-pointer overflow-hidden">
                        <img src={Avatar || "/placeholder.svg"} alt="User Avatar" className="h-full w-full object-cover" />
                        {showDropdown && (
                            <div className="absolute right-3 mt-2 w-68 bg-white rounded-xl shadow-lg overflow-hidden z-10">
                                <div className="p-4">
                                    <div className="flex items-center gap-1 justify-start">
                                        <button
                                            onClick={toggleClockIn}
                                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${isClockedIn ? "bg-teal-700" : "bg-gray-200"}`}
                                        >
                                            <span
                                                className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${isClockedIn ? "translate-x-6" : "translate-x-1"}`}
                                            />
                                        </button>
                                        <div>

                                            <span className="rethink-sans-500">Clock In</span>
                                            <div className=" rethink-sans-400 text-sm text-gray-500">
                                                Time clocked today: <span className="text-green-500">{clockedTime}</span>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                                <div className="border-t border-gray-200"></div>

                                <Link to={"/admin-login"}>
                                    <button className="w-full text-center cursor-pointer flex items-center justify-center px-4 py-3 text-red-500 hover:bg-gray-50 transition-colors">
                                        <LogOut size={18} className="mr-2" />
                                        <span className="text-sm">Log-out</span>
                                    </button>
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 text-gray-600 hover:text-gray-900"
                    >
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden rethink-sans-400 mt-4 pb-4 border-t border-gray-200">
                    {/* Mobile Search */}
                    <div className="px-2 pt-4 pb-3">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </div>
                            <input
                                type="text"
                                placeholder="Search platform..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>
                    </div>

                    {/* Mobile Navigation */}
                    <div className="px-2 space-y-1 rethink-sans-400">
                        {navigationItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-colors 
            ${isActive(item.href)
                                        ? "bg-green-500 text-white"
                                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                                    }`}
                            >
                                {item.icon}
                                <span>{item.name}</span>
                            </Link>
                        ))}

                    </div>
                </div>
            )}
        </nav>
    )
}
