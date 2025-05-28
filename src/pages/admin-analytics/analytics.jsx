"use client"

/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react"
import Calender from "../../../public/images/Vector - 5.svg"
import Dropdown from "../../../public/images/Vector.png"
import { GoFileSymlinkFile } from "react-icons/go"

import ExpenseReports from "../../components/admin-dashboard-components/expense-report"
import RevenueTrends from "../../components/admin-dashboard-components/revenue-trends"

const analytics = () => {
  const [dateRange] = useState("17 Nov - 17 Dec")
  const [activeTab, setActiveTab] = useState("finance")

  const tabs = [
    { id: "finance", label: "Financial Reports" },
    { id: "tasks", label: "Task Completion" },
    { id: "users", label: "User Activity" },
  ]

  const renderTabContent = () => {
    switch (activeTab) {
      case "finance":
        return (
          <div className="mt-5 flex flex-col md:flex-row md:justify-center gap-4 items-center">
            <div className="w-full md:w-1/2">
              <RevenueTrends />
            </div>
            <div className="w-full md:w-1/2">
              <ExpenseReports />
            </div>
          </div>
        )
      case "tasks":
        return (
          <div className="mt-5 flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <h3 className="text-xl rethink-sans-600 text-gray-600 mb-2">Task Completion Reports</h3>
              <p className="text-gray-500 rethink-sans-400">Coming Soon</p>
            </div>
          </div>
        )
      case "users":
        return (
          <div className="mt-5 flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <h3 className="text-xl rethink-sans-600 text-gray-600 mb-2">User Activity Reports</h3>
              <p className="text-gray-500 rethink-sans-400">Coming Soon</p>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="md:mt-10 mt-5">
      <div className="flex md:justify-between justify-start md:flex-row flex-col md:items-center items-start md:gap-0 gap-4 mb-6">
        <div>
          <h1 className="text-2xl rethink-sans-700">Reports & Analytics</h1>
          <p className="rethink-sans-400 text-gray-700">
            Access detailed reports on farm performance, financial data, and user activity.
          </p>
        </div>
        <div className="flex md:justify-end justify-center items-center gap-3">
          <div className="flex items-center md:w-auto w-full gap-2 rethink-sans-500 bg-white px-4 py-2 rounded-lg shadow text-sm">
            <span className="text-lg">
              <img src={Calender || "/placeholder.svg"} alt="" />
            </span>
            <span>{dateRange}</span>
            <span>
              <img src={Dropdown || "/placeholder.svg"} alt="" />
            </span>
          </div>
          <div>
            <button className="bg-[#01575C] flex items-center justify-center gap-3 py-2 px-4 text-sm rounded-md text-white">
              <div>
                <GoFileSymlinkFile />
              </div>
              <span className="hidden md:inline">Export Csv</span>
            </button>
          </div>
        </div>
      </div>

      <div className="mb-6 rethink-sans-500">
        <div className="bg-[#FFFFFF] p-1 rounded-xl w-full md:w-fit">
          <div className="flex overflow-x-auto scrollbar scrollbar-hide gap-1 md:flex-wrap">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-shrink-0 px-4 md:px-6 py-2 md:py-3 rounded-lg text-xs md:text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                  activeTab === tab.id
                    ? "bg-green-600 text-white shadow-sm"
                    : "text-gray-600 hover:text-gray-800 hover:bg-gray-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      {renderTabContent()}
    </div>
  )
}

export default analytics
