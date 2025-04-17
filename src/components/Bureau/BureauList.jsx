// import React, { useState } from "react";
// import { PlusCircle, Building2, Search } from "lucide-react";
// import BureauCard from "./BureauCard";
// import BureauModal from "./BureauModal";
// import ConfirmModal from "../UI/ConfirmModal";
// import Spinner from "../UI/Spinner";
// import { useAppContext } from "../../context/AppContext";
// import { deleteBureau } from "../../services/bureauService";

// const BureauList = () => {
//   const { bureaux, loading, error, refreshBureaux } = useAppContext();
//   const [showAddModal, setShowAddModal] = useState(false);
//   const [showEditModal, setShowEditModal] = useState(false);
//   const [showDeleteModal, setShowDeleteModal] = useState(false);
//   const [currentBureau, setCurrentBureau] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [deleteLoading, setDeleteLoading] = useState(false);

//   // Filtrer les bureaux en fonction du terme de recherche
//   const filteredBureaux = bureaux.filter(
//     (bureau) =>
//       bureau.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       bureau.localisation.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const handleEdit = (bureau) => {
//     setCurrentBureau(bureau);
//     setShowEditModal(true);
//   };

//   const handleDelete = (bureauId) => {
//     const bureau = bureaux.find((b) => b._id === bureauId);
//     setCurrentBureau(bureau);
//     setShowDeleteModal(true);
//   };

//   const confirmDelete = async () => {
//     setDeleteLoading(true);
//     try {
//       await deleteBureau(currentBureau._id);
//       await refreshBureaux();
//       setShowDeleteModal(false);
//     } catch (error) {
//       console.error("Erreur lors de la suppression du bureau", error);
//     } finally {
//       setDeleteLoading(false);
//     }
//   };

//   return (
//     <>
//       <div className="bureau-list-header">
//         <div className="search-box">
//           <Search size={18} className="search-icon" />
//           <input
//             type="text"
//             placeholder="Rechercher un bureau..."
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
//           Ajouter un bureau
//         </button>
//       </div>

//       {loading ? (
//         <Spinner />
//       ) : error ? (
//         <div className="alert alert-danger">{error}</div>
//       ) : filteredBureaux.length === 0 ? (
//         <div className="empty-state">
//           <Building2 size={48} className="empty-state-icon" />
//           <p className="empty-state-text">
//             {searchTerm
//               ? "Aucun bureau ne correspond à votre recherche."
//               : "Aucun bureau n'a été ajouté. Commencez par en créer un!"}
//           </p>
//           <button
//             className="btn btn-primary"
//             onClick={() => setShowAddModal(true)}
//           >
//             <PlusCircle size={18} />
//             Ajouter un bureau
//           </button>
//         </div>
//       ) : (
//         <div className="card-grid">
//           {filteredBureaux.map((bureau) => (
//             <BureauCard
//               key={bureau._id}
//               bureau={bureau}
//               onEdit={handleEdit}
//               onDelete={handleDelete}
//             />
//           ))}
//         </div>
//       )}

//       {/* Modal pour ajouter un bureau */}
//       {showAddModal && (
//         <BureauModal
//           onClose={() => setShowAddModal(false)}
//           onSuccess={refreshBureaux}
//         />
//       )}

//       {/* Modal pour éditer un bureau */}
//       {showEditModal && (
//         <BureauModal
//           bureau={currentBureau}
//           onClose={() => setShowEditModal(false)}
//           onSuccess={refreshBureaux}
//         />
//       )}

//       {/* Modal de confirmation de suppression */}
//       {showDeleteModal && (
//         <ConfirmModal
//           title="Confirmer la suppression"
//           message={`Êtes-vous sûr de vouloir supprimer le bureau "${currentBureau.nom}" ? Cette action est irréversible et supprimera aussi tous les matériels associés.`}
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

// export default BureauList;

import React, { useState } from "react";
import { PlusCircle, Building2, Search } from "lucide-react";
import BureauCard from "./BureauCard";
import BureauModal from "./BureauModal";
import ConfirmModal from "../UI/ConfirmModal";
import Spinner from "../UI/Spinner";
import { useAppContext } from "../../context/AppContext";
import { deleteBureau } from "../../services/bureauService";

const BureauList = () => {
  const { bureaux, loading, error, refreshBureaux } = useAppContext();
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [currentBureau, setCurrentBureau] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [deleteLoading, setDeleteLoading] = useState(false);

  // Фильтрация офисов по критериям поиска
  const filteredBureaux = bureaux.filter(
    (bureau) =>
      bureau.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
      bureau.localisation.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEdit = (bureau) => {
    setCurrentBureau(bureau);
    setShowEditModal(true);
  };

  const handleDelete = (bureauId) => {
    const bureau = bureaux.find((b) => b._id === bureauId);
    setCurrentBureau(bureau);
    setShowDeleteModal(true);
  };

  const confirmDelete = async () => {
    setDeleteLoading(true);
    try {
      await deleteBureau(currentBureau._id);
      await refreshBureaux();
      setShowDeleteModal(false);
    } catch (error) {
      console.error("Ошибка при удалении офиса", error);
    } finally {
      setDeleteLoading(false);
    }
  };

  return (
    <>
      <div className="bureau-list-header">
        <div className="search-box">
          <Search size={18} className="search-icon" />
          <input
            type="text"
            placeholder="Поиск офиса..."
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
          Добавить офис
        </button>
      </div>

      {loading ? (
        <Spinner />
      ) : error ? (
        <div className="alert alert-danger">{error}</div>
      ) : filteredBureaux.length === 0 ? (
        <div className="empty-state">
          <Building2 size={48} className="empty-state-icon" />
          <p className="empty-state-text">
            {searchTerm
              ? "Ни один офис не соответствует вашему запросу."
              : "Офисы еще не добавлены. Начните с создания нового!"}
          </p>
          <button
            className="btn btn-primary"
            onClick={() => setShowAddModal(true)}
          >
            <PlusCircle size={18} />
            Добавить офис
          </button>
        </div>
      ) : (
        <div className="card-grid">
          {filteredBureaux.map((bureau) => (
            <BureauCard
              key={bureau._id}
              bureau={bureau}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}

      {/* Модальное окно для добавления офиса */}
      {showAddModal && (
        <BureauModal
          onClose={() => setShowAddModal(false)}
          onSuccess={refreshBureaux}
        />
      )}

      {/* Модальное окно для редактирования офиса */}
      {showEditModal && (
        <BureauModal
          bureau={currentBureau}
          onClose={() => setShowEditModal(false)}
          onSuccess={refreshBureaux}
        />
      )}

      {/* Модальное окно подтверждения удаления */}
      {showDeleteModal && (
        <ConfirmModal
          title="Подтвердить удаление"
          message={`Вы уверены, что хотите удалить офис "${currentBureau.nom}"? Это действие необратимо и также удалит всё связанное оборудование.`}
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

export default BureauList;
