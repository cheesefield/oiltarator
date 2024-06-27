import React, { useState } from "react";
import "../css/contactForm.css";
import "../i18.js";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form data:", formData);
    // Clear the form after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    // Show submission message
    setSubmitted(true);
    // Hide the message after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  const { t } = useTranslation();
  const { line1, line2, line3, line4, button } = t("contact-form");

  return (
    <div className="contact-form-container">
      <form onSubmit={handleSubmit} className="contact-form">
        <h3>{t("contact2")}</h3>
        <div className="form-group">
          <label htmlFor="name">{line1}</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">{line2}</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">{line3}</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-actions">
          <button type="submit" className="submit-button">
            {button}
          </button>
        </div>
        {submitted && <p className="submission-message">{line4}</p>}
      </form>
    </div>
  );
};

export default ContactForm;
