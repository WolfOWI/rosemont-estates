// Saved Houses (Wishlist) Functions

// Get SavedHouseIds by Logged in User's id
export async function getSavedHouseIdsByUserId() {
  console.log("inside getSavedHouseIdsByUserId");
  try {
    const response = await fetch(
      `http://localhost/rosemont/backend/api/saved/getSavedHouseIdsByUserId.php`,
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
