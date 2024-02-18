import React, { useState ,useEffect } from "react";
import { getAppointments } from '../../service/api.js'
const UpcomingAppointments = ({ props }) => {
    if (!props) {
        // Render a message or component for no upcoming appointments
        return (
          <div className="no-appointments-message">
            <p>No upcoming appointments.</p>
          </div>
        );
      }
  const inputDate = new Date(props.appointmentDate);
  const options = { year: "numeric", month: "long", day: "numeric" };

  const formattedDate = inputDate.toLocaleDateString("en-US", options);
  console.log(formattedDate);

  // useEffect(()=>{
  //   let res = async ()=>{
  //     return await getAppointments();
  //   } 
  // })
  
  return (
    <div className="max-w-sm p-6 bg-[#f2f2f2] dark:bg-[#f2f2f2] border border-gray-200 rounded-lg shadow-md dark:border-gray-700">
      <div className="flex flex-col items-start">
        <h5 className="mb-2 text-4xl font-bold tracking-tight text-white dark:text-gray-900 text-left">
          {props.doctorName}
        </h5>
        <div className="bg-green-300 text-white rounded-md p-1 text-sm mb-3 inline-block ml-0">
          Cardiologist
        </div>
      </div>

      <p className="mb-3 font-normal text-gray-700 dark:text-gray-700">
        {formattedDate}{" "}
        <span className="font-bold">{props.appointmentTime}</span>
      </p>
      <p className="text-md font-semibold mb-5">
        Medium: {props.preferredMode}
      </p>

      <button className="justify-center px-3 py-2 text-md font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 block w-full" >
        Start {props.preferredMode} call
      </button>
    </div>
  );
};

export default UpcomingAppointments;
