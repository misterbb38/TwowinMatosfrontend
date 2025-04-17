import API from './api';

// Récupérer toutes les notes
export const getNotes = async () => {
    return API.get('/notes');
};

// Récupérer les notes d'un matériel spécifique
export const getNotesByMateriel = async (materielId) => {
    return API.get(`/notes/materiel/${materielId}`);
};

// Récupérer une note par son ID
export const getNoteById = async (id) => {
    return API.get(`/notes/${id}`);
};

// Créer une nouvelle note
export const createNote = async (noteData) => {
    return API.post('/notes', noteData);
};

// Mettre à jour une note
export const updateNote = async (id, noteData) => {
    return API.put(`/notes/${id}`, noteData);
};

// Supprimer une note
export const deleteNote = async (id) => {
    return API.delete(`/notes/${id}`);
};