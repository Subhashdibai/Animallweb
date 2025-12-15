import React from "react";
import { useNavigate } from "react-router-dom";
import "./OtherServices.css";

export default function ServiceCard({ icon, title, subtitle, locked, link }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (link) {
      navigate(link);
    }
  };

  return (
    <div
      className="service-card"
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      <div className="icon-row">
        <img src={icon} alt="service" />
        {locked && <span className="lock-icon">🔒</span>}
      </div>

      <h4>{title}</h4>
      <p>{subtitle}</p>
    </div>
  );
}


// import React from "react";
// import "./OtherServices.css";


// export default function ServiceCard({ icon, title, subtitle, locked }) {
// return (
// <div className="service-card">
// <div className="icon-row">
// <img src={icon} alt="service" />
// {locked && <span className="lock-icon">🔒</span>}
// </div>
// <h4>{title}</h4>
// <p>{subtitle}</p>
// </div>
// );
// }