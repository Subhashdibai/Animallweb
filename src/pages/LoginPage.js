import React from "react";
import "../styles/LoginPage.css";
import HeaderLogo from "../components/HeaderLogo";
import LanguageSelector from "../components/LanguageSelector";
import PhoneInput from "../components/PhoneInput";
import MailInput from "../components/MailInput";

import { useNavigate } from "react-router-dom";


/* <img src={goatLogo} alt="Goat Logo" /> */
<img src="/Goat.logo.svg" alt="Goat Logo" />








export default function LoginPage() {
  
 
const navigate = useNavigate();    
return (
    

<div className="login-wrapper">
    {/* <MailInput /> */}
   
    
<div className="top-bar">
<HeaderLogo />
<LanguageSelector />
</div>


<div className="login-box">
<h1>Welcome to Animall</h1>
<p className="subtitle">Enter phone number to buy or sell Animals</p>
<PhoneInput />
<div style={{ margin: "20px 0", textAlign: "center" }}>OR</div>
 <MailInput />
 

{/* <div style={{ margin: "20px 0", textAlign: "center" }}>OR</div> */}

<button 
        className="continue-btn"
        onClick={() => navigate("/otp")}
      >
        Continue
      </button>


{/* <button className="continue-btn" >Continue</button> */}


{/* className="continue-btn" */}


<p className="trust-text">✔Trusted by 1 crore+ farmers</p>


<footer>
<a href="#!">Terms</a> | <a href="#!">Privacy</a> |
<span> Animall Technologies © 2025</span>
</footer>
</div>
</div>
);
}

