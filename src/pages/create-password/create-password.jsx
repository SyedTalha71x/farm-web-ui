import backgroundImage from "../../../public/images/0accd8c12f853c81224b93033132a34ccfa9ae87.png"
import Logo from "../../../public/images/Logo Mark.svg"
import { RiLockPasswordLine } from "react-icons/ri"
import { FiEye, FiEyeOff } from "react-icons/fi"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import toast, { Toaster } from "react-hot-toast"

const CreatePassword = () => {
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const [passwordFocused, setPasswordFocused] = useState(false)
  const [confirmPasswordFocused, setConfirmPasswordFocused] = useState(false)

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  useEffect(() => {
    // Show toast when component mounts
    toast.success("Email verified successfully!", {
      position: "top-center",
      duration: 4000,
      style: {
        background: "#F0FFF4",
        color: "#01575C",
        border: "1px solid #C6F6D5",
        padding: "16px",
        fontWeight: "500",
      },
      icon: "✓",
    })
  }, [])

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
      <Toaster />

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
          <h1 className="text-2xl rethink-sans-700 text-gray-800 mb-1">Create Your Password</h1>
          <p className="text-sm text-gray-500 rethink-sans-400">Create a secure password to login.</p>
        </div>

        <form className="space-y-4">
          <div className="relative">
            <label
              htmlFor="password"
              className={`absolute left-3 rethink-sans-400 transition-all duration-200 ${passwordFocused || password ? "top-0 text-xs text-[#01575C] bg-white px-1 -mt-2" : "top-3 text-sm text-gray-500"}`}
            >
              Password
            </label>
            <div className="flex items-center rethink-sans-400 text-sm border-none rounded-lg px-3 py-3 bg-[#F5F8F8]">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                className="w-full pl-2 outline-none text-sm text-gray-800 bg-transparent"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setPasswordFocused(true)}
                onBlur={() => !password && setPasswordFocused(false)}
              />
              <button
                type="button"
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
              </button>
            </div>
          </div>

          <div className="relative">
            <label
              htmlFor="confirmPassword"
              className={`absolute left-3 rethink-sans-400 transition-all duration-200 ${confirmPasswordFocused || confirmPassword ? "top-0 text-xs text-[#01575C] bg-white px-1 -mt-2" : "top-3 text-sm text-gray-500"}`}
            >
              Confirm Password
            </label>
            <div className="flex items-center rethink-sans-400 text-sm border-none rounded-lg px-3 py-3 bg-[#F5F8F8]">
              <input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                className="w-full pl-2 outline-none text-sm text-gray-800 bg-transparent"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                onFocus={() => setConfirmPasswordFocused(true)}
                onBlur={() => !confirmPassword && setConfirmPasswordFocused(false)}
              />
              <button
                type="button"
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
              </button>
            </div>
          </div>
          <Link to={"/about-you"}>

          <button
            type="submit"
            className="w-full bg-[#01575C] text-sm mt-6 rethink-sans-500 text-white rounded-lg py-3 px-4 flex gap-3 cursor-pointer items-center justify-center hover:bg-teal-900 transition-colors"
            >
            Create Password
          </button>
              </Link>
        </form>

        <div className="flex justify-center items-center mt-7 gap-1">
            <div className="w-12 bg-[#F2852F] h-2 rounded-full"></div>
            <div className="w-7 bg-slate-300 h-2 rounded-full"></div>
            <div className="w-7 bg-slate-300 h-2 rounded-full"></div>
        </div>

      </div>
    </div>
  )
}

export default CreatePassword