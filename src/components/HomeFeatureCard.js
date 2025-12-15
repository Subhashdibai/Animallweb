// import React from "react";
// import { useNavigate } from "react-router-dom";

// import "./HomeFeatureCard.css";




// function HomeFeatureCard({ title, subtitle, img }) {
//   const navigate = useNavigate();

//   const handleClick = () => {
//     if (title === "Check Rate") navigate("/check-rate");
//     if (title === "Increase Milk") navigate("/increase-milk");
//     if (title === "Goat Expert") navigate("/goat-expert");
//   };

//   return (
//     <div
//       className="home-feature-card"
//       onClick={handleClick}
//       style={{ cursor: "pointer" }}
//     >
//       <img src={img} alt={title} />
//       <h3>{title}</h3>
//       <p>{subtitle}</p>
//     </div>
//   );
// }

// export default HomeFeatureCard;




import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomeFeatureCard.css";

function HomeFeatureCard({ title, subtitle, img, show = true }) {
  const navigate = useNavigate();

   if (!show) return null; // ✅ div bilkul render hi nahi hoga

   const handleClick = () => {
    if (title === "Check Rate") navigate("/check-rate");
    if (title === "Increase Milk") navigate("/increase-milk");
    if (title === "Goat Expert") navigate("/goat-expert");
  };

  return (
    <div
      className="home-feature-card"
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      <img src={img} alt={title} />
      <HomeFeatureCard show={false} />

      <h3>{title}</h3>
      <p>{subtitle}</p>
    </div>
  );
}

export default HomeFeatureCard;

