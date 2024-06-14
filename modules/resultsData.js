var currentPage = 1;
var itemsPerPage = 8;

function renderPage(page) {
  document.querySelector(".product-list").innerHTML = "";

  var start = (page - 1) * itemsPerPage;
  var end = start + itemsPerPage;

  data.slice(start, end).forEach(function (product) {
    var li = document.createElement("li");
    li.className = "product-item";

    li.innerHTML = `
          <div class="condition" ${
            product.condition ? "" : 'style="display: none;"'
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
}

function renderPaginationButtons() {
  var totalPages = Math.ceil(data.length / itemsPerPage);
  var paginationContainer = document.querySelector(".pagination-container");

  paginationContainer.innerHTML = "";

  if (currentPage > 1) {
    var prevButton = document.createElement("button");
    prevButton.textContent = "Previous";
    prevButton.addEventListener("click", function () {
      currentPage--;
      updatePage();
    });
    paginationContainer.appendChild(prevButton);
  }

  for (var i = 1; i <= totalPages; i++) {
    var pageButton = document.createElement("button");
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
    var nextButton = document.createElement("button");
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

document.querySelector(".previous-page").addEventListener("click", function () {
  if (currentPage > 1) {
    currentPage--;
    updatePage();
  }
});

document.querySelector(".next-page").addEventListener("click", function () {
  if (currentPage < Math.ceil(data.length / itemsPerPage)) {
    currentPage++;
    updatePage();
  }
});
