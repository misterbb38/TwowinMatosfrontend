import React from "react";
import { AlertCircle, CheckCircle, AlertTriangle } from "lucide-react";

const Alert = ({ type = "info", message, onClose }) => {
  const getIcon = () => {
    switch (type) {
      case "success":
        return <CheckCircle size={20} />;
      case "danger":
        return <AlertCircle size={20} />;
      case "warning":
        return <AlertTriangle size={20} />;
      default:
        return <AlertCircle size={20} />;
    }
  };

  return (
    <div className={`alert alert-${type}`}>
      <div className="alert-icon">{getIcon()}</div>
      <div className="alert-message">{message}</div>
      {onClose && (
        <button className="alert-close" onClick={onClose}>
          &times;
        </button>
      )}
    </div>
  );
};

export default Alert;
