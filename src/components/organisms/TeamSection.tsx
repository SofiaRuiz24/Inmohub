import React from "react";
import { useTranslation } from "react-i18next";
import { SectionTitle, TeamCard } from "../atoms";

export const TeamSection: React.FC = () => {
  const { t } = useTranslation();

  const team = [
    {
      name: "Jack John",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Krista John",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Roger Jackson",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Johnny English",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          title={t("about.team.title")}
          subtitle={t("about.team.subtitle")}
          className="mb-16"
        />

        <div className="grid md:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <TeamCard
              key={index}
              name={member.name}
              role={t("about.team.role")}
              image={member.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
