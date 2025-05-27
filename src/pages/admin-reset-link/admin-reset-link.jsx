import { useState } from "react";
import LoginImage from "../../../public/images/login.png";
import Card from "../../../public/images/45ba39a56bcfe55527135d286e4262b159600e99.jpg";
import HouseImage from "../../../public/images/26bad0af-967a-453a-b1d1-80a4ba709d62 1.svg";
import LoginPageLogo from "../../../public/images/Logo-login.svg";
import { Link } from "react-router-dom";

export default function AdminResetLink() {
  const [email, setEmail] = useState("peter.q@farmconnect.com");

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
          <h1 className="text-4xl rethink-sans-700 mb-4">Enter Your Email</h1>
          <p className="text-gray-300 rethink-sans-400 text-lg text-center">
          Enter the email you are using as an administrator
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
            <Link to={"/admin-verify-code"}>

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
              Send Reset Link
            </button>
                  </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
