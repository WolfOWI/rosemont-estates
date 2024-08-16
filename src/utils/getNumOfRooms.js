export function getNumOfRooms(house) {
  return (
    parseInt(house.numBed) +
    parseInt(house.numBath) +
    parseInt(house.numKitchen) +
    parseInt(house.numDining) +
    parseInt(house.numGym) +
    parseInt(house.numBilliard) +
    parseInt(house.numBasement) +
    parseInt(house.numGarage)
  );
}
