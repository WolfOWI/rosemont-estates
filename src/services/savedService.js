// Saved Houses (Wishlist) CRUD Functionality

// CREATE FUNCTIONS
// ----------------------------------------------------------------------------
// Create a new saved house by houseId
export async function addToSaved(houseId) {
  try {
    const response = await fetch(
      `http://localhost/rosemont/backend/api/saved/addSavedByHouseId.php?houseId=${houseId}`,
      {
        method: "POST",
        credentials: "include",
      }
    );

    if (!response.ok) {
      throw new Error("Couldn't create saved house item");
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Failed to create saved item: ", error);
    throw error;
  }
}
// ----------------------------------------------------------------------------

// READ FUNCTIONS
// ----------------------------------------------------------------------------
// Get SavedHouseIds by Logged in User's id
export async function getSavedHouseIdsByUserId() {
  // TODO Update this function name of "ByUserId" to "BySessionUserId"
  try {
    const response = await fetch(
      `http://localhost/rosemont/backend/api/saved/getSavedBySessionUserId.php`,
      {
        method: "GET",
        credentials: "include",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch saved house ids");
    }

    const savedHouseIds = await response.json();
    return savedHouseIds;
  } catch (error) {
    console.error("Error fetching saved house ids:", error);
    throw error;
  }
}
// ----------------------------------------------------------------------------

// UPDATE FUNCTIONS
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------

// DELETE FUNCTIONS
// ----------------------------------------------------------------------------
// Remove all saved houses of a logged in user.
export async function removeAllSavedBySessionUserId() {
  // console.log("removeSavedHouse by houseId of");
  // console.log(houseId);
  try {
    const response = await fetch(
      `http://localhost/rosemont/backend/api/saved/deleteAllSavedBySessionUserId.php`,
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to remove all saved house of logged in user.");
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error removing all saved house of logged in user:", error);
    throw error;
  }
}

// Remove a saved house by its ID
export async function removeSavedHouse(houseId) {
  // console.log("removeSavedHouse by houseId of");
  // console.log(houseId);
  try {
    const response = await fetch(
      `http://localhost/rosemont/backend/api/saved/deleteSavedByHouseId.php?houseId=${houseId}`,
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to remove saved house");
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error removing saved house:", error);
    throw error;
  }
}
// ----------------------------------------------------------------------------
