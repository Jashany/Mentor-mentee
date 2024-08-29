import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import MentorSignup from "./Pages/Signup/Mentor/MentorSignup";
import StudentSignUp from "./Pages/Signup/Student/StudentSignup";
import Login from "./Pages/Login/Login";
import GlobalChat from "./components/GlobalChat/GlobalChat";
import { WebSocketProvider } from "./hooks/useSocket";

function App() {
  return (
    <>
      <WebSocketProvider>
        <Routes>
          <Route path="/mentorsignup" element={<MentorSignup />} />
          <Route path="/studentsignup" element={<StudentSignUp />} />
          <Route path="/comp" element={<GlobalChat />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </WebSocketProvider>
    </>
  );
}

export default App;
