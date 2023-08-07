import React from "react";

const PaginationNew = ({ itemsPerPage, totalItems, currentPage, onPageChange }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  // Calculate the range of items being displayed on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const countToShow = `${indexOfFirstItem + 1} to ${Math.min(indexOfLastItem, totalItems)} out of ${totalItems}`;

  return (
    <div>
      <div class="row">
      <div class="col-6">
        <p className="item-count">{countToShow}</p>
      </div>
      <div class="col-6">
        <ul className="pagination">
          {pageNumbers.map((number) => (
            <li key={number} className={`page-item ${currentPage === number ? "active" : ""}`}>
              <button className="page-link" onClick={() => onPageChange(number)}>
                {number}
              </button>
            </li>
          ))}
        </ul>
      </div>
      </div>
      
    </div>
  );
};



export default PaginationNew;
