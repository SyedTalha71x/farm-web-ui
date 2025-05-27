import { useState } from "react"
import LoginImage from '../../../public/images/login.png'
import Card from '../../../public/images/card.png'
import HouseImage from '../../../public/images/ChatGPT Image May 22, 2025, 11_29_56 AM 1.png'
import LoginPageLogo from '../../../public/images/Logo-login.svg'


export default function LoginPage() {
    const [email, setEmail] = useState("peter.q@farmconnect.com")
    const [password, setPassword] = useState("••••••••••••")
    const [showPassword, setShowPassword] = useState(false)

    return (
        <div
        className="min-h-screen flex"
        style={{
          backgroundImage: `url("/images/login.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
            <div className="hidden lg:flex lg:w-1/2 relative bg-gray-900">
                <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                <div className="relative z-10 flex flex-col items-center justify-center w-full text-white px-8">
                    <div>
                        <img src={HouseImage} alt="" />
                    </div>

                    <div className="text-center">
                        <h1 className="text-4xl font-bold mb-4">Welcome Back!</h1>
                        <p className="text-gray-300 text-lg">Below is a summary of what you need to catch up on.</p>
                    </div>
                </div>
            </div>

            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50">
                <div className="w-full max-w-md">
                    <div className="flex items-center justify-center mb-8">
                        <div>
                            <img src={LoginPageLogo} alt="" />
                        </div>
                        <span className="text-xl font-semibold text-gray-800">
                            Farm <span className="text-green-600">Connect</span>
                        </span>
                    </div>

                    <form className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
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
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
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
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                >
                                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        {showPassword ? (
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
                                            />
                                        ) : (
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                        )}
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className="text-left">
                            <span className="text-sm text-gray-600">Forgot your password? </span>
                            <a href="#" className="text-sm text-green-600 hover:text-green-700 font-medium">
                                Reset Password
                            </a>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#01575C] cursor-pointer text-white py-3 px-4 rounded-md  transition duration-200 text-sm flex items-center justify-center"
                        >
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                />
                            </svg>
                            Login as Admin
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
