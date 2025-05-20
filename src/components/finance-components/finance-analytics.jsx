import { useState, useEffect } from "react"
import Calender from '../../../public/images/Vector - 5.svg'
import Dropdown from '../../../public/images/Vector.png'
import { GoFileSymlinkFile } from "react-icons/go"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const FinanceAnalytics = () => {
    const [dateRange] = useState("17 Nov - 17 Dec")
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 640)
        }
        
        checkIfMobile()
        
        window.addEventListener('resize', checkIfMobile)
        
        return () => {
            window.removeEventListener('resize', checkIfMobile)
        }
    }, [])
    
    useEffect(() => {
        const style = document.createElement('style')
        style.innerHTML = `
            .swiper-pagination {
                margin-top: 10px;
                position: relative;
                bottom: 0 !important;
                padding-top: 15px;
            }
            
            .swiper-pagination-bullet {
                margin: 0 4px;
            }
        `
        document.head.appendChild(style)
        
        return () => {
            document.head.removeChild(style)
        }
    }, [])

    const metrics = [
        {
            title: "Real Time Visitors",
            value: "18,765",
            change: "+0.9%",
            isPositive: true,
        },
        {
            title: "Bounce Rate",
            value: "30.45%",
            change: "+1.0%",
            isPositive: false,
        },
        {
            title: "Average Time on Site",
            value: "4m:15s",
            change: "+1.6%",
            isPositive: true,
        },
        {
            title: "Abandoned Carts",
            value: "3,456",
            change: "+0.8%",
            isPositive: false,
        },
        {
            title: "Website Visits",
            value: "567,890",
            change: "+4.0%",
            isPositive: true,
        },
        {
            title: "Profit",
            value: "$145,124",
            change: "+0.2%",
            isPositive: true,
        },
    ]

    const MetricCard = ({ metric }) => (
        <div className="bg-white md:p-5 p-3 rounded-lg border-none shadow-sm h-full">
            <div className="text-sm text-gray-500 rethink-sans-400">{metric.title}</div>
            <div className="text-xl rethink-sans-700 text-black mt-1">{metric.value}</div>
            <div
                className={`text-xs mt-2 rethink-sans-400 px-2 py-1 rounded-full w-fit ${
                    metric.isPositive
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                }`}
            >
                {metric.change}
            </div>
        </div>
    )

    return (
        <div className="">
            <div className="flex md:justify-end justify-center items-center gap-3 mb-6">
                <div className="flex items-center md:w-auto w-full gap-2 rethink-sans-500 bg-white px-4 py-2 rounded-lg shadow text-sm">
                    <span className="text-lg">
                        <img src={Calender} alt="" />
                    </span>
                    <span>{dateRange}</span>
                    <span>
                        <img src={Dropdown} alt="" />
                    </span>
                </div>
                <div>
                    <button className="bg-[#01575C] flex items-center justify-center gap-3 py-2 px-4 text-sm rounded-md text-white">
                        <div><GoFileSymlinkFile /></div>
                        <span className="hidden md:inline">Export Csv</span>
                    </button>
                </div>
            </div>

            {isMobile ? (
                <Swiper
                    slidesPerView={2}
                    spaceBetween={16}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true,
                    }}
                    modules={[Pagination]}
                    className="w-full pb-16"
                >
                    {metrics.map((metric, index) => (
                        <SwiperSlide key={index}>
                            <MetricCard metric={metric} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                    {metrics.map((metric, index) => (
                        <div key={index}>
                            <MetricCard metric={metric} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default FinanceAnalytics