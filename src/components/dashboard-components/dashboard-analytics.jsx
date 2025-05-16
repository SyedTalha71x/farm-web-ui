import { useState } from "react"
import Calender from '../../../public/images/Vector - 5.svg'
import Dropdown from '../../../public/images/Vector.png'

const DashboardAnalytics = () => {
  const [dateRange] = useState("17 Nov - 17 Dec")

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
      isPositive: true,
    },
    {
      title: "Average Time on Site",
      value: "4m:15s",
      change: "+1.6%",
      isPositive: true,
    },
    {
      title: "Profit",
      value: "$145,124",
      change: "+0.2%",
      isPositive: true,
    },
  ]

  return (
    <div className="">
      <div className="flex justify-end items-center mb-6">
        <div className="flex items-center gap-2 rethink-sans-500 bg-white px-4 py-2 rounded-lg shadow text-sm">
          <span className="text-lg">
            <img src={Calender} alt="" />
          </span>
          <span>{dateRange}</span>
          <span>
            <img src={Dropdown} alt="" />
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-[#FFFFFF] p-5 rounded-lg border-none shadow-sm">
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
        ))}
      </div>
    </div>
  )
}

export default DashboardAnalytics
