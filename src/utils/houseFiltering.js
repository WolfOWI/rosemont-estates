// Filtering of Houses

// STAGE 1: Min & Max Price Filtering
export function filterHousesByPrice(houseArr, minPrice, maxPrice) {
  //   console.log(houseArr);
  //   console.log(minPrice);
  //   console.log(maxPrice);

  return houseArr.filter((house) => house.price >= minPrice && house.price <= maxPrice);
}

export function filterHousesByRooms(houseArr, roomsFilterObj) {
  // console.log("Houses Received:");
  // console.log(houseArr);
  // console.log("Rooms Filter Object:");
  // console.log(roomsFilterObj);
  let filteredHouses = houseArr;

  // Filter bedrooms
  if (roomsFilterObj.bed > 0) {
    filteredHouses = filteredHouses.filter((house) => house.numBed >= roomsFilterObj.bed);
    // console.log("Bedroom Filter");
    // console.log(filteredHouses);
  }

  // Filter bathrooms
  if (roomsFilterObj.bath > 0) {
    filteredHouses = filteredHouses.filter((house) => house.numBath >= roomsFilterObj.bath);
    // console.log("Bathroom Filter");
    // console.log(filteredHouses);
  }

  // Filter kitchens
  if (roomsFilterObj.kitchen > 0) {
    filteredHouses = filteredHouses.filter((house) => house.numKitchen >= roomsFilterObj.kitchen);
    // console.log("Kichen Filter");
    // console.log(filteredHouses);
  }

  // Filter dining rooms
  if (roomsFilterObj.dining > 0) {
    filteredHouses = filteredHouses.filter((house) => house.numDining >= roomsFilterObj.dining);
    // console.log("Dining Room Filter");
    // console.log(filteredHouses);
  }

  // Filter gyms
  if (roomsFilterObj.gym > 0) {
    filteredHouses = filteredHouses.filter((house) => house.numGym >= roomsFilterObj.gym);
    // console.log("Gym Filter");
    // console.log(filteredHouses);
  }

  // Filter billiard rooms
  if (roomsFilterObj.billiard > 0) {
    filteredHouses = filteredHouses.filter((house) => house.numBilliard >= roomsFilterObj.billiard);
    // console.log("Billiard Filter");
    // console.log(filteredHouses);
  }

  // Filter basements
  if (roomsFilterObj.basement > 0) {
    filteredHouses = filteredHouses.filter((house) => house.numBasement >= roomsFilterObj.basement);
    // console.log("Basement Filter");
    // console.log(filteredHouses);
  }

  // Filter garages
  if (roomsFilterObj.garage > 0) {
    filteredHouses = filteredHouses.filter((house) => house.numGarage >= roomsFilterObj.garage);
    // console.log("Garage Filter");
    // console.log(filteredHouses);
  }

  // console.log("Final filtered Houses");
  // console.log(filteredHouses);

  return filteredHouses;
}
