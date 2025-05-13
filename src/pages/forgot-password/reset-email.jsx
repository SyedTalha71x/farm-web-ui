/* eslint-disable no-unused-vars */
import { useNavigate } from "react-router-dom";
import backgroundImage from "../../../public/images/0accd8c12f853c81224b93033132a34ccfa9ae87.png";
import Logo from '../../../public/images/Logo Mark.svg';
import { useState } from "react";

const ResetEmail = () => {
    // const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [emailFocused, setEmailFocused] = useState(false);

    // const redirectToVerfiyLink = () => {
    //     navigate("/verify-link")
    // }

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
                        <img src={Logo} alt="" />
                    </div>
                    <span className=" text-gray-800 rethink-sans-700 text-lg">
                        Lucolyx  <span className="text-[#17A24A]">Design</span>
                    </span>
                </div>

                <div className="text-center mb-8">
                    <h1 className="text-2xl rethink-sans-700 text-gray-800 mb-1">Enter Your Email</h1>
                    <p className="text-sm text-gray-500 rethink-sans-400">Enter the email you created an account with.</p>
                </div>

                <form className="space-y-4">
                    <div className="relative">
                        <label
                            htmlFor="email"
                            className={`absolute left-3 rethink-sans-400 transition-all duration-200 ${emailFocused || email ? 'top-0 text-xs text-[#01575C] bg-white px-1 -mt-2' : 'top-3 text-sm text-gray-500'}`}
                        >
                            Email Address
                        </label>
                        <div className="flex text-sm rethink-sans-400 items-center border-none  rounded-lg px-3 py-3 bg-[#F5F8F8] ">
                            <input
                                id="email"
                                type="email"
                                className="w-full pl-2 outline-none text-sm text-gray-800 bg-transparent"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                onFocus={() => setEmailFocused(true)}
                                onBlur={() => !email && setEmailFocused(false)}
                            />
                        </div>
                    </div>
                    <button
                        // onClick={redirectToVerfiyLink}
                        type="submit"
                        className="w-full bg-[#01575C] text-sm mt-3 rethink-sans-500 text-white rounded-lg py-2 px-4 flex gap-3 cursor-pointer items-center justify-center hover:bg-teal-900 transition-colors"
                    >
                        Send Reset Link
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ResetEmail;