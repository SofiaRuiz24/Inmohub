import React from "react";
import { useTranslation } from "react-i18next";

export const SearchHero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="relative h-64 flex items-center justify-center bg-gray-900">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80')",
        }}
      />

      <h1 className="relative z-10 text-5xl font-bold text-white">
        {t("listings.heroTitle")}
      </h1>
    </div>
  );
};
