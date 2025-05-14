import { useState } from "react"
import { Outlet, useLocation } from "react-router-dom"
import Sidebar from "../components/sidebar"
import Header from "../components/header"

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const location = useLocation()

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }

  const getPageTitle = () => {
    const path = location.pathname

    if (path === "/main-dashboard/dashboard") return "Dashboard"
    if (path === "/main-dashboard/crop-management") return "Crop Management"
    if (path === "/main-dashboard/finance-analytics") return "Finance & Analytics"
    if (path === "/main-dashboard/animal-management") return "Animal Management"
    if (path === "/main-dashboard/task-manager") return "Task Manager"
    if (path === "/main-dashboard/ecommerce-store") return "Ecommerce Store"
    if (path === "/main-dashboard/crop-management/add-crop") return "Add New Crop"
    if (path === "/main-dashboard/task-manager/task-list") return "Task Manager"
    if (path === "/main-dashboard/animal-management/add-animal") return "Add Animal"
    if (path === "/main-dashboard/animal-management/animal-lists") return "Animal Lists"
    if(path === "/main-dashboard/ecommerce") return "Ecommerce Store"

    return "Dashboard"
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50 relative">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} isClose={closeSidebar} />

      <div className="flex-1 md:ml-64 w-full">
        <Header toggleSidebar={toggleSidebar} pageTitle={getPageTitle()} />

        <main className="lg:p-6 p-4 pt-6 overflow-auto min-h-[calc(100vh-60px)]">
          <h1 className="text-2xl rethink-sans-700 text-gray-800 mb-6">{getPageTitle()}</h1>
          <Outlet />
        </main>
      </div>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-50 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  )
}

export default DashboardLayout
