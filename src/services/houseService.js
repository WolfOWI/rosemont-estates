// House Functions

// GET ALL Houses
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

// CREATE a House
export async function createHouse(houseData) {
  const response = await fetch("http://localhost/rosemont/backend/api/house/createHouse.php", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(houseData),
  });

  if (!response.ok) {
    throw new Error("Failed to create house listing");
  }

  return response.json();
}
