// import React, { useState, useEffect } from "react";
// import { useParams, Link, useNavigate } from "react-router-dom";
// import { ArrowLeft, Building2, MapPin, Edit, Trash2 } from "lucide-react";
// import MaterielList from "../components/Materiel/MaterielList";
// import BureauModal from "../components/Bureau/BureauModal";
// import ConfirmModal from "../components/UI/ConfirmModal";
// import Spinner from "../components/UI/Spinner";
// import Alert from "../components/UI/Alert";
// import { getBureauById, deleteBureau } from "../services/bureauService";

// const BureauDetail = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [bureau, setBureau] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [showEditModal, setShowEditModal] = useState(false);
//   const [showDeleteModal, setShowDeleteModal] = useState(false);
//   const [deleteLoading, setDeleteLoading] = useState(false);

//   const fetchBureau = async () => {
//     setLoading(true);
//     try {
//       const data = await getBureauById(id);
//       setBureau(data);
//       setError(null);
//     } catch (error) {
//       setError("Erreur lors du chargement des détails du bureau");
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchBureau();
//   }, [id]);

//   const handleDelete = async () => {
//     setDeleteLoading(true);
//     try {
//       await deleteBureau(id);
//       navigate("/");
//     } catch (error) {
//       setError("Erreur lors de la suppression du bureau");
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

//   if (!bureau) {
//     return <Alert type="warning" message="Bureau non trouvé" />;
//   }

//   return (
//     <div className="bureau-detail-page">
//       <Link to="/" className="btn btn-outline back-button">
//         <ArrowLeft size={16} />
//         Retour aux bureaux
//       </Link>

//       <div className="detail-header">
//         <div className="detail-header-info">
//           <h1 className="detail-title">
//             <Building2 size={24} className="icon" />
//             {bureau.nom}
//           </h1>
//           <p className="detail-subtitle">
//             <MapPin size={16} className="icon" />
//             {bureau.localisation}
//           </p>
//           {bureau.description && (
//             <p className="detail-description">{bureau.description}</p>
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
//         <h2 className="detail-section-title">Matériels dans ce bureau</h2>
//         <MaterielList bureauId={id} bureauNom={bureau.nom} />
//       </div>

//       {/* Modal pour éditer le bureau */}
//       {showEditModal && (
//         <BureauModal
//           bureau={bureau}
//           onClose={() => setShowEditModal(false)}
//           onSuccess={fetchBureau}
//         />
//       )}

//       {/* Modal de confirmation de suppression */}
//       {showDeleteModal && (
//         <ConfirmModal
//           title="Confirmer la suppression"
//           message={`Êtes-vous sûr de vouloir supprimer le bureau "${bureau.nom}" ? Cette action est irréversible et supprimera également tous les matériels associés.`}
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

// export default BureauDetail;

import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Building2, MapPin, Edit, Trash2 } from "lucide-react";
import MaterielList from "../components/Materiel/MaterielList";
import BureauModal from "../components/Bureau/BureauModal";
import ConfirmModal from "../components/UI/ConfirmModal";
import Spinner from "../components/UI/Spinner";
import Alert from "../components/UI/Alert";
import { getBureauById, deleteBureau } from "../services/bureauService";

const BureauDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [bureau, setBureau] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const fetchBureau = async () => {
    setLoading(true);
    try {
      const data = await getBureauById(id);
      setBureau(data);
      setError(null);
    } catch (error) {
      setError("Ошибка при загрузке деталей офиса");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBureau();
  }, [id]);

  const handleDelete = async () => {
    setDeleteLoading(true);
    try {
      await deleteBureau(id);
      navigate("/");
    } catch (error) {
      setError("Ошибка при удалении офиса");
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

  if (!bureau) {
    return <Alert type="warning" message="Офис не найден" />;
  }

  return (
    <div className="bureau-detail-page">
      <Link to="/" className="btn btn-outline back-button">
        <ArrowLeft size={16} />
        Назад к офисам
      </Link>

      <div className="detail-header">
        <div className="detail-header-info">
          <h1 className="detail-title">
            <Building2 size={24} className="icon" />
            {bureau.nom}
          </h1>
          <p className="detail-subtitle">
            <MapPin size={16} className="icon" />
            {bureau.localisation}
          </p>
          {bureau.description && (
            <p className="detail-description">{bureau.description}</p>
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
        <h2 className="detail-section-title">Оборудование в этом офисе</h2>
        <MaterielList bureauId={id} bureauNom={bureau.nom} />
      </div>

      {/* Модальное окно для редактирования офиса */}
      {showEditModal && (
        <BureauModal
          bureau={bureau}
          onClose={() => setShowEditModal(false)}
          onSuccess={fetchBureau}
        />
      )}

      {/* Модальное окно подтверждения удаления */}
      {showDeleteModal && (
        <ConfirmModal
          title="Подтвердить удаление"
          message={`Вы уверены, что хотите удалить офис "${bureau.nom}"? Это действие необратимо и также удалит всё связанное оборудование.`}
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

export default BureauDetail;
