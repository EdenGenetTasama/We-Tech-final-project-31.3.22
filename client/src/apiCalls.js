import axios from "axios";
import jwt_decode from "jwt-decode";

const basicApi = process.env.NODE_ENV === "production" ? "https://wetechsocial.herokuapp.com" : "http://localhost:8800";
export const loginCall = async (userCredentials,dispatch)=>{
    dispatch({type:"LOGIN_START"});
    try {
        const res = await axios.post(`${basicApi}/auth/login`,userCredentials)
        .then((res) => {
            localStorage.setItem('user',res.data.token);
            const token = localStorage.getItem('user');
            const decoded = jwt_decode(token);
            dispatch({type:"LOGIN_SUCCESS",payload:decoded})
          })
        
    } catch (error) {
        dispatch({type:"LOGIN_FAILURE",payload:error})
        
    }
}