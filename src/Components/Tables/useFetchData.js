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

