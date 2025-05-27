/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from "react"
import { X, Check } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { Table } from "antd"
import RolesList from "./roles-list"

const AddRole = ({ visible, onCancel, onSubmit }) => {
  const navigate = useNavigate()
  const [rolename, setrolename] = useState("Senior Manager")
  const [description, setdescription] = useState("Lorem Espur")
  const [showPermissionsModal, setShowPermissionsModal] = useState(false)
  const [showRolesList, setShowRolesList] = useState(false)

  const [isVisible, setIsVisible] = useState(false)
  const [isPermissionsVisible, setIsPermissionsVisible] = useState(false)
  const modalRef = useRef(null)
  const permissionsModalRef = useRef(null)

  const [permissions, setPermissions] = useState({
    "Farm Management": { read: true, write: true, delete: true },
    "Device Control": { read: true, write: true, delete: false },
    Analytics: { read: true, write: false, delete: false },
    Alerts: { read: true, write: true, delete: false },
    Settings: { read: true, write: true, delete: true },
  })

  useEffect(() => {
    if (visible) {
      setIsVisible(true)
    } else {
      setTimeout(() => setIsVisible(false), 300)
    }
  }, [visible])

  useEffect(() => {
    if (showPermissionsModal) {
      setIsPermissionsVisible(true)
    } else {
      setTimeout(() => setIsPermissionsVisible(false), 300)
    }
  }, [showPermissionsModal])

  const handleSubmit = () => {
    setIsVisible(false)
    setTimeout(() => {
      setShowPermissionsModal(true)
    }, 300)
  }

  const handlePermissionChange = (module, permission) => {
    setPermissions((prev) => ({
      ...prev,
      [module]: {
        ...prev[module],
        [permission]: !prev[module][permission],
      },
    }))
  }

  const handleCreateRole = () => {
    console.log("Creating role with permissions:", permissions)
    setShowPermissionsModal(false)
    setShowRolesList(true)
  }

  const handlePrevious = () => {
    setShowPermissionsModal(false)
    setIsVisible(true)
  }

  const handleClosePermissions = () => {
    setShowPermissionsModal(false)
    onCancel()
  }

  const handleBackFromRolesList = () => {
    setShowRolesList(false)
    onCancel()
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target) && visible && !showPermissionsModal) {
        onCancel()
      }
      if (permissionsModalRef.current && !permissionsModalRef.current.contains(event.target) && showPermissionsModal) {
        handleClosePermissions()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [visible, showPermissionsModal, onCancel])

  const CustomCheckbox = ({ checked, onChange }) => (
    <div
      onClick={onChange}
      className={`w-5 h-5 rounded border-2 cursor-pointer flex items-center justify-center transition-colors ${
        checked ? "bg-[#01575C] border-[#01575C]" : "bg-white border-gray-300 hover:border-gray-400"
      }`}
    >
      {checked && <Check size={12} className="text-white" />}
    </div>
  )

  const permissionsData = Object.keys(permissions).map((module, index) => ({
    key: index,
    module,
    read: permissions[module].read,
    write: permissions[module].write,
    delete: permissions[module].delete,
  }))

  const permissionsColumns = [
    {
      title: "Module",
      dataIndex: "module",
      key: "module",
      className: "font-medium",
    },
    {
      title: "Read",
      key: "read",
      align: "center",
      render: (_, record) => (
        <CustomCheckbox checked={record.read} onChange={() => handlePermissionChange(record.module, "read")} />
      ),
    },
    {
      title: "Write",
      key: "write",
      align: "center",
      render: (_, record) => (
        <CustomCheckbox checked={record.write} onChange={() => handlePermissionChange(record.module, "write")} />
      ),
    },
    {
      title: "Delete",
      key: "delete",
      align: "center",
      render: (_, record) => (
        <CustomCheckbox checked={record.delete} onChange={() => handlePermissionChange(record.module, "delete")} />
      ),
    },
  ]

  if (showRolesList) {
    return <RolesList onBack={handleBackFromRolesList} />
  }

  if (!isVisible && !visible && !isPermissionsVisible && !showPermissionsModal) return null

  return (
    <>
      {(isVisible || visible) && !showPermissionsModal && (
        <div
          className={`fixed inset-0 z-50 p-3 flex items-center justify-center ${visible ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}
        >
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[4px]" />

          <div
            ref={modalRef}
            className={`bg-white rounded-lg w-full max-w-[500px] shadow-xl z-10 transform ${visible ? "scale-100 opacity-100" : "scale-95 opacity-0"} transition-all duration-500`}
          >
            <div className="p-4 border-b flex justify-between items-center">
              <h3 className="text-lg rethink-sans-400">Add User</h3>
              <div>
                <X onClick={onCancel} size={18} className="cursor-pointer" />
              </div>
            </div>

            <div className="py-4 px-4 rethink-sans-400 max-w-sm mx-auto w-full">
              <div className="mb-4">
                <p className="text-xs text-gray-500 mb-1">Role Name</p>
                <input
                  type="text"
                  placeholder="Enter role name"
                  value={rolename}
                  onChange={(e) => setrolename(e.target.value)}
                  className="w-full text-sm cursor-pointer rounded-md px-3 outline-none py-2 bg-[#F5F8F8]"
                />
              </div>

              <div className="mb-4">
                <p className="text-xs text-gray-500 mb-1">Description</p>
                <textarea
                  value={description}
                  onChange={(e) => setdescription(e.target.value)}
                  className="w-full text-sm cursor-pointer outline-none rounded-md px-3 py-2 bg-[#F5F8F8] min-h-[80px]"
                />
              </div>
            </div>

            <div className="border-t p-4 border-slate-200 w-full rethink-sans-400">
              <div className="flex justify-center items-center gap-2">
                <button
                  onClick={onCancel}
                  className="px-6 py-2 rounded-md text-sm cursor-pointer text-gray-700 border border-slate-500 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  className="px-4 py-2 bg-[#01575C] text-sm cursor-pointer hover:bg-teal-900 text-white rounded-md transition-colors"
                >
                  Invite
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {(isPermissionsVisible || showPermissionsModal) && (
        <div
          className={`fixed inset-0 z-50 p-3 flex items-center justify-center ${showPermissionsModal ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}
        >
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[4px]" />

          <div
            ref={permissionsModalRef}
            className={`bg-white rounded-lg w-full max-w-[600px] shadow-xl z-10 transform ${showPermissionsModal ? "scale-100 opacity-100" : "scale-95 opacity-0"} transition-all duration-500`}
          >
            <div className="p-4 border-b flex justify-between items-center">
              <h3 className="text-lg rethink-sans-500">Module Permissions</h3>
              <div>
                <X onClick={handleClosePermissions} size={18} className="cursor-pointer" />
              </div>
            </div>

            <div className="p-6">
              <Table
                columns={permissionsColumns}
                dataSource={permissionsData}
                pagination={false}
                className="permissions-table"
                size="middle"
              />
            </div>

            <div className="border-t p-4 border-slate-200 w-full rethink-sans-400">
              <div className="flex justify-center items-center gap-2">
                <button
                  onClick={handlePrevious}
                  className="px-6 py-2 rounded-md text-sm cursor-pointer text-gray-700 border border-slate-500 hover:bg-gray-50 transition-colors"
                >
                  Previous
                </button>
                <button
                  onClick={handleCreateRole}
                  className="px-4 py-2 bg-[#01575C] text-sm cursor-pointer hover:bg-teal-900 text-white rounded-md transition-colors"
                >
                  Create Role
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default AddRole