import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../Styles/AppointmentForm.css";
import { ToastContainer, toast } from "react-toastify";

function AppointmentForm() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const [patientName, setPatientName] = useState("");
  const [patientNumber, setPatientNumber] = useState("");
  const [patientGender, setPatientGender] = useState("default");
  const [doctorName, setDoctorName] = useState("default");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [preferredMode, setPreferredMode] = useState("default");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [showTimeSlot, setShowTimeSlot] = useState(false);
  const [timeSlots, setTimeSlots] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form inputs
    const errors = {};
    if (!patientName.trim()) {
      errors.patientName = "Patient name is required";
    } else if (patientName.trim().length < 8) {
      errors.patientName = "Patient name must be at least 8 characters";
    }

    if (!patientNumber.trim()) {
      errors.patientNumber = "Patient phone number is required";
    } else if (patientNumber.trim().length !== 10) {
      errors.patientNumber = "Patient phone number must be of 10 digits";
    }

    if (patientGender === "default") {
      errors.patientGender = "Please select patient gender";
    }
    if (!appointmentTime) {
      errors.appointmentTime = "Appointment time is required";
    } else {
      const selectedTime = new Date(appointmentTime).getTime();
      const currentTime = new Date().getTime();
      if (selectedTime <= currentTime) {
        errors.appointmentTime = "Please select a future appointment time";
      }
    }
    if (preferredMode === "default") {
      errors.preferredMode = "Please select preferred mode";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    console.log("Form Submitted with the following details:");
    console.log("Patient Name:", patientName);
    console.log("Patient Phone Number:", patientNumber);
    console.log("Patient Gender:", patientGender);
    console.log("Selected Doctor:", doctorName);
    console.log("Appointment Time:", appointmentTime);
    console.log("Preferred Mode:", preferredMode);

    // Reset form fields and errors after successful submission
    setPatientName("");
    setPatientNumber("");
    setPatientGender("default");
    setDoctorName("default");
    setAppointmentTime("");
    setPreferredMode("default");
    setFormErrors({});

    toast.success("Appointment Scheduled !", {
      position: toast.POSITION.TOP_CENTER,
      onOpen: () => setIsSubmitted(true),
      onClose: () => setIsSubmitted(false),
    });
  };

  const handleDoctorChange = (selectedDoctor) => {
    setDoctorName(selectedDoctor);
    setShowTimeSlot(true); // Show time slot input when a valid doctor is selected

    const simulatedTimeSlots = ["11:00", "12:00", "13:00", "14:00", "15:00"];
    setTimeSlots(simulatedTimeSlots);
  };

  const handleTimeSlotSelect = (selectedTimeSlot) => {
    setAppointmentTime(selectedTimeSlot);
  };

  return (
    <div className="appointment-form-section">
      <h1 className="legal-siteTitle">
        <Link to="/">
          WellCare
        </Link>
      </h1>

      <div className="form-container">
        <h2 className="form-title">
          <span>Book Appointment Online</span>
        </h2>

        <form className="form-content" onSubmit={handleSubmit}>
          <label>
            Patient Full Name:
            <input
              type="text"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              required
            />
            {formErrors.patientName && (
              <p className="error-message">{formErrors.patientName}</p>
            )}
          </label>

          <br />
          <label>
            Patient Phone Number:
            <input
              type="text"
              value={patientNumber}
              onChange={(e) => setPatientNumber(e.target.value)}
              required
            />
            {formErrors.patientNumber && (
              <p className="error-message">{formErrors.patientNumber}</p>
            )}
          </label>

          <br />
          <label>
            Patient Gender:
            <select
              value={patientGender}
              onChange={(e) => setPatientGender(e.target.value)}
              required
            >
              <option value="default">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="private">I will inform Doctor only</option>
            </select>
            {formErrors.patientGender && (
              <p className="error-message">{formErrors.patientGender}</p>
            )}
          </label>

          <br />
          <label>
            Select Doctor:
            <select
              value={doctorName}
              onChange={(e) => handleDoctorChange(e.target.value)}
              required
            >
              <option value="default">Select</option>
              <option value="male">Dr. Hiranandani</option>
              <option value="female">Dr. Deshmukh</option>
              <option value="private">Dr. Malpani</option>
              <option value="private">Dr. Abhinav</option>
            </select>
            {formErrors.doctorName && (
              <p className="error-message">{formErrors.doctorName}</p>
            )}
          </label>

          {showTimeSlot && (
  <>
    <br />
    <label>
      Preferred Appointment Time:
      <div className="time-slot-container flex">
        {timeSlots.map((slot) => (
          <div
            key={slot}
            className={`time-slot-card p-1 m-2 cursor-pointer rounded-md bg-green-600 ${
              appointmentTime === slot ? "selected" : ""
            }`}
            onClick={() => handleTimeSlotSelect(slot)}
          >
            {slot}
          </div>
        ))}
      </div>
      {formErrors.appointmentTime && (
        <p className="error-message">{formErrors.appointmentTime}</p>
      )}
    </label>
  </>
)}


          <br />
          <label>
            Preferred Mode:
            <select
              value={preferredMode}
              onChange={(e) => setPreferredMode(e.target.value)}
              required
            >
              <option value="default">Select</option>
              <option value="voice">Voice Call</option>
              <option value="video">Video Call</option>
            </select>
            {formErrors.preferredMode && (
              <p className="error-message">{formErrors.preferredMode}</p>
            )}
          </label>

          <br />
          <button type="submit" className="text-appointment-btn">
            Confirm Appointment
          </button>

          <p
            className="success-message"
            style={{ display: isSubmitted ? "block" : "none" }}
          >
            Appointment details has been sent to the patients phone number via
            SMS.
          </p>
        </form>
      </div>

      <div className="legal-footer">
        <p>© 2013-2023 Health+. All rights reserved.</p>
      </div>

      <ToastContainer autoClose={5000} limit={1} closeButton={false} />
    </div>
  );
}

export default AppointmentForm;
