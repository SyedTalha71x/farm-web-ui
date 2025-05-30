import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import LoginImage from "../../../public/images/login.png";
import Card from "../../../public/images/45ba39a56bcfe55527135d286e4262b159600e99.jpg";
import HouseImage from "../../../public/images/ChatGPT Image May 22, 2025, 11_29_56 AM 1.png";
import LoginPageLogo from "../../../public/images/Logo-login.svg";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("peter.q@farmconnect.com");
  const [password, setPassword] = useState("••••••••••••");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex p-2">
      <div className="hidden lg:flex lg:w-1/2 relative rounded-xl overflow-hidden">
        <img
          src={Card}
          alt="Left Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/90 bg-opacity-60"></div>
        <div className="relative z-10 flex flex-col items-center justify-center w-full text-white px-8">
          <img src={HouseImage} alt="Barn" className="" />
          <h1 className="text-4xl rethink-sans-700  mb-4">Welcome Back!</h1>
          <p className="text-gray-300 rethink-sans-400  text-lg text-center">
            Below is a summary of what you need to catch up on:
          </p>
        </div>
      </div>

      <div className="w-full lg:w-1/2 relative flex items-center justify-center p-8">
        <img
          src={LoginImage}
          alt="Right Background"
          className="absolute inset-0 w-full h-full object-cover rounded-xl"
        />
        <div className="absolute inset-0 bg-white/90"></div>

        <div className="relative z-10 w-full max-w-md">
          <div className="flex items-center justify-center mb-8 space-x-2">
            <img src={LoginPageLogo} alt="Logo" />
            <span className="text-xl rethink-sans-700 text-gray-800">
              Farm <span className="text-green-600">Connect</span>
            </span>
          </div>

          <form className="space-y-6 rethink-sans-400">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-3 text-sm outline-none border-none rounded-md bg-[#F5F8F8]"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-3 text-sm outline-none pr-10 border-none rounded-md bg-[#F5F8F8]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                >
                  {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                </button>
              </div>
            </div>

            <div className="text-left">
              <span className="text-sm text-gray-600">
                Forgot your password?{" "}
              </span>
              <Link     
                to={"/admin-reset-link"}
                className="text-sm text-green-600 hover:text-green-700 font-medium"
              >
                Reset Password
              </Link>
            </div>

<Link to={"/admin-dashboard/dashboard"}>
            <button
              type="submit"
              className="w-full bg-[#01575C] cursor-pointer text-white py-3 px-4 rounded-md transition duration-200 text-sm flex items-center justify-center"
              >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              Login as Admin
            </button>
                  </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
