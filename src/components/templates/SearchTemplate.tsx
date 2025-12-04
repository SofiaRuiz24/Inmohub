import React from "react";
import {
  Navbar,
  SearchHero,
  SearchFilters,
  PropertyGrid,
  Footer,
} from "../organisms";

export const SearchTemplate: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <SearchHero />
      <div className="max-w-7xl mx-auto px-6">
        <SearchFilters />
      </div>
      <PropertyGrid />
      <Footer />
    </div>
  );
};
