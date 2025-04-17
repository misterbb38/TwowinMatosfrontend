// import React, { useState, useEffect } from "react";
// import { PlusCircle, Monitor, Search, AlertCircle } from "lucide-react";
// import MaterielCard from "./MaterielCard";
// import MaterielModal from "./MaterielModal";
// import ConfirmModal from "../UI/ConfirmModal";
// import Spinner from "../UI/Spinner";
// import {
//   getMaterielsByBureau,
//   deleteMateriel,
// } from "../../services/materielService";

// const MaterielList = ({ bureauId, bureauNom }) => {
//   const [materiels, setMateriels] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [showAddModal, setShowAddModal] = useState(false);
//   const [showEditModal, setShowEditModal] = useState(false);
//   const [showDeleteModal, setShowDeleteModal] = useState(false);
//   const [currentMateriel, setCurrentMateriel] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [deleteLoading, setDeleteLoading] = useState(false);

//   const fetchMateriels = async () => {
//     setLoading(true);
//     try {
//       const data = await getMaterielsByBureau(bureauId);
//       setMateriels(data);
//       setError(null);
//     } catch (error) {
//       setError("Erreur lors du chargement des matériels");
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (bureauId) {
//       fetchMateriels();
//     }
//   }, [bureauId]);

//   // Filtrer les matériels en fonction du terme de recherche
//   const filteredMateriels = materiels.filter(
//     (materiel) =>
//       materiel.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       (materiel.description &&
//         materiel.description.toLowerCase().includes(searchTerm.toLowerCase()))
//   );

//   const handleEdit = (materiel) => {
//     setCurrentMateriel(materiel);
//     setShowEditModal(true);
//   };

//   const handleDelete = (materielId) => {
//     const materiel = materiels.find((m) => m._id === materielId);
//     setCurrentMateriel(materiel);
//     setShowDeleteModal(true);
//   };

//   const confirmDelete = async () => {
//     setDeleteLoading(true);
//     try {
//       await deleteMateriel(currentMateriel._id);
//       await fetchMateriels();
//       setShowDeleteModal(false);
//     } catch (error) {
//       console.error("Erreur lors de la suppression du matériel", error);
//     } finally {
//       setDeleteLoading(false);
//     }
//   };

//   if (!bureauId) {
//     return (
//       <div className="alert alert-warning">
//         <AlertCircle size={20} className="icon" />
//         Veuillez sélectionner un bureau pour voir ses matériels.
//       </div>
//     );
//   }

//   return (
//     <>
//       <div className="materiel-list-header">
//         <div className="search-box">
//           <Search size={18} className="search-icon" />
//           <input
//             type="text"
//             placeholder="Rechercher un matériel..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="form-control"
//           />
//         </div>
//         <button
//           className="btn btn-primary"
//           onClick={() => setShowAddModal(true)}
//         >
//           <PlusCircle size={18} />
//           Ajouter un matériel
//         </button>
//       </div>

//       {loading ? (
//         <Spinner />
//       ) : error ? (
//         <div className="alert alert-danger">{error}</div>
//       ) : filteredMateriels.length === 0 ? (
//         <div className="empty-state">
//           <Monitor size={48} className="empty-state-icon" />
//           <p className="empty-state-text">
//             {searchTerm
//               ? "Aucun matériel ne correspond à votre recherche."
//               : `Aucun matériel n'a été ajouté au bureau "${bureauNom}". Commencez par en ajouter un!`}
//           </p>
//           <button
//             className="btn btn-primary"
//             onClick={() => setShowAddModal(true)}
//           >
//             <PlusCircle size={18} />
//             Ajouter un matériel
//           </button>
//         </div>
//       ) : (
//         <div className="card-grid">
//           {filteredMateriels.map((materiel) => (
//             <MaterielCard
//               key={materiel._id}
//               materiel={materiel}
//               onEdit={handleEdit}
//               onDelete={handleDelete}
//             />
//           ))}
//         </div>
//       )}

//       {/* Modal pour ajouter un matériel */}
//       {showAddModal && (
//         <MaterielModal
//           bureauId={bureauId}
//           onClose={() => setShowAddModal(false)}
//           onSuccess={fetchMateriels}
//         />
//       )}

//       {/* Modal pour éditer un matériel */}
//       {showEditModal && (
//         <MaterielModal
//           materiel={currentMateriel}
//           bureauId={bureauId}
//           onClose={() => setShowEditModal(false)}
//           onSuccess={fetchMateriels}
//         />
//       )}

//       {/* Modal de confirmation de suppression */}
//       {showDeleteModal && (
//         <ConfirmModal
//           title="Confirmer la suppression"
//           message={`Êtes-vous sûr de vouloir supprimer le matériel "${currentMateriel.nom}" ? Cette action est irréversible et supprimera aussi toutes les notes associées.`}
//           confirmText="Supprimer"
//           cancelText="Annuler"
//           isLoading={deleteLoading}
//           onConfirm={confirmDelete}
//           onCancel={() => setShowDeleteModal(false)}
//         />
//       )}
//     </>
//   );
// };

// export default MaterielList;

import React, { useState, useEffect } from "react";
import { PlusCircle, Monitor, Search, AlertCircle } from "lucide-react";
import MaterielCard from "./MaterielCard";
import MaterielModal from "./MaterielModal";
import ConfirmModal from "../UI/ConfirmModal";
import Spinner from "../UI/Spinner";
import {
  getMaterielsByBureau,
  deleteMateriel,
} from "../../services/materielService";

const MaterielList = ({ bureauId, bureauNom }) => {
  const [materiels, setMateriels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [currentMateriel, setCurrentMateriel] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [deleteLoading, setDeleteLoading] = useState(false);

  const fetchMateriels = async () => {
    setLoading(true);
    try {
      const data = await getMaterielsByBureau(bureauId);
      setMateriels(data);
      setError(null);
    } catch (error) {
      setError("Ошибка при загрузке оборудования");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (bureauId) {
      fetchMateriels();
    }
  }, [bureauId]);

  // Фильтрация оборудования по поисковому запросу
  const filteredMateriels = materiels.filter(
    (materiel) =>
      materiel.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (materiel.description &&
        materiel.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleEdit = (materiel) => {
    setCurrentMateriel(materiel);
    setShowEditModal(true);
  };

  const handleDelete = (materielId) => {
    const materiel = materiels.find((m) => m._id === materielId);
    setCurrentMateriel(materiel);
    setShowDeleteModal(true);
  };

  const confirmDelete = async () => {
    setDeleteLoading(true);
    try {
      await deleteMateriel(currentMateriel._id);
      await fetchMateriels();
      setShowDeleteModal(false);
    } catch (error) {
      console.error("Ошибка при удалении оборудования", error);
    } finally {
      setDeleteLoading(false);
    }
  };

  if (!bureauId) {
    return (
      <div className="alert alert-warning">
        <AlertCircle size={20} className="icon" />
        Выберите офис, чтобы увидеть его оборудование.
      </div>
    );
  }

  return (
    <>
      <div className="materiel-list-header">
        <div className="search-box">
          <Search size={18} className="search-icon" />
          <input
            type="text"
            placeholder="Поиск оборудования..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="form-control"
          />
        </div>
        <button
          className="btn btn-primary"
          onClick={() => setShowAddModal(true)}
        >
          <PlusCircle size={18} />
          Добавить оборудование
        </button>
      </div>

      {loading ? (
        <Spinner />
      ) : error ? (
        <div className="alert alert-danger">{error}</div>
      ) : filteredMateriels.length === 0 ? (
        <div className="empty-state">
          <Monitor size={48} className="empty-state-icon" />
          <p className="empty-state-text">
            {searchTerm
              ? "Оборудование по вашему запросу не найдено."
              : `В офисе "${bureauNom}" еще нет оборудования. Начните с добавления нового!`}
          </p>
          <button
            className="btn btn-primary"
            onClick={() => setShowAddModal(true)}
          >
            <PlusCircle size={18} />
            Добавить оборудование
          </button>
        </div>
      ) : (
        <div className="card-grid">
          {filteredMateriels.map((materiel) => (
            <MaterielCard
              key={materiel._id}
              materiel={materiel}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}

      {/* Модальное окно для добавления оборудования */}
      {showAddModal && (
        <MaterielModal
          bureauId={bureauId}
          onClose={() => setShowAddModal(false)}
          onSuccess={fetchMateriels}
        />
      )}

      {/* Модальное окно для редактирования оборудования */}
      {showEditModal && (
        <MaterielModal
          materiel={currentMateriel}
          bureauId={bureauId}
          onClose={() => setShowEditModal(false)}
          onSuccess={fetchMateriels}
        />
      )}

      {/* Модальное окно подтверждения удаления */}
      {showDeleteModal && (
        <ConfirmModal
          title="Подтвердить удаление"
          message={`Вы уверены, что хотите удалить оборудование "${currentMateriel.nom}"? Это действие необратимо и также удалит все связанные заметки.`}
          confirmText="Удалить"
          cancelText="Отмена"
          isLoading={deleteLoading}
          onConfirm={confirmDelete}
          onCancel={() => setShowDeleteModal(false)}
        />
      )}
    </>
  );
};

export default MaterielList;
