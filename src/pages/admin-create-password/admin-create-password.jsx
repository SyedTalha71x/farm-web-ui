import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import LoginImage from "../../../public/images/login.png";
import Card from "../../../public/images/45ba39a56bcfe55527135d286e4262b159600e99.jpg";
import HouseImage from "../../../public/images/bell-reminder-notification-alert-alarm-icon-sign-symbol-application-website-ui-white-background-3d-rendering-illustration 1-password.png";
import LoginPageLogo from "../../../public/images/Logo-login.svg";
import { Link } from "react-router-dom";


export default function AdminCreatePassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
          <h1 className="text-4xl rethink-sans-700 mb-4">Create New Password</h1>
          <p className="text-gray-300 rethink-sans-400 text-lg text-center">
            Set up a strong password for your administrator account
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

          <div className="space-y-6 rethink-sans-400">
            <div>
              <label
                htmlFor="newPassword"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                New Password
              </label>
              <div className="relative">
                <input
                  type={showNewPassword ? "text" : "password"}
                  id="newPassword"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Enter your new password"
                  className="w-full px-3 py-3 text-sm outline-none pr-10 border-none rounded-md bg-[#F5F8F8] placeholder-gray-400"
                />
                <button
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
                >
                  {showNewPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm your new password"
                  className="w-full px-3 py-3 text-sm outline-none pr-10 border-none rounded-md bg-[#F5F8F8] placeholder-gray-400"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
                >
                  {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {confirmPassword && (
              <div className="text-xs">
                {newPassword === confirmPassword ? (
                  <p className="text-green-600 flex items-center">
                    <span className="mr-2">✓</span>
                    Passwords match
                  </p>
                ) : (
                  <p className="text-red-600 flex items-center">
                    <span className="mr-2">✗</span>
                    Passwords do not match
                  </p>
                )}
              </div>
            )}

<Link to={"/admin-dashboard/dashboard"}>
            <button
              type="button"
              disabled={!newPassword || !confirmPassword || newPassword !== confirmPassword}
              className={`w-full py-3 px-4 rounded-md transition duration-200 text-sm flex items-center justify-center ${
                  !newPassword || !confirmPassword || newPassword !== confirmPassword
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-[#01575C] text-white cursor-pointer hover:bg-[#014a4f]'
                }`}
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
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
              </svg>
              Create Password
            </button>

                  </Link>
          </div>
        </div>
      </div>
    </div>
  );
}