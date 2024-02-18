import axios from 'axios'
const URL = "http://localhost:5000";

export const authenticateSignup = async(data) => {
    try{
        let response = await axios.post(`${URL}/signup`, data);
        return response;
    }
    catch(error){
        console.log("error while authenticating signup : ", error);
    }
}

export const authenticateLogin = async(data) => {
    try{
        let response = await axios.post(`${URL}/login`, data);
        return response 
    }
    catch(error){
        console.log("error while authenticating login : ", error);
        return error.response;
    }
}
export const setAppointment = async(data) => {
    try{
        const userCookie = Cookies.get('auth_token');
        if(userCookie){
            const user = JSON.parse(userCookie);
            setEmail(user.email);
        }
        const headers = {
            "auth_token" : userCookie.auth_token
        }
        let response = await axios.post(`${URL}/setAppointment`, data);
        return response;
    }
    catch(error){
        console.log("error while Set Appointments login : ", error);
        return error.response;
    }
}