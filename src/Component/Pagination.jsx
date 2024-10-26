import React from 'react';

const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    return (
        <nav>
            <ul className="pagination">
                <li
                    className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}
                    onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
                >
                    <button className="page-link">Previous</button>
                </li>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <li
                        key={page}
                        className={`page-item ${page === currentPage ? 'active' : ''}`}
                        onClick={() => onPageChange(page)}
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
