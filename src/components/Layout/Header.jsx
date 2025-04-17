// import React from "react";
// import { Link } from "react-router-dom";
// import { Building2, Menu } from "lucide-react";

// const Header = () => {
//   return (
//     <header className="header">
//       <div className="header-container">
//         <Link to="/" className="logo">
//           <Building2 size={28} color="#2c9b48" />
//           <h1>Gestion des Matériels</h1>
//         </Link>
//         <nav className="nav">
//           <Link to="/" className="btn btn-outline">
//             <Building2 size={16} />
//             Bureaux
//           </Link>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React from "react";
import { Link } from "react-router-dom";
import { Building2, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <img src="/logo.png" alt="twowin.ru" height="28" />
          <h1>Управление оборудованием</h1>
        </Link>
        <nav className="nav">
          <Link to="/" className="btn btn-outline">
            <Building2 size={16} />
            Офисы
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
