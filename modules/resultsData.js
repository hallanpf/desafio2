let currentPage = 1;
let itemsPerPage = 8;

function renderPage(page) {
  document.querySelector(".product-list").innerHTML = "";

  let start = (page - 1) * itemsPerPage;
  let end = start + itemsPerPage;

  data.slice(start, end).forEach(function (product) {
    let li = document.createElement("li");
    li.className = "product-item";

    li.innerHTML = `
          <div class="condition" ${
            product.condition ? "" : 'id="not-price-condition"'
          }>
            <img class="product-condition ${
              product.condition ? "active" : ""
            }" src="${product.conditionPrice}" alt="Condition">
          </div>
          <img class="product-image" src="${product.image}" alt="${
      product.productName
    }">
          <div class="product-info">
            <h3>${product.productName}</h3>
            <p class="product-description">${product.description}</p>
            <div class="price">
              <p class="product-price">Rp ${product.price}</p>
              <p class="product-discount ${
                product.condition ? "active" : ""
              }">${product.priceDiscount}</p>
            </div>
            <div class="overlay" id="product-overlay">
              <div class="product-link">
                <div class="product-details">
                  <a href="/product?id=${product.id}">See Details</a>
                </div>
                <div class="product-buttons">
                  <a href="#"><img src="../desafio2/images/share-icon.png" alt="Share Button"></a> 
                  <a href="#"><img src="../desafio2/images/compare-icon.png" alt="Compare Button"></a> 
                  <a href="#"><img src="../desafio2/images/like-icon.png" alt="Like Button"></a>
                </div>
              </div>
            </div>
          </div>
        `;

    document.querySelector(".product-list").appendChild(li);
  });

  let totalProducts = data.length;
  let displayedProducts = Math.min(end, totalProducts);
  let resultsInfo = document.querySelector(".results-info");
  resultsInfo.textContent = `Showing ${
    start + 1
  }-${displayedProducts} of ${totalProducts} results`;
}

document
  .querySelector("#items-per-page-input")
  .addEventListener("change", function (e) {
    itemsPerPage = parseInt(e.target.value, 10);
    updatePage();
  });

function renderFilterProducts(filterOption) {
  if (filterOption === "A-Z") {
    data.sort((a, b) => a.productName.localeCompare(b.productName));
  } else if (filterOption === "Z-A") {
    data.sort((a, b) => b.productName.localeCompare(a.productName));
  } else if (filterOption === "Higher to Lower") {
    data.sort((a, b) => b.price - a.price);
  } else if (filterOption === "Lower to Higher") {
    data.sort((a, b) => a.price - b.price);
  } else if (filterOption === "Default") {
    data.sort((a, b) => a.id - b.id);
  }

  // console.log(data);
  updatePage();
}

const filterButton = document.getElementById("filter-button");
const filterMenu = document.querySelector(".filter-menu");

filterButton.addEventListener("click", () => {
  filterMenu.classList.toggle("active");
});

document.addEventListener("click", (event) => {
  if (
    filterMenu.contains(event.target) &&
    !filterButton.contains(event.target)
  ) {
    filterMenu.classList.remove("active");
  }
});

function renderPaginationButtons() {
  let totalPages = Math.ceil(data.length / itemsPerPage);
  let paginationContainer = document.querySelector(".pagination-container");

  paginationContainer.innerHTML = "";

  if (currentPage > 1) {
    let prevButton = document.createElement("button");
    prevButton.textContent = "Previous";
    prevButton.addEventListener("click", function () {
      currentPage--;
      updatePage();
    });
    paginationContainer.appendChild(prevButton);
  }

  for (let i = 1; i <= totalPages; i++) {
    let pageButton = document.createElement("button");
    pageButton.textContent = i;
    if (i === currentPage) {
      pageButton.disabled = true;
    }
    pageButton.addEventListener("click", function (e) {
      currentPage = parseInt(e.target.textContent, 10);
      updatePage();
    });
    paginationContainer.appendChild(pageButton);
  }

  if (currentPage < totalPages) {
    let nextButton = document.createElement("button");
    nextButton.textContent = "Next";
    nextButton.addEventListener("click", function () {
      currentPage++;
      updatePage();
    });
    paginationContainer.appendChild(nextButton);
  }
}

function updatePage() {
  renderPage(currentPage);
  renderPaginationButtons();
}

document.addEventListener("DOMContentLoaded", function () {
  updatePage();
});
