import axios from 'axios'
import Cookies from 'js-cookie';
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
        const cookie = await JSON.parse(userCookie);
        const headers = {
            "auth_token" : cookie.auth_token
        }
        console.log("token",cookie.auth_token)
        let response = await axios.post(`${URL}/setAppointment`, data,{
            headers : headers
        });
        return response;
    }
    catch(error){
        console.log("error while Set Appointments login : ", error);
        return error.response;
    }
}

export const getAppointments = async() => {
    try{
        const userCookie = Cookies.get('auth_token');
        const cookie = await JSON.parse(userCookie);
        const headers = {
            "auth_token" : cookie.auth_token
        }
        // console.log("token",cookie.auth_token)
        let response = await axios.get(`${URL}/getAppointments`,{
            headers : headers
        });
        return response;
    }
    catch(error){
        console.log("error while Get Appointments login : ", error);
        return error.response;
    }
}