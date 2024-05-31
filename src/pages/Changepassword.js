import React, { useState } from "react";
import "../style/Login.css";
import buildingImage from "../assets/Image.png";
import Logo from "../assets/logo.png";
import { Mail, Lock, Eye, EyeOff } from 'tabler-icons-react';

function Changepassword() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
    <div style={{display:"flex",alignItems:"center" , flexWrap:"wrap",gap:5 } } className="login-container2">
      <div className="image-container"  >
        <img src={buildingImage} alt="Building"  height={'600px'} />
      </div>

      <div className="login-form">
        <div className="signin">
          <img src={Logo} alt="Logo" />
          <h1>Change Password</h1>
          <h3 className="signin-subtext">
          Change your password
        </h3>
        </div>
       

        <form>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <div className="input-with-icon"> <Lock className="input-icon" />
            <input
              type={passwordVisible ? "text" : "password"}
              id="password"
              placeholder="Enter your password"
            />
            
          </div>
          </div>
          <div className="input-group">
            <label htmlFor="confirmpassword">Confirm Password</label>
            <div className="input-with-icon"> <Lock className="input-icon" />
            <input
              type={passwordVisible ? "text" : "password"}
              id="password"
              placeholder="Enter your confim password"
            />
            
          </div>
          </div>
          
          <button type="submit">Send Verification Code</button>
        </form>
       
      </div>
     
    </div>
     <div className="footer">
     <p>© Copyright 2008 - 2024 Carview. All Rights Reserved</p>

     <div className="footer-links">
     <a href="#"></a>
       <a href="#">Terms & Conditions</a>
       <a href="#">Privacy Policy</a>
       <a href="#">Earnings Disclaimer</a>
       <a href="#">Compensation Disclosure</a>
     </div>
   </div>
   </>
  );
}

export default Changepassword;
