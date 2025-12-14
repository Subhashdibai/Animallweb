// import { useState } from "react";
// import ServiceCards from "../components/ServiceCards";
// import CheckRateModal from "../modals/CheckRateModal";
// import IncreaseMilkModal from "../modals/IncreaseMilkModal";
// import CattleExpertModal from "../modals/CattleExpertModal";

// export default function Home() {
//   const [modal, setModal] = useState(null);

//   return (
//     <>
//       <ServiceCards onOpen={setModal} />

//       {modal === "rate" && <CheckRateModal onClose={() => setModal(null)} />}
//       {modal === "milk" && <IncreaseMilkModal onClose={() => setModal(null)} />}
//       {modal === "expert" && <CattleExpertModal onClose={() => setModal(null)} />}
//     </>
//   );
// }


// import React, { useState } from "react";
// import ServiceCards from "../components/home/ServiceCards";
// import CheckRateModal from "../components/modals/CheckRateModal";
// import IncreaseMilkModal from "../components/modals/IncreaseMilkModal";
// import GoatExpertModal from "../components/modals/GoatExpertModal";
// import GoatExpertModal from "../components/modals/GoatExpertModal";
// import GoatExpertModal from "../components/modals/GoatExpert";

// import GoatExpertModal from "../components/modals/GoatExpertModal";

// import CheckRateModal from "../components/modals/CheckRateModal";
// import IncreaseMilkModal from "../components/modals/IncreaseMilkModal";
// import GoatExpertModal from "../components/modals/GoatExpertModal";




// import React, { useState } from "react";
// import ServiceCards from "../components/home/ServiceCards";

// export default function Home() {
//   const [activeModal, setActiveModal] = useState(null);

//   return (
//     <>
//       <ServiceCards onOpen={setActiveModal} />

//       {activeModal === "checkRate" && (
//         <CheckRateModal onClose={() => setActiveModal(null)} />
//       )}

//       {activeModal === "increaseMilk" && (
//         <IncreaseMilkModal onClose={() => setActiveModal(null)} />
//       )}

//       {activeModal === "goatExpert" && (
//         <GoatExpertModal onClose={() => setActiveModal(null)} />
//       )}
//     </>
//   );
// }

import React from "react";
import ServiceCards from "../components/home/ServiceCards";

export default function Home() {
  return (
    <div>
      <ServiceCards />
    </div>
  );
}


