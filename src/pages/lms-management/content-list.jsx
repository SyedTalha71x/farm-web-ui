"use client"

/* eslint-disable no-unused-vars */
import { useState } from "react"
import { Table, Switch } from "antd"
import { Plus, Search, ExternalLink } from "react-feather"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { GoPaperclip } from "react-icons/go"
import AddContent from "./add-content"
import { MdOutlineKeyboardArrowDown } from "react-icons/md"

const ContentList = () => {
  const [searchText, setSearchText] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [activeTab, setActiveTab] = useState("courses") // New state for tab switching

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  const handleSubmit = (taskData) => {
    console.log("New task created:", taskData)
    setIsModalVisible(false)
  }
  const navigate = useNavigate()

  // Courses data
  const coursesData = [
    {
      key: "1",
      courseName: "Introduction to React",
      description: "Learn the fundamentals of React development",
      moduleLink: "https://example.com/react-basics",
      category: "Web Development",
      status: true,
    },
    {
      key: "2",
      courseName: "Advanced JavaScript",
      description: "Master advanced JavaScript concepts and patterns",
      moduleLink: "https://example.com/js-advanced",
      category: "Programming",
      status: false,
    },
    {
      key: "3",
      courseName: "UI/UX Design Principles",
      description: "Learn design thinking and user experience",
      moduleLink: "https://example.com/ui-ux",
      category: "Design",
      status: true,
    },
    {
      key: "4",
      courseName: "Database Management",
      description: "Understanding SQL and database optimization",
      moduleLink: "https://example.com/database",
      category: "Backend",
      status: true,
    },
  ]

  // Certificates data
  const certificatesData = [
    {
      key: "1",
      name: "John Smith",
      email: "john.smith@example.com",
      startDate: "2024-01-15",
      endDate: "2024-03-15",
      status: "Complete",
      issued: true,
      photo: "https://ui-avatars.com/api/?name=John+Smith",
    },
    {
      key: "2",
      name: "Sarah Johnson",
      email: "sarah.johnson@example.com",
      startDate: "2024-02-01",
      endDate: "2024-04-01",
      status: "Incomplete",
      issued: false,
      photo: "https://ui-avatars.com/api/?name=Sarah+Johnson",
    },
    {
      key: "3",
      name: "Mike Davis",
      email: "mike.davis@example.com",
      startDate: "2024-01-20",
      endDate: "2024-03-20",
      status: "Complete",
      issued: true,
      photo: "https://ui-avatars.com/api/?name=Mike+Davis",
    },
    {
      key: "4",
      name: "Emily Wilson",
      email: "emily.wilson@example.com",
      startDate: "2024-02-10",
      endDate: "2024-04-10",
      status: "Incomplete",
      issued: false,
      photo: "https://ui-avatars.com/api/?name=Emily+Wilson",
    },
  ]

  // Courses table columns
  const coursesColumns = [
    {
      title: "Course Name",
      dataIndex: "courseName",
      key: "courseName",
      sorter: (a, b) => a.courseName.localeCompare(b.courseName),
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      responsive: ["md"],
      sorter: (a, b) => a.description.localeCompare(b.description),

    },
    {
        title: "Module Link",
        dataIndex: "moduleLink",
        key: "moduleLink",
        render: (link) => (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between gap-2 text-blue-600 hover:text-blue-800"
          >
            <span>{link}</span>
            <ExternalLink size={16} />
          </a>
        ),
        sorter: (a, b) => a.moduleLink.localeCompare(b.moduleLink),
      }
      ,
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      responsive: ["lg"],
      sorter: (a, b) => a.category.localeCompare(b.category),

    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status, record) => (
        <div className="flex items-center gap-2">
          <Switch
            checked={status}
            size="small"
            onChange={(checked) => {
              // Handle status change
              console.log(`Course ${record.courseName} status changed to ${checked ? "Active" : "Inactive"}`)
            }}
          />
          <span className="text-sm">{status ? "Active" : "Inactive"}</span>
        </div>
      ),
      sorter: (a, b) => a.status.localeCompare(b.status),

    },
    {
      title: "",
      key: "files",
      render: () => (
        <GoPaperclip className="text-gray-400 cursor-pointer hover:text-gray-600 text-lg" title="Upload files" />
      ),
      sorter: (a, b) => a.files.localeCompare(b.files),

    },
  ]

  // Certificates table columns
  const certificatesColumns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <div className="flex items-center gap-3">
          <img
            src={record.photo || "/placeholder.svg"}
            alt={record.name}
            className="w-8 h-8 rounded-full object-cover"
          />
          <span>{text}</span>
        </div>
      ),
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: "Email Address",
      dataIndex: "email",
      key: "email",
      responsive: ["md"],
            sorter: (a, b) => a.email.localeCompare(b.email),

    },
    {
      title: "Start Date",
      dataIndex: "startDate",
      key: "startDate",
      responsive: ["lg"],
            sorter: (a, b) => a.startDate.localeCompare(b.startDate),

    },
    {
      title: "End Date",
      dataIndex: "endDate",
      key: "endDate",
      responsive: ["lg"],
            sorter: (a, b) => a.endDate.localeCompare(b.endDate),

    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            status === "Complete" ? "bg-emerald-500 text-white" : "bg-yellow-500 text-white"
          }`}
        >
          {status}
        </span>
      ),
            sorter: (a, b) => a.status.localeCompare(b.status),

    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <div className="flex items-center gap-2">
          <Switch
            checked={record.issued}
            size="small"
            onChange={(checked) => {
              // Handle issued status change
              console.log(`Certificate for ${record.name} ${checked ? "issued" : "revoked"}`)
            }}
          />
          <span className="text-sm">{record.issued ? "Issued" : "Non Issued"}</span>
        </div>
      ),
            sorter: (a, b) => a.actions.localeCompare(b.actions),

    },
  ]

  const getCurrentData = () => {
    return activeTab === "courses" ? coursesData : certificatesData
  }

  const getCurrentColumns = () => {
    return activeTab === "courses" ? coursesColumns : certificatesColumns
  }

  const filteredData = getCurrentData().filter((item) =>
    Object.values(item).some((val) => val.toString().toLowerCase().includes(searchText.toLowerCase())),
  )

  // Custom pagination component
  const CustomPagination = () => {
    const totalPages = Math.ceil(50 / pageSize) // Assuming 50 total records

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
        } else {
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

  return (
    <div className="rethink-sans-400 md:mt-10 mt-5 ">
      <header className="flex md:justify-between justify-start md:flex-row flex-col md:items-center items-start md:gap-0 gap-4 mb-6">
        <div>
          <h1 className="text-2xl rethink-sans-700">Content Management</h1>
          <p className="rethink-sans-400 text-gray-700">Manage user certificates, courses and quizzes...</p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center rethink-sans-400 gap-1 px-5 py-2 border border-gray-700 rounded-md bg-white md:text-sm text-xs">
            <span className="inline">Many Options</span>
            <MdOutlineKeyboardArrowDown size={16} />
          </button>
          <button
            onClick={showModal}
            className="flex items-center rethink-sans-400 gap-1 px-5 py-2 bg-[#01575C] text-white rounded-md md:text-sm text-xs"
          >
            <Plus size={16} />
            <span className="inline">Add Content</span>
          </button>
          <AddContent visible={isModalVisible} onCancel={handleCancel} onSubmit={handleSubmit} />
        </div>
      </header>
      <div className="">
        <div className="bg-white rounded-xl border border-slate-200/70 lg:p-6 p-3">
          <div className="flex md:justify-between justify-start flex-col md:flex-row md:items-center items-start">
            <div className="">
              {/* Tab Toggle Switch */}
              <div className="flex items-center md:gap-4 gap-2 ">
                <div className="flex bg-gray-100 rounded-lg p-1">
                  <button
                    onClick={() => setActiveTab("courses")}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeTab === "courses" ? "bg-green-600 text-white shadow-sm" : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    Courses
                  </button>
                  <button
                    onClick={() => setActiveTab("certification")}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeTab === "certification"
                        ? "bg-green-600 text-white shadow-sm    "
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    Certification
                  </button>
                </div>
              </div>
            </div>
            <div className="flex md:justify-end justify-start md:mb-0 mb-6 items-center">
              <div className="flex items-center gap-5">
                <div className="relative">
                  <input
                    type="text"
                    placeholder={`Search ${activeTab}`}
                    className="pr-4 py-2 pl-8 rethink-sans-400 outline-none bg-[#F8FAFA] rounded-md text-sm"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                  />
                  <Search size={16} className="absolute md:block hidden left-2 top-2.5 text-gray-400" />
                </div>
              </div>
            </div>
          </div>

          <div className="rethink-sans-400 mt-4">
            <Table
              columns={getCurrentColumns()}
              dataSource={filteredData}
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
                onChange={(e) => setPageSize(Number(e.target.value))}
              >
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
              </select>
            </div>

            <CustomPagination />

            <div></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContentList
