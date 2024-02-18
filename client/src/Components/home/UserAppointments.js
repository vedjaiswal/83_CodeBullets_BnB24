import React, { useState } from "react";
import { PastAppointments } from "./PastAppointments";
import UpcomingAppointments from "./UpcomingAppointments";
import { useLocation } from 'react-router-dom';

export const UserAppointments = (props) => {
  const [tab, setTab] = useState("current");
  const location = useLocation();
  const formData = location.state?.formData; // Use optional chaining to avoid errors
  console.log(formData);

  return (
    <div className="doctor-section" id="doctors">
    <div className="flex items-start">
      <h3 className="dt-title">
        <span>Track Your Appointments</span>
      </h3>
    </div>
    <div className="md:col-span-2">
    <div className="mt-[50px] border-b border-solid border-[#0066ff34] flex items-start w-1/3">
  <button
    className={` ${tab === "past" &&
      "border-b border-blue-700"} py-2 px-5 mr-5 text-[16px] leading-7 text-black font-semibold bg-transparent hover:border-blue-700 hover:bg-transperent`}
    onClick={() => setTab("past")}
  >
    Past Appointments
  </button>
  <button
    className={` ${tab === "current" &&
      "border-b border-blue-700"} py-2 px-5 text-[16px] leading-7 text-black font-semibold bg-transparent hover:border-blue-700 hover:bg-transperent`}
    onClick={() => setTab("current")}
  >
    Upcoming Appointments
  </button>
</div>




      <div className="mt-[50px]">
        {tab === "past" && <PastAppointments />}
        {tab === "current" && <UpcomingAppointments props={formData} />}
      </div>
    </div>
  </div>
  );
};
