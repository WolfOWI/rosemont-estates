// Filtering of Houses

// STAGE 1: Min & Max Price Filtering
// ----------------------------------------------------
export function filterHousesByPrice(houseArr, minPrice, maxPrice) {
  //   console.log(houseArr);
  //   console.log(minPrice);
  //   console.log(maxPrice);

  return houseArr.filter((house) => house.price >= minPrice && house.price <= maxPrice);
}
// ----------------------------------------------------

// STAGE 2: Interior Filtering
// ----------------------------------------------------
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
// ----------------------------------------------------

// STAGE 3: Exterior Filtering
// ----------------------------------------------------
export function filterHousesByOutdoors(houseArr, outdoorsFilterObj) {
  console.log("Houses Received:");
  console.log(houseArr);
  console.log("Exterior Filter Object:");
  console.log(outdoorsFilterObj);

  let filteredHouses = houseArr;

  // Filter by Swimming Pools
  if (outdoorsFilterObj.pool > 0) {
    filteredHouses = filteredHouses.filter((house) => house.numPool >= outdoorsFilterObj.pool);
    console.log("Pool Filter:");
    console.log(filteredHouses);
  }

  // Filter by Courts
  if (outdoorsFilterObj.court > 0) {
    filteredHouses = filteredHouses.filter((house) => house.numCourt >= outdoorsFilterObj.court);
    console.log("Court Filter:");
    console.log(filteredHouses);
  }

  // Filter by Decks
  if (outdoorsFilterObj.deck > 0) {
    filteredHouses = filteredHouses.filter((house) => house.numDeck >= outdoorsFilterObj.deck);
    console.log("Deck Filter:");
    console.log(filteredHouses);
  }

  // Filter by Flower Gardens
  if (outdoorsFilterObj.flowerGard > 0) {
    filteredHouses = filteredHouses.filter(
      (house) => house.numFlowerGard >= outdoorsFilterObj.flowerGard
    );
    console.log("Flower Garden Filter:");
    console.log(filteredHouses);
  }

  // Filter by Vegetable Gardens
  if (outdoorsFilterObj.vegGard > 0) {
    filteredHouses = filteredHouses.filter(
      (house) => house.numVegGard >= outdoorsFilterObj.vegGard
    );
    console.log("Vegetable Garden Filter:");
    console.log(filteredHouses);
  }

  // Filter by Orchards
  if (outdoorsFilterObj.orchard > 0) {
    filteredHouses = filteredHouses.filter(
      (house) => house.numOrchard >= outdoorsFilterObj.orchard
    );
    console.log("Orchard Filter:");
    console.log(filteredHouses);
  }

  // Return the final filtered array
  return filteredHouses;
}
// ----------------------------------------------------
