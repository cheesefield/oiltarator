"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "../css/contactForm.css";
import { useTranslations } from "next-intl";

export default function ContactForm() {
  const t = useTranslations("ContactForm");
  const [state, handleSubmit] = useForm("manwypda");

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
    </div>
  );
}
