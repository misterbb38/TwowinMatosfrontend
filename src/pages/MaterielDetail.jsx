// import React, { useState, useEffect } from "react";
// import { useParams, Link, useNavigate } from "react-router-dom";
// import { ArrowLeft, Monitor, Building2, Cpu, Edit, Trash2 } from "lucide-react";
// import NoteList from "../components/Note/NoteList";
// import MaterielModal from "../components/Materiel/MaterielModal";
// import ConfirmModal from "../components/UI/ConfirmModal";
// import Spinner from "../components/UI/Spinner";
// import Alert from "../components/UI/Alert";
// import { getMaterielById, deleteMateriel } from "../services/materielService";

// const MaterielDetail = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [materiel, setMateriel] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [showEditModal, setShowEditModal] = useState(false);
//   const [showDeleteModal, setShowDeleteModal] = useState(false);
//   const [deleteLoading, setDeleteLoading] = useState(false);

//   const fetchMateriel = async () => {
//     setLoading(true);
//     try {
//       const data = await getMaterielById(id);
//       setMateriel(data);
//       setError(null);
//     } catch (error) {
//       setError("Erreur lors du chargement des détails du matériel");
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchMateriel();
//   }, [id]);

//   const handleDelete = async () => {
//     setDeleteLoading(true);
//     try {
//       await deleteMateriel(id);
//       // Rediriger vers la page du bureau parent
//       if (materiel && materiel.bureau) {
//         navigate(`/bureaux/${materiel.bureau._id}`);
//       } else {
//         navigate("/");
//       }
//     } catch (error) {
//       setError("Erreur lors de la suppression du matériel");
//       console.error(error);
//       setShowDeleteModal(false);
//     } finally {
//       setDeleteLoading(false);
//     }
//   };

//   if (loading) {
//     return <Spinner />;
//   }

//   if (error) {
//     return <Alert type="danger" message={error} />;
//   }

//   if (!materiel) {
//     return <Alert type="warning" message="Matériel non trouvé" />;
//   }

//   return (
//     <div className="materiel-detail-page">
//       {materiel.bureau && (
//         <Link
//           to={`/bureaux/${materiel.bureau._id}`}
//           className="btn btn-outline back-button"
//         >
//           <ArrowLeft size={16} />
//           Retour au bureau
//         </Link>
//       )}

//       <div className="detail-header">
//         <div className="detail-header-info">
//           <h1 className="detail-title">
//             <Monitor size={24} className="icon" />
//             {materiel.nom}
//           </h1>
//           {materiel.bureau && (
//             <p className="detail-subtitle">
//               <Building2 size={16} className="icon" />
//               Bureau: {materiel.bureau.nom}
//             </p>
//           )}
//           <div className="materiel-meta">
//             <p className="materiel-quantity">
//               <Cpu size={16} className="icon" />
//               Quantité: <strong>{materiel.quantite}</strong>
//             </p>
//           </div>
//           {materiel.description && (
//             <p className="detail-description">{materiel.description}</p>
//           )}
//         </div>
//         <div className="detail-actions">
//           <button
//             className="btn btn-outline"
//             onClick={() => setShowEditModal(true)}
//           >
//             <Edit size={16} />
//             Modifier
//           </button>
//           <button
//             className="btn btn-danger"
//             onClick={() => setShowDeleteModal(true)}
//           >
//             <Trash2 size={16} />
//             Supprimer
//           </button>
//         </div>
//       </div>

//       <div className="detail-section">
//         <NoteList materielId={id} materielNom={materiel.nom} />
//       </div>

//       {/* Modal pour éditer le matériel */}
//       {showEditModal && (
//         <MaterielModal
//           materiel={materiel}
//           bureauId={materiel.bureau?._id}
//           onClose={() => setShowEditModal(false)}
//           onSuccess={fetchMateriel}
//         />
//       )}

