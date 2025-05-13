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

  const closeSidebar = () =>{
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
    if(path === "/main-dashboard/crop-management/add-crop") return "Add New Crop"
    if(path === "/main-dashboard/task-manager/task-list") return "Task Manager"


    return "/main-dashboard/crop-management"
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} isClose={closeSidebar} />

      <div className="flex-1 md:ml-64">
        <Header toggleSidebar={toggleSidebar} pageTitle={getPageTitle()} />

        <div className="lg:p-6 p-3">
          <h1 className="text-2xl rethink-sans-700 text-gray-800 mb-6 block">{getPageTitle()}</h1>
          <Outlet />    
        </div>
      </div>

      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black/50 bg-opacity-50 z-20 md:hidden" onClick={toggleSidebar}></div>
      )}
    </div>
  )
}

export default DashboardLayout
