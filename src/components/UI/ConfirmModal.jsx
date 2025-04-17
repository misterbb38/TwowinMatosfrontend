import React from "react";
import { X, AlertTriangle } from "lucide-react";

const ConfirmModal = ({
  title,
  message,
  confirmText = "Confirmer",
  cancelText = "Annuler",
  isLoading = false,
  onConfirm,
  onCancel,
}) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="modal-title">{title}</h2>
          <button
            className="modal-close"
            onClick={onCancel}
            disabled={isLoading}
          >
            <X size={24} />
          </button>
        </div>
        <div className="modal-body">
          <div className="confirm-message">
            <div className="confirm-icon">
              <AlertTriangle size={32} color="#dc3545" />
            </div>
            <p>{message}</p>
          </div>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-outline"
            onClick={onCancel}
            disabled={isLoading}
          >
            {cancelText}
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={onConfirm}
            disabled={isLoading}
          >
            {isLoading ? "Chargement..." : confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
