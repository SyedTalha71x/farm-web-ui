import backgroundImage from "../../../public/images/0accd8c12f853c81224b93033132a34ccfa9ae87.png";
import Logo from '../../../public/images/Logo Mark.svg';
import EmailLogo from '../../../public/images/26bad0af-967a-453a-b1d1-80a4ba709d62 1.svg'

const VerifyLink = () => {
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

                <div className="flex justify-center items-center  h-full w-full">
                    <img src={EmailLogo} alt="" />
                </div>

                <div className="text-center mb-8">
                    <h1 className="text-2xl rethink-sans-700 text-gray-800 mb-1">Check Your Email</h1>
                    <p className="text-sm text-gray-500 rethink-sans-400">We sent “john.doe@gmail.com”a verification link.</p>
                </div>

                <form className="space-y-4">
                    <div className="relative">
                        <div className="flex text-sm rethink-sans-400 items-center text-center border-none  rounded-lg px-3 py-3 bg-[#F5F8F8] ">
                            <input
                                id="link"
                                type="text"
                                className="w-full pl-2 text-center outline-none text-sm text-gray-800 bg-transparent"
                                placeholder="Resend in 30s"
                            />
                        </div>
                    </div>
                   <div className="mt-10 text-center rethink-sans-400 text-sm text-black">
                   Check spam if you cannot find it!
                   </div>
                </form>
            </div>
        </div>
    );
};

export default VerifyLink;