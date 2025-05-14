import { useState, useRef, useEffect } from "react"
import { X } from "react-feather"
import { Link, useNavigate } from "react-router-dom"
import { TiArrowRight } from "react-icons/ti"
import { BsCircleFill } from "react-icons/bs"
import HouseImage from "../../../public/images/fi-rr-house-blank.svg"

import BlinkCircle from "../../../public/images/fi-rr-circle-dashed.svg"
import TickImage from "../../../public/images/tick-circle.svg"

import Female1 from "../../../public/images/fi-sr-venus.svg"
import Male1 from "../../../public/images/fi-rr-arrow-up-right-from-circle.svg"
import None1 from "../../../public/images/fi-rr-ban.svg"

import Vector3 from "../../../public/images/Vector-3.svg"
import { Switch } from "antd"

const AddAnimal = () => {
    const navigate = useNavigate();
    // basic info fields
    const [activeStep, setActiveStep] = useState("basic-info")
    const [completedSteps, setCompletedSteps] = useState([])
    const [activeGender, setActiveGender] = useState("female")

    const genderOptions = [
        { label: "Female", value: "female", icon: Female1 },
        { label: "Male", value: "male", icon: Male1 },
        { label: "None", value: "none", icon: None1 },
    ]

    // Basic Info form fields
    const [animalType, setAnimalType] = useState("Cat")
    const [animalName, setAnimalName] = useState("Bella")
    const [internalID, setInternalID] = useState("325-AML-CBRD25")
    const [breed, setBreed] = useState("Holstein Friesian")
    const [animalStatus, setAnimalStatus] = useState("Active")

    const [birthDate, setBirthDate] = useState("Jun 15, 2023")
    const [damName, setDamName] = useState("Rose (Holstein Friesian)")
    const [sireName, setSireName] = useState("Apollo (Holstein Friesian)")
    const [birthWeight, setBirthWeight] = useState("42")
    const [ageToWean, setAgeToWean] = useState("8")
    const [dateWeaned, setDateWeaned] = useState("Feb 15, 2024")

    const [showModal, setShowModal] = useState(false)
    const [showCustomModal, setshowCustomModal] = useState(false)

    const openCustomModal = (e) => {
        e.preventDefault()
        setshowCustomModal(true)
    }

    const closeCustomModal = () => {
        setshowCustomModal(false)
    }

    const handleCustomDiscard = () => {
        console.log("Discarding changes and navigating away")
        closeCustomModal()
        alert("Changes discarded!")
    }

    const openModal = (e) => {
        e.preventDefault()
        setShowModal(true)
    }

    const closeModal = () => {
        setShowModal(false)
    }

    const handleDiscard = () => {
        console.log("Discarding changes and navigating away")
        closeModal()
        alert("Changes discarded!")
    }

    const getProgressPercentage = () => {
        if (activeStep === "basic-info") return 33
        if (activeStep === "characteristics") return 67
        if (activeStep === "additional-info") return 100
        return 0
    }

    const getNextStepName = () => {
        if (activeStep === "basic-info") return "Characteristics"
        if (activeStep === "characteristics") return "Additional Info"
        return ""
    }

    const handleContinue = () => {
        if (activeStep === "basic-info") {
            setCompletedSteps([...completedSteps, "basic-info"])
            setActiveStep("characteristics")
        } else if (activeStep === "characteristics") {
            setCompletedSteps([...completedSteps, "characteristics"])
            setActiveStep("additional-info")
        } else if (activeStep === "additional-info") {
            // window.location.href = "/main-dashboard/animal-management/animal-lists"
            // Alternatively, if using React Router:
            navigate("/main-dashboard/animal-management/animal-lists")
        }
    }
    const handlePrevious = () => {
        if (activeStep === "characteristics") {
            setActiveStep("basic-info")
        } else if (activeStep === "additional-info") {
            setActiveStep("characteristics")
        }
    }

    const renderStepIndicator = (step) => {
        if (completedSteps.includes(step)) {
            return <img src={TickImage || "/placeholder.svg"} alt="Completed" className="w-6 h-6" />
        } else if (activeStep === step) {
            return (
                <div className="border-green-500 border-2 rounded-full w-6 h-6 flex items-center justify-center">
                    <BsCircleFill className="text-green-500 text-sm" />
                </div>
            )
        } else {
            return <img src={BlinkCircle || "/placeholder.svg"} alt="" className="w-6 h-6" />
        }
    }

    // Mobile progress circle component
    const MobileProgressCircle = () => {
        const percentage = getProgressPercentage()
        const nextStep = getNextStepName()
        const circumference = 2 * Math.PI * 45
        const offset = circumference - (percentage / 100) * circumference

        return (
            <div className="flex md:justify-between justify-start md:flex-row flex-col md:items-center items-start border-b mb-5 w-full border-slate-200">
                <div className="flex items-center justify-start gap-2 mb-3">
                    <div className="relative w-16 h-16">
                        <svg className="w-full h-full" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="45" fill="none" stroke="#e6e6e6" strokeWidth="6" />
                            <circle
                                cx="50"
                                cy="50"
                                r="45"
                                fill="none"
                                stroke="#17A24A"
                                strokeWidth="6"
                                strokeLinecap="round"
                                strokeDasharray={circumference}
                                strokeDashoffset={offset}
                                transform="rotate(-90 50 50)"
                            />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                            <span className="text-md rethink-sans-700 text-gray-800">{percentage}%</span>
                        </div>
                    </div>
                    <div className="">
                        <p className="rethink-sans-700">
                            {activeStep === "basic-info"
                                ? "Basic Info"
                                : activeStep === "characteristics"
                                    ? "Characteristics"
                                    : "Additional Info"}
                        </p>
                        {nextStep && <p className="text-gray-500 rethink-sans-400 text-xs">Next: {nextStep}</p>}
                    </div>
                </div>
                <div className="flex justify-center items-center mb-5 bg-[#F5F8F8] w-full py-2 text-sm px-6 rounded-lg cursor-pointer gap-1">
                    <div className="text-gray-500 rethink-sans-400 text-center text-sm">Unpublished</div>
                </div>
            </div>
        )
    }

    // Custom input component with floating label
    const FloatingLabelInput = ({ label, value, onChange, type = "text", className = "", icon = null }) => {
        const [isFocused, setIsFocused] = useState(false)
        const inputRef = useRef(null)

        const handleFocus = () => setIsFocused(true)
        const handleBlur = () => {
            if (!value) setIsFocused(false)
        }

        // Initialize with focused state if there's a value
        useEffect(() => {
            if (value) setIsFocused(true)
        }, [value])

        return (
            <div className={`relative ${className}`}>
                <label
                    className={`absolute transition-all duration-200 text-sm ${isFocused
                            ? "transform -translate-y-3 text-xs text-gray-500 bg-[#F5F8F8] px-1 z-10"
                            : "text-gray-500 top-2.5 left-2.5"
                        }`}
                >
                    {label}
                </label>
                <input
                    ref={inputRef}
                    type={type}
                    value={value}
                    onChange={onChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    className="w-full p-2.5 bg-[#F5F8F8] rounded-md text-sm outline-none pt-4"
                />
                {icon && <div className="absolute right-2 top-1/2 transform -translate-y-1/2">{icon}</div>}
            </div>
        )
    }

    // Custom select component with floating label
    const FloatingLabelSelect = ({ label, value, onChange, options, className = "" }) => {
        const [isFocused, setIsFocused] = useState(false)
        const selectRef = useRef(null)

        const handleFocus = () => setIsFocused(true)
        const handleBlur = () => {
            if (!value) setIsFocused(false)
        }

        // Initialize with focused state if there's a value
        useEffect(() => {
            if (value) setIsFocused(true)
        }, [value])

        return (
            <div className={`relative ${className}`}>
                <label
                    className={`absolute transition-all duration-200 text-sm ${isFocused
                            ? "transform -translate-y-3 text-xs text-gray-500 bg-[#F5F8F8] px-1 z-10"
                            : "text-gray-500 top-2.5 left-2.5"
                        }`}
                >
                    {label}
                </label>
                <div className="relative">
                    <select
                        ref={selectRef}
                        value={value}
                        onChange={onChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        className="w-full p-2.5 bg-[#F5F8F8] rounded-md text-sm appearance-none outline-none pt-4"
                    >
                        {options.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                    </div>
                </div>
            </div>
        )
    }

    const renderFormFields = () => {
        if (activeStep === "basic-info") {
            return (
                <div className="space-y-4 max-w-xl  w-full rethink-sans-400 px-2 sm:px-0">
                    <div>
                        <h1 className="text-xl rethink-sans-500 text-black">General</h1>
                        <div className="flex  justify-start mt-3 items-center gap-3">
                            {genderOptions.map((option) => (
                                <div
                                    key={option.value}
                                    onClick={() => setActiveGender(option.value)}
                                    className={`${activeGender === option.value ? "bg-[#131313] text-white border-none" : "bg-[#FDFDFE] text-black"
                                        } flex items-center gap-2 border border-slate-300 rounded-lg py-1.5 px-4 sm:px-6 text-sm cursor-pointer mb-2 sm:mb-0`}
                                >
                                    <div>
                                        <img src={option.icon || "/placeholder.svg"} alt={option.label} />
                                    </div>
                                    {option.label}
                                </div>
                            ))}
                        </div>
                    </div>

                    <FloatingLabelInput label="Animal Name" value={animalName} onChange={(e) => setAnimalName(e.target.value)} />

                    <FloatingLabelSelect
                        label="Animal Type"
                        value={animalType}
                        onChange={(e) => setAnimalType(e.target.value)}
                        options={[
                            { value: "Cat", label: "Cat" },
                            { value: "Dog", label: "Dog" },
                            { value: "Horse", label: "Horse" },
                            { value: "Cow", label: "Cow" },
                        ]}
                    />

                    <FloatingLabelInput label="Breed" value={breed} onChange={(e) => setBreed(e.target.value)} />

                    <FloatingLabelInput label="Internal ID" value={internalID} onChange={(e) => setInternalID(e.target.value)} />

                    <FloatingLabelSelect
                        label="Animal Status"
                        value={animalStatus}
                        onChange={(e) => setAnimalStatus(e.target.value)}
                        options={[
                            { value: "Active", label: "Active" },
                            { value: "Inactive", label: "Inactive" },
                        ]}
                    />

                    <div className="h-[1px] bg-slate-200 mt-6"></div>

                    <div>
                        <h1 className="rethink-sans-500 text-black text-xl">Birthday</h1>
                    </div>

                    <FloatingLabelInput
                        label="Date Born"
                        value={birthDate}
                        onChange={(e) => setBirthDate(e.target.value)}
                        icon={
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12.6667 2.66667H3.33333C2.59695 2.66667 2 3.26362 2 4.00001V13.3333C2 14.0697 2.59695 14.6667 3.33333 14.6667H12.6667C13.403 14.6667 14 14.0697 14 13.3333V4.00001C14 3.26362 13.403 2.66667 12.6667 2.66667Z"
                                    stroke="#01575C"
                                    strokeWidth="1.33333"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M10.6667 1.33333V3.99999"
                                    stroke="#01575C"
                                    strokeWidth="1.33333"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M5.33331 1.33333V3.99999"
                                    stroke="#01575C"
                                    strokeWidth="1.33333"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M2 6.66667H14"
                                    stroke="#01575C"
                                    strokeWidth="1.33333"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        }
                    />

                    <FloatingLabelInput
                        label="Dam (Maternity)"
                        value={damName}
                        onChange={(e) => setDamName(e.target.value)}
                        icon={
                            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M1 1L5 5L9 1"
                                    stroke="#666666"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        }
                    />

                    <FloatingLabelInput
                        label="Sire (Paternity)"
                        value={sireName}
                        onChange={(e) => setSireName(e.target.value)}
                        icon={
                            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M1 1L5 5L9 1"
                                    stroke="#666666"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        }
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="relative">
                            <label className="absolute text-xs text-gray-500 bg-[#F5F8F8] px-1 z-10 transform -translate-y-3">
                                Birth Weight
                            </label>
                            <div className="relative flex items-center">
                                <input
                                    type="text"
                                    value={birthWeight}
                                    onChange={(e) => setBirthWeight(e.target.value)}
                                    className="w-full p-2.5 bg-[#F5F8F8] rounded-md text-sm outline-none pt-4"
                                />
                                <span className="absolute right-16 text-gray-500 text-sm">kg</span>
                                <div className="absolute right-2 flex">
                                    <button className="p-1 rounded-full bg-white border border-gray-300 mr-1">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M5 12H19"
                                                stroke="#000000"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </button>
                                    <button className="p-1 rounded-full bg-indigo-700">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M12 5V19M5 12H19"
                                                stroke="white"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <label className="absolute text-xs text-gray-500 bg-[#F5F8F8] px-1 z-10 transform -translate-y-3">
                                Age To Wean
                            </label>
                            <div className="relative flex items-center">
                                <input
                                    type="text"
                                    value={ageToWean}
                                    onChange={(e) => setAgeToWean(e.target.value)}
                                    className="w-full p-2.5 bg-[#F5F8F8] rounded-md text-sm outline-none pt-4"
                                />
                                <span className="absolute right-16 text-gray-500 text-sm">months</span>
                                <div className="absolute right-2 flex">
                                    <button className="p-1 rounded-full bg-white border border-gray-300 mr-1">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M5 12H19"
                                                stroke="#000000"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </button>
                                    <button className="p-1 rounded-full bg-indigo-700">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M12 5V19M5 12H19"
                                                stroke="white"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <FloatingLabelInput
                        label="Date Weaned"
                        value={dateWeaned}
                        onChange={(e) => setDateWeaned(e.target.value)}
                        icon={
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12.6667 2.66667H3.33333C2.59695 2.66667 2 3.26362 2 4.00001V13.3333C2 14.0697 2.59695 14.6667 3.33333 14.6667H12.6667C13.403 14.6667 14 14.0697 14 13.3333V4.00001C14 3.26362 13.403 2.66667 12.6667 2.66667Z"
                                    stroke="#01575C"
                                    strokeWidth="1.33333"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M10.6667 1.33333V3.99999"
                                    stroke="#01575C"
                                    strokeWidth="1.33333"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M5.33331 1.33333V3.99999"
                                    stroke="#01575C"
                                    strokeWidth="1.33333"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M2 6.66667H14"
                                    stroke="#01575C"
                                    strokeWidth="1.33333"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        }
                    />
                </div>
            )
        } else if (activeStep === "characteristics") {
            return (
                <div className="space-y-6 max-w-xl   w-full rethink-sans-400 px-2 sm:px-0">
                    {/* Physical Section */}
                    <div>
                        <h2 className="text-xl rethink-sans-500 text-black mb-4">Physical</h2>

                        {/* Is animal neutered? */}
                        <div className="mb-4 mt-5">
                            <div className="flex items-start justify-start">
                                <div className="mt-2">
                                    <Switch defaultChecked />
                                </div>
                                <div className="ml-2 ">
                                    <label className="text-md mr-2 rethink-sans-500">Is animal neutered?</label>
                                    <p className="text-sm text-gray-500">Leave option disabled for intact.</p>
                                </div>
                            </div>
                        </div>

                        <div className="mb-4">
                            <div className="flex items-start justify-start">
                                <div className="mt-2">
                                    <Switch />
                                </div>
                                <div className="ml-2 ">
                                    <label className="text-md mr-2 rethink-sans-500">Is breeding Stock?</label>
                                    <p className="text-sm text-gray-500">Leave option disabled for intact.</p>
                                </div>
                            </div>
                        </div>

                        {/* Colouring Section */}
                        <div className="bg-[#F5F8F8] p-4 rounded-md mb-4">
                            <label className="block text-sm mb-2">Colouring</label>
                            <div className="flex flex-wrap gap-2 mb-2">
                                <div className="bg-[#8B4513] text-white rounded-full px-3 py-1 text-sm flex items-center">
                                    Brown
                                    <span className="ml-1 cursor-pointer">×</span>
                                </div>
                                <div className="bg-white border border-gray-300 text-gray-700 rounded-full px-3 py-1 text-sm flex items-center">
                                    White
                                    <span className="ml-1 cursor-pointer">×</span>
                                </div>
                                <div className="bg-black text-white rounded-full px-3 py-1 text-sm flex items-center">
                                    Black
                                    <span className="ml-1 cursor-pointer">×</span>
                                </div>
                            </div>
                        </div>
                        <p className="text-sm text-gray-500">Separate keywords using commas</p>

                        {/* Retention Score */}
                        <div className="mb-4">
                            <label className="block text-sm mb-1">
                                Retention Score: <span className="text-[#3F8461]">Reflects robust health and productive longevity</span>
                            </label>
                            <div className="flex items-center">
                                {[1, 2, 3, 4, 5, 6, 7, 8].map((star) => (
                                    <svg key={star} className="w-6 h-6 text-[#3F8461]" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                                {[9, 10].map((star) => (
                                    <svg key={star} className="w-6 h-6 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                        </div>

                        <div className="bg-[#F5F8F8] p-4 rounded-md">
                            <label className="block text-sm mb-2">Description</label>
                            <p className="text-md rethink-sans-400">
                                A high-producing dairy cow with a calm demeanor, strong milk output, and excellent physical
                                conformation. Her coat is well-maintained, and her build indicates steady growth and resilience under
                                typical farm conditions.
                            </p>
                        </div>
                    </div>

                    {/* Identification Section */}
                    <div>
                        <h2 className="text-xl rethink-sans-500 text-black mb-4">Identification</h2>

                        {/* Tag Number */}
                        <div className="mb-4">
                            <label className="block text-sm text-gray-500 mb-1">Tag Number(s)</label>
                            <div className="flex flex-wrap bg-[#F5F8F8] p-4 items-center gap-2 mb-2">
                                <div className="bg-[#8B4513] text-white rounded-md px-3 py-2 text-sm flex items-center">
                                    B6917 Stephan Station | 02345
                                    <span className="ml-2 cursor-pointer">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
                                                fill="white"
                                            />
                                        </svg>
                                    </span>
                                </div>
                                <div className="text-gray-500">Insert tag</div>
                            </div>
                            <p className="text-sm text-gray-500">Separate keywords using commas</p>
                        </div>

                        {/* Electronic ID (RFID) */}
                        <div className="mb-4">
                            <FloatingLabelInput label="Electronic ID (RFID)" value="9820004115678900" onChange={() => { }} />
                        </div>

                        {/* Registry Number */}
                        <div className="mb-4">
                            <FloatingLabelInput
                                label="Registry Number"
                                value="COWREG-2025-0456"
                                onChange={() => { }}
                                icon={
                                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M1 1L5 5L9 1"
                                            stroke="#666666"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                }
                            />
                        </div>

                        {/* Tattoos */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                            <FloatingLabelInput label="Left Tattoo" value="Bella" onChange={() => { }} />
                            <FloatingLabelInput label="Right Tattoo" value="" onChange={() => { }} />
                        </div>

                        {/* Add Another Tag */}
                        <div>
                            <button className="w-full border-2 border-dashed border-gray-300 text-gray-600 rounded-md py-3 text-sm transition-colors">
                                Add Another Tag
                            </button>
                        </div>
                    </div>
                </div>
            )
        } else if (activeStep === "additional-info") {
            return (
                <div className="space-y-4 max-w-xl w-full rethink-sans-400 px-2 sm:px-0">
                    {/* Method Acquired */}
                    <div>
                        <FloatingLabelInput
                            label="Method Acquired"
                            value="Bred and born on-site at the farm"
                            onChange={() => { }}
                            icon={
                                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M1 1L5 5L9 1"
                                        stroke="#666666"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            }
                        />
                    </div>

                    {/* Veterinarian Information */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <FloatingLabelInput label="Veterinarian Name" value="Dr. Thabo Nkosi" onChange={() => { }} />
                        <div className="relative">
                            <label className="absolute text-xs text-gray-500 bg-[#F5F8F8] px-1 z-10 transform -translate-y-3">
                                Veterinarian Contact
                            </label>
                            <div className="relative flex items-center">
                                <input
                                    type="text"
                                    value="+1 041-555-7890"
                                    className="w-full p-2.5 bg-[#F5F8F8] rounded-md text-sm outline-none pt-4"
                                />
                                <div className="absolute right-2">
                                    <img src={Vector3 || "/placeholder.svg"} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* On Feed Toggle */}
                    <div className="flex items-center gap-2 py-2">
                        <div className="mt-2">
                            <Switch defaultChecked />
                        </div>
                        <label className="text-md rethink-sans-500 mt-3">On feed?</label>
                    </div>

                    {/* Feed Type */}
                    <div>
                        <FloatingLabelInput
                            label="Feed Type"
                            value="Grazing rotation with supplemental silage and grain"
                            onChange={() => { }}
                            icon={
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12 4l-4 8-4-8"
                                        stroke="#01575C"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            }
                        />
                    </div>

                    {/* Harvest, Revenue, Weight, Value */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="relative">
                            <label className="absolute text-xs text-gray-500 bg-[#F5F8F8] px-1 z-10 transform -translate-y-3">
                                Measure Harvests in
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    value="Quantity"
                                    readOnly
                                    className="w-full p-2.5 bg-[#F5F8F8] rounded-md text-sm outline-none pt-4"
                                />
                                <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M1 1L5 5L9 1"
                                            stroke="#666666"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <label className="absolute text-xs text-gray-500 bg-[#F5F8F8] px-1 z-10 transform -translate-y-3">
                                Estimated Revenue
                            </label>
                            <div className="relative flex items-center">
                                <input
                                    type="text"
                                    value="0.50"
                                    className="w-full p-2.5 bg-[#F5F8F8] rounded-md text-sm outline-none pt-4"
                                />
                                <span className="absolute right-16 text-gray-500 text-sm">USD (PU)</span>
                                <div className="absolute right-2 flex items-center space-x-1">
                                    <button className="bg-gray-300 rounded-full w-6 h-6 flex items-center justify-center">
                                        <span className="text-white text-xs">-</span>
                                    </button>
                                    <button className="bg-blue-500 rounded-full w-6 h-6 flex items-center justify-center">
                                        <span className="text-white text-xs">+</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="relative">
                            <label className="absolute text-xs text-gray-500 bg-[#F5F8F8] px-1 z-10 transform -translate-y-3">
                                Mature Weight
                            </label>
                            <div className="relative flex items-center">
                                <input
                                    type="text"
                                    value="631"
                                    className="w-full p-2.5 bg-[#F5F8F8] rounded-md text-sm outline-none pt-4"
                                />
                                <span className="absolute right-16 text-gray-500 text-sm">kg</span>
                                <div className="absolute right-2 flex items-center space-x-1">
                                    <button className="bg-gray-300 rounded-full w-6 h-6 flex items-center justify-center">
                                        <span className="text-white text-xs">-</span>
                                    </button>
                                    <button className="bg-blue-500 rounded-full w-6 h-6 flex items-center justify-center">
                                        <span className="text-white text-xs">+</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <label className="absolute text-xs text-gray-500 bg-[#F5F8F8] px-1 z-10 transform -translate-y-3">
                                Estimated Value
                            </label>
                            <div className="relative flex items-center">
                                <input
                                    type="text"
                                    value="1,800"
                                    className="w-full p-2.5 bg-[#F5F8F8] rounded-md text-sm outline-none pt-4"
                                />
                                <span className="absolute right-16 text-gray-500 text-sm">USD</span>
                                <div className="absolute right-2 flex items-center space-x-1">
                                    <button className="bg-gray-300 rounded-full w-6 h-6 flex items-center justify-center">
                                        <span className="text-white text-xs">-</span>
                                    </button>
                                    <button className="bg-blue-500 rounded-full w-6 h-6 flex items-center justify-center">
                                        <span className="text-white text-xs">+</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Expected Maturity Date */}
                    <div>
                        <FloatingLabelInput
                            label="Expected Maturity Date"
                            value="Jan 12, 2024"
                            onChange={() => { }}
                            icon={
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12.6667 2.66667H3.33333C2.59695 2.66667 2 3.26362 2 4.00001V13.3333C2 14.0697 2.59695 14.6667 3.33333 14.6667H12.6667C13.403 14.6667 14 14.0697 14 13.3333V4.00001C14 3.26362 13.403 2.66667 12.6667 2.66667Z"
                                        stroke="#01575C"
                                        strokeWidth="1.33333"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M10.6667 1.33333V3.99999"
                                        stroke="#01575C"
                                        strokeWidth="1.33333"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M5.33331 1.33333V3.99999"
                                        stroke="#01575C"
                                        strokeWidth="1.33333"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M2 6.66667H14"
                                        stroke="#01575C"
                                        strokeWidth="1.33333"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            }
                        />
                    </div>

                    <div>
                        <button
                            onClick={openCustomModal}
                            className="w-full border-2 border-dashed border-gray-300 text-gray-600 rounded-md py-2.5 text-sm transition-colors"
                        >
                            Add Custom Field
                        </button>
                    </div>

                    {showCustomModal && (
                        <div className="fixed inset-0 p-2 backdrop-blur-sm bg-black/40 flex items-center justify-center z-50">
                            <div className="relative bg-white rounded-lg shadow-lg w-full max-w-md">
                                {/* ❌ Close button in top-right corner */}
                                <button
                                    onClick={closeCustomModal}
                                    className="absolute top-3 right-3 text-gray-500 hover:text-black text-3xl font-semibold"
                                >
                                    &times;
                                </button>

                                {/* Header with title and description */}
                                <div className="border-b border-slate-200 px-6 pt-6 pb-4">
                                    <h3 className="text-lg font-semibold">Cancel Animal Details</h3>
                                    <p className="text-gray-600 text-sm mt-1">
                                        You are about to exit without saving, do you wish to continue?
                                    </p>
                                </div>

                                {/* Coming Soon message */}
                                <div className="py-10 text-center font-medium">Coming Soon</div>

                                {/* Divider line */}
                                <div className="border-t border-slate-200" />

                                {/* Action buttons */}
                                <div className="flex justify-center items-center gap-4 px-6 py-4">
                                    <button
                                        onClick={closeCustomModal}
                                        className="px-6 py-2 border border-gray-900 text-sm rounded text-gray-700 hover:bg-gray-100"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        onClick={handleCustomDiscard}
                                        className="px-6 py-2 text-sm bg-[#01575C] text-white rounded hover:bg-teal-700"
                                    >
                                        Keep Editing
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )
        }
    }

    return (
        <>
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                    <div>
                        <img src={HouseImage || "/placeholder.svg"} alt="" />
                    </div>
                    <div>
                        <TiArrowRight />
                    </div>
                    <div>
                        <div className="bg-[#D5D9DA] rethink-sans-400 text-gray-600 rounded-full px-3 py-1.5 text-xs cursor-pointer">
                            All Animals
                        </div>
                    </div>
                    <div>
                        <TiArrowRight />
                    </div>
                    <div>
                        <div className="bg-[#17A24A] rethink-sans-400 text-white rounded-full px-3 py-1.5 text-xs cursor-pointer">
                            Animal Info
                        </div>
                    </div>
                </div>
                <div onClick={openModal}>
                    <Link
                        className="text-gray-900 rethink-sans-400 cursor-pointer text-sm flex items-center"
                    >
                        <X size={16} className="mr-1" />
                        <span className="hidden md:inline">Cancel Edit</span>
                    </Link>
                </div>

                {showModal && (
                    <div className="fixed inset-0 p-2 backdrop-blur-sm rounded-lg bg-black/40 flex items-center justify-center z-50">
                        <div className="bg-white rounded-lg shadow-lg lg:p-8 p-6 w-90 max-w-md">
                            <h3 className="md:text-xl text-lg text-center rethink-sans-500 ">Discard Crop Details</h3>
                            <p className="text-gray-600 rethink-sans-400 text-center text-sm mb-6 mt-1">Unsaved crop changes will be lost. Continue?</p>

                            <div className="flex justify-center items-center gap-2">
                                <button
                                    onClick={closeModal}
                                    className="px-6 py-1.5 border rethink-sans-400 border-gray-900 text-sm rounded text-gray-700 hover:bg-gray-50"
                                >
                                    Cancel
                                </button>
                                <button onClick={handleDiscard} className="px-6 rethink-sans-400 py-1.5 text-sm bg-[#01575C] text-white rounded hover:bg-teal-700">
                                    Discard
                                </button>
                            </div>
                        </div>
                    </div>
                )}

            </div>

            <div className="rounded-md min-h-screen">
                <div className="bg-white rounded-lg shadow-sm lg:p-6 p-3">
                    <div className="mb-6">
                        {/* Desktop Step Indicator */}
                        <div className="hidden md:flex justify-between items-center mb-6">
                            <div className="flex items-center justify-start">
                                <div className="flex gap-2 rethink-sans-400 items-center">
                                    <div className="cursor-pointer" onClick={() => setActiveStep("basic-info")}>
                                        {renderStepIndicator("basic-info")}
                                    </div>
                                    <span className="text-sm">Basic Info</span>
                                </div>

                                <div
                                    className={`h-0.5 w-13 mx-2 ${activeStep === "characteristics" || completedSteps.includes("basic-info")
                                            ? "bg-green-500"
                                            : "bg-gray-200"
                                        }`}
                                ></div>

                                <div className="flex gap-2 rethink-sans-400 items-center">
                                    <div
                                        className="cursor-pointer"
                                        onClick={() => completedSteps.includes("basic-info") && setActiveStep("characteristics")}
                                    >
                                        {renderStepIndicator("characteristics")}
                                    </div>
                                    <span className="text-sm">Characteristics</span>
                                </div>

                                <div
                                    className={`h-0.5 w-13 mx-2 ${activeStep === "additional-info" || completedSteps.includes("characteristics")
                                            ? "bg-green-500"
                                            : "bg-gray-200"
                                        }`}
                                ></div>

                                <div className="flex gap-2 rethink-sans-400 items-center">
                                    <div
                                        className="cursor-pointer"
                                        onClick={() => completedSteps.includes("characteristics") && setActiveStep("additional-info")}
                                    >
                                        {renderStepIndicator("additional-info")}
                                    </div>
                                    <span className="text-sm">Additional Info</span>
                                </div>
                            </div>
                            <div className="flex bg-[#F5F8F8] py-2 text-sm px-6 rounded-lg cursor-pointer items-center gap-1">
                                <div className="text-gray-500 rethink-sans-400 text-sm">Unpublished</div>
                                <div>
                                    <img src={TickImage || "/placeholder.svg"} alt="" className="h-full w-full" />
                                </div>
                            </div>
                        </div>

                        <div className="md:hidden">
                            <MobileProgressCircle />
                        </div>

                        {renderFormFields()}
                    </div>

                    <div className="mt-8 flex justify-start gap-2">
                        <button
                            onClick={handleContinue}
                            className="md:w-auto w-full order-2 bg-[#01575C] rethink-sans-400 hover:bg-teal-900 text-white py-2 px-8 rounded-md text-sm transition-colors"
                        >
                            Continue
                        </button>
                        {activeStep !== "basic-info" && (
                            <button
                                onClick={handlePrevious}
                                className="md:w-auto w-full border border-gray-300 text-gray-600 py-2 px-8 rounded-md text-sm transition-colors hover:bg-gray-50"
                            >
                                Previous
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddAnimal
