export default function LogsPagination ({logs, currentPage, setCurrentPage}) {

    const itemsPerPage = 10;

    const totalPages = () => {
        if(logs && logs.length>0){
            return Math.ceil( logs.length / itemsPerPage);
        }
    } 

    const goToPage = (page) => {
        if (page >= 1 && page <= totalPages()) {
            setCurrentPage(page);
        }
    };

    const previousPage = () => {
        goToPage(currentPage - 1);
    };

    const nextPage = () => {
        console.log('entered nextpage');
        goToPage(currentPage + 1);
    };

    return { itemsPerPage, previousPage, nextPage, totalPages };
}