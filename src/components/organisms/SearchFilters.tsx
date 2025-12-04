import React from "react";
import { useTranslation } from "react-i18next";
import { SearchInput } from "../molecules";
import { Dropdown, Icon, Button, RangeSlider } from "../atoms";
import { useSearch } from "../../context/SearchContext";

export const SearchFilters: React.FC = () => {
  const { t } = useTranslation();
  const {
    searchText,
    setSearchText,
    category,
    setCategory,
    priceRange,
    setPriceRange,
  } = useSearch();

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 -mt-12 relative z-10 mx-auto max-w-6xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t("listings.search")}
          </label>
          <SearchInput
            placeholder={t("listings.searchPlaceholder")}
            value={searchText}
            onChange={setSearchText}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t("listings.selectCategories")}
          </label>
          <Dropdown
            placeholder={t("listings.selectPlaceholder")}
            icon={<Icon name="home" size={20} />}
            value={category}
            onChange={setCategory}
            options={[
              t("searchCard.categories.houses"),
              t("searchCard.categories.apartments"),
              t("searchCard.categories.villas"),
              t("searchCard.categories.commercial"),
              t("searchCard.categories.offices"),
            ]}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t("listings.priceRange")}
          </label>
          <RangeSlider
            min={100000}
            max={2000000}
            step={10000}
            value={priceRange}
            onChange={setPriceRange}
          />
        </div>
      </div>

      <div className="mt-4">
        <Button variant="primary" size="lg" className="w-full md:w-auto">
          {t("listings.searchButton")}
        </Button>
      </div>
    </div>
  );
};
