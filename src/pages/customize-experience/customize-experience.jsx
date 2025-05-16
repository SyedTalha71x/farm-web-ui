import { useState, useRef, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import backgroundImage from "../../../public/images/0accd8c12f853c81224b93033132a34ccfa9ae87.png"
import { IoClose } from "react-icons/io5"
import { IoChevronDown } from "react-icons/io5"

const CustomizeExperience = () => {
    const navigate = useNavigate()

    const [selectedIndustries, setSelectedIndustries] = useState(["Farm"])
    const [showIndustriesDropdown, setShowIndustriesDropdown] = useState(false)
    const [industriesFocused, setIndustriesFocused] = useState(false)

    const industries = ["Farm", "Education", "Home Garden", "Agriculture", "Technology"]

    const [mechanizationLevel, setMechanizationLevel] = useState("Moderate")
    const [mechanizationFocused, setMechanizationFocused] = useState(false)

    const [selectedInterests, setSelectedInterests] = useState(["Growth Tools"])

    const industriesDropdownRef = useRef(null)

    useEffect(() => {
        function handleClickOutside(event) {
            if (industriesDropdownRef.current && !industriesDropdownRef.current.contains(event.target)) {
                setShowIndustriesDropdown(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    const toggleIndustry = (industry) => {
        if (selectedIndustries.includes(industry)) {
            setSelectedIndustries(selectedIndustries.filter((item) => item !== industry))
        } else {
            setSelectedIndustries([...selectedIndustries, industry])
        }
    }

    const removeIndustry = (industry, e) => {
        e.stopPropagation()
        setSelectedIndustries(selectedIndustries.filter((item) => item !== industry))
    }

    const toggleInterest = (interest) => {
        if (selectedInterests.includes(interest)) {
            setSelectedInterests(selectedInterests.filter((item) => item !== interest))
        } else {
            setSelectedInterests([...selectedInterests, interest])
        }
    }

    const removeInterest = (interest, e) => {
        e.stopPropagation()
        setSelectedInterests(selectedInterests.filter((item) => item !== interest))
    }

    const handleSkip = () => {
        navigate("/main-dashboard/dashboard")
    }

    const handleComplete = () => {
        navigate("/main-dashboard/dashboard")
    }

    return (
        <div
            className="min-h-screen flex items-center justify-center lg:p-4 p-2"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="absolute inset-0 bg-white opacity-90"></div>

            <div className="bg-[#FFFFFF] rounded-xl shadow-lg lg:p-8 p-6 w-full max-w-md z-10 relative">
                <div className="flex items-center justify-center mb-8">
                    <div className="h-6 w-6 bg-green-500 text-white flex items-center rethink-sans-700 justify-center rounded-sm font-bold">L</div>
                    <span className="ml-2 text-gray-800 font-medium">
                        Lucolyx <span className="text-green-500">Design</span>
                    </span>
                </div>

                <div className="text-center mb-8">
                    <h1 className="text-2xl rethink-sans-700 text-gray-800 mb-1">Customize Experience</h1>
                    <p className="text-sm text-gray-500 rethink-sans-400">What would you like out of our platform?</p>
                </div>

                <div className="space-y-6 rethink-sans-400">
                    {/* Industries Dropdown with Floating Label */}
                    <div className="relative" ref={industriesDropdownRef}>
                        <label
                            className={`absolute left-3 rethink-sans-400 transition-all duration-200 z-10 ${industriesFocused || selectedIndustries.length > 0
                                ? "top-0 text-xs text-[#01575C] bg-white px-1 -mt-2"
                                : "top-3 text-sm text-gray-500"
                                }`}
                        >
                            Select Industries
                        </label>
                        <div
                            onClick={() => {
                                setShowIndustriesDropdown(!showIndustriesDropdown)
                                setIndustriesFocused(true)
                            }}
                            className="flex text-sm items-center justify-between border-none rounded-lg px-3 py-3 bg-[#F5F8F8] cursor-pointer"
                        >
                            <div className="flex flex-wrap gap-2 items-center">
                                {selectedIndustries.length === 0 ? (
                                    <span className="text-gray-400">Choose industries</span>
                                ) : (
                                    selectedIndustries.map((industry) => (
                                        <div
                                            key={industry}
                                            className="bg-green-500 text-white py-1 px-2 rounded-full text-xs flex items-center"
                                        >
                                            {industry}
                                            <button
                                                onClick={(e) => removeIndustry(industry, e)}
                                                className="ml-1 hover:bg-green-600 rounded-full"
                                            >
                                                <IoClose size={14} />
                                            </button>
                                        </div>
                                    ))
                                )}
                            </div>
                            <IoChevronDown className={`text-gray-500 transform transition-transform ${showIndustriesDropdown ? "rotate-180" : ""}`} />
                        </div>

                        {/* Dropdown Menu */}
                        {showIndustriesDropdown && (
                            <div className="absolute z-20 mt-1 w-full bg-white shadow-lg rounded-lg border border-gray-200 max-h-48 overflow-y-auto">
                                {industries.map((industry) => (
                                    <div
                                        key={industry}
                                        onClick={() => toggleIndustry(industry)}
                                        className={`px-3 py-2 cursor-pointer hover:bg-gray-100 ${selectedIndustries.includes(industry) ? "bg-gray-50" : ""
                                            }`}
                                    >
                                        <div className="flex items-center">
                                            <input
                                                type="checkbox"
                                                checked={selectedIndustries.includes(industry)}
                                                onChange={() => { }}
                                                className="mr-2"
                                            />
                                            <span>{industry}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="relative">
                        <label
                            htmlFor="mechanizationLevel"
                            className={`absolute left-3 rethink-sans-400 transition-all duration-200
    ${mechanizationFocused || mechanizationLevel
                                    ? "top-0 text-xs text-[#01575C] bg-white px-1 -mt-2 z-10"
                                    : "top-3 text-sm text-gray-500 z-0"
                                }`}
                        >
                            Mechanization Level
                        </label>

                        <div className="relative">
                            <select
                                id="mechanizationLevel"
                                className="w-full outline-none text-sm text-gray-800 bg-[#F5F8F8] appearance-none rounded-lg px-3 py-3"
                                value={mechanizationLevel}
                                onChange={(e) => setMechanizationLevel(e.target.value)}
                                onFocus={() => setMechanizationFocused(true)}
                            >
                                <option value="Low">Low</option>
                                <option value="Moderate">Moderate</option>
                                <option value="High">High</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <IoChevronDown />
                            </div>
                        </div>
                    </div>

                    <div>
                        <label className="text-sm text-gray-800 mb-2 block">I'm interested...</label>
                        <div className="flex flex-wrap gap-2">
                            {["Growth Tools", "Selling Tools", "Collaboration Tools"].map((interest) => (
                                <button
                                    key={interest}
                                    type="button"
                                    className={`py-1 px-3 text-xs rounded-full cursor-pointer flex items-center ${selectedInterests.includes(interest)
                                        ? "bg-black text-white"
                                        : "bg-gray-100 text-gray-800 border border-gray-200"
                                        }`}
                                    onClick={() => toggleInterest(interest)}
                                >
                                    {interest}
                                    {selectedInterests.includes(interest) && (
                                        <button
                                            onClick={(e) => removeInterest(interest, e)}
                                            className="ml-1 hover:bg-gray-800 rounded-full"
                                        >
                                            <IoClose size={14} />
                                        </button>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="flex gap-3 pt-4 mt-4">
                        <button
                            type="button"
                            onClick={handleSkip}
                            className="w-1/2 border border-gray-700 text-gray-900 rounded-lg text-sm cursor-pointer py-2 px-4 flex items-center justify-center hover:bg-gray-50 transition-colors"
                        >
                            Skip
                        </button>
                        <button
                            type="button"
                            onClick={handleComplete}
                            className="w-1/2 bg-[#01575C] text-white rounded-lg text-sm cursor-pointer py-2 px-4 flex items-center justify-center hover:bg-teal-900 transition-colors"
                        >
                            Complete
                        </button>
                    </div>
                </div>

                <div className="flex justify-center items-center mt-7 gap-1">
                    <div className="w-7 bg-slate-300 h-2 rounded-full"></div>
                    <div className="w-7 bg-slate-300 h-2 rounded-full"></div>
                    <div className="w-16 bg-[#F2852F] h-2 rounded-full"></div>
                </div>
            </div>
        </div>
    )
}

export default CustomizeExperience