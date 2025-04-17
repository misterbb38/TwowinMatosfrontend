// import React from "react";

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="footer">
//       <p>© {currentYear} Gestion des Matériels - Tous droits réservés</p>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>
        © {currentYear} Управление оборудованием - twowin.ru - Все права
        защищены
      </p>
    </footer>
  );
};

export default Footer;
