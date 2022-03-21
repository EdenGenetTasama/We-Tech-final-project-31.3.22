import { useContext, useRef } from "react";
import "./Login.css";
import { loginCall } from "../../../apiCalls";
import { AuthContext } from "../../../Context/AuthContext";
import {CircularProgress} from "@material-ui/core"

export default function Login() {
const email=useRef();
const password=useRef();
const {user,isFetching,error,dispatch} = useContext(AuthContext)

  const HandleClick=(e)=>{
    e.preventDefault();
    loginCall({email:email.current.value,password:password.current.value},dispatch);
    console.log(user);
  }
  return (
    <div className="login">
      <div className="loginWrapper">
      <div className="loginLeft">
        <h3 className="loginLogo">WeTechSocial</h3>
        <span className="LoginDesc">
            
            connect with friends and the world around you on We-Tech Social
        </span>
      </div>
      <div className="loginRight">
          <form className="loginBox" onSubmit={HandleClick}>
              <input placeholder="Email" type="email" required minLength="8" className="loginInput" ref={email}/>
              <input placeholder="Password" type="password" required minLength="6" autoComplete="on" className="loginInput" ref={password} />
              <button className="loginButton" disabled={isFetching}>{isFetching ? <CircularProgress color="white" size="20px"/> : "Log In"}</button>
              <span className="loginForgot">forgot Password?</span>
              <button className="loginRegisterButton">Create a New Account</button>
              </form>
          </div>
    </div>
    </div>
  );
}
