import backgroundImage from "../../../public/images/0accd8c12f853c81224b93033132a34ccfa9ae87.png"
import Logo from '../../../public/images/Logo Mark.svg'
import GoogleLogo from '../../../public/images/google.svg'
import FacebookLogo from '../../../public/images/facebook.svg'
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";


const SocialSignup = () => {
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
                    <h1 className="text-2xl rethink-sans-700 text-gray-800 mb-1">Welcome to Our Platform</h1>
                    <p className="text-sm text-gray-500 rethink-sans-400">Sign up and manage your farm easily.</p>
                </div>

                <div className="space-y-4 ">
                    <div className="flex items-center justify-center gap-3 md:flex-row flex-col">


                        <button className="w-full border border-slate-600 rethink-sans-400 rounded-md py-2 px-2 flex gap-3 text-sm items-center justify-center text-gray-900 cursor-pointer">
                            <div>
                                <img src={GoogleLogo} className="h-full w-full" alt="" />
                            </div>
                            Use Google
                        </button>

                        <button className="w-full border border-slate-600 rethink-sans-400 rounded-md py-2 px-2 flex gap-3 text-sm items-center justify-center text-gray-900 cursor-pointer">
                            <div>
                                <img src={FacebookLogo} className="h-full w-full" alt="" />
                            </div>
                            Use Facebook
                        </button>
                    </div>

                    <div className="flex items-center justify-center">
                        <div className="flex-grow border-t border-gray-300"></div>
                        <span className="px-3 text-gray-500 rethink-sans-400 text-sm">OR</span>
                        <div className="flex-grow border-t border-gray-300"></div>
                    </div>

<Link to={"/signup"}>
                    <button className="w-full bg-[#01575C] text-sm mt-3 rethink-sans-500 text-white rounded-lg py-2 px-4 flex gap-3 cursor-pointer items-center justify-center hover:bg-teal-900 transition-colors">
                        <div>
                            <MdOutlineEmail className="" size={18} />
                        </div>
                        Sign Up Using Email
                    </button>
</Link>
                </div>

                <div className="text-center md:text-md text-sm mt-6 rethink-sans-500 ">
                    <span className="text-gray-600">Already have an account? </span>
                    <Link to={"/login"} className="text-[#17A24A] font-medium hover:underline">
                        Login
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SocialSignup
