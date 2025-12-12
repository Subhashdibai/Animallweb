// import React, { useState } from "react";
// import "../styles/OtpPage.css";

// export default function OtpPage() {
//   const [otp, setOtp] = useState(["", "", "", ""]);

//   const handleChange = (value, index) => {
//     if (/^\d?$/.test(value)) {
//       const newOtp = [...otp];
//       newOtp[index] = value;
//       setOtp(newOtp);
//     }
//   };

//   return (
//     <div className="otp-wrapper">
//       <div className="otp-box">
//         <h2>OTP दर्ज करें</h2>
//         <p className="subtitle">आपके मोबाइल नंबर पर भेजा गया OTP डालें</p>

//         <div className="otp-inputs">
//           {otp.map((digit, index) => (
//             <input
//               key={index}
//               type="text"
//               maxLength="1"
//               value={digit}
//               onChange={(e) => handleChange(e.target.value, index)}
//             />
//           ))}
//         </div>

//         <button className="verify-btn">वेरिफ़ाई करें</button>

//         <p className="resend">
//           OTP नहीं मिला? <span>पुनः भेजें</span>
//         </p>
//       </div>
//     </div>
//   );
// }
import React, { useState } from "react";
// import React from "react";
import "../styles/OtpPage.css";
import { useNavigate } from "react-router-dom";

export default function OtpPage() {
  // const [otp, setOtp] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]);

  const navigate = useNavigate();

    const handleVerify = () => {
    if (otp.length < 4) {
      alert("Enter valid OTP");
      return;
    }

    // OTP verified → Go to Home Page
    navigate("/home");
  };

  return (
    <div className="otp-wrapper">
      <div className="otp-box">
        <h2>Enter OTP</h2>

        <p>Sent to your Mobile Number</p>

          <div className="otp-inputs">


          <input
  maxLength="1"
  onChange={(e) => setOtp(e, 0)}
   
/>
<input
  maxLength="1"
  onChange={(e) => setOtp(e, 1)}
/>
<input
  maxLength="1"
  onChange={(e) => setOtp(e, 2)}
/>
<input
  maxLength="1"
  onChange={(e) => setOtp(e, 3)}
/>

          {/* <input maxLength="1" />
          <input maxLength="1"  />
          <input maxLength="1"  />
          <input maxLength="1"  /> */}
          
          
        </div> 

         <button onClick={handleVerify} className="verify-btn">Verified</button> 
        {/* <button onClick={handleVerify}>Verify OTP</button> */}
        {/* <button onClick={verify-btn}>Verify OTP</button> */}

        <p className="resend">Didn't receive OTP? Resend</p>

        <button className="back-btn" onClick={() => navigate("/")}>
          ← Go back
        </button>
      </div>
    </div>
  );
}

