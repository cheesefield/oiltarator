// components/LoadingSkeleton.tsx

import React from "react";
import { useTranslations } from "next-intl";

const LoadingSkeleton: React.FC = () => {
  const t = useTranslations("Loading"); // Use an appropriate namespace

  return (
    <div className="loading-skeleton">
      <p>{t("loadingMessage")}</p>
    </div>
  );
};

export default LoadingSkeleton;
