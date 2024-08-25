// Filtering of Houses

// Stage 1: Price
export function filterHousesByPrice(houseArr, minPrice, maxPrice) {
  // Filter the houses based on the price range
  console.log("filterHousesByPrice: I got this:");
  console.log(houseArr);
  console.log(minPrice);
  console.log(maxPrice);

  return houseArr.filter((house) => house.price >= minPrice && house.price <= maxPrice);
}
