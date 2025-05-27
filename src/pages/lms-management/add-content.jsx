/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from "react"
import {
    FlagIcon as FlagOutlined,
    CalendarIcon as CalendarOutlined,
    CircleIcon as ClockCircleFilled,
    X,
} from "lucide-react"
import { useNavigate } from "react-router-dom";

const AddContent = ({ visible, onCancel, onSubmit }) => {
    const navigate = useNavigate();
    const [category, setcategory] = useState("Crop Courses")
    const [courseName, setcourseName] = useState("Corn Cultivation")
    const [description, setdescription] = useState("Learn the best practices for growing corn, from planting to harvesting.")
    const [moduleLink, setmoduleLink] = useState("https://www.farmconntect.com/modules/corn-cultivation")

    const [isVisible, setIsVisible] = useState(false)
    const modalRef = useRef(null)

    useEffect(() => {
        if (visible) {
            setIsVisible(true)
        } else {
            setTimeout(() => setIsVisible(false), 300)
        }
    }, [visible])

    const handleSubmit = () => {
        navigate("/admin-dashboard/content-management/content-list")
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
                    <h3 className="text-lg rethink-sans-400">Add Content</h3>
                    <div>
                        <X onClick={onCancel} size={18} className="cursor-pointer" />
                    </div>
                </div>

                <div className="py-4 px-4 rethink-sans-400 max-w-sm mx-auto w-full">
                    <div className="mb-4">
                        <p className="text-xs text-gray-500 mb-1">Category</p>
                        <select
                            value={category}
                            onChange={(e) => setcategory(e.target.value)}
                            className="w-full  text-sm cursor-pointer  outline-none rounded-md px-3 py-2 bg-[#F5F8F8]"
                        >
                            <option value="dropcourses">Drop Courses</option>
                            <option value="takecourses">Taken Courses</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <p className="text-xs text-gray-500 mb-1">Course Name</p>
                        <input
                            type="text"
                            value={courseName}
                            onChange={(e) => setcourseName(e.target.value)}
                            className="w-full  text-sm cursor-pointer rounded-md px-3 outline-none py-2 bg-[#F5F8F8]"

                        />
                    </div>

                    <div className="mb-4">
                        <p className="text-xs text-gray-500 mb-1">Description</p>
                        <textarea
                            type="text"
                            value={description}
                            onChange={(e) => setdescription(e.target.value)}
                            className="w-full  text-sm cursor-pointer rounded-md px-3 outline-none py-2 bg-[#F5F8F8]"

                        />
                    </div>

                    <div className="mb-4">
                        <p className="text-xs text-gray-500 mb-1">Module Links</p>
                        <input
                            type="text"
                            value={moduleLink}
                            onChange={(e) => setmoduleLink(e.target.value)}
                            className="w-full  text-sm cursor-pointer rounded-md px-3 outline-none py-2 bg-[#F5F8F8]"

                        />
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
                            Invite
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddContent
