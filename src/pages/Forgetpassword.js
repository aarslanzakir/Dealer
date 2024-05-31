import React, { useState } from "react";
import "../style/Login.css";
import buildingImage from "../assets/Image.png";
import Logo from "../assets/logo.png";
import { Mail, Lock, Eye, EyeOff } from 'tabler-icons-react';
import { useNavigate } from "react-router-dom";

function Forgetpassword() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    
    navigate("/changepassword");
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
          <h1>Forget Password</h1>
          <h3 className="signin-subtext">
        Change your password
        </h3>
        </div>
       

        <form onSubmit={handleSubmit}>         
         <div className="input-group">
            <label htmlFor="email">Email</label>
            <div className="input-with-icon">
            <Mail className="input-icon" />
            <input type="email" id="email" placeholder="Enter your email" />
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

export default Forgetpassword;
