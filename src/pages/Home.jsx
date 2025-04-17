// import React from "react";
// import { Building2 } from "lucide-react";
// import BureauList from "../components/Bureau/BureauList";

// const Home = () => {
//   return (
//     <div className="home-page">
//       <div className="page-header">
//         <h1 className="page-title">
//           <Building2 size={28} className="icon" />
//           Gestion des bureaux
//         </h1>
//       </div>

//       <div className="page-content">
//         <BureauList />
//       </div>
//     </div>
//   );
// };

// export default Home;

import React from "react";
import { Building2 } from "lucide-react";
import BureauList from "../components/Bureau/BureauList";

const Home = () => {
  return (
    <div className="home-page">
      <div className="page-header">
        <h1 className="page-title">
          <Building2 size={28} className="icon" />
          Управление офисами
        </h1>
      </div>

      <div className="page-content">
        <BureauList />
      </div>
    </div>
  );
};

export default Home;
