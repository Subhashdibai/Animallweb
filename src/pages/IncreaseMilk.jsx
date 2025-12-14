// import ModalWrapper from "../ModalWrapper";

// export default function IncreaseMilkModal({ onClose }) {
//   return (
//     <ModalWrapper onClose={onClose}>
//       <h2>दूध बढ़ाने की योजना</h2>
//       <p>एक्सपर्ट द्वारा बनाई गई Milk Plan</p>
//       <button className="action-btn">शुरू करें</button>
//     </ModalWrapper>
//   );
// }


// import React from "react";
// import ModalWrapper from "../components/ModalWrapper";

// export default function IncreaseMilk() {
//   return (
//     <ModalWrapper>
//       <h2>Increase Milk Plan</h2>
//       <p>Best plan to increase milk production</p>
//     </ModalWrapper>
//   );
// }



import React from "react";
import ModalWrapper from "../components/ModalWrapper";

export default function IncreaseMilk() {
  return (
    <ModalWrapper>
      <h2>Increase Milk Plan</h2>
      <p>Best plan to increase milk production</p>

      <button className="action-btn">
        Get Plan ₹1
      </button>
    </ModalWrapper>
  );
}

