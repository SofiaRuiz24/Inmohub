import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "../atoms";

interface NavItemProps {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

export const NavItem: React.FC<NavItemProps> = ({
  label,
  href,
  hasDropdown = false,
}) => {
  return (
    <Link
      to={href}
      className="text-white hover:text-green-300 transition-colors flex items-center gap-1"
    >
      {label}
      {hasDropdown && <Icon name="chevron-down" size={16} />}
    </Link>
  );
};
