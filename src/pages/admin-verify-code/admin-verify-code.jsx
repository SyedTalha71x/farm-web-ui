/* eslint-disable no-unused-vars */
import { useState } from "react";
import LoginImage from "../../../public/images/login.png";
import Card from "../../../public/images/45ba39a56bcfe55527135d286e4262b159600e99.jpg";
import HouseImage from "../../../public/images/bell-reminder-notification-alert-alarm-icon-sign-symbol-application-website-ui-white-background-3d-rendering-illustration 1.png";
import LoginPageLogo from "../../../public/images/Logo-login.svg";
import { Link } from "react-router-dom";

export default function AdminVerifyCode() {
  const [verificationCode, setVerificationCode] = useState("");
  const [timeLeft, setTimeLeft] = useState(30);

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
          <h1 className="text-4xl rethink-sans-700 mb-4">Check Your Email</h1>
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

          <div className="mb-8 text-center">
            <p className="text-black rethink-sans-500  text-lg mb-1">We sent a verification code to:</p>
            <p className="text-green-600 rethink-sans-400 text-lg font-medium">peter.ojo@farmconnect.com</p>
          </div>

          <div className="space-y-6 rethink-sans-400">
            <div>
              <label
                htmlFor="code"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Code
              </label>
              <input
                type="text"
                id="code"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                placeholder="567-879"
                className="w-full px-3 py-3 text-sm outline-none border-none rounded-md bg-[#F5F8F8] placeholder-gray-400"
                maxLength={7}
              />
            </div>

<Link to={"/admin-create-password"}>
            <button
              type="button"
              //   disabled={!verificationCode.trim()}
              className="w-full bg-gray-300 text-gray-500 py-3 px-4 rounded-md text-sm cursor-not-allowed"
              >
              Resend in 30s
            </button>
                </Link>
          </div>
          <div className=" text-sm absolute top-[470px] md:right-30 right-3">
            <span>Check spam if you cannot find it!</span>
          </div>
        </div>
      </div>
    </div>
  );
}