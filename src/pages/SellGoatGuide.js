import React from "react";

export default function SellGoatGuide() {
  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <div style={styles.header}>
          📈 Learn the Right Way to Sell Goat
        </div>

        <p style={styles.subText}>
          Sell your goat faster and at the best market price with expert-backed
          tips and proven selling strategies used by top sellers on Animall.
        </p>

        <div style={styles.listBox}>
          <Step text="Upload clear and recent goat photos" />
          <Step text="Mention correct age, weight and breed" />
          <Step text="Set a realistic market price" />
          <Step text="Respond quickly to buyer messages" />
          <Step text="Use premium plans to reach more buyers" />
        </div>

        <div style={styles.tipBox}>
          💡 <strong>Seller Tip:</strong> Listings with clear photos and proper
          price sell up to <strong>3x faster</strong>.
        </div>

        <button style={styles.button}>
          Start Selling Goat
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
    color: "#15803d",
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
    background: "#f0fdf4",
    padding: "14px",
    borderRadius: "10px",
    fontSize: "14px",
    color: "#166534",
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

