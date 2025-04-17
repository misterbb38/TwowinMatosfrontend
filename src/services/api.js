import axios from "axios";

// Créer une instance axios avec la base URL de notre API
const API = axios.create({
  baseURL: "https://twowinmatosbackend.onrender.com/api",//
  //baseURL: "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Gestion des erreurs globale
API.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const message = error.response?.data?.message || "Une erreur est survenue";
    console.error("API Error:", message);
    return Promise.reject(new Error(message));
  }
);

export default API;
