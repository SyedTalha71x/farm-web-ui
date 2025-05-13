import backgroundImage from "../../../public/images/0accd8c12f853c81224b93033132a34ccfa9ae87.png";
import Logo from '../../../public/images/Logo Mark.svg';
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailFocused, setEmailFocused] = useState(false);
    const [passwordFocused, setPasswordFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

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
                    <h1 className="text-2xl rethink-sans-700 text-gray-800 mb-1">Jump Back In!</h1>
                    <p className="text-sm text-gray-500 rethink-sans-400">Get back to managing your farm.</p>
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

                    <div className="relative">
                        <label
                            htmlFor="password"
                            className={`absolute left-3 rethink-sans-400 transition-all duration-200 ${passwordFocused || password ? 'top-0 text-xs text-[#01575C] bg-white px-1 -mt-2' : 'top-3 text-sm text-gray-500'}`}
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

                    <div className="flex items-center gap-1 justify-start rethink-sans-400">
                        <div className="text-sm">
                            Forgot your Password?
                        </div>
                        <Link
                            to="/reset-email-link"
                            className="text-sm text-[#17A24A] hover:underline rethink-sans-500"
                        >
                            Reset Password
                        </Link>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#01575C] text-sm mt-3 rethink-sans-500 text-white rounded-lg py-2 px-4 flex gap-3 cursor-pointer items-center justify-center hover:bg-teal-900 transition-colors"
                    >
                        Login
                    </button>
                </form>

                <div className="text-center md:text-md text-sm mt-6 rethink-sans-500 ">
                    <span className="text-gray-600">Don't have an account? </span>
                    <Link to={"/signup"} className="text-[#17A24A] font-medium hover:underline">
                        Register Today!
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;