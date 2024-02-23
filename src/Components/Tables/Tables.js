  import React, { useState } from "react";
  import Dropdown from "../Dropdown/Dropdown";
  import ExportData from "./ExportData";
  import "./Tables.css";
  import FetchData from "./FetchData";
  import Pagination from "./Pagination";
  import TableRenderer from "./TableRenderer";

  export default function Tables() {
    const [selectedTable, setSelectedTable] = useState('');
    const [selectedSemester, setSelectedSemester] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    const formattedSemester = selectedSemester.replace(/ /g, '%20');

    const { 
      instructorData, 
      instructorInstructionalData, 
      taInstructionalData, 
      taFullAccessData, 
      taGraderData, 
      loading } = FetchData(selectedSemester, formattedSemester, currentPage);

    const exportTableData = (data, fileName, format) => {
      return <ExportData data={data} fileName={fileName} format={format} />;
    };

    const { itemsPerPage, previousPage, nextPage, totalPages } = Pagination({
      instructorData, 
      instructorInstructionalData, 
      taInstructionalData, 
      taFullAccessData, 
      taGraderData, 
      selectedTable,
      currentPage,
      setCurrentPage
    });

    const renderTable = () => {
      return (
        <TableRenderer 
          selectedTable={selectedTable} 
          selectedSemester={selectedSemester} 
          instructorData={instructorData} 
          instructorInstructionalData={instructorInstructionalData}
          taInstructionalData={taInstructionalData}
          taFullAccessData={taFullAccessData}
          taGraderData={taGraderData}
          currentPage={currentPage} 
          itemsPerPage={itemsPerPage} 
        />
      );
    };

    const hasData = () => {
      return (
        instructorData.length > 0 ||
        instructorInstructionalData.length > 0 ||
        taInstructionalData.length > 0 ||
        taFullAccessData.length > 0 ||
        taGraderData.length > 0
      );
    };

    return (
      <>
        <Dropdown onTableClick={setSelectedTable} onSelectSemester={setSelectedSemester}  currentPage={currentPage} setCurrentPage={setCurrentPage}/>

        {!loading && (
            <div className="table">
                {renderTable()}
            </div>
        )}

        {!loading && hasData() && 
             <div className="pagination">
                {selectedTable && selectedSemester && (
                  <button onClick={previousPage} disabled={currentPage === 1}>
                  Previous
                  </button>
                )}

                {selectedTable && selectedSemester && (
                  <button onClick={nextPage} disabled={currentPage === totalPages(selectedTable)}>
                   Next
                  </button>
                )}
             </div>
        }

        { !loading && hasData() && 
             <div classname="exporttable">
                {selectedSemester && selectedTable === 1 && exportTableData(instructorData, "Table1", "csv")}
                {selectedTable === 2 && exportTableData(instructorInstructionalData, "Table2", "excel")}
                {selectedTable === 3 && exportTableData(taInstructionalData, "Table3", "csv")}
                {selectedSemester && selectedTable === 4 && exportTableData(taFullAccessData, "Table4", "excel")}
                {selectedSemester && selectedTable === 5 && exportTableData(taGraderData, "Table5", "csv")}
             </div> 
        }

        { !loading && selectedTable && selectedSemester && !hasData() && 
             <div className="message">No Data available for the Selected Semester</div>
        }

        { loading && selectedTable && selectedSemester && 
             <div className="spinner"></div>
        }
     </>
    );

  }