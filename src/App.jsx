import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Home from "./pages/Home";
import BureauDetail from "./pages/BureauDetail";
import MaterielDetail from "./pages/MaterielDetail";
import "./styles/index.css";

const App = () => {
  return (
    <AppProvider>
      <Router>
        <div className="app-container">
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/bureaux/:id" element={<BureauDetail />} />
              <Route path="/materiels/:id" element={<MaterielDetail />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AppProvider>
  );
};

export default App;
