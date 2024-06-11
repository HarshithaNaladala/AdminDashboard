// import { useState, useEffect } from "react";

// export default function useFetchData(selectedSemester, formattedSemester, currentPage) {

//   const [instructorData, setInstructorData] = useState([]);
//   const [instructorInstructionalData, setInstructorInstructionalData] = useState([]);
//   const [taInstructionalData, setTaInstructionalData] = useState([]);
//   const [taFullAccessData, setTaFullAccessData] = useState([]);
//   const [taGraderData, setTaGraderData] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     async function fetchData() {
//       setLoading(true);
//       setTimeout(async () => {
//         if (formattedSemester) {
//           try {
//             // const response1 = await fetch(`https://learningtoolsdev.gsu.edu/lti_tools/admindashboard/getinstructorbyadmin?token=9264211c-c9e0-46ac-82a5-44681310be84&semester=${formattedSemester}`);
//             const response1 = await fetch(`https://learningtoolsdev.gsu.edu/admindashboard/api/instructorbyadmin?token=uwUdJxI/X17AOyqTDG9gY57pr7/QbGaFHGQtwsFDwEDvYgsccsVR4g==&semester=${formattedSemester}`);
//             if (response1.ok) {
//               const data1 = await response1.json();
//               setInstructorData(data1);
//             } else {
//               console.error('API request 1 failed');
//             }

//             // const response2 = await fetch(`https://learningtoolsdev.gsu.edu/lti_tools/admindashboard/getinstructbyadmininstruct?token=9264211c-c9e0-46ac-82a5-44681310be84&semester=${formattedSemester}`);
//             const response2 = await fetch(`https://learningtoolsdev.gsu.edu/admindashboard/api/instructbyadmininstruct?token=uwUdJxI/X17AOyqTDG9gY57pr7/QbGaFHGQtwsFDwEDvYgsccsVR4g==&semester=${formattedSemester}`);
//             if (response2.ok) {
//               const data2 = await response2.json();
//               setInstructorInstructionalData(data2);
//             } else {
//               console.error('API request 2 failed');
//             }

//             // const response3 = await fetch(`https://learningtoolsdev.gsu.edu/lti_tools/admindashboard/gettabyinstructadmin?token=9264211c-c9e0-46ac-82a5-44681310be84&semester=${formattedSemester}`);
//             const response3 = await fetch(`https://learningtoolsdev.gsu.edu/admindashboard/api/tabyinstructadmin?token=uwUdJxI/X17AOyqTDG9gY57pr7/QbGaFHGQtwsFDwEDvYgsccsVR4g==&semester=${formattedSemester}`);
//             if (response3.ok) {
//               const data3 = await response3.json();
//               setTaInstructionalData(data3);
//             } else {
//               console.error('API request 3 failed');
//             }

//             // const response4 = await fetch(`https://learningtoolsdev.gsu.edu/lti_tools/admindashboard/gettafullaccess?token=9264211c-c9e0-46ac-82a5-44681310be84&semester=${formattedSemester}`);
//             const response4 = await fetch(`https://learningtoolsdev.gsu.edu/admindashboard/api/tafullaccess?token=uwUdJxI/X17AOyqTDG9gY57pr7/QbGaFHGQtwsFDwEDvYgsccsVR4g==&semester=${formattedSemester}`);
//             if (response4.ok) {
//               const data4 = await response4.json();
//               setTaFullAccessData(data4);
//             } else {
//               console.error('API request 4 failed');
//             }

//             // const response5 = await fetch(`https://learningtoolsdev.gsu.edu/lti_tools/admindashboard/gettagrader?token=9264211c-c9e0-46ac-82a5-44681310be84&semester=${formattedSemester}`);
//             const response5 = await fetch(`https://learningtoolsdev.gsu.edu/admindashboard/api/tagrader?token=uwUdJxI/X17AOyqTDG9gY57pr7/QbGaFHGQtwsFDwEDvYgsccsVR4g==&semester=${formattedSemester}`);
//             if (response5.ok) {
//               const data5 = await response5.json();
//               setTaGraderData(data5);
//               console.log("TA Full Access fetched:", data5);
//             } else {
//               console.error('API request 5 failed');
//             }
//           } catch (error) {
//             console.error('API request error:', error);
//           }

//           finally {
//             setLoading(false);
//           }
//         }
//       }, 10)
//     }
//     fetchData();
//   }, [formattedSemester, selectedSemester, currentPage]);

//   return { instructorData, instructorInstructionalData, taInstructionalData, taFullAccessData, taGraderData, loading };
// }






import { useQuery } from '@tanstack/react-query';

async function fetchData(formattedSemester, currentPage) {
  if (!formattedSemester) return {};

  const response1 = await fetch(`https://learningtoolsdev.gsu.edu/admindashboard/api/instructorbyadmin?token=uwUdJxI/X17AOyqTDG9gY57pr7/QbGaFHGQtwsFDwEDvYgsccsVR4g==&semester=${formattedSemester}`);
  const data1 = response1.ok ? await response1.json() : [];

  const response2 = await fetch(`https://learningtoolsdev.gsu.edu/admindashboard/api/instructbyadmininstruct?token=uwUdJxI/X17AOyqTDG9gY57pr7/QbGaFHGQtwsFDwEDvYgsccsVR4g==&semester=${formattedSemester}`);
  const data2 = response2.ok ? await response2.json() : [];

  const response3 = await fetch(`https://learningtoolsdev.gsu.edu/admindashboard/api/tabyinstructadmin?token=uwUdJxI/X17AOyqTDG9gY57pr7/QbGaFHGQtwsFDwEDvYgsccsVR4g==&semester=${formattedSemester}`);
  const data3 = response3.ok ? await response3.json() : [];

  const response4 = await fetch(`https://learningtoolsdev.gsu.edu/admindashboard/api/tafullaccess?token=uwUdJxI/X17AOyqTDG9gY57pr7/QbGaFHGQtwsFDwEDvYgsccsVR4g==&semester=${formattedSemester}`);
  const data4 = response4.ok ? await response4.json() : [];

  const response5 = await fetch(`https://learningtoolsdev.gsu.edu/admindashboard/api/tagrader?token=uwUdJxI/X17AOyqTDG9gY57pr7/QbGaFHGQtwsFDwEDvYgsccsVR4g==&semester=${formattedSemester}`);
  const data5 = response5.ok ? await response5.json() : [];

  return {
    instructorData: data1,
    instructorInstructionalData: data2,
    taInstructionalData: data3,
    taFullAccessData: data4,
    taGraderData: data5
  };
}

export default function useFetchData(formattedSemester, currentPage) {
  return useQuery({
    queryKey: ['fetchData', formattedSemester, currentPage],
    queryFn: () => fetchData(formattedSemester, currentPage),
    enabled: !!formattedSemester,
    keepPreviousData: true,
  });
}

