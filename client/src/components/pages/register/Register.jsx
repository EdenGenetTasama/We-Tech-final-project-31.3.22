import "./Register.css";

export default function Register() {
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
          <div className="loginBox">
              <input placeholder="UserName" className="loginInput" />
              <input placeholder="Email" className="loginInput" />
              <input placeholder="Password" className="loginInput" />
              <input placeholder="PasswordConfirm" className="loginInput" />
              <button className="loginButton">Sign Up</button>
              
              <button className="loginRegisterButton">Log into Account</button>
              </div>
          </div>
    </div>
    </div>
  );
}
