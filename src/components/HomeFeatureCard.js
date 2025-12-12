import React from "react";


export default function HomeFeatureCard({ title, subtitle }) {
return (
<div className="feature-card">
<h4>{title}</h4>
<p>{subtitle}</p>
</div>
);
}