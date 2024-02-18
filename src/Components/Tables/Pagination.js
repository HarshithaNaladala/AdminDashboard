export default function Pagination({
    instructorData, 
    instructorInstructionalData, 
    taInstructionalData, 
    taFullAccessData, 
    taGraderData, 
    selectedTable, 
    currentPage, 
    setCurrentPage}){

    const itemsPerPage = 10;

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
  


    return { itemsPerPage, previousPage, nextPage, totalPages };
}