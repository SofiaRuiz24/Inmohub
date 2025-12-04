import React from "react";
import { useTranslation } from "react-i18next";
import { SectionTitle } from "../atoms";
import { StepCard } from "../molecules";

export const HowItWorks: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          title={t("about.howItWorks.title")}
          subtitle={t("about.howItWorks.subtitle")}
          className="mb-16"
        />

        <div className="grid md:grid-cols-3 gap-12">
          <StepCard
            icon="home"
            title={t("about.howItWorks.steps.evaluate.title")}
            description={t("about.howItWorks.steps.evaluate.description")}
          />
          <StepCard
            icon="user"
            title={t("about.howItWorks.steps.meeting.title")}
            description={t("about.howItWorks.steps.meeting.description")}
          />
          <StepCard
            icon="dollar"
            title={t("about.howItWorks.steps.close.title")}
            description={t("about.howItWorks.steps.close.description")}
          />
        </div>
      </div>
    </section>
  );
};
