import React from "react";
import { useTranslation } from "react-i18next";
import { VideoPlayer, Button } from "../atoms";

export const EfficiencySection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <VideoPlayer thumbnail="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" />

          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {t("about.efficiency.title")}
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              {t("about.efficiency.description")}
            </p>
            <Button variant="primary" size="lg">
              {t("about.efficiency.learnMore")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
