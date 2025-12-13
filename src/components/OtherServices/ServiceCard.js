import React from "react";
import "./OtherServices.css";


export default function ServiceCard({ icon, title, subtitle, locked }) {
return (
<div className="service-card">
<div className="icon-row">
<img src={icon} alt="service" />
{locked && <span className="lock-icon">🔒</span>}
</div>
<h4>{title}</h4>
<p>{subtitle}</p>
</div>
);
}