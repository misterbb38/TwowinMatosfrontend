// import React, { useState, useEffect } from "react";
// import { PlusCircle, StickyNote, Clock, Trash2, Edit } from "lucide-react";
// import NoteModal from "./NoteModal";
// import ConfirmModal from "../UI/ConfirmModal";
// import Spinner from "../UI/Spinner";
// import { getNotesByMateriel, deleteNote } from "../../services/noteService";

// const formatDate = (dateString) => {
//   const options = {
//     year: "numeric",
//     month: "long",
//     day: "numeric",
//     hour: "2-digit",
//     minute: "2-digit",
//   };
//   return new Date(dateString).toLocaleDateString("fr-FR", options);
// };

// const NoteList = ({ materielId, materielNom }) => {
//   const [notes, setNotes] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [showAddModal, setShowAddModal] = useState(false);
//   const [showEditModal, setShowEditModal] = useState(false);
//   const [showDeleteModal, setShowDeleteModal] = useState(false);
//   const [currentNote, setCurrentNote] = useState(null);
//   const [deleteLoading, setDeleteLoading] = useState(false);

//   const fetchNotes = async () => {
//     setLoading(true);
//     try {
//       const data = await getNotesByMateriel(materielId);
//       setNotes(data);
//       setError(null);
//     } catch (error) {
//       setError("Erreur lors du chargement des notes");
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (materielId) {
//       fetchNotes();
//     }
//   }, [materielId]);

//   const handleEdit = (note) => {
//     setCurrentNote(note);
//     setShowEditModal(true);
//   };

//   const handleDelete = (noteId) => {
//     const note = notes.find((n) => n._id === noteId);
//     setCurrentNote(note);
//     setShowDeleteModal(true);
//   };

//   const confirmDelete = async () => {
//     setDeleteLoading(true);
//     try {
//       await deleteNote(currentNote._id);
//       await fetchNotes();
//       setShowDeleteModal(false);
//     } catch (error) {
//       console.error("Erreur lors de la suppression de la note", error);
//     } finally {
//       setDeleteLoading(false);
//     }
//   };

//   return (
//     <>
//       <div className="notes-header">
//         <h3 className="section-title">
//           <StickyNote size={20} className="icon" />
//           Notes pour {materielNom}
//         </h3>
//         <button
//           className="btn btn-primary"
//           onClick={() => setShowAddModal(true)}
//         >
//           <PlusCircle size={18} />
//           Ajouter une note
//         </button>
//       </div>

//       {loading ? (
//         <Spinner />
//       ) : error ? (
//         <div className="alert alert-danger">{error}</div>
//       ) : notes.length === 0 ? (
//         <div className="empty-state">
//           <StickyNote size={48} className="empty-state-icon" />
//           <p className="empty-state-text">
//             Aucune note n'a été ajoutée pour ce matériel. Commencez par en
//             ajouter une!
//           </p>
//           <button
//             className="btn btn-primary"
//             onClick={() => setShowAddModal(true)}
//           >
//             <PlusCircle size={18} />
//             Ajouter une note
//           </button>
//         </div>
//       ) : (
//         <div className="notes-list">
//           {notes.map((note) => (
//             <div key={note._id} className="note-card">
//               <div className="note-header">
//                 <h4 className="note-title">{note.titre}</h4>
//                 <div className="note-actions">
//                   <button
//                     className="btn btn-icon btn-outline"
//                     onClick={() => handleEdit(note)}
//                     title="Modifier cette note"
//                   >
//                     <Edit size={16} />
//                   </button>
//                   <button
//                     className="btn btn-icon btn-outline"
//                     onClick={() => handleDelete(note._id)}
//                     title="Supprimer cette note"
//                   >
//                     <Trash2 size={16} />
//                   </button>
//                 </div>
//               </div>
//               <div className="note-content">
//                 <p>{note.description}</p>
//               </div>
//               <div className="note-footer">
//                 <div className="note-date">
//                   <Clock size={14} className="icon" />
//                   <span>{formatDate(note.createdAt)}</span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Modal pour ajouter une note */}
//       {showAddModal && (
//         <NoteModal
//           materielId={materielId}
//           onClose={() => setShowAddModal(false)}
//           onSuccess={fetchNotes}
//         />
//       )}

//       {/* Modal pour éditer une note */}
//       {showEditModal && (
//         <NoteModal
//           note={currentNote}
//           materielId={materielId}
//           onClose={() => setShowEditModal(false)}
//           onSuccess={fetchNotes}
//         />
//       )}

//       {/* Modal de confirmation de suppression */}
//       {showDeleteModal && (
//         <ConfirmModal
//           title="Confirmer la suppression"
//           message={`Êtes-vous sûr de vouloir supprimer la note "${currentNote.titre}" ? Cette action est irréversible.`}
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

// export default NoteList;

import React, { useState, useEffect } from "react";
import { PlusCircle, StickyNote, Clock, Trash2, Edit } from "lucide-react";
import NoteModal from "./NoteModal";
import ConfirmModal from "../UI/ConfirmModal";
import Spinner from "../UI/Spinner";
import { getNotesByMateriel, deleteNote } from "../../services/noteService";

const formatDate = (dateString) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };
  return new Date(dateString).toLocaleDateString("ru-RU", options);
};

