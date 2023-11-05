import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="pagination">
      {pageNumbers.map((number) => (
        <button
          key={number}
          className={`${number === currentPage ? "active" : ""} btn`}
          onClick={() => onPageChange(number)}
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
