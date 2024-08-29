import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import MentorSignup from './Pages/Signup/Mentor/MentorSignup'
import StudentSignUp from './Pages/Signup/Student/StudentSignup'

function App() {

  return (
    <>
      <Routes>
        <Route path="/mentorsignup" element={<MentorSignup />} />
        <Route path="/studentsignup" element={<StudentSignUp />} />
      </Routes>
    </>
  )
}

export default App
