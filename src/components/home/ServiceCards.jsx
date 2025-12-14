// import React from "react";
// import { useNavigate } from "react-router-dom";


// export default function ServiceCards({ onOpen }) {
//     const navigate = useNavigate();

//   return (


//     <div className="feature-row">

//   <div className="feature-card" onClick={() => navigate("/check-rate")}>
//     <h4>Check Rate</h4>
//     <p>Correct price of cattle</p>
//   </div>

//   <div className="feature-card" onClick={() => navigate("/increase-milk")}>
//     <h4>Increase Milk</h4>
//     <p>Make Plan</p>
//   </div>

//   <div className="feature-card" onClick={() => navigate("/goat-expert")}>
//     <h4>Goat Expert</h4>
//     <p>Get Advice</p>
//   </div>

// </div>

    // <div className="service-wrapper">
      
    //   <div className="service-card" onClick={() => onOpen("checkRate")}>
    //     <h3>Check Rate</h3>
    //     <p>Correct price of cattle</p>
    //   </div>

    //   <div className="service-card" onClick={() => onOpen("increaseMilk")}>
    //     <h3>Increase Milk</h3>
    //     <p>Make Plan</p>
    //   </div>

    //   <div className="service-card" onClick={() => onOpen("goatExpert")}>
    //     <h3>Goat Expert</h3>
    //     <p>Get Advice</p>
    //   </div>

    // </div>


//   );
// }


import React from "react";
import { useNavigate } from "react-router-dom";

export default function ServiceCards() {
  const navigate = useNavigate();

  return (
    <div className="service-row">

      <div
        className="service-card"
        onClick={() => navigate("/check-rate")}
      >
        <h4>Check Rate</h4>
        <p>Correct price of cattle</p>
      </div>

      <div
        className="service-card"
        onClick={() => navigate("/increase-milk")}
      >
        <h4>Increase Milk</h4>
        <p>Make Plan</p>
      </div>

      <div
        className="service-card"
        onClick={() => navigate("/goat-expert")}
      >
        <h4>Goat Expert</h4>
        <p>Get Advice</p>
      </div>

    </div>
  );
}

