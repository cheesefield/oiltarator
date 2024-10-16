import React, { useState } from "react";
import { FaGlobe } from "react-icons/fa";
import { usePathname } from "@/navigation";
import { Link } from "@/navigation";

// Define the type for the language object
type Language = {
  code: string;
  lang: string;
  loc: string;
};

// Define the list of languages
const languages: Language[] = [
  { code: "en", lang: "English", loc: "en" },
  { code: "cz", lang: "Česky", loc: "cs" },
  { code: "pl", lang: "Polski", loc: "pl" },
];

export default function LanguageSelector() {
  // State for toggling the language selector
  const [globe, setGlobe] = useState<boolean>(true);
  const openGlobe = (): void => setGlobe(!globe);

  const pathname = usePathname();
  const pagePath = pathname?.split("/")[1] ?? "";

  return (
    <div>
      <FaGlobe className="fa-globe" onClick={openGlobe} />
      <div className={globe ? "btn-container" : "btn-container-open"}>
        {languages.map((lng) => (
          <Link
            href={`/${pagePath}`}
            locale={lng.loc as "en" | "cs" | "pl"}
            key={lng.code}
          >
            <span
              className="language-switch"
              key={lng.code}
              onClick={() => {
                openGlobe();
              }}
            >
              {lng.lang}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
