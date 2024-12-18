import React, { createContext, useState, useContext } from "react";

// Create the Context
const SearchContext = createContext();

// Custom Hook to Access the Context
export const useSearch = () => useContext(SearchContext);

// Provider Component
export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </SearchContext.Provider>
  );
};
