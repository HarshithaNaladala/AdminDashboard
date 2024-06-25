export default function Pagination({
  instructorData,
  instructorInstructionalData,
  taInstructionalData,
  taFullAccessData,
  taGraderData,
  selectedTable,
  currentPage,
  setCurrentPage
}) {

  const itemsPerPage = 10;

  const dataMap = {
    1: instructorData,
    2: instructorInstructionalData,
    3: taInstructionalData,
    4: taFullAccessData,
    5: taGraderData
  };

  const totalPages = (selectedTable) => {
    const data = dataMap[selectedTable] || [];
    return data.length ? Math.ceil(data.length / itemsPerPage) : 0;
  };

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages(selectedTable)) {
      setCurrentPage(page);
    }
  };

  const previousPage = () => goToPage(currentPage - 1);
  const nextPage = () => goToPage(currentPage + 1);

  return { itemsPerPage, previousPage, nextPage, totalPages };
}
