import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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

import TaskManagement from './pages/tasks/task-management'
import TaskList from './pages/tasks/task-list'


import AnimalManagement from './pages/animal-management/animal-management'
import AddAnimal from './pages/animal-management/add-animal'
import AnimalList from './pages/animal-management/animal-list'


import EcommerceManagement from './pages/ecommerce-management/ecommerce-management'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SocialLogin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/reset-email-link" element={<ResetEmailLink />} />
        <Route path="/verify-link" element={<VerifyLink />} />
        <Route path="/create-password" element={<CreatePassword />} />
        <Route path="/about-you" element={<AboutYou />} />
        <Route path="/customize-experience" element={<CustomizeExperience />} />
        <Route path="/social-signup" element={<SocialSignup />} />


        <Route path='/main-dashboard' element={<DashboardLayout />}>
          <Route path='crop-management' element={<CropManagement />} />
          <Route path='crop-management/add-crop' element={<AddNewCrop />} />

          <Route path='task-manager' element={<TaskManagement />} />
          <Route path='task-manager/task-list' element={<TaskList />} />

          <Route path='animal-management' element={<AnimalManagement />} />
          <Route path='animal-management/add-animal' element={<AddAnimal />} />
          <Route path='animal-management/animal-lists' element={<AnimalList />} />

          <Route path='ecommerce' element={<EcommerceManagement />} />





        </Route>
      </Routes>
    </Router>
  )
}

export default App
