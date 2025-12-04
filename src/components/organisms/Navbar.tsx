import React from "react";
import { useTranslation } from "react-i18next";
import { Logo, Button, Icon, LanguageSwitcher } from "../atoms";
import { NavItem } from "../molecules";

export const Navbar: React.FC = () => {
  const { t } = useTranslation();

  return (
    <nav className="sticky top-0 left-0 right-0 z-50 px-6 py-4 bg-gray-900/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Logo />

        <div className="flex items-center gap-8">
          <NavItem label={t("navbar.home")} href="/" />
          <NavItem label={t("navbar.about")} href="/about" />
          {/* <NavItem label={t("navbar.buy")} href="/buy" /> */}
          {/* <NavItem label={t("navbar.sell")} href="/sell" /> */}
          {/* <NavItem label={t("navbar.listing")} href="/listing" hasDropdown /> */}
          {/* <NavItem label={t("navbar.pages")} href="/pages" hasDropdown /> */}
          <NavItem label={t("navbar.contact")} href="/contact" />
        </div>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
            <Icon name="user" size={20} className="text-white" />
          </button>
          <Button variant="primary" size="md">
            {t("navbar.signup")}
          </Button>
        </div>
      </div>
    </nav>
  );
};
