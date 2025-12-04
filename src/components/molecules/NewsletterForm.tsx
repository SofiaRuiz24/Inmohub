import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, Input } from "../atoms";

export const NewsletterForm: React.FC = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribe:", email);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 max-w-md">
      <Input
        type="email"
        placeholder={t("about.newsletter.placeholder")}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1"
      />
      <Button type="submit" variant="primary" size="md">
        {t("about.newsletter.button")}
      </Button>
    </form>
  );
};
