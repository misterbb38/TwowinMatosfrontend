// import React, { useState, useEffect } from "react";
// import { X } from "lucide-react";
// import { createMateriel, updateMateriel } from "../../services/materielService";

// const MaterielModal = ({ materiel, bureauId, onClose, onSuccess }) => {
//   const [formData, setFormData] = useState({
//     nom: "",
//     quantite: 1,
//     description: "",
//     bureau: bureauId,
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (materiel) {
//       setFormData({
//         nom: materiel.nom || "",
//         quantite: materiel.quantite || 1,
//         description: materiel.description || "",
//         bureau: materiel.bureau || bureauId,
//       });
//     }
//   }, [materiel, bureauId]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     // Pour le champ quantité, convertir en nombre
//     if (name === "quantite") {
//       setFormData((prev) => ({
//         ...prev,
//         [name]: parseInt(value, 10) || 0,
//       }));
//     } else {
//       setFormData((prev) => ({
//         ...prev,
//         [name]: value,
//       }));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);

//     try {
//       if (materiel) {
//         await updateMateriel(materiel._id, formData);
//       } else {
//         await createMateriel(formData);
//       }

//       onSuccess();
//       onClose();
//     } catch (error) {
//       setError(error.message || "Une erreur est survenue");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="modal-overlay">
//       <div className="modal-content">
//         <div className="modal-header">
//           <h2 className="modal-title">
//             {materiel ? "Modifier le matériel" : "Ajouter un matériel"}
//           </h2>
//           <button className="modal-close" onClick={onClose}>
//             <X size={24} />
//           </button>
//         </div>
//         <div className="modal-body">
//           {error && <div className="alert alert-danger">{error}</div>}
//           <form onSubmit={handleSubmit}>
//             <div className="form-group">
//               <label htmlFor="nom" className="form-label">
//                 Nom du matériel *
//               </label>
//               <input
//                 type="text"
//                 id="nom"
//                 name="nom"
//                 value={formData.nom}
//                 onChange={handleChange}
//                 className="form-control"
//                 required
//                 placeholder="Ex: Ordinateur portable"
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="quantite" className="form-label">
//                 Quantité *
//               </label>
//               <input
//                 type="number"
//                 id="quantite"
//                 name="quantite"
//                 value={formData.quantite}
//                 onChange={handleChange}
//                 className="form-control"
//                 required
//                 min="0"
//                 placeholder="Quantité"
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="description" className="form-label">
//                 Description
//               </label>
//               <textarea
//                 id="description"
//                 name="description"
//                 value={formData.description}
//                 onChange={handleChange}
//                 className="form-control"
//                 rows="3"
//                 placeholder="Description du matériel (optionnel)"
//               ></textarea>
//             </div>
//             <div className="modal-footer">
//               <button
//                 type="button"
//                 className="btn btn-outline"
//                 onClick={onClose}
//                 disabled={loading}
//               >
//                 Annuler
//               </button>
//               <button
//                 type="submit"
//                 className="btn btn-primary"
//                 disabled={loading}
//               >
//                 {loading
//                   ? "Enregistrement..."
//                   : materiel
//                   ? "Enregistrer les modifications"
//                   : "Ajouter"}
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MaterielModal;

import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { createMateriel, updateMateriel } from "../../services/materielService";

const MaterielModal = ({ materiel, bureauId, onClose, onSuccess }) => {
  const [formData, setFormData] = useState({
    nom: "",
    quantite: 1,
    description: "",
    bureau: bureauId,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (materiel) {
      setFormData({
        nom: materiel.nom || "",
        quantite: materiel.quantite || 1,
        description: materiel.description || "",
        bureau: materiel.bureau || bureauId,
      });
    }
  }, [materiel, bureauId]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Для поля количества, преобразуем в число
    if (name === "quantite") {
      setFormData((prev) => ({
        ...prev,
        [name]: parseInt(value, 10) || 0,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (materiel) {
        await updateMateriel(materiel._id, formData);
      } else {
        await createMateriel(formData);
      }

      onSuccess();
      onClose();
    } catch (error) {
      setError(error.message || "Произошла ошибка");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="modal-title">
            {materiel ? "Изменить оборудование" : "Добавить оборудование"}
          </h2>
          <button className="modal-close" onClick={onClose}>
            <X size={24} />
          </button>
        </div>
        <div className="modal-body">
          {error && <div className="alert alert-danger">{error}</div>}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nom" className="form-label">
                Название оборудования *
              </label>
              <input
                type="text"
                id="nom"
                name="nom"
                value={formData.nom}
                onChange={handleChange}
                className="form-control"
                required
                placeholder="Пример: Ноутбук"
              />
            </div>
            <div className="form-group">
              <label htmlFor="quantite" className="form-label">
                Количество *
              </label>
              <input
                type="number"
                id="quantite"
                name="quantite"
                value={formData.quantite}
                onChange={handleChange}
                className="form-control"
                required
                min="0"
                placeholder="Количество"
              />
            </div>
            <div className="form-group">
              <label htmlFor="description" className="form-label">
                Описание
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="form-control"
                rows="3"
                placeholder="Описание оборудования (необязательно)"
              ></textarea>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-outline"
                onClick={onClose}
                disabled={loading}
              >
                Отмена
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={loading}
              >
                {loading
                  ? "Сохранение..."
                  : materiel
                  ? "Сохранить изменения"
                  : "Добавить"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MaterielModal;
