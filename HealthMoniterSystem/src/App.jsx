import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Register from './components/Register/Register'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signin from './components/Signin/Signin'
import DoctorDasboard from './components/DoctorDasboard/DoctorDasboard'
import StudentDashboard from './components/StudentDasboard/StudentDashboard'
import ReceptionDasboard from './components/ReceptionDasboard/ReceptionDasboard'
import Appointment from './components/Appointment/Appointment'
import Editappointment from './components/Editappointment/Editappointment'
import Home from './components/Home/Home'
import FieldSelection from './components/Register/FieldSelection'
import StudentRegister from './components/Register/StudentRegister'
import StudentHistory from './components/StudentHistory/StudentHistory'
import Inventory from './components/Inventory/Inventory'
import Chatbot from './components/Chatbot/Chatbot'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<Signin />} />
          <Route path='/selection' element={<FieldSelection />} />
          <Route path="/register/student" element={<StudentRegister />} />
          <Route path="/register/doctor" element={<Register />} />
          <Route path="/register/reception" element={<Register />} />
          <Route path="/dashboard/doctor" element={<DoctorDasboard />} />
          <Route path="/dashboard/student" element={<StudentDashboard />} />
          <Route path="/dashboard/reception" element={< ReceptionDasboard/>} />
          <Route path="/appointment" element={< Appointment/>} />
          <Route path="/dashboard/doctor/edit/:id" element={< Editappointment/>} />
          <Route path="/dashboard/studenthistory/:id" element={<StudentHistory />} />
          <Route path='/dashboard/inventory' element={<Inventory />} />
          <Route path='/chatbot' element={<Chatbot />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
