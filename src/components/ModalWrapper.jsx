// export default function ModalWrapper({ children, onClose }) {
//   return (
//     <div className="overlay">
//       <div className="modal">
//         <button className="close-btn" onClick={onClose}>✕</button>
//         {children}
//       </div>
//     </div>
//   );
// }


// import React from "react";
// // import "./modal.css";
// export default function ModalWrapper({ children, onClose }) {
//   return (
//     <div className="modal-overlay">
//       <div className="modal-box">
//         <button className="close-btn" onClick={onClose}>✕</button>
//         {children}
//       </div>
//     </div>
//   );
// }




import React from "react";
import "./modal.css";

export default function ModalWrapper({ children, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-box"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>

        {children}
      </div>
    </div>
  );
}
