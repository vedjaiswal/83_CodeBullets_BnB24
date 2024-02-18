import AppointmentSchema from '../model/AppointmentSchema.js'
export const setAppointment = async (req, res) => {
    try {
       const {patientName,patientNumber,patientGender,doctorName,appointmentTime,preferredMode,appointmentDate} = req.body
       const user = req.user.id;
       const roomId = ("" + Math.random()).substring(2,8);

       const appointment  = await AppointmentSchema.create({
        user:user,
        appointmentDate:appointmentDate,
        patientName:patientName,
        patientNumber:patientNumber,
        patientGender:patientGender,
        doctorName:doctorName,
        appointmentTime:appointmentTime,
        preferredMode:preferredMode,
        roomId:roomId
       });
       console.log(appointment)
       return res.status(200).json(appointment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getAppointments = async (req, res) => {
    try {
       const data = await AppointmentSchema.find({user:req.user.id});
       console.log(data);
       return res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}