import React from "react";
import * as XLSX from 'xlsx';
import { CSVLink } from "react-csv";

export default function ExportData({ data, fileName, format }) {
  if (format === "csv") {
    const csvData = data.map((row) => ({ ...row }));
    return (
      <CSVLink
        data={csvData}
        filename={`${fileName}.csv`}
        className="export-button"
        target="_blank"
      >
        Export as CSV 
      </CSVLink>
    );
  } else if (format === "excel") {
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, {
      bookType: "xlsx",
      type: "array",
      mimeType:
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    const excelBlob = new Blob([excelBuffer], {
      type:
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    const url = URL.createObjectURL(excelBlob);
    return (
      <a
        href={url}
        download={`${fileName}.xlsx`}
        className="export-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        Export as Excel
      </a>
    );
  }
  return null;
}
