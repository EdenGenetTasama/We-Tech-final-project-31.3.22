import "./Login.css";

export default function Login() {
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
              <input placeholder="Email" type="text" className="loginInput" />
              <input placeholder="Password" type="password" className="loginInput" />
              <button className="loginButton">Log In</button>
              <span className="loginForgot">forgot Password?</span>
              <button className="loginRegisterButton">Create a New Account</button>
              </div>
          </div>
    </div>
    </div>
  );
}
