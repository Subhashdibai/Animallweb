// import ModalWrapper from "../ModalWrapper";

// export default function CheckRateModal({ onClose }) {
//   return (
//     <ModalWrapper onClose={onClose}>
//       <h2>पशु का सही रेट जाने</h2>
//       <ul>
//         <li>10–15 दिन में बिक्री</li>
//         <li>अनलिमिटेड पशु</li>
//         <li>999 Coins</li>
//         <li>₹999 / साल</li>
//       </ul>
//       <button className="action-btn">प्लान लें ₹1</button>
//     </ModalWrapper>
//   );
// }



import React from "react";
import ModalWrapper from "../components/ModalWrapper";

export default function CheckRate() {
  return (
    <ModalWrapper>
      <h2>पशु का सही रेट जाने</h2>
      <ul>
        <li>10–15 दिन में बिक्री</li>
        <li>अनलिमिटेड पशु</li>
        <li>999 Coins</li>
        <li>₹999 / साल</li>
      </ul>
      <button className="action-btn">प्लान लें ₹1</button>
    </ModalWrapper>
  );
}


// import React from "react";

// export default function CheckRate() {
//   return <h2>Check Rate Page</h2>;
// }
