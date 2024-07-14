import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "../css/contactForm.css";
import "../i18.js";
import { useTranslation } from "react-i18next";

function ContactForm() {
  const { t } = useTranslation();
  const { line1, line2, line3, line4, button, messagevalue } = t(
    "contact-form",
    { returnObjects: true }
  );

  const [state, handleSubmit] = useForm("manwypda");

  if (state.submitting) {
    return <p>Submitting…</p>;
  }

  if (state.succeeded) {
    return (
      <div>
        <p>{line4}</p>
        <button onClick={() => window.location.reload()}>Reset</button>
      </div>
    );
  }

  return (
    <div className="contact-form-container">
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">{line1}</label>
          <input
            id="name"
            type="text"
            name="name"
            autoComplete="name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">{line2}</label>
          <input
            id="email"
            type="email"
            name="email"
            autoComplete="email"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className="form-group">
          <label htmlFor="message">{line3}</label>
          <textarea
            id="message"
            name="message"
            placeholder={messagevalue}
            required
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <div className="form-actions">
          <button
            className="submit-button"
            type="submit"
            disabled={state.submitting}
          >
            {button}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
