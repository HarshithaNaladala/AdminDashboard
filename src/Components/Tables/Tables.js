  import React, { useState, useEffect } from "react";
  import Dropdown from "../Dropdown/Dropdown";
  import * as XLSX from 'xlsx';
  import { CSVLink } from "react-csv";
  import "./Tables.css";

  const itemsPerPage = 10;

  export default function Tables() {
    const [selectedTable, setSelectedTable] = useState('');
    const [selectedSemester, setSelectedSemester] = useState('');
    const [instructorData, setInstructorData] = useState([]);
    const [instructorInstructionalData, setInstructorInstructionalData] = useState([]);
    const [taInstructionalData, setTaInstructionalData] = useState([]);
    const [taFullAccessData, setTaFullAccessData] = useState([]);
    const [taGraderData, setTaGraderData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const formattedSemester = selectedSemester.replace(/ /g, '%20');

    useEffect(() => {
      async function fetchData() {
        setLoading(true);
        setTimeout(async ()=>{
          if (formattedSemester) {
            try {
              const response1 = await fetch(`https://learningtoolsdev.gsu.edu/lti_tools/admindashboard/getinstructorbyadmin?token=9264211c-c9e0-46ac-82a5-44681310be84&semester=${formattedSemester}`);
              if (response1.ok) {
                const data1 = await response1.json();
                setInstructorData(data1);
              } else {
                console.error('API request 1 failed');
              }
  
              const response2 = await fetch(`https://learningtoolsdev.gsu.edu/lti_tools/admindashboard/getinstructbyadmininstruct?token=9264211c-c9e0-46ac-82a5-44681310be84&semester=${formattedSemester}`);
              if (response2.ok) {
                const data2 = await response2.json();
                setInstructorInstructionalData(data2);
              } else {
                console.error('API request 2 failed');
              }
  
              const response3 = await fetch(`https://learningtoolsdev.gsu.edu/lti_tools/admindashboard/gettabyinstructadmin?token=9264211c-c9e0-46ac-82a5-44681310be84&semester=${formattedSemester}`);
              if (response3.ok) {
                const data3 = await response3.json();
                setTaInstructionalData(data3);
              } else {
                console.error('API request 3 failed');
              }
  
              const response4 = await fetch(`https://learningtoolsdev.gsu.edu/lti_tools/admindashboard/gettafullaccess?token=9264211c-c9e0-46ac-82a5-44681310be84&semester=${formattedSemester}`);
              if (response4.ok) {
                const data4 = await response4.json();
                setTaFullAccessData(data4);
              } else {
                console.error('API request 4 failed');
              }
  
              const response5 = await fetch(`https://learningtoolsdev.gsu.edu/lti_tools/admindashboard/gettagrader?token=9264211c-c9e0-46ac-82a5-44681310be84&semester=${formattedSemester}`);
              if (response5.ok) {
                const data5 = await response5.json();
                setTaGraderData(data5);
                console.log("TA Full Access fetched:", data5);
              } else {
                console.error('API request 5 failed');
              }
            } catch (error) {
              console.error('API request error:', error);
            }

            finally{
              setLoading(false);
            }
            
          }
        }, 10)
      }
      fetchData();
    }, [formattedSemester, selectedSemester, currentPage]);


    const totalPages = (selectedTable) => {
      let data = [];
      switch (selectedTable) {
        case 1:
          data = instructorData;
          break;
        case 2:
          data = instructorInstructionalData;
          break;
        case 3:
          data = taInstructionalData;
          break;
        case 4:
          data = taFullAccessData;
          break;
        case 5:
          data = taGraderData;
          break;
        default:
          return 0;
      }
    
      if (data && data.length > 0) {
        return Math.ceil(data.length / itemsPerPage);
      }
    
      return 0;
    };

      const exportTableData = (data, fileName, format) => {
          if (format === "csv") {
            const csvData = data.map((row) => ({
              ...row,
            }));
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
        };

        const goToPage = (page) => {
          if (page >= 1 && page <= totalPages(selectedTable)) {
            setCurrentPage(page);
          }
        };
      
        const previousPage = () => {
          goToPage(currentPage - 1);
        };
      
        const nextPage = () => {
          goToPage(currentPage + 1);
        };

    console.log(loading);

    return (
      <>
        <Dropdown onTableClick={setSelectedTable} onSelectSemester={setSelectedSemester} />
        {!loading && <div className="table">
          {instructorData.length>0 && selectedTable === 1 && selectedSemester && <TableInstructorData data={instructorData} currentPage={currentPage} itemsPerPage={itemsPerPage}/>}
          {instructorInstructionalData.length>0 && selectedTable === 2 && <TableInstructorInstructionalData data={instructorInstructionalData} currentPage={currentPage} itemsPerPage={itemsPerPage}/>}
          {taInstructionalData.length>0 && selectedTable === 3 && <TableTAData data={taInstructionalData} currentPage={currentPage} itemsPerPage={itemsPerPage}/>}
          {taFullAccessData.length>0 && selectedTable === 4 && selectedSemester && <TableTAFullData data={taFullAccessData} currentPage={currentPage} itemsPerPage={itemsPerPage}/>}
          {taGraderData.length>0 && selectedTable === 5 && selectedSemester && <TableTAGraderData data={taGraderData} currentPage={currentPage} itemsPerPage={itemsPerPage}/>}
        </div>}
      {!loading && (instructorData.length>0 || instructorInstructionalData.length>0 || taInstructionalData.length>0 || taFullAccessData.length>0 || taGraderData.length>0) && <div className="pagination">
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
    </div>}
    { !loading && (instructorData.length>0 || instructorInstructionalData.length>0 || taInstructionalData.length>0 || taFullAccessData.length>0 || taGraderData.length>0) && <div classname="exporttable">
          {selectedSemester && selectedTable === 1 && exportTableData(instructorData, "Table1", "csv")}
          {selectedTable === 2 && exportTableData(instructorInstructionalData, "Table2", "excel")}
          {selectedTable === 3 && exportTableData(taInstructionalData, "Table3", "csv")}
          {selectedSemester && selectedTable === 4 && exportTableData(taFullAccessData, "Table4", "excel")}
          {selectedSemester && selectedTable === 5 && exportTableData(taGraderData, "Table5", "csv")}
    </div> }
    { !loading && selectedTable && selectedSemester && (instructorData.length===0 && instructorInstructionalData.length===0 && taInstructionalData.length===0 && taFullAccessData.length===0 && taGraderData.length===0) && <div className="message">No Data available for the Selected Semester</div>}
    { loading && selectedTable && selectedSemester && <div className="spinner"></div>}
      </>
    );

  }

  function TableInstructorData({ data, currentPage, itemsPerPage }) {

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const currentData = data.slice(startIndex, endIndex);

    return (
      <div>
        
        <table className='table1'>
          <thead className='heading'>
            <tr>
              <th>Enrollment Date</th>
              <th>Course Code</th>
              <th>Course Name</th>
              <th>Enrolled User CampusID</th>
              <th>Role</th>
              <th>Semester</th>
            </tr>
          </thead>
          <tbody>
          
            {currentData.map((row, index) => (
              <>
              <tr key={index}>
              <td>{row.EnrollmentDate}</td>
              <td>{row.Code}</td>
              <td>{row.Name}</td>
              <td>{row.EnrolledUserCampusID}</td>
              <td>{row.RoleName}</td>
              <td>{row.SemesterName}</td>
              </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>

      
    );
  }

  function TableInstructorInstructionalData({ data, currentPage, itemsPerPage }) {

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const currentData = data.slice(startIndex, endIndex);

    return (
      <div>
        <table className='table2'>
          <thead className='heading'>
            <tr>
              <th>Enrollment Date</th>
              <th>Course Name</th>
              <th>Course Code</th>
              <th>Role</th>
              <th>Enrolled User CampusID</th>
              <th>Instructional Admin</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((row, index) => (
              <tr key={index}>
                <td>{row.EnrollmentDate}</td>
                <td>{row.Name}</td>
                <td>{row.Code}</td>
                <td>{row.RoleId}</td>
                <td>{row.EnrolledUserCampusID}</td>
                <td>{row.UserId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  function TableTAData({ data, currentPage, itemsPerPage }){

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const currentData = data.slice(startIndex, endIndex);

    return (
      <div>
        <table className='table3'>
          <thead className='heading'>
            <tr>
              <th>Enrollment Date</th>
              <th>Course Name</th>
              <th>Course Code</th>
              <th>Role</th>
              <th>Enrolled User CampusID</th>
              <th>Instructional Admin</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((row, index) => (
              <tr key={index}>
                <td>{row.EnrollmentDate}</td>
                <td>{row.Name}</td>
                <td>{row.Code}</td>
                <td>{row.RoleName}</td>
                <td>{row.EnrolledUserCampusID}</td>
                <td>{row.UserId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  function TableTAFullData({data, currentPage, itemsPerPage }){

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const currentData = data.slice(startIndex, endIndex);

    return (
      <div>
        <table className='table4'>
          <thead className='heading'>
            <tr>
              <th>Enrollment Date</th>
              <th>Course Name</th>
              <th>Course Code</th>
              <th>GSU CampusID</th>
              <th>Role</th>
              <th>Semester</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((row, index) => (
              <tr key={index}>
                <td>{row.EnrollmentDate}</td>
                <td>{row.Name}</td>
                <td>{row.Code}</td>
                <td>{row.EnrolledUserCampusID}</td>
                <td>{row.RoleName}</td>
                <td>{row.SemesterName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  function TableTAGraderData({data, currentPage, itemsPerPage }){

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const currentData = data.slice(startIndex, endIndex);

    return (
      <div>
        <table className='table5'>
          <thead className='heading'>
            <tr>
              <th>Enrollment Date</th>
              <th>Course Name</th>
              <th>Course Code</th>
              <th>GSU CampusID</th>
              <th>Role</th>
              <th>Semester</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((row, index) => (
              <tr key={index}>
                <td>{row.EnrollmentDate}</td>
                <td>{row.Name}</td>
                <td>{row.Code}</td>
                <td>{row.EnrolledUserCampusID}</td>
                <td>{row.RoleId}</td>
                <td>{row.SemesterName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }