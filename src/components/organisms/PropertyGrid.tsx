import React from "react";
import { PropertyCard } from "../molecules";

const mockProperties = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    address: "10765 Hillshire Ave, Baton Rouge, LA 70810, USA",
    price: "$5000",
    sqft: 8000,
    beds: 4,
    baths: 4,
    rating: 5,
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    address: "59345 STONEWALL DR, Plaquemine, LA 70764, USA",
    price: "$5000",
    sqft: 8000,
    beds: 4,
    baths: 4,
    rating: 5,
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    address: "3723 SANDBAR DR, Addis, LA 70710, USA",
    price: "$5000",
    sqft: 8000,
    beds: 4,
    baths: 4,
    rating: 5,
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    address: "Lot 21 ROYAL OAK DR, Prairieville, LA 70769, USA",
    price: "$5000",
    sqft: 8000,
    beds: 4,
    baths: 4,
    rating: 5,
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    address: "710 BOYD DR, Unit #1102, Baton Rouge, LA 70808, USA",
    price: "$5000",
    sqft: 8000,
    beds: 4,
    baths: 4,
    rating: 5,
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    address: "5133 MCLAIN WAY, Baton Rouge, LA 70809, USA",
    price: "$5000",
    sqft: 8000,
    beds: 4,
    baths: 4,
    rating: 5,
  },
];

export const PropertyGrid: React.FC = () => {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockProperties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
      </div>
    </div>
  );
};
