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
// Get All Interested Entities
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

// Get Interested Entities By HouseId
export async function fetchInterestedByHouseId(houseId) {
  try {
    const response = await fetch(
      `http://localhost/rosemont/backend/api/interested/getInterestedByHouseId.php?houseId=${houseId}`,
      {
        method: "GET",
        credentials: "include",
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const interested = await response.json();
    return interested;
  } catch (error) {
    console.error("Error fetching interested entities by house Id:", error);
    throw error;
  }
}

// Get Interested Entities by Session User Id
export async function fetchInterestedBySessionUserId() {
  try {
    const response = await fetch(
      `http://localhost/rosemont/backend/api/interested/getInterestedBySessionUserId.php`,
      {
        method: "GET",
        credentials: "include",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch interested entities by session user");
    }

    const savedHouseIds = await response.json();
    return savedHouseIds;
  } catch (error) {
    console.error("Error fetching interested entities by session user:", error);
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
// Delete interest by houseId (and logged in user id)
export async function deleteSessionUserInterestedByHouseId(houseId) {
  try {
    const response = await fetch(
      `http://localhost/rosemont/backend/api/interested/deleteInterestedBySessionUserHouseId.php?houseId=${houseId}`,
      {
        method: "POST",
        credentials: "include",
      }
    );

    if (!response.ok) {
      throw new Error("Couldn't delete interested entity");
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Failed to delete interested entity: ", error);
    throw error;
  }
}

// Delete interest by houseId only (can be multiple)
export async function deleteInterestedByHouseId(houseId) {
  try {
    const response = await fetch(
      `http://localhost/rosemont/backend/api/interested/deleteInterestedByHouseId.php?houseId=${houseId}`,
      {
        method: "POST",
        credentials: "include",
      }
    );

    if (!response.ok) {
      throw new Error("Couldn't delete interested entity");
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Failed to delete interested entity: ", error);
    throw error;
  }
}

// Delete interest by userId & houseId
export async function deleteInterestedByUserIdHouseId(userId, houseId) {
  try {
    const response = await fetch(
      `http://localhost/rosemont/backend/api/interested/deleteInterestedByUserIdHouseId.php?userId=${userId}&houseId=${houseId}`,
      {
        method: "POST",
        credentials: "include",
      }
    );

    if (!response.ok) {
      throw new Error("Couldn't delete interested entity");
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Failed to delete interested entity: ", error);
    throw error;
  }
}
// ----------------------------------------------------------------------------
