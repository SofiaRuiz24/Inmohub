import React from "react";
import { Navbar, Hero, SearchCard, Footer } from "../organisms";

export const HomeTemplate: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="relative min-h-screen">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80')",
          }}
        />

        <Hero />
        <SearchCard />
      </div>
      <Footer />
    </div>
  );
};
