// House Functions

// READ FUNCTIONS
// ----------------------------------------------------------------------------
// Get All Houses
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

// Get House by Id
export async function getHouseById(houseId) {
  const response = await fetch(
    `http://localhost/rosemont/backend/api/house/getHouseById.php?houseId=${houseId}`,
    {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch house details");
  }

  return response.json();
}

// Get Images of Houses By Their Ids
export async function getImagesByHouseId(houseId) {
  try {
    const response = await fetch(
      `http://localhost/rosemont/backend/api/house/getImagesByHouseId.php?houseId=${houseId}`,
      {
        method: "GET",
        credentials: "include",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch house images");
    }

    const images = await response.json();
    return images;
  } catch (error) {
    console.error("Error fetching images:", error);
    throw error;
  }
}

// Get Primary Image of a House By Their Ids
export async function getPrimaryImageByHouseId(houseId) {
  try {
    const response = await fetch(
      `http://localhost/rosemont/backend/api/house/getPrimaryImageByHouseId.php?houseId=${houseId}`,
      {
        method: "GET",
        credentials: "include",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch primary house image");
    }

    const images = await response.json();
    return images;
  } catch (error) {
    console.error("Error fetching images:", error);
    throw error;
  }
}
// ----------------------------------------------------------------------------

// CREATE FUNCTIONS
// ----------------------------------------------------------------------------
// Create a House
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
// ----------------------------------------------------------------------------
