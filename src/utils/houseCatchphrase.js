export function houseCatchphrase(house) {
  let houseStyle = house.style.charAt(0).toUpperCase() + house.style.slice(1);

  // Check if house.suburb is defined and not empty
  let houseSuburb = house.suburb
    ? house.suburb.charAt(0).toUpperCase() + house.suburb.slice(1)
    : "Unknown Suburb";

  return `${house.numBed} Bedroom ${houseStyle} Mansion in ${houseSuburb}`;
}
