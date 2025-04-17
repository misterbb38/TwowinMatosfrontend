// import React from "react";
// import { Link } from "react-router-dom";
// import { Building2, Edit, Trash2, Monitor, MapPin } from "lucide-react";

// const BureauCard = ({ bureau, onEdit, onDelete }) => {
//   return (
//     <div className="card">
//       <div className="card-header">
//         <h3 className="card-title">
//           <Building2 size={18} className="icon" />
//           {bureau.nom}
//         </h3>
//         <div className="card-actions">
//           <button
//             className="btn btn-icon btn-outline"
//             onClick={() => onEdit(bureau)}
//             title="Modifier ce bureau"
//           >
//             <Edit size={16} />
//           </button>
//           <button
//             className="btn btn-icon btn-outline"
//             onClick={() => onDelete(bureau._id)}
//             title="Supprimer ce bureau"
//           >
//             <Trash2 size={16} />
//           </button>
//         </div>
//       </div>
//       <div className="card-body">
//         <div className="bureau-info">
//           <p className="bureau-localisation">
//             <MapPin size={16} className="icon" />
//             <span>{bureau.localisation}</span>
//           </p>
//           {bureau.description && (
//             <p className="bureau-description">{bureau.description}</p>
//           )}
//         </div>
//       </div>
//       <div className="card-footer">
//         <Link
//           to={`/bureaux/${bureau._id}`}
//           className="btn btn-primary"
//           title="Voir les matériels de ce bureau"
//         >
//           <Monitor size={16} />
//           Voir les matériels
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default BureauCard;

import React from "react";
import { Link } from "react-router-dom";
import { Building2, Edit, Trash2, Monitor, MapPin } from "lucide-react";

const BureauCard = ({ bureau, onEdit, onDelete }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">
          <Building2 size={18} className="icon" />
          {bureau.nom}
        </h3>
        <div className="card-actions">
          <button
            className="btn btn-icon btn-outline"
            onClick={() => onEdit(bureau)}
            title="Изменить этот офис"
          >
            <Edit size={16} />
          </button>
          <button
            className="btn btn-icon btn-outline"
            onClick={() => onDelete(bureau._id)}
            title="Удалить этот офис"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>
      <div className="card-body">
        <div className="bureau-info">
          <p className="bureau-localisation">
            <MapPin size={16} className="icon" />
            <span>{bureau.localisation}</span>
          </p>
          {bureau.description && (
            <p className="bureau-description">{bureau.description}</p>
          )}
        </div>
      </div>
      <div className="card-footer">
        <Link
          to={`/bureaux/${bureau._id}`}
          className="btn btn-primary"
          title="Посмотреть оборудование в этом офисе"
        >
          <Monitor size={16} />
          Посмотреть оборудование
        </Link>
      </div>
    </div>
  );
};

export default BureauCard;
