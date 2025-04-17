// import React, { useState, useEffect } from "react";
// import { X } from "lucide-react";
// import { createBureau, updateBureau } from "../../services/bureauService";

// const BureauModal = ({ bureau, onClose, onSuccess }) => {
//   const [formData, setFormData] = useState({
//     nom: "",
//     localisation: "",
//     description: "",
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (bureau) {
//       setFormData({
//         nom: bureau.nom || "",
//         localisation: bureau.localisation || "",
//         description: bureau.description || "",
//       });
//     }
//   }, [bureau]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);

//     try {
//       if (bureau) {
//         await updateBureau(bureau._id, formData);
//       } else {
//         await createBureau(formData);
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
//             {bureau ? "Modifier le bureau" : "Ajouter un bureau"}
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
//                 Nom du bureau *
//               </label>
//               <input
//                 type="text"
//                 id="nom"
//                 name="nom"
//                 value={formData.nom}
//                 onChange={handleChange}
//                 className="form-control"
//                 required
//                 placeholder="Ex: Bureau de direction"
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="localisation" className="form-label">
//                 Localisation *
//               </label>
//               <input
//                 type="text"
//                 id="localisation"
//                 name="localisation"
//                 value={formData.localisation}
//                 onChange={handleChange}
//                 className="form-control"
//                 required
//                 placeholder="Ex: Bâtiment A, 3ème étage"
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
//                 placeholder="Description du bureau (optionnel)"
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
//                   : bureau
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

// export default BureauModal;

import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { createBureau, updateBureau } from "../../services/bureauService";

const BureauModal = ({ bureau, onClose, onSuccess }) => {
  const [formData, setFormData] = useState({
    nom: "",
    localisation: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (bureau) {
      setFormData({
        nom: bureau.nom || "",
        localisation: bureau.localisation || "",
        description: bureau.description || "",
      });
    }
  }, [bureau]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (bureau) {
        await updateBureau(bureau._id, formData);
      } else {
        await createBureau(formData);
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
            {bureau ? "Изменить офис" : "Добавить офис"}
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
                Название офиса *
              </label>
              <input
                type="text"
                id="nom"
                name="nom"
                value={formData.nom}
                onChange={handleChange}
                className="form-control"
                required
                placeholder="Пример: Кабинет директора"
              />
            </div>
            <div className="form-group">
              <label htmlFor="localisation" className="form-label">
                Местоположение *
              </label>
              <input
                type="text"
                id="localisation"
                name="localisation"
                value={formData.localisation}
                onChange={handleChange}
                className="form-control"
                required
                placeholder="Пример: Здание А, 3-й этаж"
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
                placeholder="Описание офиса (необязательно)"
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
                  : bureau
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

export default BureauModal;
