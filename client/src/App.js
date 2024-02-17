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
import { UserAppointments } from "./Components/home/UserAppointments";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/find-doctors" element={<Doctors />} />
          <Route path="/your-appointments" element={<UserAppointments />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
