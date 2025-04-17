// import React, { useState, useEffect } from "react";
// import { X } from "lucide-react";
// import { createNote, updateNote } from "../../services/noteService";

// const NoteModal = ({ note, materielId, onClose, onSuccess }) => {
//   const [formData, setFormData] = useState({
//     titre: "",
//     description: "",
//     materiel: materielId,
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (note) {
//       setFormData({
//         titre: note.titre || "",
//         description: note.description || "",
//         materiel: note.materiel || materielId,
//       });
//     }
//   }, [note, materielId]);

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
//       if (note) {
//         await updateNote(note._id, formData);
//       } else {
//         await createNote(formData);
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
//             {note ? "Modifier la note" : "Ajouter une note"}
//           </h2>
//           <button className="modal-close" onClick={onClose}>
//             <X size={24} />
//           </button>
//         </div>
//         <div className="modal-body">
//           {error && <div className="alert alert-danger">{error}</div>}
//           <form onSubmit={handleSubmit}>
//             <div className="form-group">
//               <label htmlFor="titre" className="form-label">
//                 Titre *
//               </label>
//               <input
//                 type="text"
//                 id="titre"
//                 name="titre"
//                 value={formData.titre}
//                 onChange={handleChange}
//                 className="form-control"
//                 required
//                 placeholder="Ex: Maintenance périodique"
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="description" className="form-label">
//                 Description *
//               </label>
//               <textarea
//                 id="description"
//                 name="description"
//                 value={formData.description}
//                 onChange={handleChange}
//                 className="form-control"
//                 rows="5"
//                 required
//                 placeholder="Contenu de la note..."
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
//                   : note
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

// export default NoteModal;

import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { createNote, updateNote } from "../../services/noteService";

const NoteModal = ({ note, materielId, onClose, onSuccess }) => {
  const [formData, setFormData] = useState({
    titre: "",
    description: "",
    materiel: materielId,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (note) {
      setFormData({
        titre: note.titre || "",
        description: note.description || "",
        materiel: note.materiel || materielId,
      });
    }
  }, [note, materielId]);

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
      if (note) {
        await updateNote(note._id, formData);
      } else {
        await createNote(formData);
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
            {note ? "Изменить заметку" : "Добавить заметку"}
          </h2>
          <button className="modal-close" onClick={onClose}>
            <X size={24} />
          </button>
        </div>
        <div className="modal-body">
          {error && <div className="alert alert-danger">{error}</div>}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="titre" className="form-label">
                Заголовок *
              </label>
              <input
                type="text"
                id="titre"
                name="titre"
                value={formData.titre}
                onChange={handleChange}
                className="form-control"
                required
                placeholder="Пример: Периодическое обслуживание"
              />
            </div>
            <div className="form-group">
              <label htmlFor="description" className="form-label">
                Описание *
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="form-control"
                rows="5"
                required
                placeholder="Содержание заметки..."
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
                  : note
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

export default NoteModal;
