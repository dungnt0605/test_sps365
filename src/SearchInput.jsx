import React from "react";
import { Input } from "@fluentui/react-northstar";
import { useSearch } from "./SearchContext";

const SearchInput = () => {
  const { searchTerm, handleSearch } = useSearch();

  return (
    <Input
      placeholder="Search..."
      value={searchTerm}
      onChange={(e) => handleSearch(e.target.value)}
      clearable
      styles={{ marginBottom: "20px" }}
    />
  );
};

export default SearchInput;
