// import React from "react";


// export default function HeaderLogo() {
// return (
// <div className="header-logo">
// <img
// // src="https://animall.in/_next/static/media/logo.8b9c46a7.svg"

// alt="c:\Users\hp\Downloads\Animall.logo.svg"
// />
// <p>गाय भैंस वाला ऐप</p>
// </div>
// );
// }
import React from "react";

export default function HeaderLogo() {
  return (
    <div className="header-logo">
      <img 
        src="/Animall.logo.svg" 
        alt="Animall Logo" 
         style={{ width: "70px", height: "auto" }}
      />
      {/* <p>Cow Buffalo app</p> */}
      {/* <p style={{ fontSize: "25px" }}>Cow Buffalo app</p> */}
      <p
  style={{
     
    fontSize: "24px",
    color: "Black",          
    border: "4px solid green", 
    padding: "8px 12px",     
    borderRadius: "15px", 
    fontWeight: "bold"      
  }}
>
  
  Cow Buffalo App
</p>

    </div>
  );
}


