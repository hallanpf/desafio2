module.exports = {
  sort: function (data, sortOption) {
    let sortedData;
    switch (sortOption) {
      case "ID":
        sortedData = data.sort((a, b) => a.id - b.id);
        break;
      case "AZ":
        sortedData = data.sort((a, b) =>
          a.productName.localeCompare(b.productName)
        );
        break;
      case "ZA":
        sortedData = data.sort((a, b) =>
          b.productName.localeCompare(a.productName)
        );
        break;
      case "PriceHighLow":
        sortedData = data.sort((a, b) => Number(b.price) - Number(a.price));
        break;
      case "PriceLowHigh":
        sortedData = data.sort((a, b) => Number(a.price) - Number(b.price));
        break;
      case "Default":
        sortedData = data.sort((a, b) => a.id - b.id);
        break;
    }
    return sortedData;
  },
};
