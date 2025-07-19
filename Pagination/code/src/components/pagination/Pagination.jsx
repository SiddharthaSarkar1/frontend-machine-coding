import React, { useState } from "react";

const PAGE_SIZE = 10;
const DEFAULT_PAGE = 1;

const Pagination = ({
  data,
  renderRow,
  rowPerPage = PAGE_SIZE,
  className = "",
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(rowPerPage);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const visibleData = data.slice(startIndex, endIndex);
  const totalPages = Math.ceil(data.length / pageSize);

  const pageNumberButtons = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <div className={`pagination ${className}`}>
      <div className="pagination-content">
        {visibleData.map((item, index) => (
          <div key={index}>{renderRow(item, index)}</div>
        ))}
      </div>
      <div className="pagination-footer">
        <select onChange={(e) => setPageSize(Number(e.target.value))}>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={30}>30</option>
          <option value={40}>40</option>
          <option value={50}>50</option>
        </select>
        <button onClick={() => setCurrentPage(1)} disabled={currentPage === 1}>
          First
        </button>
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {pageNumberButtons.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => setCurrentPage(pageNumber)}
            style={{
              backgroundColor: currentPage === pageNumber ? "pink" : "yellow",
            }}
          >
            {pageNumber}
          </button>
        ))}
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(totalPages)}
        >
          Last
        </button>
      </div>
    </div>
  );
};

export default Pagination;
