import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

export default function Register() {
  const username = useRef();
  const userLastname = useRef();
  const profilePicture = useRef();
  const coverPicture = useRef();
  const from = useRef();
  const email = useRef();
  const city = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  const navigate = useNavigate();

  const HandleClick =async (e) => {
    e.preventDefault();
    if (confirmPassword.current.value !== password.current.value) {
      confirmPassword.current.setCustomValidity("Password dont match!");
    } else {
      const user = {
        userName: username.current.value,
        userLastName: userLastname.current.value,
        profilePicture: profilePicture.current.value,
        coverPicture: coverPicture.current.value,
        email: email.current.value,
        city: city.current.value,
        password: password.current.value,
        from: from.current.value,
      };
      try {
       await axios.post("http://localhost:8800/auth/register", user);
        console.log(user);
        navigate("/login");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const reDirectToLogin = (e) => {
    e.preventDefault();
    navigate("/login");
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
              placeholder="User Name"
              required
              ref={username}
              className="loginInput"
            />

            <input
              placeholder="User Last Name"
              required
              ref={userLastname}
              className="loginInput"
            />

            <input
              placeholder="User Profile picture"
              required
              ref={profilePicture}
              className="loginInput"
            />

            <input
              placeholder="cover Picture"
              required
              ref={coverPicture}
              className="loginInput"
              type="url"
            />
            <input
              placeholder="Email"
              required
              ref={email}
              className="loginInput"
              type="email"
            />
              <input
                placeholder="Country"
                required
                ref={from}
                className="loginInput"
              />
            <input
              placeholder="City"
              required
              ref={city}
              className="loginInput"
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

            <button className="loginRegisterButton" onClick={reDirectToLogin}>
              Log into Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
