import React from "react";
import ReactPaginate from "react-paginate";

const CustomPagination = ({
  handlePageNumber,
  dataLength = 0,
  itemsPerPage = 10,
}) => {
  const pageCount = Math.ceil(dataLength / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    handlePageNumber(event.selected);
  };
  return (
    <div className={`mb-10  ${dataLength > 0 ? "block" : "hidden"}`}>
      <ReactPaginate
        className="flex items-center justify-center"
        pageClassName="  rounded  border font-bold text-xs cursor-pointer hover:bg-teal-600 hover:text-white duration-100"
        pageLinkClassName="w-7 h-7 sm:w-10 sm:h-9 grid place-items-center"
        activeClassName="bg-teal-600 text-white"
        breakClassName="w-7 h-7 sm:w-10 sm:h-9 grid place-items-center rounded  border font-bold text-xs cursor-pointer hover:bg-teal-600 hover:text-white duration-100"
        previousClassName="rounded  border font-bold text-xs cursor-pointer hover:bg-teal-700 hover:text-white duration-100 select-none"
        previousLinkClassName="w-7 h-7 sm:w-10 sm:h-9 grid place-items-center "
        nextClassName=" rounded  border font-bold text-xs cursor-pointer hover:bg-teal-700 hover:text-white duration-100 select-none"
        nextLinkClassName="w-7 h-7 sm:w-10 sm:h-9 grid place-items-center "
        disabledClassName="opacity-50 cursor-not-allowed"
        disabledLinkClassName="cursor-not-allowed"
        breakLabel="..."
        nextLabel=" >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< "
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default CustomPagination;
