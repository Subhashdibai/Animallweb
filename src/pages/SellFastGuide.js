import React from "react";

export default function SellFastGuide() {
  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <div style={styles.header}>
          ⚡ How to Sell Goat in 1 Day?
        </div>

        <p style={styles.subText}>
          Want to sell your goat within 24 hours? Follow these fast-selling
          techniques used by top Animall sellers to get instant buyer responses.
        </p>

        <div style={styles.listBox}>
          <Step text="Post your goat early morning for maximum visibility" />
          <Step text="Upload bright, clear and multiple images" />
          <Step text="Mention exact weight, age and breed" />
          <Step text="Keep price slightly competitive" />
          <Step text="Use premium boost to reach more buyers instantly" />
        </div>

        <div style={styles.tipBox}>
          🚀 <strong>Fast Sell Tip:</strong> Premium listings receive up to
          <strong> 5x more buyer calls</strong> in the first 24 hours.
        </div>

        <button style={styles.button}>
          Sell Goat Faster
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
    color: "#ea580c",
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
    background: "#fff7ed",
    padding: "14px",
    borderRadius: "10px",
    fontSize: "14px",
    color: "#9a3412",
    marginBottom: "20px",
  },

  button: {
    width: "100%",
    height: "48px",
    background: "#ea580c",
    color: "#fff",
    border: "none",
    borderRadius: "12px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
  },
};

