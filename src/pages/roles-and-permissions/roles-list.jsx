/* eslint-disable no-unused-vars */
import { useState } from "react"
import { Table, Switch } from "antd"
import { Plus, Search, ExternalLink } from "react-feather"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { GoPaperclip } from "react-icons/go"
import AddRole from "./add-role"
import { MdOutlineKeyboardArrowDown } from "react-icons/md"

const RolesList = () => {
  const [searchText, setSearchText] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  const [isModalVisible, setIsModalVisible] = useState(false)

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  

  const handleSubmit = (taskData) => {
    console.log("New role created:", taskData)
    setIsModalVisible(false)
  }
  
  const navigate = useNavigate()

  // Roles data
  const rolesData = [
    {
      key: "1",
      roleName: "Administrator",
      description: "Full system access with all administrative privileges",
      userAssigned: 5,
      status: true,
    },
    {
      key: "2",
      roleName: "Content Manager",
      description: "Manage courses, certificates, and educational content",
      userAssigned: 12,
      status: true,
    },
    {
      key: "3",
      roleName: "Student",
      description: "Access to enrolled courses and learning materials",
      userAssigned: 150,
      status: true,
    },
    {
      key: "4",
      roleName: "Instructor",
      description: "Create and manage course content and assessments",
      userAssigned: 8,
      status: false,
    },
    {
      key: "5",
      roleName: "HR Manager",
      description: "Manage employee training and certification tracking",
      userAssigned: 3,
      status: true,
    },
  ]

  // Roles table columns
  const rolesColumns = [
    {
      title: "Role Name",
      dataIndex: "roleName",
      key: "roleName",
      sorter: (a, b) => a.roleName.localeCompare(b.roleName),
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      responsive: ["md"],
      sorter: (a, b) => a.description.localeCompare(b.description),
    },
    {
      title: "User Assigned",
      dataIndex: "userAssigned",
      key: "userAssigned",
      responsive: ["lg"],
      sorter: (a, b) => a.userAssigned - b.userAssigned,
      render: (count) => (
        <span className="text-sm font-medium">{count}</span>
      ),
    },
    {
      title: "Action",
      dataIndex: "status",
      key: "status",
      render: (status, record) => (
        <div className="flex items-center gap-2">
          <Switch
            checked={status}
            size="small"
            onChange={(checked) => {
              console.log(`Role ${record.roleName} status changed to ${checked ? "Active" : "Inactive"}`)
            }}
          />
          <span className="text-sm">{status ? "Active" : "Inactive"}</span>
        </div>
      ),
      sorter: (a, b) => Number(a.status) - Number(b.status),
    },
    {
      title: "",
      key: "files",
      render: () => (
        <GoPaperclip className="text-gray-400 cursor-pointer hover:text-gray-600 text-lg" title="Upload files" />
      ),
    },
  ]

  const filteredData = rolesData.filter((item) =>
    Object.values(item).some((val) => val.toString().toLowerCase().includes(searchText.toLowerCase())),
  )

  // Custom pagination component
  const CustomPagination = () => {
    const totalPages = Math.ceil(filteredData.length / pageSize)

    const handlePageChange = (page) => {
      setCurrentPage(page)
    }

    const renderPageButtons = () => {
      const buttons = []
      const maxDisplayPages = 5

      // Previous button
      buttons.push(
        <button
          key="prev"
          onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
          className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 hover:bg-gray-100"
          disabled={currentPage === 1}
        >
          <ChevronLeft size={18} className={currentPage === 1 ? "text-gray-300" : "text-gray-600"} />
        </button>,
      )

      // First page
      buttons.push(
        <button
          key={1}
          onClick={() => handlePageChange(1)}
          className={`w-8 h-8 flex items-center justify-center rounded-full ${currentPage === 1 ? "bg-black text-white" : "hover:bg-gray-100"}`}
        >
          1
        </button>,
      )

      // Middle pages
      if (totalPages > maxDisplayPages) {
        const startPage = Math.max(2, currentPage - 1)
        const endPage = Math.min(startPage + 2, totalPages - 1)

        if (currentPage > 3) {
          buttons.push(
            <button key="dots1" className="w-8 h-8 flex items-center justify-center">
              ...
            </button>,
          )
        }

        for (let i = startPage; i <= endPage; i++) {
          buttons.push(
            <button
              key={i}
              onClick={() => handlePageChange(i)}
              className={`w-8 h-8 flex items-center justify-center rounded-full ${currentPage === i ? "bg-black text-white" : "hover:bg-gray-100"}`}
            >
              {i}
            </button>,
          )
        }

        if (endPage < totalPages - 1) {
          buttons.push(
            <button key="dots2" className="w-8 h-8 flex items-center justify-center">
              ...
            </button>,
          )
        }

        // Last page or "99+"
        if (totalPages > 99) {
          buttons.push(
            <button
              key="last"
              onClick={() => handlePageChange(totalPages)}
              className={`w-8 h-8 flex items-center justify-center rounded-full ${currentPage === totalPages ? "bg-black text-white" : "hover:bg-gray-100"}`}
            >
              99+
            </button>,
          )
        } else if (totalPages > 1) {
          buttons.push(
            <button
              key={totalPages}
              onClick={() => handlePageChange(totalPages)}
              className={`w-8 h-8 flex items-center justify-center rounded-full ${currentPage === totalPages ? "bg-black text-white" : "hover:bg-gray-100"}`}
            >
              {totalPages}
            </button>,
          )
        }
      } else {
        // Display all pages if total pages <= maxDisplayPages
        for (let i = 2; i <= totalPages; i++) {
          buttons.push(
            <button
              key={i}
              onClick={() => handlePageChange(i)}
              className={`w-8 h-8 flex items-center justify-center rounded-full ${currentPage === i ? "bg-black text-white" : "hover:bg-gray-100"}`}
            >
              {i}
            </button>,
          )
        }
      }

      // Next button
      buttons.push(
        <button
          key="next"
          onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
          className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 hover:bg-gray-100"
          disabled={currentPage === totalPages}
        >
          <ChevronRight size={18} className={currentPage === totalPages ? "text-gray-300" : "text-gray-600"} />
        </button>,
      )

      return buttons
    }

    return <div className="flex items-center gap-2">{renderPageButtons()}</div>
  }

  // Get current page data
  const getCurrentPageData = () => {
    const startIndex = (currentPage - 1) * pageSize
    const endIndex = startIndex + pageSize
    return filteredData.slice(startIndex, endIndex)
  }

  return (
    <div className="rethink-sans-400 mt-10">
      
      <div className="">
        <div className="bg-white rounded-xl border border-slate-200/70 lg:p-6 p-3">
          <div className="flex md:justify-between justify-start flex-col md:flex-row md:items-center items-start mb-6">
            <div className="flex items-center gap-5">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search roles"
                  className="pr-4 py-2 pl-8 rethink-sans-400 outline-none bg-[#F8FAFA] rounded-md text-sm"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                />
                <Search size={16} className="absolute md:block hidden left-2 top-2.5 text-gray-400" />
              </div>
            </div>
          </div>

          <div className="rethink-sans-400 mt-4">
            <Table
              columns={rolesColumns}
              dataSource={getCurrentPageData()}
              pagination={false}
              className="animal-table md:h-[51vh] h-auto"
              rowClassName="hover:bg-gray-50"
              scroll={{ x: 800 }}
            />
          </div>

          <div className="flex md:justify-between justify-start md:items-center items-start gap-4 md:flex-row flex-col mt-8">
            <div className="flex items-center">
              <span className="text-[10px] text-gray-700 rethink-sans-400 mr-2">Rows per page:</span>
              <select
                className="border rethink-sans-400 border-gray-300 rounded px-2 py-1 text-sm"
                value={pageSize}
                onChange={(e) => {
                  setPageSize(Number(e.target.value))
                  setCurrentPage(1) // Reset to first page when changing page size
                }}
              >
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
              </select>
            </div>

            <CustomPagination />

            <div className="text-xs text-gray-500">
              Showing {Math.min((currentPage - 1) * pageSize + 1, filteredData.length)} to {Math.min(currentPage * pageSize, filteredData.length)} of {filteredData.length} results
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RolesList