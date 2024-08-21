import React, { createContext, useState, useContext } from "react";

const SearchContext = createContext();

export const useSearch = () => useContext(SearchContext);

export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const data = [
    { id: 1, name: "John Doe", age: 28, job: "Developer" },
    { id: 2, name: "Jane Smith", age: 34, job: "Designer" },
    { id: 3, name: "Sam Green", age: 45, job: "Manager" },
    // Add more data as needed
  ];
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (value = "") => {
    setSearchTerm(value.toLowerCase());
    setFilteredData(
      data.filter(
        (item) =>
          item.name.toLowerCase().includes(value.toLowerCase()) ||
          item.job.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  return (
    <SearchContext.Provider value={{ searchTerm, handleSearch, filteredData }}>
      {children}
    </SearchContext.Provider>
  );
};
