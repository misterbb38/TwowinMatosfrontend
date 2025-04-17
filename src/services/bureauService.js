import API from './api';

// Récupérer tous les bureaux
export const getBureaux = async () => {
    return API.get('/bureaux');
};

// Récupérer un bureau par son ID
export const getBureauById = async (id) => {
    return API.get(`/bureaux/${id}`);
};

// Créer un nouveau bureau
export const createBureau = async (bureauData) => {
    return API.post('/bureaux', bureauData);
};

// Mettre à jour un bureau
export const updateBureau = async (id, bureauData) => {
    return API.put(`/bureaux/${id}`, bureauData);
};

// Supprimer un bureau
export const deleteBureau = async (id) => {
    return API.delete(`/bureaux/${id}`);
};