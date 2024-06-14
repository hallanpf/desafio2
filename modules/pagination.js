module.exports = {
  paginate: function (data, page, perPage) {
    const offset = (page - 1) * perPage;
    const paginatedItems = data.slice(offset, offset + perPage);
    return paginatedItems;
  },

  createPaginationButtons: function (
    totalItems,
    currentPage,
    perPage,
    sortOption
  ) {
    const totalPages = Math.ceil(totalItems / perPage);
    let buttons = "";

    if (currentPage > 1) {
      buttons += `<a href="/results?page=${
        currentPage - 1
      }&sort=${sortOption}" class="pagination-button">Previous</a>`;
    }

    for (let i = 1; i <= totalPages; i++) {
      buttons += `<a href="/results?page=${i}&sort=${sortOption}" class="pagination-button ${
        currentPage === i ? "active" : ""
      }">${i}</a>`;
    }

    if (currentPage < totalPages) {
      buttons += `<a href="/results?page=${
        currentPage + 1
      }&sort=${sortOption}" class="pagination-button">Next</a>`;
    }

    return buttons;
  },

  // createPaginationButtons: function (totalItems, currentPage, perPage) {
  //   const totalPages = Math.ceil(totalItems / perPage);
  //   let buttons = "";

  //   if (currentPage > 1) {
  //     buttons += `<a href="/results?page=${
  //       currentPage - 1
  //     }" class="pagination-button">Previous</a>`;
  //   }

  //   for (let i = 1; i <= totalPages; i++) {
  //     buttons += `<a href="/results?page=${i}" class="pagination-button ${
  //       currentPage === i ? "active" : ""
  //     }">${i}</a>`;
  //   }

  //   if (currentPage < totalPages) {
  //     buttons += `<a href="/results?page=${
  //       currentPage + 1
  //     }" class="pagination-button">Next</a>`;
  //   }

  //   return buttons;
  // },
};
