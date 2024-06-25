import React, { useState } from "react";
import './Logs.css';
import RenderLogsTable from "./RenderLogsTable";
import LogsPagination from "./LogsPagination";
import FetchLogsData from "./FetchLogsData";
import ExportLogsData from "./ExportLogsData";
import Spinner from "../Spinner/Spinner";

export default function Logs({ show = true }) {

  const [currentPage, setCurrentPage] = useState(1);

  const { data: logs, isLoading } = FetchLogsData(currentPage);

  const exportLogs = (format) => {
    return <ExportLogsData logs={logs} format={format} />;
  };

  const { itemsPerPage, previousPage, nextPage, totalPages } = LogsPagination({
    logs,
    currentPage,
    setCurrentPage
  });

  if (show !== true) {
    return null;
  }

  return (
    <>
      {!isLoading && logs.length>0 &&
        <div>
          <div className="LogsTable">
            { logs.length>0 && <RenderLogsTable logs={logs} currentPage={currentPage} itemsPerPage={itemsPerPage}/>}
          </div>

          <div className="logs-pagination">
            <button onClick={previousPage} disabled={currentPage === 1}>
              Previous
            </button>

            <button onClick={nextPage} disabled={currentPage === totalPages()}>
              Next
            </button>
          </div>

          <div className="exporttable">
            {exportLogs("csv")}
          </div>
        </div>
      }
      { !isLoading && logs.length===0 && <div className="logs-message">No Data available</div>}
      { isLoading && <Spinner />}
    </>
  );
}
