/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from "react"
import { X, Upload, Plus, Minus } from "lucide-react"
import { useNavigate } from "react-router-dom"

const AddNewPlan = ({ visible, onCancel, onSubmit }) => {
    const navigate = useNavigate()
    const [planName, setPlanName] = useState("Free")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("42")
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
        const planData = {
            planName,
            description,
            price: parseFloat(price) || 0
        }
        onSubmit(planData) // This will call handleSubscriptionSubmit in RolesAndPermission
    }

    const incrementPrice = () => {
        const currentPrice = parseFloat(price) || 0
        setPrice((currentPrice + 1).toString())
    }

    const decrementPrice = () => {
        const currentPrice = parseFloat(price) || 0
        if (currentPrice > 0) {
            setPrice((currentPrice - 1).toString())
        }
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
            className="fixed inset-0 z-50 p-3 flex items-center justify-center transition-opacity duration-500"
            style={{ opacity: visible ? 1 : 0 }}
        >
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

            <div
                ref={modalRef}
                className="bg-[#FFFFFF] rounded-lg w-full max-w-lg shadow-xl z-10 transform transition-all duration-500"
                style={{ 
                    transform: visible ? 'scale(1)' : 'scale(0.95)',
                    opacity: visible ? 1 : 0
                }}
            >
                <div className="p-4 border-b border-slate-200 flex justify-between items-center">
                    <h3 className="text-lg font-medium">Add New Plan</h3>
                    <div>
                        <X onClick={onCancel} size={18} className="cursor-pointer" />
                    </div>
                </div>

                <div className="py-4 px-4 max-w-sm mx-auto w-full rethink-sans-400">
            

                    <div className="mb-4">
                        <p className="text-xs text-gray-500 mb-1">Plan Name</p>
                        <input
                            type="text"
                            placeholder="Cherry Plant"
                            value={planName}
                            onChange={(e) => setPlanName(e.target.value)}
                            className="w-full text-sm cursor-pointer rounded-md px-3 outline-none py-2 bg-[#F5F8F8]"
                        />
                    </div>

                    <div className="mb-4">
                        <p className="text-xs text-gray-500 mb-1">Description</p>
                        <textarea
                            placeholder="Write description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full text-sm cursor-pointer rounded-md outline-none px-3 py-2 min-h-[100px] bg-[#F5F8F8]"
                        />
                    </div>

                    <div className="mb-4">
                        <p className="text-xs text-gray-500 mb-1">Price</p>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="42"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                className="w-full text-sm cursor-pointer rounded-md pl-7 outline-none py-2 bg-[#F5F8F8]"
                            />
                            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sm">$</span>
                            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center">
                                <button 
                                    className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center"
                                    onClick={decrementPrice}
                                >
                                    <Minus size={14} />
                                </button>
                                <button 
                                    className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center ml-1 text-white"
                                    onClick={incrementPrice}
                                >
                                    <Plus size={14} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t p-4 border-slate-200 w-full">
                    <div className="flex justify-center items-center gap-2">
                        <button
                            onClick={onCancel}
                            className="px-8 py-2 rethink-sans-400 rounded-md text-sm cursor-pointer text-gray-700 border border-slate-300 hover:bg-gray-50 transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleSubmit}
                            className="px-8 py-2 rethink-sans-400 bg-teal-700 text-sm cursor-pointer hover:bg-teal-800 text-white rounded-md transition-colors"
                        >
                            Create Item
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddNewPlan