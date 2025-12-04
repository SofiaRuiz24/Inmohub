import React, { createContext, useContext, useState, ReactNode } from "react";

interface SearchContextType {
  searchText: string;
  setSearchText: (text: string) => void;
  category: string;
  setCategory: (category: string) => void;
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState<[number, number]>([
    100000, 2000000,
  ]);
  const [activeTab, setActiveTab] = useState("buy");

  return (
    <SearchContext.Provider
      value={{
        searchText,
        setSearchText,
        category,
        setCategory,
        priceRange,
        setPriceRange,
        activeTab,
        setActiveTab,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};
