// import React from "react";

// export default function GoatExpertModal() {
//   return (
//     <div>
//       <h3>Goat Expert</h3>
//       <p>Expert advice coming soon...</p>
//     </div>
//   );
// }


import React from "react";
import ModalWrapper from "../components/ModalWrapper";

export default function GoatExpert() {
  return (
    <ModalWrapper>
      <h2>Goat Expert</h2>
      <p>Expert advice coming soon...</p>

      <button className="action-btn">
        Talk to Expert
      </button>
    </ModalWrapper>
  );
}
