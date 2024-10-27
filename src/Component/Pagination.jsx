import React from 'react';

const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const maxVisiblePages = 5; // Maximum number of pages to show

    const getPaginationItems = () => {
        const paginationItems = [];

        if (totalPages <= maxVisiblePages) {
            // Show all pages if total pages are less than or equal to maxVisiblePages
            for (let i = 1; i <= totalPages; i++) {
                paginationItems.push(i);
            }
        } else {
            // Show the first two pages
            paginationItems.push(1, 2);

            if (currentPage > 3) {
                paginationItems.push('...'); // Add ellipsis if there are more pages
            }

            // Calculate start and end range for the current page
            const startPage = Math.max(3, currentPage - 1);
            const endPage = Math.min(totalPages - 1, currentPage + 1);

            for (let i = startPage; i <= endPage; i++) {
                paginationItems.push(i);
            }

            if (currentPage < totalPages - 2) {
                paginationItems.push('...'); // Add ellipsis if there are more pages
            }

            // Show the last two pages
            paginationItems.push(totalPages - 1, totalPages);
        }

        return paginationItems;
    };

    return (
        <nav>
            <ul className="pagination">
                <li
                    className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}
                    onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
                >
                    <button className="page-link">Previous</button>
                </li>
                {getPaginationItems().map((page, index) => (
                    <li
                        key={index}
                        className={`page-item ${page === currentPage ? 'active' : ''} ${page === '...' ? 'disabled' : ''}`}
                        onClick={() => page !== '...' && onPageChange(page)}
                    >
                        <button className="page-link">{page}</button>
                    </li>
                ))}
                <li
                    className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}
                    onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
                >
                    <button className="page-link">Next</button>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
