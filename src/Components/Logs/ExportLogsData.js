import React from "react";
import * as XLSX from 'xlsx';
import { CSVLink } from "react-csv";

export default function ExportLogsData({ logs, format }) {
    const fileName = "Logs";
    if (format === "csv") {
        return (
            <CSVLink
                data={logs}
                filename={`${fileName}.csv`}
                className="logs-export-button"
            >
                Export as CSV
            </CSVLink>
        );
    } else if (format === "excel") {
        const ws = XLSX.utils.json_to_sheet(logs);
        const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
        const excelBuffer = XLSX.write(wb, {
            bookType: "xlsx",
            type: "array",
            mimeType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        });
        const excelBlob = new Blob([excelBuffer], {
            type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        });
        const url = URL.createObjectURL(excelBlob);
        return (
            <a
                href={url}
                download={`${fileName}.xlsx`}
                className="logs-export-button"
            >
                Export as Excel
            </a>
        );
    }
    return null;
}