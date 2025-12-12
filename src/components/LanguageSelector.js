// import React from "react";


// export default function LanguageSelector() {
// return (
// <div className="lang-selector">
// {/* <span>🌐 हिंदी ▼</span> */}
// <span>🌐 ENGLISH ▼</span>
// </div>
// );
// }
import React, { useState } from "react";

export default function LanguageSelector() {
  const [open, setOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("English");

  const languages = ["English", "Hindi", "Marathi", "Gujarati"];

  return (
    <div className="lang-selector">

      {/* Main Button */}
      <div
        className="selector-btn"
        onClick={() => setOpen(!open)}
      >
        🌐 {selectedLang} ▼
      </div>

      {/* Dropdown */}
      {open && (
        <div className="dropdown">
          {languages.map((lang) => (
            <div
              key={lang}
              className="dropdown-item"
              onClick={() => {
                setSelectedLang(lang);
                setOpen(false);
              }}
            >
              {lang}
            </div>
          ))}
        </div>
      )}

    </div>
  );
}
