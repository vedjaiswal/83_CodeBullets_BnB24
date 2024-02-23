import React, { useEffect, useState } from "react";
import { getAppointments } from "../../service/api.js";
import AppointmentCard from "./AppointmentCard.jsx";

const UpcomingAppointments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await getAppointments();
        console.log('Response ----',response)
        const appointmentsData = Array.isArray(response.data)
          ? response.data
          : [response.data];
  
        setAppointments(appointmentsData);
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };
    fetchAppointments();
  }, []);
  

  if (appointments.length === 0) {
    // Render a message or component for no upcoming appointments
    return (
      <div className="no-appointments-message">
        <p>No upcoming appointments.</p>
      </div>
    );
  }

  return (
    <div className="appointments-container justify-center">
      {appointments.map((appointment) => (
        <AppointmentCard key={appointment._id} appointment={appointment} />
      ))}
    </div>
  );
};

export default UpcomingAppointments;