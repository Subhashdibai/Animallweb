import React from "react";

export default function PlayGame() {
  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>🎮 Play Games & Win Coins</h1>

        <p style={styles.subtitle}>
          Play fun and simple games and earn exciting coins that you can use
          across Animall services.
        </p>

        <div style={styles.section}>
          <h3>Why play games?</h3>
          <ul style={styles.list}>
            <li>✔ Earn free coins daily</li>
            <li>✔ Simple & fun games</li>
            <li>✔ No investment required</li>
            <li>✔ Improve knowledge with quiz games</li>
            <li>✔ Redeem coins on services</li>
          </ul>
        </div>

        <div style={styles.section}>
          <h3>Rewards</h3>
          <p>
            Win coins every day by playing games and completing small tasks.
            More play = more rewards.
          </p>
        </div>

        <button style={styles.button}>
          Start Playing
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
    color: "#7c3aed",
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
    background: "#7c3aed",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    fontSize: "18px",
    fontWeight: "600",
    cursor: "pointer",
  },
};



// import React from "react";

// export default function PlayGame() {
//   return (
//     <div style={{ padding: "30px" }}>
//       <h2>🎮 Play Game</h2>
//       <p>Play games and win coins.</p>
//     </div>
//   );
// }
