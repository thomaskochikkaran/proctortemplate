import React, { useRef, useEffect } from "react";

import Logo from "../assets/login/Logo_Talview_colored_black.png";
import CloseEye from "../assets/login/closeEye.png";
import Mail from "../assets/login/mail.png";
import Password from "../assets/login/password.png";

import "./login.css";
const Login: React.FC = () => {
  const [isPwvisible , setIsPwvisible] = React.useState<boolean>(false);

  return (
    <div className="login-wrapper">
      <div className="login-screen">
        <div className="login-screen-inner">
          <img src={Logo} alt="Logo" />
          <h1>Log in to your Account</h1>
          <p style={{marginTop:"-20px"}}>Welcome back!</p>
          {/*  Select method to login */}
          <div className="otherlogins"></div>
          <form>
            <div className="login-input-group">
            <div className="loginIcon"><img src={Mail} alt="mail" className="" /></div>
              <input
                type="email"
                id="email"
                className="login-input"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div className="errorpart"></div>
            <div className="login-input-group">
              <div className="loginIcon"> <img src={Password} alt="mail"  className="" /></div>
           
            <input
              type={isPwvisible? "text":"password"}
              id="password"
              className="login-input"
              placeholder="Password"
              required
            />
               <div className="loginIcon1"> <img src={CloseEye} alt="mail"  className="" /></div>
              
          </div>
            <div className="errorpart"></div>
          <div className="login-input-group">
            <button
              type="submit"
              className="login-button"
            >
              Register new account
            </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
