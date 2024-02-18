import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Legal from './Pages/Legal';
import NotFound from "./Pages/NotFound";
import Appointment from "./Pages/Appointment";
import Login from "./Components/login/Login";
import SignUp from "./Components/login/SignUp";
import Doctors from "./Components/home/Doctors";
import Chatbot from "./Components/chatbot/Chatbot";
import RoomPage from './Components/videoCalling/Room.jsx'
import { UserAppointments } from "./Components/home/UserAppointments";
import Navbar from "./Components/home/Navbar";
import DataProvider from "./context/DataProvider";

function App() {
  return (
    <DataProvider>
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/find-doctors" element={<Doctors />} />
          <Route path="/your-appointments" element={<UserAppointments />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/room/:roomId" element={<RoomPage />} />
        </Routes>
      </Router>
      <Chatbot/>
    </div>
    </DataProvider>
  );
}

export default App;
