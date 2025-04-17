import React, { createContext, useState, useContext, useEffect } from "react";
import { getBureaux } from "../services/bureauService";
import { getMateriels } from "../services/materielService";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [bureaux, setBureaux] = useState([]);
  const [materiels, setMateriels] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentBureau, setCurrentBureau] = useState(null);

  // Charger les bureaux au chargement initial
  useEffect(() => {
    const fetchBureaux = async () => {
      setLoading(true);
      try {
        const data = await getBureaux();
        setBureaux(data);
        setError(null);
      } catch (error) {
        setError("Erreur lors du chargement des bureaux");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBureaux();
  }, []);

  // Charger les matériels lorsqu'un bureau est sélectionné
  const loadMaterielsByBureau = async (bureauId) => {
    setLoading(true);
    try {
      const data = await getMateriels(bureauId);
      setMateriels(data);
      setError(null);
    } catch (error) {
      setError("Erreur lors du chargement des matériels");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Fonction pour rafraîchir la liste des bureaux
  const refreshBureaux = async () => {
    setLoading(true);
    try {
      const data = await getBureaux();
      setBureaux(data);
      setError(null);
    } catch (error) {
      setError("Erreur lors du rafraîchissement des bureaux");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Fonction pour rafraîchir la liste des matériels
  const refreshMateriels = async (bureauId) => {
    setLoading(true);
    try {
      const data = await getMateriels(bureauId);
      setMateriels(data);
      setError(null);
    } catch (error) {
      setError("Erreur lors du rafraîchissement des matériels");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const contextValue = {
    bureaux,
    materiels,
    loading,
    error,
    currentBureau,
    setCurrentBureau,
    loadMaterielsByBureau,
    refreshBureaux,
    refreshMateriels,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
