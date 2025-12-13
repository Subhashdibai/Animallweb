import React from "react";


// export default function HomeFeatureCard({ title, subtitle }) {
// return (
// <div className="feature-card">
export default function HomeFeatureCard({ title, subtitle, img }) {
  return (
    <div className="feature-card">
      <img 
        src={img} 
        alt={title} 
        className="feature-image" 
        style={{ width: "50px", height: "50px" }}
      />
<h4>{title}</h4>
<p>{subtitle}</p>
</div>
);
}