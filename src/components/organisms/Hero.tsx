import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "../atoms";

export const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-2xl">
          <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
            {t("hero.title")}
            <br />
            {t("hero.titleHighlight")}
          </h1>
          <p className="text-lg text-white/90 mb-8 max-w-xl">
            {t("hero.description")}
          </p>
          <div className="flex gap-4">
            <Button variant="primary" size="lg">
              {t("hero.exploreMore")}
            </Button>
            <Button variant="outline" size="lg">
              {t("hero.contactUs")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
