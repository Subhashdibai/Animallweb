

import React from "react";

export default function IncreaseMilk() {
  return (
    <div style={pageStyle}>
      <div style={cardStyle}>
        <h1 style={titleStyle}>🥛 Increase Milk Production</h1>

        <p style={subTitleStyle}>
          Increasing milk production is now easier. With expert advice and the
          right techniques, get more milk from your animals.
        </p>

        <ul style={listStyle}>
          <li>✔ Traditional and scientific methods to increase milk</li>
          <li>✔ Proper animal nutrition guidance</li>
          <li>✔ Expert-led support</li>
          <li>✔ Useful for all breeds</li>
          <li>✔ Available all year round</li>
        </ul>

        <div style={priceBox}>
          <span style={{ fontSize: "18px" }}>Today's Special Offer</span>
          <h2 style={{ margin: "8px 0", color: "#b45f06" }}>
            Activate Plan for ₹1
          </h2>
        </div>

        <button style={buttonStyle}>Get Plan for ₹1</button>

        <p style={noteStyle}>
          ✔ Safe • ✔ Expert Support • ✔ Result-Oriented
        </p>
      </div>
    </div>
  );
}



const pageStyle = {
  minHeight: "100vh",
  background: "linear-gradient(135deg, #fff3d6, #fffaf0)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px"
};

const cardStyle = {
  background: "#ffffff",
  width: "100%",
  maxWidth: "520px",
  borderRadius: "18px",
  padding: "35px",
  boxShadow: "0 15px 35px rgba(0,0,0,0.12)",
  textAlign: "center"
};

const titleStyle = {
  fontSize: "28px",
  marginBottom: "10px",
  color: "#7a4a00"
};

const subTitleStyle = {
  fontSize: "16px",
  color: "#555",
  marginBottom: "25px",
  lineHeight: "1.6"
};

const listStyle = {
  textAlign: "left",
  marginBottom: "25px",
  fontSize: "15px",
  lineHeight: "1.9",
  color: "#333",
  paddingLeft: "0",
  listStyle: "none"
};

const priceBox = {
  background: "#fff1cc",
  padding: "15px",
  borderRadius: "12px",
  marginBottom: "20px"
};

const buttonStyle = {
  width: "100%",
  padding: "14px",
  fontSize: "18px",
  background: "linear-gradient(135deg, #f39c12, #e67e22)",
  color: "#fff",
  border: "none",
  borderRadius: "12px",
  cursor: "pointer",
  fontWeight: "600",
  transition: "0.3s"
};

const noteStyle = {
  marginTop: "15px",
  fontSize: "13px",
  color: "#777"
};


// import React from "react";


// export default function IncreaseMilk() {
// return (
// <div style={pageStyle}>
//     <h2>Increase Milk Plan</h2>
//       <p>Best plan to increase milk production</p>

//       <button className="action-btn">
//         Get Plan ₹1
//       </button>
// {/* <h1>Increase Milk Plan</h1>
// <p>Milk production बढ़ाने की योजना</p> */}
// </div>
// );
// }


// const pageStyle = {
// padding: "60px",
// background: "#fff8e6",
// height: "100vh"
// };