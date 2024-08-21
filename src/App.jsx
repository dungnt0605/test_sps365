import React from "react";
import { SearchProvider } from "./SearchContext";
import SearchInput from "./SearchInput";
import DataTable from "./DataTable";

const App = () => {
  return (
    <SearchProvider>
      <div style={{ padding: "20px" }}>
        <SearchInput />
        <DataTable />
      </div>
    </SearchProvider>
  );
};

export default App;
