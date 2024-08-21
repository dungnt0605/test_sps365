import React from "react";
import { Table } from "@fluentui/react-northstar";
import { useSearch } from "./SearchContext";

const DataTable = () => {
  const { filteredData } = useSearch();

  const header = {
    items: ["ID", "Name", "Age", "Job"],
  };

  const rows =
    filteredData.length > 0
      ? filteredData.map((item) => ({
          key: item.id,
          items: [
            { content: item.id.toString() },
            { content: item.name },
            { content: item.age },
            { content: item.age },
          ],
        }))
      : [
          {
            key: "noData",
            items: [
              { content: "", colSpan: 4, style: { textAlign: "center" } },
              {
                content: "No Data",
                colSpan: 4,
                style: { textAlign: "center" },
              },
              { content: "", colSpan: 4, style: { textAlign: "center" } },
            ],
          },
        ];

  return <Table header={header} rows={rows} aria-label="Search Results" />;
};

export default DataTable;
