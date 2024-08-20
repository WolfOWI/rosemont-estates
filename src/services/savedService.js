// Saved Houses (Wishlist) Functions

// GET FUNCTIONS
// Get SavedHouseIds by Logged in User's id
export async function getSavedHouseIdsByUserId() {
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

// DELETE FUNCTIONS
// Remove a saved house by its ID
export async function removeSavedHouse(houseId) {
  console.log("removeSavedHouse by houseId of");
  console.log(houseId);
  try {
    const response = await fetch(
      `http://localhost/rosemont/backend/api/saved/deleteSaved.php?houseId=${houseId}`,
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
