import { useRef } from "react";
import "./Login.css";

export default function Login() {
const email=useRef();
const password=useRef();

  const HandleClick=(e)=>{
    e.preventDefault();
    console.log(email.current.value);
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
              <input placeholder="Password" type="password" required minLength="8" autoComplete="on" className="loginInput" ref={password} />
              <button className="loginButton">Log In</button>
              <span className="loginForgot">forgot Password?</span>
              <button className="loginRegisterButton">Create a New Account</button>
              </form>
          </div>
    </div>
    </div>
  );
}
