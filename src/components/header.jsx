import { Search, Menu, Bell } from "react-feather"
import Avatar from '../../public/images/avatar.svg'

const Header = ({ toggleSidebar }) => {
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

                <div className="h-10 w-10 rounded-full cursor-pointer overflow-hidden">
                    <img
                        src={Avatar}
                        alt="User Avatar"
                        className="h-full w-full object-cover"
                    />
                </div>
            </div>
        </div>
    )
}

export default Header
