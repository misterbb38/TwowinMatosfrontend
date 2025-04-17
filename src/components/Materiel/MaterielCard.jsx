// import React from "react";
// import { Link } from "react-router-dom";
// import { Monitor, Edit, Trash2, StickyNote, Cpu } from "lucide-react";

// const MaterielCard = ({ materiel, onEdit, onDelete }) => {
//   return (
//     <div className="card">
//       <div className="card-header">
//         <h3 className="card-title">
//           <Monitor size={18} className="icon" />
//           {materiel.nom}
//         </h3>
//         <div className="card-actions">
//           <button
//             className="btn btn-icon btn-outline"
//             onClick={() => onEdit(materiel)}
//             title="Modifier ce matériel"
//           >
//             <Edit size={16} />
//           </button>
//           <button
//             className="btn btn-icon btn-outline"
//             onClick={() => onDelete(materiel._id)}
//             title="Supprimer ce matériel"
//           >
//             <Trash2 size={16} />
//           </button>
//         </div>
//       </div>
//       <div className="card-body">
//         <div className="materiel-info">
//           <div className="materiel-quantity">
//             <Cpu size={16} className="icon" />
//             <span>
//               Quantité: <strong>{materiel.quantite}</strong>
//             </span>
//           </div>
//           {materiel.description && (
//             <p className="materiel-description">{materiel.description}</p>
//           )}
//         </div>
//       </div>
//       <div className="card-footer">
//         <Link
//           to={`/materiels/${materiel._id}`}
//           className="btn btn-primary"
//           title="Voir les détails et les notes"
//         >
//           <StickyNote size={16} />
//           Voir les notes
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default MaterielCard;

import React from "react";
import { Link } from "react-router-dom";
import { Monitor, Edit, Trash2, StickyNote, Cpu } from "lucide-react";

const MaterielCard = ({ materiel, onEdit, onDelete }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">
          <Monitor size={18} className="icon" />
          {materiel.nom}
        </h3>
        <div className="card-actions">
          <button
            className="btn btn-icon btn-outline"
            onClick={() => onEdit(materiel)}
            title="Изменить это оборудование"
          >
            <Edit size={16} />
          </button>
          <button
            className="btn btn-icon btn-outline"
            onClick={() => onDelete(materiel._id)}
            title="Удалить это оборудование"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>
      <div className="card-body">
        <div className="materiel-info">
          <div className="materiel-quantity">
            <Cpu size={16} className="icon" />
            <span>
              Количество: <strong>{materiel.quantite}</strong>
            </span>
          </div>
          {materiel.description && (
            <p className="materiel-description">{materiel.description}</p>
          )}
        </div>
      </div>
      <div className="card-footer">
        <Link
          to={`/materiels/${materiel._id}`}
          className="btn btn-primary"
          title="Посмотреть детали и заметки"
        >
          <StickyNote size={16} />
          Посмотреть заметки
        </Link>
      </div>
    </div>
  );
};

export default MaterielCard;
