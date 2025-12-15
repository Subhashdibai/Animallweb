import React from "react";

export default function BuyGoatGuide() {
  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <div style={styles.header}>
          🐐 How to Buy Goat from Animall
        </div>

        <p style={styles.subText}>
          Buy healthy and verified goats directly from trusted sellers near you.
          Follow these simple steps to get the best deal safely and easily.
        </p>

        <div style={styles.listBox}>
          <Step text="Search goats available near your location" />
          <Step text="Check photos, age, weight and price" />
          <Step text="Chat directly with verified sellers" />
          <Step text="Visit and inspect the goat before buying" />
          <Step text="Buy safely with confidence" />
        </div>

        <div style={styles.tipBox}>
          💡 <strong>Pro Tip:</strong> Goats with clear photos and proper weight
          details sell faster and give better value.
        </div>

        <button style={styles.button}>
          Start Buying Goats
        </button>
      </div>
    </div>
  );
}

function Step({ text }) {
  return (
    <div style={styles.step}>
      <span style={styles.tick}>✔</span>
      <span>{text}</span>
    </div>
  );
}

const styles = {
  wrapper: {
    minHeight: "100vh",
    background: "#f6f7f9",
    padding: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    background: "#ffffff",
    maxWidth: "800px",
    width: "100%",
    borderRadius: "16px",
    padding: "28px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
  },

  header: {
    fontSize: "26px",
    fontWeight: "700",
    marginBottom: "12px",
    color: "#0f766e",
  },

  subText: {
    fontSize: "16px",
    color: "#555",
    marginBottom: "22px",
    lineHeight: "1.6",
  },

  listBox: {
    marginBottom: "22px",
  },

  step: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontSize: "15px",
    marginBottom: "12px",
    color: "#333",
  },

  tick: {
    color: "#22c55e",
    fontWeight: "bold",
  },

  tipBox: {
    background: "#ecfeff",
    padding: "14px",
    borderRadius: "10px",
    fontSize: "14px",
    color: "#065f46",
    marginBottom: "20px",
  },

  button: {
    width: "100%",
    height: "48px",
    background: "#22c55e",
    color: "#fff",
    border: "none",
    borderRadius: "12px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
  },
};
 