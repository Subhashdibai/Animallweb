import React from "react";
import { useNavigate } from "react-router-dom";

export default function CoinsPage() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f4fdfb",
        padding: "20px"
      }}
    >
      {/* Header */}
      <div
        style={{
          background: "linear-gradient(135deg, #0f766e, #14b8a6)",
          color: "#fff",
          padding: "25px",
          borderRadius: "16px",
          marginBottom: "25px",
          textAlign: "center"
        }}
      >
        <img
          src="/coin.png"
          alt="coin"
          style={{ width: "60px", marginBottom: "10px" }}
        />
        <h2 style={{ margin: 0 }}>My Coins</h2>
        <p style={{ marginTop: "6px", opacity: 0.9 }}>
          Earn & use coins on Animall
        </p>
      </div>

      {/* Card */}
      <div
        style={{
          background: "#fff",
          borderRadius: "18px",
          padding: "25px",
          maxWidth: "420px",
          margin: "0 auto",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
        }}
      >
        {/* Coin stats */}
        <div style={statRow}>
          <span>Total Coins</span>
          <strong style={coinBadge}>🪙 120</strong>
        </div>

        <div style={statRow}>
          <span>Earned Today</span>
          <strong style={coinBadgeGreen}>🪙 10</strong>
        </div>

        <div style={statRow}>
          <span>Current Plan</span>
          <strong style={planBadge}>Free</strong>
        </div>

        {/* Divider */}
        <div
          style={{
            height: "1px",
            background: "#eee",
            margin: "20px 0"
          }}
        />

        {/* CTA */}
        <button
          onClick={() => navigate("/home")}
          style={{
            width: "100%",
            background: "#0f766e",
            color: "#fff",
            border: "none",
            padding: "14px",
            borderRadius: "12px",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer"
          }}
        >
          ⬅ Back to Home
        </button>
      </div>
    </div>
  );
}

/* ---------- Inline Styles ---------- */

const statRow = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "14px",
  fontSize: "15px"
};

const coinBadge = {
  background: "#fef3c7",
  color: "#92400e",
  padding: "6px 14px",
  borderRadius: "20px",
  fontSize: "14px"
};

const coinBadgeGreen = {
  background: "#dcfce7",
  color: "#166534",
  padding: "6px 14px",
  borderRadius: "20px",
  fontSize: "14px"
};

const planBadge = {
  background: "#e0f2fe",
  color: "#075985",
  padding: "6px 14px",
  borderRadius: "20px",
  fontSize: "14px"
};


// import React from "react";
// import { useNavigate } from "react-router-dom";

// export default function CoinsPage() {
//   const navigate = useNavigate();

//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         background: "#f6f7f9",
//         padding: "30px"
//       }}
//     >
//       <h2 style={{ marginBottom: "20px" }}>My Coins</h2>

//       <div
//         style={{
//           background: "#fff",
//           padding: "25px",
//           borderRadius: "14px",
//           maxWidth: "420px",
//           boxShadow: "0 8px 25px rgba(0,0,0,0.08)"
//         }}
//       >
//         <p><strong>Total Coins:</strong> 🪙 120</p>
//         <p><strong>Earned Today:</strong> 🪙 10</p>
//         <p><strong>Plan:</strong> Free</p>

//         <button
//           onClick={() => navigate("/home")}
//           style={{
//             marginTop: "20px",
//             background: "#0f766e",
//             color: "#fff",
//             border: "none",
//             padding: "12px 18px",
//             borderRadius: "10px",
//             cursor: "pointer",
//             width: "100%",
//             fontSize: "16px"
//           }}
//         >
//           ⬅ Back to Home
//         </button>
//       </div>
//     </div>
//   );
// }
