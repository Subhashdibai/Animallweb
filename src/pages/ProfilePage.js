import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProfilePage() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #0f766e 0%, #f6f7f9 45%)",
        padding: "20px"
      }}
    >
      {/* Header */}
      <div
        style={{
          color: "#fff",
          marginBottom: "30px"
        }}
      >
        <h2 style={{ margin: 0 }}>My Profile</h2>
        <p style={{ opacity: 0.9, marginTop: "5px" }}>
          Manage your account & plans
        </p>
      </div>

      {/* Profile Card */}
      <div
        style={{
          background: "#fff",
          borderRadius: "18px",
          padding: "25px",
          maxWidth: "420px",
          margin: "0 auto",
          boxShadow: "0 12px 30px rgba(0,0,0,0.12)"
        }}
      >
        {/* Avatar */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "20px"
          }}
        >
          <img
            src="/profile.png"
            alt="profile"
            style={{
              width: "90px",
              height: "90px",
              borderRadius: "50%",
              border: "4px solid #0f766e",
              objectFit: "cover"
            }}
          />

          <h3 style={{ margin: "12px 0 4px" }}>User</h3>
          <span
            style={{
              fontSize: "14px",
              color: "#666"
            }}
          >
            Goat App Member
          </span>
        </div>

        {/* Info Rows */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <InfoRow label="Coins" value="120" />
          <InfoRow label="Active Plan" value="Free" />
          <InfoRow label="Account Type" value="Individual" />
        </div>

        {/* Buttons */}
        <button
          onClick={() => navigate("/home")}
          style={{
            marginTop: "25px",
            width: "100%",
            background: "#0f766e",
            color: "#fff",
            border: "none",
            padding: "14px",
            borderRadius: "12px",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer"
          }}
        >
          ⬅ Back to Home
        </button>
      </div>
    </div>
  );
}

/* Small reusable row */
function InfoRow({ label, value }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        background: "#f1f5f9",
        padding: "12px 16px",
        borderRadius: "10px",
        fontSize: "15px"
      }}
    >
      <span style={{ color: "#555" }}>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}



// import React from "react";
// import { useNavigate } from "react-router-dom";

// export default function ProfilePage() {
//   const navigate = useNavigate();

//   return (
//     <div style={{
//       minHeight: "100vh",
//       background: "#f6f7f9",
//       padding: "30px"
//     }}>
//       <h2 style={{ marginBottom: "20px" }}>My Profile</h2>

//       <div style={{
//         background: "#fff",
//         padding: "25px",
//         borderRadius: "14px",
//         maxWidth: "420px",
//         boxShadow: "0 8px 25px rgba(0,0,0,0.08)"
//       }}>
//         <p><strong>Name:</strong> User</p>
//         <p><strong>Coins:</strong> 120</p>
//         <p><strong>Plan:</strong> Free</p>

//         <button
//           onClick={() => navigate("/home")}
//           style={{
//             marginTop: "20px",
//             background: "#0f766e",
//             color: "#fff",
//             border: "none",
//             padding: "12px 20px",
//             borderRadius: "10px",
//             cursor: "pointer",
//             width: "100%",
//             fontSize: "16px"
//           }}
//         >
//           Back to Home
//         </button>
//       </div>
//     </div>
//   );
// }
