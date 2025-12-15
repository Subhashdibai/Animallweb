import React from "react";

export default function GoatInsurance() {
  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>🛡️ Goat Insurance</h1>

        <p style={styles.subtitle}>
          Protect your goats with affordable and trusted insurance plans.
        </p>

        <div style={styles.section}>
          <h3>Why Goat Insurance?</h3>
          <ul style={styles.list}>
            <li>✔ Protection against disease & death</li>
            <li>✔ Low cost insurance plans</li>
            <li>✔ Financial safety for farmers</li>
            <li>✔ Quick claim support</li>
            <li>✔ Peace of mind</li>
          </ul>
        </div>

        <div style={styles.section}>
          <h3>Who should take insurance?</h3>
          <p>
            Goat farmers, breeders, dairy owners and anyone who wants to
            safeguard their livestock investment.
          </p>
        </div>

        <button style={styles.button}>
          Get Goat Insurance
        </button>
      </div>
    </div>
  );
}



const styles = {
  page: {
    minHeight: "100vh",
    background: "#f6f7f9",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
  card: {
    background: "#ffffff",
    maxWidth: "600px",
    width: "100%",
    borderRadius: "16px",
    padding: "30px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
  },
  title: {
    fontSize: "28px",
    marginBottom: "10px",
    color: "#0f766e",
  },
  subtitle: {
    fontSize: "16px",
    color: "#555",
    marginBottom: "20px",
  },
  section: {
    marginBottom: "20px",
  },
  list: {
    paddingLeft: "20px",
    lineHeight: "1.8",
  },
  button: {
    width: "100%",
    height: "48px",
    background: "#0f766e",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    fontSize: "18px",
    fontWeight: "600",
    cursor: "pointer",
  },
};



// import React from "react";

// export default function GoatInsurance() {
//   return (
//     <div style={{ padding: "30px" }}>
//       <h2>🛡️ Goat Insurance</h2>
//       <p>Affordable and trusted goat insurance.</p>
//     </div>
//   );
// }
