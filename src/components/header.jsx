import { useState, useRef, useEffect } from "react"
import { Search, Menu, Bell, LogOut } from "react-feather"
import Avatar from "../../public/images/avatar.svg"
import { Link } from "react-router-dom"

const Header = ({ toggleSidebar }) => {
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

    return (
        <div className="bg-transparent flex items-center justify-between p-4 border-b border-gray-200">
            <button onClick={toggleSidebar} className="text-gray-600 cursor-pointer">
                <Menu size={20} />
            </button>

            <div className="flex items-center gap-4">
                <div className="hidden md:flex items-center gap-4">
                    <div className="flex items-center bg-white rounded-md rethink-sans-400 px-3 py-2 cursor-pointer w-full max-w-sm shadow-sm">
                        <Search size={16} className="text-gray-400 mr-2" />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="bg-transparent border-none rethink-sans-400 outline-none text-sm flex-1"
                        />
                    </div>
                    <Bell size={25} className="text-gray-600 cursor-pointer" />
                </div>

                <div className="relative" ref={dropdownRef}>
                    <div
                        className="h-10 w-10 rounded-full cursor-pointer overflow-hidden"
                        onClick={() => setShowDropdown(!showDropdown)}
                    >
                        <img src={Avatar || "/placeholder.svg"} alt="User Avatar" className="h-full w-full object-cover" />
                    </div>

                    {showDropdown && (
                        <div className="absolute right-0 mt-2 w-68 bg-white rounded-xl shadow-lg overflow-hidden z-10">
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

                            <Link to={"/social-login"}>
                                <button className="w-full text-center flex items-center justify-center px-4 py-3 text-red-500 hover:bg-gray-50 transition-colors">
                                    <LogOut size={18} className="mr-2" />
                                    <span className="text-sm">Log-out</span>
                                </button>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Header
