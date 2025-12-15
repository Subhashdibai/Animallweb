import React from "react";

export default function GoatDiscussion() {
  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>💬 Goat Discussion</h1>

        <p style={styles.subtitle}>
          Connect with fellow goat farmers and share your experiences,
          questions and success stories.
        </p>

        <div style={styles.section}>
          <h3>What you can do here</h3>
          <ul style={styles.list}>
            <li>✔ Ask questions about goat farming</li>
            <li>✔ Share your success stories</li>
            <li>✔ Learn from experienced farmers</li>
            <li>✔ Discuss feed, health & breeding</li>
            <li>✔ Community-driven knowledge</li>
          </ul>
        </div>

        <div style={styles.section}>
          <h3>Who can join?</h3>
          <p>
            New farmers, experienced breeders, dairy owners and anyone
            interested in goat farming.
          </p>
        </div>

        <button style={styles.button}>
          Join Discussion
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

// export default function GoatDiscussion() {
//   return (
//     <div style={{ padding: "30px" }}>
//       <h2>💬 Goat Discussion</h2>
//       <p>Share your goat farming experience.</p>
//     </div>
//   );
// }
