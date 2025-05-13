import backgroundImage from "../../../public/images/0accd8c12f853c81224b93033132a34ccfa9ae87.png"
import Logo from "../../../public/images/Logo Mark.svg"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"

const Signup = () => {
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [countryCode, setCountryCode] = useState("+27")
  const [optIn, setOptIn] = useState(false)

  const [fullNameFocused, setFullNameFocused] = useState(false)
  const [emailFocused, setEmailFocused] = useState(false)
  const [phoneNumberFocused, setPhoneNumberFocused] = useState(false)

  const navigate = useNavigate();

  const redirectToCreatePassword = () =>{
    navigate("/create-password")
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
          <div>
            <img src={Logo || "/placeholder.svg"} alt="" />
          </div>
          <span className="text-gray-800 rethink-sans-700 text-lg">
            Lucolyx <span className="text-[#17A24A]">Design</span>
          </span>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-2xl rethink-sans-700 text-gray-800 mb-1">Welcome to Our Platform</h1>
          <p className="text-sm text-gray-500 rethink-sans-400">Sign up and manage your farm easily.</p>
        </div>

        <form className="space-y-4">
          <div className="relative">
            <label
              htmlFor="fullName"
              className={`absolute left-3 transition-all duration-200 ${fullNameFocused || fullName ? "top-0 text-xs text-[#01575C] bg-white px-1 -mt-2" : "top-3 text-sm text-gray-500"}`}
            >
              Full Name
            </label>
            <div className="flex text-sm items-center border-none rounded-lg px-3 py-3 bg-[#F5F8F8]">
              <input
                id="fullName"
                type="text"
                className="w-full pl-2 outline-none text-sm text-gray-800 bg-transparent"
                value={fullName}
                // placeholder="John Doe"
                onChange={(e) => setFullName(e.target.value)}
                onFocus={() => setFullNameFocused(true)}
                onBlur={() => !fullName && setFullNameFocused(false)}
              />
            </div>
          </div>

          <div className="relative">
            <label
              htmlFor="email"
              className={`absolute left-3 rethink-sans-400 transition-all duration-200 ${emailFocused || email ? "top-0 text-xs text-[#01575C] bg-white px-1 -mt-2" : "top-3 text-sm text-gray-500"}`}
            >
              Email
            </label>
            <div className="flex text-sm rethink-sans-400 items-center border-none rounded-lg px-3 py-3 bg-[#F5F8F8]">
              <input
                id="email"
                type="email"
                className="w-full pl-2 outline-none text-sm text-gray-800 bg-transparent"
                value={email}
                // placeholder="john.doe@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setEmailFocused(true)}
                onBlur={() => !email && setEmailFocused(false)}
              />
            </div>
          </div>

          <div className="flex gap-2">
            <div className="relative w-1/3">
              <label htmlFor="countryCode" className="absolute rethink-sans-400 left-3 top-0 text-xs text-[#01575C] bg-white px-1 -mt-2">
                Code
              </label>
              <div className="flex text-sm items-center rethink-sans-400 border-none rounded-lg px-3 py-3 bg-[#F5F8F8]">
                <div className="flex items-center">
                  <img src="https://flagcdn.com/w20/za.png" alt="South Africa" className="w-5 h-3 mr-1" />
                  <select
                    id="countryCode"
                    className="bg-transparent outline-none text-sm appearance-none pr-6"
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                  >
                    <option value="+27">+27</option>
                    <option value="+1">+1</option>
                    <option value="+44">+44</option>
                    <option value="+91">+91</option>
                  </select>
                  <div className="pointer-events-none absolute right-4">
                    <svg
                      className="fill-current h-4 w-4 text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative w-2/3">
              <label
                htmlFor="phoneNumber"
                className={`absolute left-3 rethink-sans-400 transition-all duration-200 ${phoneNumberFocused || phoneNumber ? "top-0 text-xs text-[#01575C] bg-white px-1 -mt-2" : "top-3 text-sm text-gray-500"}`}
              >
                Phone Number
              </label>
              <div className="flex text-sm rethink-sans-400 items-center border-none rounded-lg px-3 py-3 bg-[#F5F8F8]">
                <input
                  id="phoneNumber"
                  type="tel"
                  className="w-full pl-2 outline-none text-sm text-gray-800 bg-transparent"
                  value={phoneNumber}
                //   placeholder="061-234-5678"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  onFocus={() => setPhoneNumberFocused(true)}
                  onBlur={() => !phoneNumber && setPhoneNumberFocused(false)}
                />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 mt-2">
            <label className="inline-flex items-center cursor-pointer">
              <div
                className={`relative w-10 h-5 rounded-full rethink-sans-500 transition-colors duration-200 ease-in-out ${optIn ? "bg-[#01575C]" : "bg-gray-300"}`}
              >
                <input
                  type="checkbox"
                  className="opacity-0 w-0 h-0"
                  checked={optIn}
                  onChange={() => setOptIn(!optIn)}
                />
                <span
                  className={`absolute top-0.5 left-0.5 bg-white w-4 h-4 rounded-full transition-transform duration-200 ease-in-out ${optIn ? "transform translate-x-5" : ""}`}
                ></span>
              </div>
              <span className="ml-2 text-sm text-gray-900 rethink-sans-500">Opt in for marketing and 24/7 assistance</span>
            </label>
          </div>

          <div className="text-xs text-gray-600 mt-2 rethink-sans-400">
            By signing up to our platform you agree to the{" "}
            <a href="#" className="text-[#17A24A] underline">
              terms
            </a>{" "}
            and{" "}
            <a href="#" className="text-[#17A24A] underline">
              privacy policy
            </a>{" "}
            by our company.
          </div>

          <button
          onClick={redirectToCreatePassword}
            type="submit"
            className="w-full bg-[#01575C] text-sm mt-4 rethink-sans-500 text-white rounded-lg py-3 px-4 flex gap-3 cursor-pointer items-center justify-center hover:bg-teal-900 transition-colors"
          >
            Create an Account
          </button>
        </form>

        <div className="text-center md:text-md text-sm mt-6 rethink-sans-500">
          <span className="text-gray-600">Already have an account? </span>
          <Link to="/login" className="text-[#17A24A] font-medium hover:underline">
            Login
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Signup
