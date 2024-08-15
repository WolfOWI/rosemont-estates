// House Functions

export async function fetchAllHouses() {
  try {
    const response = await fetch("http://localhost/rosemont/backend/api/house/getHouses.php", {
      method: "GET",
      credentials: "include", // Include cookies in the request
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const houses = await response.json();
    return houses;
  } catch (error) {
    console.error("Error fetching houses:", error);
    throw error;
  }
}
