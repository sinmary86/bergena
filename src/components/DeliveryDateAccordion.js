import React, { useState } from "react";
import "../styles/DeliveryDateAccordion.css";

const DeliveryDateAccordion = ({ setDeliveryDate }) => {
  const [selectedDate, setSelectedDate] = useState("");

  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split("T")[0];
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
    setDeliveryDate(e.target.value);
  };

  return (
    <div className="delivery-date">
      <label htmlFor="delivery-date">Lieferdatum auswählen:</label>
      <input
        type="date"
        id="delivery-date"
        value={selectedDate}
        onChange={handleDateChange}
        min={getTomorrowDate()}
      />
      {selectedDate && <p>Gewähltes Datum: {selectedDate}</p>}
    </div>
  );
};

export default DeliveryDateAccordion;
