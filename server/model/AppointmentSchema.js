import mongoose from 'mongoose';
/*
    setPatientName("");
    setPatientNumber("");
    setPatientGender("default");
    setDoctorName("default");
    setAppointmentTime("");
    setPreferredMode("default");
*/
const appointmentSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        required: true,
    },
    patientName: {
        type: String,
        required: true
    },
    patientNumber: {
        type: Number,
        required:true
    },
    patientGender: {
        type: String,
        enum: ['male', 'female'], required: true
    },
    doctorName: {
        type: String,
        required: true
    },
    appointmentTime:{
        type:String,
        required:true
    },
    appointmentDate:{
        type:String,
        required:true
    },
    preferredMode:{
        type:String,
        enum: ['Voice Call', 'Video Call'], required: true
    },
    roomId:{
        type:Number,
        default:123450
    }
});

const appointment = mongoose.model('appointment', appointmentSchema);

export default appointment;
