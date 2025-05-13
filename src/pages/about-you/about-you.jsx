import backgroundImage from "../../../public/images/0accd8c12f853c81224b93033132a34ccfa9ae87.png"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import BusinessProfile from '../../../public/images/fi-sr-building.svg'
import UserProfile from '../../../public/images/fi-rr-user.svg'

const AboutYou = () => {
  const navigate = useNavigate()
  const [accountType, setAccountType] = useState("business")
  const [businessName, setBusinessName] = useState("Amazarm")
  const [measurementSystem, setMeasurementSystem] = useState("Metric")
  const [country, setCountry] = useState("South Africa")
  const [timezone, setTimezone] = useState("UTC 02:00")
  
  const [businessNameFocused, setBusinessNameFocused] = useState(false)
  const [measurementSystemFocused, setMeasurementSystemFocused] = useState(false)
  const [countryFocused, setCountryFocused] = useState(false)
  const [timezoneFocused, setTimezoneFocused] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate("/customize-experience") 
  }

  const handleSkip = () => {
    navigate("/customize-experience") 
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

      <div className="bg-[#FFFFFF] rounded-xl shadow-lg lg:p-8 p-4 w-full max-w-md z-10 relative">
        <div className="flex items-center justify-center mb-6">
          <div className="h-6 w-6 bg-green-500 text-white flex items-center justify-center rounded-sm font-bold">L</div>
          <span className="ml-2 text-gray-800 font-medium">
            Lucolyx <span className="text-green-500">Design</span>
          </span>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-2xl rethink-sans-700 text-gray-800 mb-1">About You</h1>
          <p className="text-sm text-gray-500 rethink-sans-400">Tell us more about yourself.</p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="rethink-sans-400">
            <label className="text-sm text-gray-600 mb-1 block">Account Type</label>
            <div className="flex gap-3">
              <button
                type="button"
                className={`flex-1 py-2 px-4 text-sm rounded-lg cursor-pointer flex items-center justify-center gap-2 ${
                  accountType === "business" ? "bg-black text-white" : " border border-gray-300 text-gray-700"
                }`}
                onClick={() => setAccountType("business")}
              >
                <img src={BusinessProfile} alt="" />
                Business
              </button>
              <button
                type="button"
                className={`flex-1 py-2 text-sm px-4 rounded-lg cursor-pointer flex items-center justify-center gap-2 ${
                  accountType === "personal" ? "bg-black text-white" : "bg-white border border-gray-300 text-gray-700"
                }`}
                onClick={() => setAccountType("personal")}
              >
                <img src={UserProfile} alt="" />
                Personal
              </button>
            </div>
          </div>

          <div className="relative">
            <label
              htmlFor="businessName"
              className={`absolute left-3 rethink-sans-400 transition-all duration-200 ${
                businessNameFocused || businessName ? 'top-0 text-xs text-[#01575C] bg-white px-1 -mt-2' : 'top-3 text-sm text-gray-500'
              }`}
            >
              Farm/Business Name
            </label>
            <div className="flex text-sm rethink-sans-400 items-center border-none rounded-lg px-3 py-3 bg-[#F5F8F8]">
              <input
                id="businessName"
                type="text"
                className="w-full outline-none text-sm text-gray-800 bg-transparent"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                onFocus={() => setBusinessNameFocused(true)}
                onBlur={() => !businessName && setBusinessNameFocused(false)}
              />
            </div>
          </div>

          <div className="relative">
            <label
              htmlFor="measurementSystem"
              className={`absolute left-3 rethink-sans-400 transition-all duration-200 ${
                measurementSystemFocused || measurementSystem ? 'top-0 text-xs text-[#01575C] bg-white px-1 -mt-2 z-10' : 'top-3 text-sm text-gray-500'
              }`}
            >
              Measurement System
            </label>
            <div className="relative flex text-sm rethink-sans-400 items-center border-none rounded-lg px-3 py-3 bg-[#F5F8F8]">
              <select
                id="measurementSystem"
                className="w-full outline-none text-sm text-gray-800 bg-transparent appearance-none"
                value={measurementSystem}
                onChange={(e) => setMeasurementSystem(e.target.value)}
                onFocus={() => setMeasurementSystemFocused(true)}
                onBlur={() => !measurementSystem && setMeasurementSystemFocused(false)}
              >
                <option value="Metric">Metric</option>
                <option value="Imperial">Imperial</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="w-1/2 relative">
              <label
                htmlFor="country"
                className={`absolute left-3 rethink-sans-400 transition-all duration-200 ${
                  countryFocused || country ? 'top-0 text-xs text-[#01575C] bg-white px-1 -mt-2 z-10' : 'top-3 text-sm text-gray-500'
                }`}
              >
                Country
              </label>
              <div className="relative flex text-sm rethink-sans-400 items-center border-none rounded-lg px-3 py-3 bg-[#F5F8F8]">
                <select
                  id="country"
                  className="w-full outline-none text-sm text-gray-800 bg-transparent appearance-none"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  onFocus={() => setCountryFocused(true)}
                  onBlur={() => !country && setCountryFocused(false)}
                >
                  <option value="South Africa">🇿🇦 South Africa</option>
                  <option value="United States">🇺🇸 United States</option>
                  <option value="United Kingdom">🇬🇧 United Kingdom</option>
                  <option value="Canada">🇨🇦 Canada</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="w-1/2 relative">
              <label
                htmlFor="timezone"
                className={`absolute left-3 rethink-sans-400 transition-all duration-200 ${
                  timezoneFocused || timezone ? 'top-0 text-xs text-[#01575C] bg-white px-1 -mt-2 z-10' : 'top-3 text-sm text-gray-500'
                }`}
              >
                Timezone
              </label>
              <div className="relative flex text-sm rethink-sans-400 items-center border-none rounded-lg px-3 py-3 bg-[#F5F8F8]">
                <select
                  id="timezone"
                  className="w-full outline-none text-sm text-gray-800 bg-transparent appearance-none"
                  value={timezone}
                  onChange={(e) => setTimezone(e.target.value)}
                  onFocus={() => setTimezoneFocused(true)}
                  onBlur={() => !timezone && setTimezoneFocused(false)}
                >
                  <option value="UTC 02:00">UTC 02:00</option>
                  <option value="UTC 00:00">UTC 00:00</option>
                  <option value="UTC -05:00">UTC -05:00</option>
                  <option value="UTC -08:00">UTC -08:00</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-3 pt-4 rethink-sans-400">
            <button
              type="button"
              onClick={handleSkip}
              className="w-1/2 border border-gray-300 text-gray-700 rounded-lg text-sm cursor-pointer py-2 px-4 flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              Skip
            </button>
            <button
              type="submit"
              className="w-1/2 bg-[#01575C] text-white rounded-lg text-sm cursor-pointer py-2 px-4 flex items-center justify-center hover:bg-teal-900 transition-colors"
            >
              Submit
            </button>
          </div>
        </form>

        <div className="flex justify-center items-center mt-7 gap-1">
          <div className="w-7 bg-[#F2852F] h-2 rounded-full"></div>
          <div className="w-16 bg-[#F2852F] h-2 rounded-full"></div>
          <div className="w-7 bg-slate-300 h-2 rounded-full"></div>
        </div>
      </div>
    </div>
  )
}

export default AboutYou