function applyFilter() {
  const sortOption = document.getElementById("sort").value;
  // const perPage = document.getElementById("perPage").value;
  window.location.href = `/results?sort=${sortOption}`;
}
//&perPage=${perPage}
