import React from "react";
import { useNavigate } from "react-router-dom";


export default function BottomNavbar() {
const navigate = useNavigate();


return (
<div className="bottom-navbar">
<div onClick={() => navigate("/")}>🐮 Animall</div>
<div onClick={() => navigate("/buy")}>🤝 Buy</div>
<div onClick={() => navigate("/sell")}>📤 Sell</div>
<div onClick={() => navigate("/service")}>🛠 पशु सेवा</div>
</div>
);
}