import React, { useState } from "react";
import Modal from "./Modal";
import footerData from "../data/dataFooter";
import "../styles/Footer.css";

const Footer = () => {
  const [modalData, setModalData] = useState(null);

  const handleOpenModal = (key) => {
        setModalData(footerData[key]);
  };

  const handleCloseModal = () => {
    setModalData(null);
  };

  return (
    <footer className="footer">
      <div className="footer-border"></div>
      <div className="footer-links">
        <button onClick={() => handleOpenModal("agb")}>AGB</button>
        <button onClick={() => handleOpenModal("datenschutz")}>Datenschutz</button>
        <button onClick={() => handleOpenModal("impressum")}>Impressum</button>
      </div>
      {modalData && (
        <Modal
          title={modalData.title}
          content={modalData.content}
          onClose={handleCloseModal}
        />
      )}
    </footer>
  );
};

export default Footer;
