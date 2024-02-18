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
                    <th>Course Type</th>
                    <th>Requestor Email</th>
                    <th>Subject Code</th>
                    <th>Semester</th>
                    <th>Academic Year</th>
                    <th>Course Number</th>
                </tr>
            </thead>
            <tbody>
                {currentData.map((row, index) => (
                    <tr key={index}>
                        <td>{row.courseType}</td>
                        <td>{row.requestorEmail}</td>
                        <td>{row.subjectCode}</td>
                        <td>{row.semester}</td>
                        <td>{row.academicYear}</td>
                        <td>{row.courseNumber}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  );
}