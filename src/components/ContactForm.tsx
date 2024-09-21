"use client";

import React, { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import "../css/contactForm.css";
import { useTranslations } from "next-intl";

export default function ContactForm() {
  const t = useTranslations("ContactForm");
  const [state, handleSubmit] = useForm(`${process.env.NEXT_PUBLIC_FORM_API}`);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      setFailed(false); // Reset failed state on success
    }

    if (Array.isArray(state.errors) && state.errors.length > 0) {
      setFailed(true);
      const timer = setTimeout(() => setFailed(false), 5000); // Show failure message for 5 seconds
      return () => clearTimeout(timer);
    }
  }, [state]);

  if (state.submitting) {
    return <p>{t("submitting")}</p>;
  }

  if (state.succeeded) {
    return (
      <div>
        <p>{t("success")}</p>
        <button onClick={() => window.location.reload()}>{t("reset")}</button>
      </div>
    );
  }

  return (
    <div className="contact-form-container">
      <form
        id="contact-form"
        name="contact-form"
        onSubmit={handleSubmit}
        className="contact-form"
      >
        <div className="form-group">
          <label htmlFor="name">{t("name")}</label>
          <input
            id="name"
            type="text"
            name="name"
            autoComplete="name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">{t("email")}</label>
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
          <label htmlFor="message">{t("message")}</label>
          <textarea
            id="message"
            name="message"
            placeholder={t("messagePlaceholder")}
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
            {t("send")}
          </button>
        </div>
      </form>

      {failed && (
        <p className="error-message">{t("failure")}</p> // Display failure message for 5 seconds
      )}
    </div>
  );
}
