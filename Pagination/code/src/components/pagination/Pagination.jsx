import React, { useState } from "react";

const PAGE_SIZE = 10;
const DEFAULT_PAGE = 1;
const MAX_BUTTONS_DISPLAY = 5;

const Pagination = ({
  loading,
  data,
  totalNumberOfPages = null,
  renderRow,
  rowPerPage = PAGE_SIZE,
  className = "",
  onPageChange = () => {},
}) => {
  const [currentPage, setCurrentPage] = useState(DEFAULT_PAGE);
  const [pageSize, setPageSize] = useState(rowPerPage);

  const startIndex = totalNumberOfPages ? 0 : (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const visibleData = data.slice(startIndex, endIndex);
  const totalPages = totalNumberOfPages ?? Math.ceil(data.length / pageSize);
  const maxButtons = MAX_BUTTONS_DISPLAY;
  let buttonStartIndex = currentPage - Math.floor(maxButtons / 2);
  let buttonEndIndex = currentPage + Math.floor(maxButtons / 2);

  const pageNumberButtons = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  if (buttonStartIndex < 1) {
    buttonStartIndex = 1;
    buttonEndIndex = Math.min(totalPages, maxButtons);
  }

  if (buttonEndIndex > totalPages) {
    buttonEndIndex = totalPages;
    buttonStartIndex = Math.max(1, totalPages - maxButtons + 1);
  }

  const buttonsToDisplay = pageNumberButtons.slice(
    buttonStartIndex - 1,
    buttonEndIndex
  );

  const handlePageChange = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
    onPageChange(pageNumber);
  };

  console.log(buttonStartIndex, buttonEndIndex, totalPages);
  return (
    <div className={`pagination ${className}`}>
      {!loading && (
        <div className="pagination-content">
          {visibleData.map((item, index) => (
            <div key={index}>{renderRow(item, index)}</div>
          ))}
        </div>
      )}
      {loading && <div className="loading">Loading...</div>}
      <div className="pagination-footer">
        <select onChange={(e) => setPageSize(Number(e.target.value))}>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={30}>30</option>
          <option value={40}>40</option>
          <option value={50}>50</option>
        </select>
        <button
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
        >
          First
        </button>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {buttonsToDisplay.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
            style={{
              backgroundColor: currentPage === pageNumber ? "pink" : "yellow",
            }}
          >
            {pageNumber}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>

        <button
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(totalPages)}
        >
          Last
        </button>
      </div>
    </div>
  );
};

export default Pagination;