//       {/* Modal de confirmation de suppression */}
//       {showDeleteModal && (
//         <ConfirmModal
//           title="Confirmer la suppression"
//           message={`Êtes-vous sûr de vouloir supprimer le matériel "${materiel.nom}" ? Cette action est irréversible et supprimera également toutes les notes associées.`}
//           confirmText="Supprimer"
//           cancelText="Annuler"
//           isLoading={deleteLoading}
//           onConfirm={handleDelete}
//           onCancel={() => setShowDeleteModal(false)}
//         />
//       )}
//     </div>
//   );
// };

// export default MaterielDetail;

import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Monitor, Building2, Cpu, Edit, Trash2 } from "lucide-react";
import NoteList from "../components/Note/NoteList";
import MaterielModal from "../components/Materiel/MaterielModal";
import ConfirmModal from "../components/UI/ConfirmModal";
import Spinner from "../components/UI/Spinner";
import Alert from "../components/UI/Alert";
import { getMaterielById, deleteMateriel } from "../services/materielService";

const MaterielDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [materiel, setMateriel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const fetchMateriel = async () => {
    setLoading(true);
    try {
      const data = await getMaterielById(id);
      setMateriel(data);
      setError(null);
    } catch (error) {
      setError("Ошибка при загрузке деталей оборудования");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMateriel();
  }, [id]);

  const handleDelete = async () => {
    setDeleteLoading(true);
    try {
      await deleteMateriel(id);
      // Перенаправление на страницу родительского офиса
      if (materiel && materiel.bureau) {
        navigate(`/bureaux/${materiel.bureau._id}`);
      } else {
        navigate("/");
      }
    } catch (error) {
      setError("Ошибка при удалении оборудования");
      console.error(error);
      setShowDeleteModal(false);
    } finally {
      setDeleteLoading(false);
    }
  };

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <Alert type="danger" message={error} />;
  }

  if (!materiel) {
    return <Alert type="warning" message="Оборудование не найдено" />;
  }

  return (
    <div className="materiel-detail-page">
      {materiel.bureau && (
        <Link
          to={`/bureaux/${materiel.bureau._id}`}
          className="btn btn-outline back-button"
        >
          <ArrowLeft size={16} />
          Вернуться в офис
        </Link>
      )}

      <div className="detail-header">
        <div className="detail-header-info">
          <h1 className="detail-title">
            <Monitor size={24} className="icon" />
            {materiel.nom}
          </h1>
          {materiel.bureau && (
            <p className="detail-subtitle">
              <Building2 size={16} className="icon" />
              Офис: {materiel.bureau.nom}
            </p>
          )}
          <div className="materiel-meta">
            <p className="materiel-quantity">
              <Cpu size={16} className="icon" />
              Количество: <strong>{materiel.quantite}</strong>
            </p>
          </div>
          {materiel.description && (
            <p className="detail-description">{materiel.description}</p>
          )}
        </div>
        <div className="detail-actions">
          <button
            className="btn btn-outline"
            onClick={() => setShowEditModal(true)}
          >
            <Edit size={16} />
            Изменить
          </button>
          <button
            className="btn btn-danger"
            onClick={() => setShowDeleteModal(true)}
          >
            <Trash2 size={16} />
            Удалить
          </button>
        </div>
      </div>

      <div className="detail-section">
        <NoteList materielId={id} materielNom={materiel.nom} />
      </div>

      {/* Модальное окно для редактирования оборудования */}
      {showEditModal && (
        <MaterielModal
          materiel={materiel}
          bureauId={materiel.bureau?._id}
          onClose={() => setShowEditModal(false)}
          onSuccess={fetchMateriel}
        />
      )}

      {/* Модальное окно подтверждения удаления */}
      {showDeleteModal && (
        <ConfirmModal
          title="Подтвердить удаление"
          message={`Вы уверены, что хотите удалить оборудование "${materiel.nom}"? Это действие необратимо и также удалит все связанные заметки.`}
          confirmText="Удалить"
          cancelText="Отмена"
          isLoading={deleteLoading}
          onConfirm={handleDelete}
          onCancel={() => setShowDeleteModal(false)}
        />
      )}
    </div>
  );
};

export default MaterielDetail;
