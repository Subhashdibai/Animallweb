import React from "react";

export default function GoatLoan() {
  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>🐐 Goat Loan</h1>

        <p style={styles.subtitle}>
          Now get easy and quick loan for your goat farming needs.
        </p>

        <div style={styles.section}>
          <h3>Why Goat Loan?</h3>
          <ul style={styles.list}>
            <li>✔ Easy loan for buying goats</li>
            <li>✔ Low interest rates</li>
            <li>✔ Doorstep service</li>
            <li>✔ Minimal documentation</li>
            <li>✔ Fast approval</li>
          </ul>
        </div>

        <div style={styles.section}>
          <h3>Who can apply?</h3>
          <p>
            Farmers, goat rearers, dairy owners and anyone interested in
            starting goat farming business.
          </p>
        </div>

        <button style={styles.button}>
          Apply for Goat Loan
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
    color: "#1b5e20",
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
    background: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    fontSize: "18px",
    fontWeight: "600",
    cursor: "pointer",
  },
};




// import React from "react";

// export default function GoatLoan() {
//   return (
//     <div style={{ padding: "30px" }}>
//       <h2>🐐 Goat Loan</h2>
//       <p>Get easy goat loan at your home.</p>
//     </div>
//   );
// }
