import axios from "axios";
import { useRef } from "react";
import { useNavigate } from 'react-router-dom';
import "./Register.css";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  const navigate = useNavigate();
 
  const HandleClick = (e) => {
    e.preventDefault();
    if (confirmPassword.current.value !== password.current.value) {
      confirmPassword.current.setCustomValidity("Password dont match!");
    } else {
      const user = {
        userName: username.current.value,
        email: email.current.value,
        password: password.current.value,
      }
      try{
         const res = axios.post("http://localhost:8800/auth/register", user);
        navigate("/login")
      } catch (error) {
        console.log(error);
      }
    }
  };
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
            <input
              placeholder="UserName"
              required
              ref={username}
              className="loginInput"
            />
            <input
              placeholder="Email"
              required
              ref={email}
              className="loginInput"
              type="email"
            />
            <input
              placeholder="Password"
              required
              ref={password}
              className="loginInput"
              type="password"
              minLength="6"
            />
            <input
              placeholder="PasswordConfirm"
              required
              ref={confirmPassword}
              className="loginInput"
              type="password"
              minLength="6"
            />
            <button className="loginButton" type="submit">
              Sign Up
            </button>

            <button className="loginRegisterButton">Log into Account</button>
          </form>
        </div>
      </div>
    </div>
  );
}
