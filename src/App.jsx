import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import SocialLogin from './pages/login/social-login'
import SocialSignup from './pages/signup/social-signup'
import Login from './pages/login/normal-login'
import Signup from './pages/signup/normal-signup'
import ResetEmailLink from './pages/forgot-password/reset-email'
import VerifyLink from './pages/email-link/verify-link'
import CreatePassword from './pages/create-password/create-password'
import CustomizeExperience from './pages/customize-experience/customize-experience'
import AboutYou from './pages/about-you/about-you'

import DashboardLayout from './layouts/dashboard-layout'
import CropManagement from './pages/crop-management/crop-management'
import AddNewCrop from './pages/crop-management/add-crop'
import CropList from './pages/crop-management/crop-list'

import TaskManagement from './pages/tasks/task-management'
import TaskList from './pages/tasks/task-list'

import AnimalManagement from './pages/animal-management/animal-management'
import AddAnimal from './pages/animal-management/add-animal'
import AnimalList from './pages/animal-management/animal-list'

import EcommerceManagement from './pages/ecommerce-management/ecommerce-management'
import EcommerceStoreList from './pages/ecommerce-management/store-list'

import Dashboard from './pages/dashboard/dashboard'
import FinanceAnalytics from './pages/finances/finance-analytics'


import AdminLogin from './pages/login/admin-login'
import AdminResetLink from './pages/admin-reset-link/admin-reset-link'
import AdminVerifyCode from './pages/admin-verify-code/admin-verify-code'
import AdminCreatePassword from './pages/admin-create-password/admin-create-password'

import AdminDashboardLayout from './layouts/admin-dashboard'
import AdminDashboard from './pages/admin-dashboard/dashboard'
import UserManagement from './pages/user-management/user-management'
import UserList from './pages/user-management/user-list'
import AdminEcommerceManagement from './pages/admin-ecommerce-management/admin-ecommerce-management'
import AdminAnalytics from './pages/admin-analytics/analytics'

import LMSManagement from './pages/lms-management/lms-management'
import ContentList from './pages/lms-management/content-list'

import RolesAndPermission from './pages/roles-and-permissions/roles-management'
import RolesList from './pages/roles-and-permissions/roles-list'

import Forecast from './pages/forecast/forecast'

import './App.css'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/main-dashboard" replace />} />

        <Route path="/social-login" element={<SocialLogin />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-reset-link" element={<AdminResetLink />} />
        <Route path="/admin-verify-code" element={<AdminVerifyCode />} />
        <Route path="/admin-create-password" element={<AdminCreatePassword />} />



        
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/reset-email-link" element={<ResetEmailLink />} />
        <Route path="/verify-link" element={<VerifyLink />} />
        <Route path="/create-password" element={<CreatePassword />} />
        <Route path="/about-you" element={<AboutYou />} />
        <Route path="/customize-experience" element={<CustomizeExperience />} />
        <Route path="/social-signup" element={<SocialSignup />} />

        <Route path="/main-dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="finance-analytics" element={<FinanceAnalytics />} />
          <Route path="forecast" element={<Forecast />} />

          <Route path="crop-management" element={<CropManagement />} />
          <Route path="crop-management/add-crop" element={<AddNewCrop />} />
          <Route path="crop-management/crop-list" element={<CropList />} />

          <Route path="task-manager" element={<TaskManagement />} />
          <Route path="task-manager/task-list" element={<TaskList />} />

          <Route path="animal-management" element={<AnimalManagement />} />
          <Route path="animal-management/add-animal" element={<AddAnimal />} />
          <Route path="animal-management/animal-lists" element={<AnimalList />} />

          <Route path="ecommerce" element={<EcommerceManagement />} />
          <Route path="ecommerce/store-list" element={<EcommerceStoreList />} />
        </Route>

        <Route path='/admin-dashboard' element={<AdminDashboardLayout/>}>
          <Route path='dashboard' element={<AdminDashboard />} />
          <Route path='user-management' element={<UserManagement />} />
          <Route path='user-management/user-list' element={<UserList />} />
          <Route path='admin-ecommerce-management' element={<AdminEcommerceManagement />} />
          <Route path='admin-analytics' element={<AdminAnalytics />} />

          <Route path='content-management' element={<LMSManagement />} />
          <Route path='content-management/content-list' element={<ContentList />} />

          <Route path='roles-and-permissions' element={<RolesAndPermission/>}/>




        </Route>
      </Routes>
    </Router>
  )
}

export default App