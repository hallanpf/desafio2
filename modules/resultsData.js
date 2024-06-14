document.addEventListener("DOMContentLoaded", function () {
  data.forEach(function (product) {
    var li = document.createElement("li");
    li.className = "product-item";

    li.innerHTML = `
        <div class="condition">
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
            <p class="product-discount ${product.condition ? "active" : ""}">${
      product.priceDiscount
    }</p>
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
});
