import React from "react";

export default function TableInstructorData({ data, currentPage, itemsPerPage }) {

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