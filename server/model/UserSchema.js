import mongoose from 'mongoose';
/* 
fullName
gender
email
password
*/
const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ['male', 'female'], required: true
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true
    }
});

const user = mongoose.model('User', userSchema);

export default user;
