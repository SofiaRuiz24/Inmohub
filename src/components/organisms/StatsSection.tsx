import React from "react";
import { useTranslation } from "react-i18next";
import { StatCard } from "../atoms";

export const StatsSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section
      className="py-20 bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          <StatCard value="1,548" label={t("about.stats.properties")} />
          <StatCard value="25" label={t("about.stats.awards")} />
          <StatCard value="9" label={t("about.stats.years")} />
        </div>
      </div>
    </section>
  );
};
