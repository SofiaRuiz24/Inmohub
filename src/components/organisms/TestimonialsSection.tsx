import React from "react";
import { useTranslation } from "react-i18next";
import { SectionTitle, TestimonialCard } from "../atoms";

export const TestimonialsSection: React.FC = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      text: '" Inmohub made the processes so easy. Inmohub instantly increased the amount of interest and ultimately saved us over $10,000. "',
      name: "Christa Smith",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    },
    {
      text: '" I highly recommend Inmohub as the new way to sell your home "By owner". My home was sold in 24 hours for the asking price. Best $400 you could spend to sell your home. "',
      name: "Christa Smith",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    },
    {
      text: '" My favorite part about selling my home myself was that we got to meet and get to know the people personally. This made it so much more enjoyable! "',
      name: "Christa Smith",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          title={t("about.testimonials.title")}
          subtitle={t("about.testimonials.subtitle")}
          className="mb-16"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              text={testimonial.text}
              name={testimonial.name}
              role={t("about.testimonials.role")}
              image={testimonial.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
