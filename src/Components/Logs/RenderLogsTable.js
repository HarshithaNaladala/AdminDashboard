import React from "react";

export default function RenderLogsTable( {logs, currentPage, itemsPerPage} ) {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const currentData = logs.slice(startIndex, endIndex);

    return (
    <div>
        <table className="LogsData">
            <thead>
                <tr>
                    <th>Date Added</th>
                    <th>Course Type</th>
                    <th>Requestor Email</th>
                    <th>Additional Instructors</th>
                    <th>Course Offering Code</th>
                    <th>Course Name</th>
                    <th>Date Created</th>
                    <th>Date Enrolled</th>
                </tr>
            </thead>
            <tbody>
                {currentData.map((row, index) => (
                    <tr key={index}>
                        <td>{row.dateAdded}</td>
                        <td>{row.courseType}</td>
                        <td>{row.requestorEmail}</td>
                        <td>{row.additionalInstructors}</td>
                        <td>{row.courseOfferingCode}</td>
                        <td>{row.courseName}</td>
                        <td>{row.dateCreated}</td>
                        <td>{row.dateEnrolled}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  );
}