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
        return await axios.post(`${URL}/login`, data); 
    }
    catch(error){
        console.log("error while authenticating login : ", error);
        return error.response;
    }
}