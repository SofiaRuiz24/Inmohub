import React from "react";
import { useTranslation } from "react-i18next";
import { Badge, FavoriteButton, Icon } from "../atoms";

interface PropertyCardProps {
  image: string;
  address: string;
  price: string;
  sqft: number;
  beds: number;
  baths: number;
  rating: number;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({
  image,
  address,
  price,
  sqft,
  beds,
  baths,
  rating,
}) => {
  const { t } = useTranslation();

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow">
      {/* Image */}
      <div className="relative h-64">
        <img src={image} alt={address} className="w-full h-full object-cover" />
        <div className="absolute top-4 right-4">
          <FavoriteButton />
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 line-clamp-2">
          {address}
        </h3>

        {/* Features */}
        <div className="flex flex-wrap gap-3 mb-4">
          <Badge variant="green" icon={<Icon name="home" size={16} />}>
            {sqft} {t("listings.sqft")}
          </Badge>
          <Badge variant="gray" icon={<Icon name="home" size={16} />}>
            {beds} {t("listings.beds")}
          </Badge>
          <Badge variant="gray" icon={<Icon name="home" size={16} />}>
            {baths} {t("listings.baths")}
          </Badge>
        </div>

        {/* Price and Rating */}
        <div className="flex justify-between items-center pt-4 border-t border-gray-100">
          <div>
            <p className="text-sm text-gray-500">{t("listings.price")}</p>
            <p className="text-xl font-bold text-gray-900">{price}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500">{t("listings.rating")}</p>
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${
                    i < rating
                      ? "text-yellow-400 fill-current"
                      : "text-gray-300 fill-current"
                  }`}
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
              <span className="ml-1 text-sm font-medium text-gray-900">
                5({rating * 6})
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
