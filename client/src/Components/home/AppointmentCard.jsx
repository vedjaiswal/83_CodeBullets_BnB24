import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import '../../Styles/AppointmentCard.css';

const AppointmentCard = ({ appointment }) => {
  const navigate = useNavigate();
  console.log("APPOINTMENT CARD", appointment);
  const inputDate = new Date(appointment.appointmentDate);
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = inputDate.toLocaleDateString("en-US", options);
  const roomId = appointment.roomId;

  const handleStartVideo = useCallback(() => {
    navigate(`/room/${roomId}`);
  }, [navigate, roomId]);

  return (
    <div className="max-w-sm p-6 bg-transparent bg-[#f2f2f2] dark:bg-[#f2f2f2] 0 rounded-lg shadow-2xl dark:border-gray-700 m-5">
      <div className="flex flex-col items-start">
        <h5 className="mb-2 text-4xl font-bold tracking-tight text-black dark:text-gray-900 text-left">
          {appointment.doctorName}
        </h5>
        <div className="bg-green-300 text-white rounded-md p-1 text-sm mb-3 inline-block ml-0">
          Cardiologist
        </div>
      </div>

      <p className="mb-3 font-normal text-gray-700 dark:text-gray-700">
        {formattedDate}{" "}
        <span className="font-bold">{appointment.appointmentTime}</span>
      </p>
      <p className="text-md font-semibold mb-5">
        Medium: {appointment.preferredMode}
      </p>
      <p className="text-md font-semibold mb-5">
        Room Id: {appointment.roomId}
      </p>

      <button
        className="justify-center px-3 py-2 text-md font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 block w-full"
        onClick={handleStartVideo}
      >
        Start {appointment.preferredMode}
      </button>
    </div>
  );
};

export default AppointmentCard;
