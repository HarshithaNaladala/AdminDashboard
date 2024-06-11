// import { useEffect } from "react";

// export default function SemesterFetcher({ setSemesterOptions }) {
//   useEffect(() => {
//     async function fetchSemesters() {
//       try {
//         // const response = await fetch('https://learningtoolsdev.gsu.edu/lti_tools/admindashboard/semesters?token=9264211c-c9e0-46ac-82a5-44681310be84');
//         const response = await fetch('https://learningtoolsdev.gsu.edu/admindashboard/api/semesters');
//         if (response.ok) {
//           const data = await response.json();
//           setSemesterOptions(data);
//         } else {
//           console.error('API request failed');
//         }
//       } catch (error) {
//         console.error('API request error:', error);
//       }
//     }

//     fetchSemesters();
//   }, [setSemesterOptions]);

//   return null;
// }

import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

async function fetchSemesters() {
  const response = await fetch('https://learningtoolsdev.gsu.edu/admindashboard/api/semesters');
  if (!response.ok) {
    throw new Error('API request failed');
  }
  return response.json();
}

export default function SemesterFetcher({ setSemesterOptions }) {
  const { data } = useQuery({
    queryKey: ['semesters'],
    queryFn: fetchSemesters,
    staleTime: 5 * 60 * 1000,
  });

  useEffect(() => {
    if (data) {
      setSemesterOptions(data);
    }
  }, [data, setSemesterOptions]);

  return null;
}