const NoteList = ({ materielId, materielNom }) => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [currentNote, setCurrentNote] = useState(null);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const fetchNotes = async () => {
    setLoading(true);
    try {
      const data = await getNotesByMateriel(materielId);
      setNotes(data);
      setError(null);
    } catch (error) {
      setError("Ошибка при загрузке заметок");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (materielId) {
      fetchNotes();
    }
  }, [materielId]);

  const handleEdit = (note) => {
    setCurrentNote(note);
    setShowEditModal(true);
  };

  const handleDelete = (noteId) => {
    const note = notes.find((n) => n._id === noteId);
    setCurrentNote(note);
    setShowDeleteModal(true);
  };

  const confirmDelete = async () => {
    setDeleteLoading(true);
    try {
      await deleteNote(currentNote._id);
      await fetchNotes();
      setShowDeleteModal(false);
    } catch (error) {
      console.error("Ошибка при удалении заметки", error);
    } finally {
      setDeleteLoading(false);
    }
  };

  return (
    <>
      <div className="notes-header">
        <h3 className="section-title">
          <StickyNote size={20} className="icon" />
          Заметки для {materielNom}
        </h3>
        <button
          className="btn btn-primary"
          onClick={() => setShowAddModal(true)}
        >
          <PlusCircle size={18} />
          Добавить заметку
        </button>
      </div>

      {loading ? (
        <Spinner />
      ) : error ? (
        <div className="alert alert-danger">{error}</div>
      ) : notes.length === 0 ? (
        <div className="empty-state">
          <StickyNote size={48} className="empty-state-icon" />
          <p className="empty-state-text">
            Для этого оборудования еще нет заметок. Начните с добавления новой!
          </p>
          <button
            className="btn btn-primary"
            onClick={() => setShowAddModal(true)}
          >
            <PlusCircle size={18} />
            Добавить заметку
          </button>
        </div>
      ) : (
        <div className="notes-list">
          {notes.map((note) => (
            <div key={note._id} className="note-card">
              <div className="note-header">
                <h4 className="note-title">{note.titre}</h4>
                <div className="note-actions">
                  <button
                    className="btn btn-icon btn-outline"
                    onClick={() => handleEdit(note)}
                    title="Изменить эту заметку"
                  >
                    <Edit size={16} />
                  </button>
                  <button
                    className="btn btn-icon btn-outline"
                    onClick={() => handleDelete(note._id)}
                    title="Удалить эту заметку"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
              <div className="note-content">
                <p>{note.description}</p>
              </div>
              <div className="note-footer">
                <div className="note-date">
                  <Clock size={14} className="icon" />
                  <span>{formatDate(note.createdAt)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Модальное окно для добавления заметки */}
      {showAddModal && (
        <NoteModal
          materielId={materielId}
          onClose={() => setShowAddModal(false)}
          onSuccess={fetchNotes}
        />
      )}

      {/* Модальное окно для редактирования заметки */}
      {showEditModal && (
        <NoteModal
          note={currentNote}
          materielId={materielId}
          onClose={() => setShowEditModal(false)}
          onSuccess={fetchNotes}
        />
      )}

      {/* Модальное окно подтверждения удаления */}
      {showDeleteModal && (
        <ConfirmModal
          title="Подтвердить удаление"
          message={`Вы уверены, что хотите удалить заметку "${currentNote.titre}"? Это действие необратимо.`}
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

export default NoteList;
