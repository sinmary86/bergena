import React from "react";
import "../styles/Modal.css";

const Modal = ({ title, content, onClose }) => {

  console.log("Modal props:", { title, content });
  
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>


  );
};

export default Modal;
