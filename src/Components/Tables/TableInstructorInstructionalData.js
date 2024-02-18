import React from "react";

export default function TableInstructorInstructionalData({ data, currentPage, itemsPerPage }) {

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