import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Logo } from "../atoms";
import { NewsletterForm } from "../molecules";

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {t("about.newsletter.title")}
            </h3>
            <p className="text-gray-600">{t("about.newsletter.subtitle")}</p>
          </div>
          <NewsletterForm />
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            {/* Company Info */}
            <div>
              <Logo />
              <p className="text-gray-400 mt-4">{t("footer.description")}</p>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-semibold text-lg mb-4">
                {t("footer.company.title")}
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/about"
                    className="text-gray-400 hover:text-green-500"
                  >
                    {t("footer.company.aboutUs")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="text-gray-400 hover:text-green-500"
                  >
                    {t("footer.company.services")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pricing"
                    className="text-gray-400 hover:text-green-500"
                  >
                    {t("footer.company.pricing")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className="text-gray-400 hover:text-green-500"
                  >
                    {t("footer.company.blog")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/login"
                    className="text-gray-400 hover:text-green-500"
                  >
                    {t("footer.company.login")}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Useful Links */}
            <div>
              <h4 className="font-semibold text-lg mb-4">
                {t("footer.usefulLinks.title")}
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/terms"
                    className="text-gray-400 hover:text-green-500"
                  >
                    {t("footer.usefulLinks.terms")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy"
                    className="text-gray-400 hover:text-green-500"
                  >
                    {t("footer.usefulLinks.privacy")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/listing"
                    className="text-gray-400 hover:text-green-500"
                  >
                    {t("footer.usefulLinks.listing")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-gray-400 hover:text-green-500"
                  >
                    {t("footer.usefulLinks.contact")}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Details */}
            <div>
              <h4 className="font-semibold text-lg mb-4">
                {t("footer.contact.title")}
              </h4>
              <p className="text-gray-400 mb-4">
                {t("footer.contact.address")}
              </p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:text-green-400"
              >
                {t("footer.contact.viewMap")}
              </a>
              <p className="text-gray-400 mt-4">contact@example.com</p>
              <p className="text-gray-400">+152 534-468-854</p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2026 INMOHUB. Creado por Sofia Dev ❤️
          </p>
          <div className="flex gap-4">
            {[
              "dribbble",
              "behance",
              "linkedin",
              "facebook",
              "instagram",
              "twitter",
            ].map((social) => (
              <a
                key={social}
                href={`https://${social}.com`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-500"
              >
                <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
                  {social[0].toUpperCase()}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
