import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { TabButton } from "../molecules";
import { SearchInput } from "../molecules";
import { FormField } from "../molecules";
import { Button, RangeSlider } from "../atoms";
import { useSearch } from "../../context/SearchContext";

export const SearchCard: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const {
    searchText,
    setSearchText,
    category,
    setCategory,
    priceRange,
    setPriceRange,
    activeTab,
    setActiveTab,
  } = useSearch();

  const isSearchEnabled = searchText.trim().length > 0 && category.length > 0;

  const handleSearch = () => {
    if (isSearchEnabled) {
      navigate("/search");
    }
  };

  return (
    <div className="absolute right-8 top-1/2 -translate-y-1/2 z-30 w-full max-w-md">
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Tabs */}
        <div className="flex border-b border-gray-200 p-2">
          <TabButton
            label={t("searchCard.tabs.buy")}
            isActive={activeTab === "buy"}
            onClick={() => setActiveTab("buy")}
          />
          <TabButton
            label={t("searchCard.tabs.sell")}
            isActive={activeTab === "sell"}
            onClick={() => setActiveTab("sell")}
          />
          <TabButton
            label={t("searchCard.tabs.rent")}
            isActive={activeTab === "rent"}
            onClick={() => setActiveTab("rent")}
          />
        </div>

        {/* Form Content */}
        <div className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t("searchCard.search")} :{" "}
              <span className="text-red-500">{t("searchCard.required")}</span>
            </label>
            <SearchInput
              placeholder={t("searchCard.searchPlaceholder")}
              value={searchText}
              onChange={setSearchText}
            />
          </div>

          <FormField
            label={t("searchCard.selectCategories")}
            placeholder={t("searchCard.selectCategoriesPlaceholder")}
            icon="home"
            required={true}
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

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              {t("searchCard.minPrice")}
            </label>
            <RangeSlider
              min={100000}
              max={2000000}
              step={10000}
              value={priceRange}
              onChange={setPriceRange}
            />
          </div>

          <Button
            variant="primary"
            className={`w-full ${
              !isSearchEnabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
            size="lg"
            onClick={handleSearch}
          >
            {t("searchCard.searchButton")}
          </Button>
        </div>
      </div>
    </div>
  );
};
