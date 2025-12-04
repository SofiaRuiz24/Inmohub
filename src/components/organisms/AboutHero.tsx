import React from "react";
import { useTranslation } from "react-i18next";

export const AboutHero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="relative h-80 flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-black/50"></div>

      <h1 className="relative z-10 text-5xl font-bold text-white">
        {t("about.title")}
      </h1>
    </div>
  );
};
