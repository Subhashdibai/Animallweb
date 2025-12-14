// import React from "react";
// import { useNavigate } from "react-router-dom";


// export default function ServiceCards() {
// const navigate = useNavigate();


// return (
// <div style={{ display: "flex", gap: "20px" }}>


// <div onClick={() => navigate("/check-rate")} style={cardStyle}>
// <h3>Check Rate</h3>
// <p>Correct price of cattle</p>
// </div>


// <div onClick={() => navigate("/increase-milk")} style={cardStyle}>
// <h3>Increase Milk</h3>
// <p>Make Plan</p>
// </div>


// <div onClick={() => navigate("/goat-expert")} style={cardStyle}>
// <h3>Goat Expert</h3>
// <p>Get Advice</p>
// </div>


// </div>
// );
// }


// const cardStyle = {
// width: "260px",
// padding: "30px",
// borderRadius: "16px",
// background: "#d9fdf7",
// cursor: "pointer",
// textAlign: "center",
// boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
// };













import React from "react";
import { useNavigate } from "react-router-dom";

export default function ServiceCards() {
  const navigate = useNavigate();

  return (
    <div style={{ display: "flex", gap: "20px" }}>

      <div onClick={() => navigate("/check-rate")} style={cardStyle}>
        <h3>Check Rate</h3>
        <p>Correct price of cattle</p>
      </div>

      <div onClick={() => navigate("/increase-milk")} style={cardStyle}>
        <h3>Increase Milk</h3>
        <p>Make Plan</p>
      </div>

      <div onClick={() => navigate("/goat-expert")} style={cardStyle}>
        <h3>Goat Expert</h3>
        <p>Get Advice</p>
      </div>

    </div>
  );
}

const cardStyle = {
  width: "260px",
  padding: "30px",
  borderRadius: "16px",
  background: "#d9fdf7",
  cursor: "pointer",
  textAlign: "center",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
};
