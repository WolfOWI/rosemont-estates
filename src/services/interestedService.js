// Interested List (Buyers & Renters) CRUD Functionality

// CREATE FUNCTIONS
// ----------------------------------------------------------------------------
// Create a new interested entity by houseId
export async function createInterested(houseId) {
  try {
    const response = await fetch(
      `http://localhost/rosemont/backend/api/interested/createInterestedByHouseId.php?houseId=${houseId}`,
      {
        method: "POST",
        credentials: "include",
      }
    );

    if (!response.ok) {
      throw new Error("Couldn't create interested entity");
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Failed to create interested entity: ", error);
    throw error;
  }
}
// ----------------------------------------------------------------------------

// READ FUNCTIONS
// ----------------------------------------------------------------------------
// Get Interested Entities
export async function fetchInterested() {
  try {
    const response = await fetch(
      "http://localhost/rosemont/backend/api/interested/getInterested.php",
      {
        method: "GET",
        credentials: "include", // Include cookies in the request
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const interested = await response.json();
    return interested;
  } catch (error) {
    console.error("Error fetching interested entities:", error);
    throw error;
  }
}

// Get Interested Customer & House Details (INNER JOIN)
export async function fetchFullInterestList() {
  try {
    const response = await fetch(
      "http://localhost/rosemont/backend/api/interested/getInterestedUserHouse.php",
      {
        method: "GET",
        credentials: "include", // Include cookies in the request
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const interested = await response.json();
    return interested;
  } catch (error) {
    console.error("Error fetching full interested list:", error);
    throw error;
  }
}
// ----------------------------------------------------------------------------

// UPDATE FUNCTIONS
// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------

// DELETE FUNCTIONS
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
