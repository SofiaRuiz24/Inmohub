import React from "react";
import { useTranslation } from "react-i18next";
import { Button, Icon } from "../atoms";

export const ContactSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          {t("about.contact.title")}
        </h2>
        <p className="text-gray-600 mb-8">{t("about.contact.subtitle")}</p>
        <Button variant="primary" size="lg">
          <Icon name="user" size={20} className="mr-2" />
          {t("about.contact.button")}
        </Button>
      </div>
    </section>
  );
};
