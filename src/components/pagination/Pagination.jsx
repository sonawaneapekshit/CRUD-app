import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({ totalPosts, pageSize, setcurrentPage, currentPage }) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPosts / pageSize); i++) {
    pages.push(i);
  }
  return (
    <div className="m-auto py-5 flex gap-4 justify-center">
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            onClick={() => setcurrentPage(page)}
            className={`border rounded p-5  hover:cursor-pointer ${
              currentPage === page
                ? 'active bg-amber-300 text-zinc-600 font-bold'
                : 'font-medium'
            }`}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

Pagination.propTypes = {
  totalPosts: PropTypes.number,
  pageSize: PropTypes.number,
  setcurrentPage: PropTypes.func,
};

export default Pagination;
