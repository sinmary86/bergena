import React from "react";
import "../styles/RecipientAccordion.css";
import { useState } from "react";
import { errorAlert } from "./Alert";


const RecipientAccordion = ({ setAddress }) => {
  const [formData, setFormData] = useState({
    gender: "",
    firstName: "",
    lastName: "",
    street: "",
    number: "",
    plz: "",
    city: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = (e) => {
    e.preventDefault();

    if (
      !formData.gender ||
      !formData.firstName ||
      !formData.lastName ||
      !formData.street ||
      !formData.number ||
      !formData.plz ||
      !formData.city
    ) {
      errorAlert();
      return;
    }

    setAddress(formData);
  };

  return (
    <form className="recipient-form" onSubmit={handleSave}>
      <div className="form-group">
        <label>Anrede*</label>
        <div className="radio-group">
          <div>
            <input
              type="radio"
              id="frau"
              name="gender"
              value="Frau"
              onChange={handleChange}
            />
            <label htmlFor="frau">Frau</label>
          </div>
          <div>
            <input
              type="radio"
              id="keine-angabe"
              name="gender"
              value="Keine Angabe"
              onChange={handleChange}
            />
            <label htmlFor="keine-angabe">Keine Angabe</label>
          </div>
          <div>
            <input
              type="radio"
              id="herr"
              name="gender"
              value="Herr"
              onChange={handleChange}
            />
            <label htmlFor="herr">Herr</label>
          </div>
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label>Vorname*</label>
          <input
            type="text"
            name="firstName"
            placeholder="Vorname*"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Nachname*</label>
          <input
            type="text"
            name="lastName"
            placeholder="Nachname*"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label>Straße*</label>
          <input
            type="text"
            name="street"
            placeholder="Straße*"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Nummer*</label>
          <input
            type="text"
            name="number"
            placeholder="Nummer*"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label>PLZ*</label>
          <input
            type="text"
            name="plz"
            placeholder="PLZ*"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Ort*</label>
          <input
            type="text"
            name="city"
            placeholder="Ort*"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="form-group">
        <label>Telefonnummer*</label>
        <input
          type="text"
          name="phone"
          placeholder="Telefonnummer des Empfängers"
          onChange={handleChange}
        />
      </div>
      <button className="save-button" type="submit">
        Adresse speichern
      </button>
    </form>
  );
};

export default RecipientAccordion;
