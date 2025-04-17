import API from './api';

// Récupérer tous les matériels
export const getMateriels = async () => {
    return API.get('/materiels');
};

// Récupérer les matériels d'un bureau spécifique
export const getMaterielsByBureau = async (bureauId) => {
    return API.get(`/materiels/bureau/${bureauId}`);
};

// Récupérer un matériel par son ID
export const getMaterielById = async (id) => {
    return API.get(`/materiels/${id}`);
};

// Créer un nouveau matériel
export const createMateriel = async (materielData) => {
    return API.post('/materiels', materielData);
};

// Mettre à jour un matériel
export const updateMateriel = async (id, materielData) => {
    return API.put(`/materiels/${id}`, materielData);
};

// Supprimer un matériel
export const deleteMateriel = async (id) => {
    return API.delete(`/materiels/${id}`);
};