import { MdOutlineKeyboardArrowDown } from "react-icons/md"
import CropImage from "../../../public/images/ChatGPT Image May 23, 2025, 12_13_59 PM 1-roles.png"
import SubscriptionImage from "../../../public/images/ChatGPT Image May 23, 2025, 12_13_59 PM 1-subscription.png"
import { useState } from "react"
import AddRole from "./add-role"
import { Search } from "react-feather"
import RolesList from "./roles-list"
import SubscriptionList from "./subscription-list"
import AddNewPlan from "./add-new-plan"
import Avatar from '../../../public/images/IMG-03.png'

const RolesAndPermission = () => {
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [isSubscriptionModal, setIsSubscriptionModal] = useState(false)
    const [activeTab, setActiveTab] = useState("roles")
    const [searchText, setSearchText] = useState("")
    const [hasRoles, setHasRoles] = useState(false)
    const [hasSubscription, setHasSubscription] = useState(false)
    const [useTwilioNumber, setUseTwilioNumber] = useState(true)

    const showModal = () => {
        setIsModalVisible(true)
    }

    const handleCancel = () => {
        setIsModalVisible(false)
    }

    const handleSubmit = (roleData) => {
        console.log("New role created:", roleData)
        setIsModalVisible(false)
        setHasRoles(true)
    }

    const showSubscriptionModal = () => {
        setIsSubscriptionModal(true)
    }

    const handleSubscriptionCancel = () => {
        setIsSubscriptionModal(false)
    }

    const handleSubscriptionSubmit = (planData) => {
        console.log("New subscription created:", planData)
        setIsSubscriptionModal(false)
        setHasSubscription(true)
    }

    const renderTabContent = () => {
        switch (activeTab) {
            case "security":
                return (
                    <div className="flex flex-col items-center justify-center py-8">
                        <div className="relative w-34 h-34 mb-2">
                            <div>
                                <img src={CropImage || "/placeholder.svg"} alt="Security illustration" />
                            </div>
                        </div>
                        <h2 className="text-xl rethink-sans-700 text-gray-900 mb-1">Security Settings</h2>
                        <p className="text-sm text-center text-gray-500 mb-4 rethink-sans-400">
                            Manage your account security settings and preferences.
                        </p>
                        <p className="text-sm text-gray-500 mb-4 rethink-sans-400">Security features are coming soon.</p>
                    </div>
                )
            case "roles":
                if (hasRoles) {
                    return <RolesList searchText={searchText} onSearchChange={setSearchText} />
                }
                return (
                    <div className="flex flex-col items-center justify-center py-8">
                        <div className="relative w-34 h-34 mb-2">
                            <div>
                                <img src={CropImage || "/placeholder.svg"} alt="Roles illustration" />
                            </div>
                        </div>
                        <h2 className="text-xl text-center rethink-sans-700 text-gray-900 mb-1">No Roles & Permissions Created</h2>
                        <p className="text-sm text-center text-gray-500 mb-4 rethink-sans-400">
                            Manage roles and permissions for users within the platform.
                        </p>
                        <button
                            onClick={showModal}
                            className="bg-[#01575C] rethink-sans-400 cursor-pointer hover:bg-teal-900 text-white px-6 py-2 rounded-md text-sm transition-colors"
                        >
                            Add Roles
                        </button>
                        <AddRole visible={isModalVisible} onCancel={handleCancel} onSubmit={handleSubmit} />
                    </div>
                )
            case "subscription":
                if (hasSubscription) {
                    return <SubscriptionList searchText={searchText} onSearchChange={setSearchText} />
                }
                return (
                    <div className="flex flex-col items-center justify-center py-8">
                        <div className="relative w-34 h-34 mb-2">
                            <div>
                                <img src={SubscriptionImage || "/placeholder.svg"} alt="Subscription illustration" />
                            </div>
                        </div>
                        <h2 className="text-xl rethink-sans-700 text-center text-gray-900 mb-1">No Subscription Plans Created</h2>
                        <p className="text-sm text-center text-gray-500 mb-4 rethink-sans-400">
                            Manage subscription plans within the platform.
                        </p>
                        <button
                            onClick={showSubscriptionModal}
                            className="bg-[#01575C] text-center rethink-sans-400 cursor-pointer hover:bg-teal-900 text-white px-6 py-2 rounded-md text-sm transition-colors"
                        >
                            Add New Plan
                        </button>
                        <AddNewPlan
                            visible={isSubscriptionModal}
                            onCancel={handleSubscriptionCancel}
                            onSubmit={handleSubscriptionSubmit}
                        />
                    </div>
                )
            case "notification":
                return (
                    <div className="py-6">
                        <div className="space-y-12">
                            {/* Email Configuration Section */}
                            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-8">
                                <div className="lg:col-span-1 md:col-span-1">
                                    <h3 className="text-lg rethink-sans-700 text-gray-900">Email Configuration</h3>
                                </div>
                                <div className="lg:col-span-3 md:col-span-2">
                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-sm rethink-sans-400 text-gray-700 mb-2">Sender Email</label>
                                            <div className="bg-[#F5F8F8] px-3 py-2 rounded-md w-full lg:w-80">
                                                <input
                                                    type="email"
                                                    value="noreply@farmconnect.com"
                                                    className="w-full bg-transparent text-sm rethink-sans-400 focus:outline-none"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm rethink-sans-400 text-gray-700 mb-2">Reply-To Email</label>
                                            <div className="bg-[#F5F8F8] px-3 py-2 rounded-md w-full lg:w-80">
                                                <input
                                                    type="email"
                                                    value="support@farmconnect.com"
                                                    className="w-full bg-transparent text-sm rethink-sans-400 focus:outline-none"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm rethink-sans-400 text-gray-700 mb-2">Email Subject Prefix</label>
                                            <div className="bg-[#F5F8F8] px-3 py-2 rounded-md w-full lg:w-80">
                                                <input
                                                    type="text"
                                                    value="[Action Required]"
                                                    className="w-full bg-transparent text-sm rethink-sans-400 focus:outline-none"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* SMS Configuration Section */}
                            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-8">
                                <div className="lg:col-span-1 md:col-span-1">
                                    <h3 className="text-lg rethink-sans-700 text-gray-900">SMS Configuration</h3>
                                </div>
                                <div className="lg:col-span-3 md:col-span-2">
                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-sm rethink-sans-400 text-gray-700 mb-2">Sender ID/Number</label>
                                            <div className="bg-[#F5F8F8] px-3 py-2 rounded-md w-full lg:w-80">
                                                <input
                                                    type="text"
                                                    value="+1234567890"
                                                    className="w-full bg-transparent text-sm rethink-sans-400 focus:outline-none"
                                                />
                                            </div>
                                        </div>

                                        <div className="flex items-center">
                                            <button
                                                onClick={() => setUseTwilioNumber(!useTwilioNumber)}
                                                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${useTwilioNumber ? "bg-[#01575C]" : "bg-gray-200"
                                                    }`}
                                                role="switch"
                                                aria-checked={useTwilioNumber}
                                            >
                                                <span
                                                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${useTwilioNumber ? "translate-x-6" : "translate-x-1"
                                                        }`}
                                                />
                                            </button>
                                            <span className="ml-2 text-sm rethink-sans-400 text-gray-700">Use Twilio number</span>
                                        </div>

                                        <div>
                                            <label className="block text-sm rethink-sans-400 text-gray-700 mb-2">
                                                Account Verification Template
                                            </label>
                                            <div className="bg-[#F5F8F8] px-3 py-2 rounded-md w-full lg:w-96">
                                                <textarea
                                                    rows={2}
                                                    value="Your verification code is: {{code}}. Expires in 10 mins."
                                                    className="w-full bg-transparent text-sm rethink-sans-400 focus:outline-none resize-none"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm rethink-sans-400 text-gray-700 mb-2">
                                                Password Reset Template
                                            </label>
                                            <div className="bg-[#F5F8F8] px-3 py-2 rounded-md w-full lg:w-96">
                                                <textarea
                                                    rows={2}
                                                    value="Reset your password with this link: {{link}}"
                                                    className="w-full bg-transparent text-sm rethink-sans-400 focus:outline-none resize-none"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Global Alerts Section */}
                            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-8">
                                <div className="lg:col-span-1 md:col-span-1">
                                    <h3 className="text-lg rethink-sans-700 text-gray-900">Global Alerts</h3>
                                </div>
                                <div className="lg:col-span-3 md:col-span-2">
                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-sm rethink-sans-400 text-gray-700 mb-2">
                                                Maintenance Alert Message
                                            </label>
                                            <div className="bg-[#F5F8F8] px-3 py-2 rounded-md w-full lg:w-96">
                                                <textarea
                                                    rows={3}
                                                    value="🔧 Scheduled Maintenance: Our platform will be unavailable on Jan 1, 2026, from 2-4 AM UTC. Apologies for the inconvenience"
                                                    className="w-full bg-transparent text-sm rethink-sans-400 focus:outline-none resize-none"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm rethink-sans-400 text-gray-700 mb-2">
                                                Important Event Alert Message
                                            </label>
                                            <div className="bg-[#F5F8F8] px-3 py-2 rounded-md w-full lg:w-96">
                                                <textarea
                                                    rows={3}
                                                    value="🚨 Urgent: System outage detected. Our team is resolving it. Check status.yourplatform.com for updates."
                                                    className="w-full bg-transparent text-sm rethink-sans-400 focus:outline-none resize-none"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Save Changes Button */}
                            <div>
                                <button className="px-6 py-2 bg-[#01575C] text-white rounded-md text-sm rethink-sans-400 hover:bg-teal-900 transition-colors">
                                    Save Changes
                                </button>
                            </div>
                        </div>
                    </div>
                )
            case "api":
                return (
                    <div className="py-6">
                        <div className="space-y-12">
                            {/* Legal & Branding Section */}
                            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-8">
                                <div className="lg:col-span-1 md:col-span-1">
                                    <h3 className="text-lg rethink-sans-700 text-gray-900">Legal & Branding</h3>
                                </div>
                                <div className="lg:col-span-3 md:col-span-2">
                                    <div className="flex flex-col gap-8">
                                        {/* Logo Section - Left Side */}
                                        <div className="flex flex-col items-center lg:items-start">
                                            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-green-600 text-xl font-bold mb-2">
                                                F
                                            </div>
                                            <div className="flex gap-3 text-sm mb-1">
                                                <button className="text-green-600 rethink-sans-400">Change</button>
                                                <button className="text-red-600 rethink-sans-400">Remove</button>
                                            </div>
                                            <p className="text-xs text-gray-500 rethink-sans-400">Add a 120x120px icon</p>
                                        </div>

                                        {/* Form Fields - Right Side */}
                                        <div className="flex-1 space-y-4">
                                            <div>
                                                <label className="block text-sm rethink-sans-400 text-gray-700 mb-2">
                                                    Terms of Service URL
                                                </label>
                                                <div className="bg-[#F5F8F8] px-3 py-2 rounded-md w-full lg:w-80">
                                                    <input
                                                        type="url"
                                                        value="https://farmconnect.com/terms"
                                                        className="w-full bg-transparent text-sm rethink-sans-400 focus:outline-none"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label className="block text-sm rethink-sans-400 text-gray-700 mb-2">Privacy Policy URL</label>
                                                <div className="bg-[#F5F8F8] px-3 py-2 rounded-md w-full lg:w-80">
                                                    <input
                                                        type="url"
                                                        value="https://farmconnect.com/privacy"
                                                        className="w-full bg-transparent text-sm rethink-sans-400 focus:outline-none"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label className="block text-sm rethink-sans-400 text-gray-700 mb-2">Primary Color</label>
                                                <div className="bg-[#F5F8F8] px-3 py-2 rounded-md flex items-center justify-between w-full lg:w-48">
                                                    <input
                                                        type="text"
                                                        value="#17A24A"
                                                        className="bg-transparent text-sm rethink-sans-400 focus:outline-none"
                                                    />
                                                    <div className="w-4 h-4 bg-green-600 rounded-full"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* API Integrations Section */}
                            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-8">
                                <div className="lg:col-span-1 md:col-span-1">
                                    <h3 className="text-lg rethink-sans-700 text-gray-900">API Integrations</h3>
                                </div>
                                <div className="lg:col-span-3 md:col-span-2">
                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-sm rethink-sans-400 text-gray-700 mb-2">Twilio API Key</label>
                                            <div className="bg-[#F5F8F8] px-3 py-2 rounded-md w-full lg:w-96">
                                                <input
                                                    type="text"
                                                    value="12345678-ABCD-1234-ABCD-1234567890AB"
                                                    className="w-full bg-transparent text-sm rethink-sans-400 focus:outline-none"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm rethink-sans-400 text-gray-700 mb-2">SendGrid API Key</label>
                                            <div className="bg-[#F5F8F8] px-3 py-2 rounded-md w-full lg:w-96">
                                                <input
                                                    type="text"
                                                    value="12345678-ABCD-1234-ABCD-1234567890AB"
                                                    className="w-full bg-transparent text-sm rethink-sans-400 focus:outline-none"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Payment Gateway Section */}
                            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-8">
                                <div className="lg:col-span-1 md:col-span-1">
                                    <h3 className="text-lg rethink-sans-700 text-gray-900">Payment Gateway</h3>
                                </div>
                                <div className="lg:col-span-3 md:col-span-2">
                                    <div>
                                        <label className="block text-sm rethink-sans-400 text-gray-700 mb-2">Stripe Key</label>
                                        <div className="bg-[#F5F8F8] px-3 py-2 rounded-md w-full lg:w-80">
                                            <input
                                                type="text"
                                                value="sk_test_4eC39HqLyjWDarjtT1zdp74c"
                                                className="w-full bg-transparent text-sm rethink-sans-400 focus:outline-none"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Localization Section */}
                            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-8">
                                <div className="lg:col-span-1 md:col-span-1">
                                    <h3 className="text-lg rethink-sans-700 text-gray-900">Localization</h3>
                                </div>
                                <div className="lg:col-span-3 md:col-span-2">
                                    <div>
                                        <label className="block text-sm rethink-sans-400 text-gray-700 mb-2">Languages</label>
                                        <div className="flex flex-wrap gap-2 mb-3">
                                            <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rethink-sans-400 flex items-center rounded">
                                                English
                                                <button className="ml-2 text-gray-500 hover:text-gray-700">×</button>
                                            </span>
                                            <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rethink-sans-400 flex items-center rounded">
                                                Spanish
                                                <button className="ml-2 text-gray-500 hover:text-gray-700">×</button>
                                            </span>
                                            <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rethink-sans-400 flex items-center rounded">
                                                French
                                                <button className="ml-2 text-gray-500 hover:text-gray-700">×</button>
                                            </span>
                                            <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rethink-sans-400 flex items-center rounded">
                                                German
                                                <button className="ml-2 text-gray-500 hover:text-gray-700">×</button>
                                            </span>
                                        </div>
                                        <textarea
                                            placeholder="enter language"
                                            rows={4}
                                            className="w-full lg:w-96 px-3 py-2 bg-[#F5F8F8] rounded-md text-sm rethink-sans-400 focus:outline-none resize-none"
                                        />
                                        <p className="text-xs text-gray-500 rethink-sans-400 mt-1">Separate using commas</p>
                                    </div>
                                </div>
                            </div>

                            {/* Save Changes Button */}
                            <div>
                                <button className="px-6 py-2 bg-[#01575C] text-white rounded-md text-sm rethink-sans-400 hover:bg-teal-900 transition-colors">
                                    Save Changes
                                </button>
                            </div>
                        </div>
                    </div>
                )
            default:
                return null
        }
    }

    return (
        <div className="md:mt-10 mt-5">
            <div className="flex md:justify-between justify-start md:flex-row flex-col md:items-center items-start md:gap-0 gap-4 mb-6">
                <div>
                    <div className="flex items-center gap-2">
                        <div>
                            <img src={Avatar} alt="" />
                        </div>
                        <div>
                            <h1 className="md:text-2xl text-xl rethink-sans-700 ">Anthony Gutkowski</h1>
                            <p className="rethink-sans-400 text-sm text-gray-700">Manage your personal account.</p>

                        </div>

                    </div>
                </div>
                <button className="flex items-center rethink-sans-400 gap-1 px-5 py-2 border border-gray-700 rounded-md md:text-sm text-xs">
                    <span className="inline">Edit Profile</span>
                    <MdOutlineKeyboardArrowDown size={16} />
                </button>   
            </div>
            <div className="bg-white rounded-lg shadow-sm lg:p-8 p-4">
                <div className="flex md:justify-between gap-2 justify-start flex-col md:flex-row md:items-center items-start">
                    <div className="w-full md:w-fit">
                        <div className="flex items-center md:gap-4 gap-2 overflow-x-auto scrollbar scrollbar-hide ">
                            <div className="flex bg-gray-100 rounded-lg p-1">
                                <button
                                    onClick={() => setActiveTab("security")}
                                    className={`px-4 md:py-2 py-0.5 rounded-md md:text-sm text-xs font-medium transition-colors ${activeTab === "security" ? "bg-green-600 text-white shadow-sm" : "text-gray-600 hover:text-gray-900"
                                        }`}
                                >
                                    Security
                                </button>
                                <button
                                    onClick={() => setActiveTab("roles")}
                                    className={`px-4 md:py-2 py-0.5 rounded-md md:text-sm text-xs font-medium transition-colors ${activeTab === "roles" ? "bg-green-600 text-white shadow-sm" : "text-gray-600 hover:text-gray-900"
                                        }`}
                                >
                                    Roles
                                </button>
                                <button
                                    onClick={() => setActiveTab("subscription")}
                                    className={`px-4 md:py-2 py-0.5 rounded-md md:text-sm text-xs font-medium transition-colors ${activeTab === "subscription"
                                            ? "bg-green-600 text-white shadow-sm"
                                            : "text-gray-600 hover:text-gray-900"
                                        }`}
                                >
                                    Subscription
                                </button>
                                <button
                                    onClick={() => setActiveTab("notification")}
                                    className={`px-4 md:py-2 py-0.5 rounded-md md:text-sm text-xs font-medium transition-colors ${activeTab === "notification"
                                            ? "bg-green-600 text-white shadow-sm"
                                            : "text-gray-600 hover:text-gray-900"
                                        }`}
                                >
                                    Notification
                                </button>
                                <button
                                    onClick={() => setActiveTab("api")}
                                    className={`px-4 md:py-2 py-0.5 rounded-md md:text-sm text-xs font-medium transition-colors ${activeTab === "api" ? "bg-green-600 text-white shadow-sm" : "text-gray-600 hover:text-gray-900"
                                        }`}
                                >
                                    API & System
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex md:justify-end justify-start md:mb-0 mb-6 items-center">
                        <div className="flex items-center gap-5">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder={`Search ${activeTab}`}
                                    className="p-2 md:w-auto w-full  rethink-sans-400 outline-none bg-[#F5F8F8] rounded-md text-sm"
                                    value={searchText}
                                    onChange={(e) => setSearchText(e.target.value)}
                                />
                                <Search size={16} className="absolute md:block hidden left-2 top-2.5 text-gray-400" />
                            </div>
                        </div>
                    </div>
                </div>

                {renderTabContent()}
            </div>
        </div>
    )
}

export default RolesAndPermission
