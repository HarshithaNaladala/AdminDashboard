import React, { useState } from "react";
import './Logs.css';
import RenderLogsTable from "./RenderLogsTable";
import LogsPagination from "./LogsPagination";
import FetchLogsData from "./FetchLogsData";
import ExportLogsData from "./ExportLogsData";

export default function Logs() {

    const [currentPage, setCurrentPage] = useState(1);

    const { 
        logs, 
        loading 
    } = FetchLogsData(currentPage);

    const exportLogs = (format) => {
        return <ExportLogsData logs={logs} format={format} />;
    };

    const { itemsPerPage, previousPage, nextPage, totalPages } = LogsPagination({
        logs,
        currentPage,
        setCurrentPage
    });

    return (
        <>
        {!loading && logs.length>0 &&
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
        { !loading && logs.length===0 && <div className="logs-message">No Data available</div>}
        { loading && <div className="logs-spinner"></div>}  
        </>     
    );
}


