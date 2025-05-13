/* eslint-disable no-unused-vars */
"use client"

import { useState, useEffect } from "react"
import { X } from "react-feather"
import { Link } from "react-router-dom"
import { TiArrowRight } from "react-icons/ti"
import { BsCircleFill } from "react-icons/bs"
import HouseImage from "../../../public/images/fi-rr-house-blank.svg"

import BlinkCircle from "../../../public/images/fi-rr-circle-dashed.svg"
import TickImage from "../../../public/images/tick-circle.svg"

import DefaultImage from "../../../public/images/image.svg"
import IconsButton from "../../../public/images/Icon Buttons.svg"

const AddNewCrop = () => {
    const [activeStep, setActiveStep] = useState("plant-type")
    const [completedSteps, setCompletedSteps] = useState([])
    const [seedToHarvest, setSeedToHarvest] = useState("7 days")
    const [plantCrops, setPlantCrops] = useState("")
    const [temperature, setTemperature] = useState("Prefer warmer")
    const [location, setLocation] = useState("42°C 48°N 73°W")
    const [uploadState, setUploadState] = useState("default")
    const [uploadProgress, setUploadProgress] = useState(0)
    const [cropImage, setCropImage] = useState(null)
    const [tempImage, setTempImage] = useState(null)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [selectedCrops, setSelectedCrops] = useState(["Cherry"])

    // Plant Type form fields
    const [searchForType, setSearchForType] = useState("Cherry")
    const [cultivar, setCultivar] = useState("Fruit Crop")
    const [botanicalName, setBotanicalName] = useState("Prunus avium")
    const [internalID, setInternalID] = useState("325-CRP-PLNT25")
    const [startMethod, setStartMethod] = useState("Tray-Grown, Ground-Transplanted")
    const [daysToEmerge, setDaysToEmerge] = useState("1")
    const [plantSpacing, setPlantSpacing] = useState("210")
    const [rowSpacing, setRowSpacing] = useState("210")
    const [plantDepth, setPlantDepth] = useState("0")
    const [averageHeight, setAverageHeight] = useState("150")

    // Harvest Info form fields
    const [harvestUnits, setHarvestUnits] = useState("Dozen")
    const [daysToFlower, setDaysToFlower] = useState("30")
    const [daysToMaturity, setDaysToMaturity] = useState("210")
    const [harvestWindow, setHarvestWindow] = useState("90")
    const [estimatedRevenue, setEstimatedRevenue] = useState("210")
    const [harvestPlantSpacing, setHarvestPlantSpacing] = useState("3")
    const [harvestRowSpacing, setHarvestRowSpacing] = useState("3")
    const [harvestPlantDepth, setHarvestPlantDepth] = useState("0.5")
    const [harvestAverageHeight, setHarvestAverageHeight] = useState("30")

    // Get progress percentage based on active step
    const getProgressPercentage = () => {
        if (activeStep === "plant-type") return 33
        if (activeStep === "plant-info") return 67
        if (activeStep === "harvest-info") return 100
        return 0
    }

    // Get next step name
    const getNextStepName = () => {
        if (activeStep === "plant-type") return "Plant Info"
        if (activeStep === "plant-info") return "Harvest Info"
        return ""
    }

    useEffect(() => {
        function handleClickOutside(event) {
            if (isDropdownOpen && !event.target.closest(".dropdown-container")) {
                setIsDropdownOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [isDropdownOpen])

    // Simulate file upload
    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0]
            const tempImageUrl = URL.createObjectURL(file)
            setTempImage(tempImageUrl)
            setUploadState("uploading")

            // Simulate upload progress
            let progress = 0
            const interval = setInterval(() => {
                progress += 10
                setUploadProgress(progress)

                if (progress >= 100) {
                    clearInterval(interval)
                    setUploadState("uploaded")
                    setCropImage(tempImageUrl)
                }
            }, 300)
        }
    }

    const handleCancel = () => {
        setUploadState("default")
        setUploadProgress(0)
        setCropImage(null)
        setTempImage(null)
    }

    const handleRemove = () => {
        setUploadState("default")
        setUploadProgress(0)
        setCropImage(null)
        setTempImage(null)
    }

    const handleContinue = () => {
        if (activeStep === "plant-type") {
            setCompletedSteps([...completedSteps, "plant-type"])
            setActiveStep("plant-info")
        } else if (activeStep === "plant-info") {
            setCompletedSteps([...completedSteps, "plant-info"])
            setActiveStep("harvest-info")
        }
    }

    const handlePrevious = () => {
        if (activeStep === "plant-info") {
            setActiveStep("plant-type")
        } else if (activeStep === "harvest-info") {
            setActiveStep("plant-info")
        }
    }

    const PhotoUploadComponent = () => {
        if (uploadState === "default") {
            return (
                <div className="flex items-start bg-white rounded-md">
                    <div className="relative mr-3">
                        <div className="bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center">
                            <img src={DefaultImage || "/placeholder.svg"} alt="" />
                        </div>
                        <div className="absolute bottom-0 right-0">
                            <div
                                className="bg-white rethink-sans-400 rounded-full p-0.5 shadow-sm border border-gray-200 cursor-pointer"
                                onClick={() => document.getElementById("fileInput").click()}
                            >
                                <div>
                                    <img src={IconsButton || "/placeholder.svg"} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col mt-5">
                        <div className="flex space-x-2">
                            <button
                                className="text-green-500 rethink-sans-400 text-sm"
                                onClick={() => document.getElementById("fileInput").click()}
                            >
                                Upload
                            </button>
                            <span className="text-gray-400">|</span>
                            <button className="text-gray-500 rethink-sans-400 text-sm">Remove</button>
                        </div>
                        <div className="text-sm text-gray-500 rethink-sans-400 mb-1">Add a 120x120px icon</div>
                    </div>
                    <input type="file" id="fileInput" className="hidden" accept="image/*" onChange={handleFileChange} />
                </div>
            )
        } else if (uploadState === "uploading") {
            return (
                <div className="flex items-start bg-white rounded-md">
                    <div className="relative mr-3">
                        {/* Image with low opacity */}
                        <div className="relative w-20 h-20 rounded-full overflow-hidden">
                            {tempImage && (
                                <img
                                    src={tempImage || "/placeholder.svg"}
                                    alt="Uploading"
                                    className="w-full h-full object-cover opacity-50"
                                />
                            )}

                            {/* Progress circle overlay */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <svg className="h-full w-full" viewBox="0 0 100 100">
                                    <circle cx="50" cy="50" r="45" fill="none" stroke="#e6e6e6" strokeWidth="4" />
                                    <circle
                                        cx="50"
                                        cy="50"
                                        r="45"
                                        fill="none"
                                        stroke="#4CAF50"
                                        strokeWidth="4"
                                        strokeLinecap="round"
                                        strokeDasharray="283"
                                        strokeDashoffset={283 - (283 * uploadProgress) / 100}
                                        transform="rotate(-90 50 50)"
                                    />
                                </svg>
                            </div>

                            {/* Cancel button centered inside the circle */}
                            <div className="absolute inset-0 flex items-center justify-center z-10">
                                <button onClick={handleCancel} className="bg-white rounded-full p-1 shadow-sm border border-gray-200">
                                    <X size={14} color="#DC3545" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col mt-5">
                        <div className="flex space-x-2">
                            <button className="text-green-500 rethink-sans-400 text-sm" onClick={handleCancel}>
                                Cancel
                            </button>
                            <span className="text-gray-400">|</span>
                            <button className="text-gray-500 rethink-sans-400 text-sm" onClick={handleRemove}>
                                Remove
                            </button>
                        </div>
                        <div className="text-xs text-green-500 rethink-sans-400 mt-1">{uploadProgress}% Complete</div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="flex items-start bg-white rounded-md">
                    <div className="relative mr-3">
                        <img src={cropImage || "/placeholder.svg"} alt="Crop" className="w-20 h-20 rounded-full object-cover" />
                    </div>
                    <div className="flex flex-col mt-4">
                        <div className="flex space-x-2">
                            <button
                                className="text-green-500 rethink-sans-400 text-sm"
                                onClick={() => document.getElementById("fileInput").click()}
                            >
                                Change
                            </button>
                            <span className="text-gray-400">|</span>
                            <button className="text-[#DC3545] rethink-sans-400 text-sm" onClick={handleRemove}>
                                Remove
                            </button>
                        </div>
                        <div className="text-sm text-gray-500 rethink-sans-400 mb-1">Add a 120x120px icon</div>
                    </div>
                    <input type="file" id="fileInput" className="hidden" accept="image/*" onChange={handleFileChange} />
                </div>
            )
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
            <div className="flex justify-between items-center border-b mb-5 w-full border-slate-200">

                <div className="flex items-center justify-start gap-2  mb-6">
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
                        <p className=" rethink-sans-700">
                            {activeStep === "plant-type" ? "Plant Type" : activeStep === "plant-info" ? "Plant Info" : "Harvest Info"}
                        </p>
                        {nextStep && <p className="text-gray-500 rethink-sans-400 text-xs">Next: {nextStep}</p>}
                    </div>
                </div>
                <div className="flex mb-5 bg-[#F5F8F8] py-2 text-sm px-6 rounded-lg cursor-pointer items-center gap-1">
                    <div className="text-gray-500 rethink-sans-400 text-xs">Unpublished</div>
                    {/* <div>
                        <img src={TickImage } alt="" className="h-full w-full" />
                    </div> */}
                </div>
            </div>
        )
    }

    const renderFormFields = () => {
        if (activeStep === "plant-type") {
            return (
                <div className="space-y-4 max-w-xl mr-auto w-full rethink-sans-400">
                    <div className="dropdown-container">
                        <label className="block text-xs text-gray-500 mb-1">Search for Type</label>
                        <div className="relative">
                            <div className="relative">
                                <input
                                    type="text"
                                    value={plantCrops}
                                    onChange={(e) => {
                                        setPlantCrops(e.target.value)
                                        setIsDropdownOpen(true)
                                    }}
                                    onFocus={() => setIsDropdownOpen(true)}
                                    placeholder="Search for Type"
                                    className="w-full p-2.5 bg-[#F5F8F8]  rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-teal-500 transition-all duration-200"
                                />
                                {plantCrops && (
                                    <button
                                        onClick={() => {
                                            setPlantCrops("")
                                            setIsDropdownOpen(true)
                                        }}
                                        className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 text-xs"
                                    >
                                        Clear
                                    </button>
                                )}
                            </div>

                            {/* Dropdown */}
                            {isDropdownOpen && (
                                <div className="absolute z-10 mt-1 w-full bg-white rounded-md shadow-lg ">
                                    <div className="p-3 border-b border-gray-100">
                                        <p className="text-sm text-gray-600 rethink-sans-400">I'm searching for...</p>
                                    </div>
                                    <div className="max-h-60 overflow-y-auto p-2">
                                        {["Aloe Vera", "Baobab", "Cherry", "Cherry Blossom (Sakura)", "Lavender", "Oak"]
                                            .filter((crop) => (plantCrops ? crop.toLowerCase().includes(plantCrops.toLowerCase()) : true))
                                            .map((crop, index) => (
                                                <div key={index} className="flex items-center p-2 hover:bg-gray-50 rounded-md">
                                                    <input
                                                        type="checkbox"
                                                        id={`crop-${index}`}
                                                        checked={selectedCrops.includes(crop)}
                                                        onChange={() => {
                                                            if (selectedCrops.includes(crop)) {
                                                                setSelectedCrops(selectedCrops.filter((item) => item !== crop))
                                                            } else {
                                                                setSelectedCrops([...selectedCrops, crop])
                                                            }
                                                            setPlantCrops("")
                                                        }}
                                                        className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                                                    />
                                                    <label htmlFor={`crop-${index}`} className="ml-2 text-sm text-gray-700 rethink-sans-400">
                                                        {crop}
                                                    </label>
                                                </div>
                                            ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs text-gray-500 mb-1">Cultivar</label>
                        <input
                            type="text"
                            value={cultivar}
                            onChange={(e) => setCultivar(e.target.value)}
                            className="w-full p-2.5 bg-[#F5F8F8]  rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-teal-500 transition-all duration-200"
                        />
                    </div>

                    <div>
                        <label className="block text-xs text-gray-500 mb-1">Botanical Name</label>
                        <input
                            type="text"
                            value={botanicalName}
                            onChange={(e) => setBotanicalName(e.target.value)}
                            className="w-full p-2.5 bg-[#F5F8F8]  rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-teal-500 transition-all duration-200"
                        />
                    </div>

                    <div>
                        <label className="block text-xs text-gray-500 mb-1">Internal ID</label>
                        <input
                            type="text"
                            value={internalID}
                            onChange={(e) => setInternalID(e.target.value)}
                            className="w-full p-2.5 bg-[#F5F8F8]  rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-teal-500 transition-all duration-200"
                        />
                    </div>

                    <div>
                        <button className="w-full border-2 border-dashed border-gray-300 text-gray-600 rounded-md py-2.5 text-sm  transition-colors">
                            Add Custom Field
                        </button>
                    </div>
                </div>
            )
        } else if (activeStep === "plant-info") {
            return (
                <div className="space-y-4 max-w-xl mr-auto w-full rethink-sans-400">
                    <div>
                        <label className="block text-xs text-gray-500 mb-1">Start Method</label>
                        <div className="relative">
                            <select
                                value={startMethod}
                                onChange={(e) => setStartMethod(e.target.value)}
                                className="w-full p-2.5 bg-[#F5F8F8]  rounded-md text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-teal-500 transition-all duration-200"
                            >
                                <option value="Tray-Grown, Ground-Transplanted">Tray-Grown, Ground-Transplanted</option>
                                <option value="Direct Seeded">Direct Seeded</option>
                                <option value="Transplanted">Transplanted</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs text-gray-500 mb-1">Days to Emerge</label>
                        <div className="relative flex items-center">
                            <input
                                type="text"
                                value={daysToEmerge}
                                onChange={(e) => setDaysToEmerge(e.target.value)}
                                className="w-full p-2.5 bg-[#F5F8F8]  rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-teal-500 transition-all duration-200"
                            />
                            <span className="absolute right-16 text-gray-400 text-sm">day</span>
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

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs text-gray-500 mb-1">Plant Spacing</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    value={plantSpacing}
                                    onChange={(e) => setPlantSpacing(e.target.value)}
                                    className="w-full p-2.5 bg-[#F5F8F8]  rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-teal-500 transition-all duration-200"
                                />
                                <span className="absolute right-2 top-2 text-gray-400 text-sm">inches</span>
                            </div>
                        </div>
                        <div>
                            <label className="block text-xs text-gray-500 mb-1">Row Spacing</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    value={rowSpacing}
                                    onChange={(e) => setRowSpacing(e.target.value)}
                                    className="w-full p-2.5 bg-[#F5F8F8]  rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-teal-500 transition-all duration-200"
                                />
                                <span className="absolute right-2 top-2 text-gray-400 text-sm">inches</span>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs text-gray-500 mb-1">Plant Depth</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    value={plantDepth}
                                    onChange={(e) => setPlantDepth(e.target.value)}
                                    className="w-full p-2.5 bg-[#F5F8F8]  rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-teal-500 transition-all duration-200"
                                />
                                <span className="absolute right-2 top-2 text-gray-400 text-sm">inches</span>
                            </div>
                        </div>
                        <div>
                            <label className="block text-xs text-gray-500 mb-1">Average Height</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    value={averageHeight}
                                    onChange={(e) => setAverageHeight(e.target.value)}
                                    className="w-full p-2.5 bg-[#F5F8F8]  rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-teal-500 transition-all duration-200"
                                />
                                <span className="absolute right-2 top-2 text-gray-400 text-sm">inches</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <button className="w-full border-2 border-dashed border-gray-300 text-gray-600 rounded-md py-2.5 text-sm  transition-colors">
                            Add Custom Field
                        </button>
                    </div>
                </div>
            )
        } else if (activeStep === "harvest-info") {
            return (
                <div className="space-y-4 max-w-xl mr-auto w-full rethink-sans-400">
                    <div>
                        <label className="block text-xs text-gray-500 mb-1">Harvest Units</label>
                        <div className="relative">
                            <select
                                value={harvestUnits}
                                onChange={(e) => setHarvestUnits(e.target.value)}
                                className="w-full p-2.5 bg-[#F5F8F8]  rounded-md text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-teal-500 transition-all duration-200"
                            >
                                <option value="Dozen">Dozen</option>
                                <option value="Pound">Pound</option>
                                <option value="Kilogram">Kilogram</option>
                                <option value="Piece">Piece</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                        <div>
                            <label className="block text-xs text-gray-500 mb-1">Days to Flower</label>
                            <div className="relative flex items-center">
                                <input
                                    type="text"
                                    value={daysToFlower}
                                    onChange={(e) => setDaysToFlower(e.target.value)}
                                    className="w-full p-2.5 bg-[#F5F8F8]  rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-teal-500 transition-all duration-200"
                                />
                                <span className="absolute right-16 text-gray-400 text-sm">days</span>
                                <div className="absolute right-2 flex items-center space-x-1">
                                    <button className="bg-gray-300 rounded-full w-6 h-6 flex items-center justify-center">
                                        <span className="text-white text-sm">-</span>
                                    </button>
                                    <button className="bg-blue-500 rounded-full w-6 h-6 flex items-center justify-center">
                                        <span className="text-white text-sm">+</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label className="block text-xs text-gray-500 mb-1">Days to Maturity</label>
                            <div className="relative flex items-center">
                                <input
                                    type="text"
                                    value={daysToMaturity}
                                    onChange={(e) => setDaysToMaturity(e.target.value)}
                                    className="w-full p-2.5 bg-[#F5F8F8]  rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-teal-500 transition-all duration-200"
                                />
                                <span className="absolute right-16 text-gray-400 text-sm">days</span>
                                <div className="absolute right-2 flex items-center space-x-1">
                                    <button className="bg-gray-300 rounded-full w-6 h-6 flex items-center justify-center">
                                        <span className="text-white text-sm">-</span>
                                    </button>
                                    <button className="bg-blue-500 rounded-full w-6 h-6 flex items-center justify-center">
                                        <span className="text-white text-sm">+</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                        <div>
                            <label className="block text-xs text-gray-500 mb-1">Harvest Window</label>
                            <div className="relative flex items-center">
                                <input
                                    type="text"
                                    value={harvestWindow}
                                    onChange={(e) => setHarvestWindow(e.target.value)}
                                    className="w-full p-2.5 bg-[#F5F8F8]  rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-teal-500 transition-all duration-200"
                                />
                                <span className="absolute right-16 text-gray-400 text-sm">days</span>
                                <div className="absolute right-2 flex items-center space-x-1">
                                    <button className="bg-gray-300 rounded-full w-6 h-6 flex items-center justify-center">
                                        <span className="text-white text-sm">-</span>
                                    </button>
                                    <button className="bg-blue-500 rounded-full w-6 h-6 flex items-center justify-center">
                                        <span className="text-white text-sm">+</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label className="block text-xs text-gray-500 mb-1">Estimated Revenue</label>
                            <div className="relative flex items-center">
                                <input
                                    type="text"
                                    value={estimatedRevenue}
                                    onChange={(e) => setEstimatedRevenue(e.target.value)}
                                    className="w-full p-2.5 bg-[#F5F8F8]  rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-teal-500 transition-all duration-200"
                                />
                                <span className="absolute right-16 text-gray-400 text-sm">USD</span>
                                <div className="absolute right-2 flex items-center space-x-1">
                                    <button className="bg-gray-300 rounded-full w-6 h-6 flex items-center justify-center">
                                        <span className="text-white text-sm">-</span>
                                    </button>
                                    <button className="bg-blue-500 rounded-full w-6 h-6 flex items-center justify-center">
                                        <span className="text-white text-sm">+</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs text-gray-500 mb-1">Plant Spacing</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    value={harvestPlantSpacing}
                                    onChange={(e) => setHarvestPlantSpacing(e.target.value)}
                                    className="w-full p-2.5 bg-[#F5F8F8]  rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-teal-500 transition-all duration-200"
                                />
                                <span className="absolute right-2 top-2 text-gray-400 text-sm">inches</span>
                            </div>
                        </div>
                        <div>
                            <label className="block text-xs text-gray-500 mb-1">Row Spacing</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    value={harvestRowSpacing}
                                    onChange={(e) => setHarvestRowSpacing(e.target.value)}
                                    className="w-full p-2.5 bg-[#F5F8F8]  rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-teal-500 transition-all duration-200"
                                />
                                <span className="absolute right-2 top-2 text-gray-400 text-sm">inches</span>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs text-gray-500 mb-1">Plant Depth</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    value={harvestPlantDepth}
                                    onChange={(e) => setHarvestPlantDepth(e.target.value)}
                                    className="w-full p-2.5 bg-[#F5F8F8]  rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-teal-500 transition-all duration-200"
                                />
                                <span className="absolute right-2 top-2 text-gray-400 text-sm">inches</span>
                            </div>
                        </div>
                        <div>
                            <label className="block text-xs text-gray-500 mb-1">Average Height</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    value={harvestAverageHeight}
                                    onChange={(e) => setHarvestAverageHeight(e.target.value)}
                                    className="w-full p-2.5 bg-[#F5F8F8]  rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-teal-500 transition-all duration-200"
                                />
                                <span className="absolute right-2 top-2 text-gray-400 text-sm">inches</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <button className="w-full border-2 border-dashed border-gray-300 text-gray-600 rounded-md py-2.5 text-sm     transition-colors">
                            Add Custom Field
                        </button>
                    </div>
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
                            All Crops
                        </div>
                    </div>
                    <div>
                        <TiArrowRight />
                    </div>
                    <div>
                        <div className="bg-[#17A24A] rethink-sans-400 text-white rounded-full px-3 py-1.5 text-xs cursor-pointer">
                            Crop Info
                        </div>
                    </div>
                </div>
                <div>
                    <Link
                        to="/main-dashboard/crop-management"
                        className="text-gray-900 rethink-sans-400 cursor-pointer text-sm flex items-center"
                    >
                        <X size={16} className="mr-1" />
                        <span className="hidden md:inline">Cancel Edit</span>
                    </Link>
                </div>
            </div>

            <div className="rounded-md min-h-screen">
                <div className="bg-white rounded-lg shadow-sm lg:p-6 p-3">
                    <div className="mb-6">
                        {/* Desktop Step Indicator */}
                        <div className="hidden md:flex justify-between items-center mb-6">
                            <div className="flex items-center justify-start">
                                <div className="flex gap-2 rethink-sans-400 items-center">
                                    <div className="cursor-pointer" onClick={() => setActiveStep("plant-type")}>
                                        {renderStepIndicator("plant-type")}
                                    </div>
                                    <span className="text-sm">Plant Type</span>
                                </div>

                                <div
                                    className={`h-0.5 w-13 mx-2 ${activeStep === "plant-info" || completedSteps.includes("plant-type")
                                        ? "bg-green-500"
                                        : "bg-gray-200"
                                        }`}
                                ></div>

                                <div className="flex gap-2 rethink-sans-400 items-center">
                                    <div
                                        className="cursor-pointer"
                                        onClick={() => completedSteps.includes("plant-type") && setActiveStep("plant-info")}
                                    >
                                        {renderStepIndicator("plant-info")}
                                    </div>
                                    <span className="text-sm">Plant Info</span>
                                </div>

                                <div
                                    className={`h-0.5 w-13 mx-2 ${activeStep === "harvest-info" || completedSteps.includes("plant-info")
                                        ? "bg-green-500"
                                        : "bg-gray-200"
                                        }`}
                                ></div>

                                <div className="flex gap-2 rethink-sans-400 items-center">
                                    <div
                                        className="cursor-pointer"
                                        onClick={() => completedSteps.includes("plant-info") && setActiveStep("harvest-info")}
                                    >
                                        {renderStepIndicator("harvest-info")}
                                    </div>
                                    <span className="text-sm">Harvest Info</span>
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

                        <div className="mb-6">{activeStep === "plant-type" && <PhotoUploadComponent />}</div>

                        {renderFormFields()}
                    </div>

                    <div className="mt-8 flex justify-start gap-2">
                        <button
                            onClick={handleContinue}
                            className="md:w-auto w-full order-2 bg-[#01575C] rethink-sans-400 hover:bg-teal-900 text-white py-2 px-8 rounded-md text-sm transition-colors"
                        >
                            Continue
                        </button>
                        {activeStep !== "plant-type" && (
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

export default AddNewCrop
