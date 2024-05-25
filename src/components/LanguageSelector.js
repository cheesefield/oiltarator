import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaGlobe } from "react-icons/fa";

const languages = [
  { code: "en", lang: "English" },
  { code: "cz", lang: "Česky" },
  { code: "pl", lang: "Polski" },
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const [globe, setGlobe] = useState(true);
  const openGlobe = () => setGlobe(!globe);

  return (
    <div>
      <FaGlobe className="fa-globe" onClick={openGlobe} />
      <div className={globe ? "btn-container" : "btn-container-open"}>
        {languages.map((lng) => {
          return (
            <button
              className={lng.code === i18n.language ? "selected" : ""}
              key={lng.code}
              onClick={() => {
                changeLanguage(lng.code);
                openGlobe();
              }}
            >
              {lng.lang}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default LanguageSelector;
