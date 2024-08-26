// House Entity CRUD Functionality

// CREATE FUNCTIONS
// ----------------------------------------------------------------------------
// Create a House
export async function createHouse(formData, selectedFiles) {
  // Create a FormData object to handle the form submission
  const formDataToSend = new FormData();

  // Append all form fields to the FormData object
  Object.keys(formData).forEach((key) => {
    formDataToSend.append(key, formData[key]);
  });

  // Append selected files to the FormData object
  selectedFiles.forEach((file) => {
    formDataToSend.append("images[]", file);
  });

  try {
    const response = await fetch("http://localhost/rosemont/backend/api/house/createHouse.php", {
      method: "POST",
      credentials: "include",
      body: formDataToSend,
    });

    const text = await response.text();
    // console.log(text);
    const data = JSON.parse(text);
    return data;
  } catch (error) {
    console.error("Failed to create house: ", error);
    throw error;
  }
}
// ----------------------------------------------------------------------------

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

// Get All Approved Houses
export async function fetchAllApprovedHouses() {
  try {
    const response = await fetch(
      "http://localhost/rosemont/backend/api/house/getApprovedHouses.php",
      {
        method: "GET",
        credentials: "include", // Include cookies in the request
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const apprHouses = await response.json();
    return apprHouses;
  } catch (error) {
    console.error("Error fetching approved houses:", error);
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

// UPDATE FUNCTIONS
// ----------------------------------------------------------------------------
// Update a house
export async function updateHouse(houseId, formData, selectedFiles) {
  const formDataToSend = new FormData();

  // console.log("updateHouse.js: 'I got the formData to send:'");
  // console.log(formData);

  // console.log("updateHouse.js: 'I got these selectedFiles:'");
  // console.log(selectedFiles);

  // Append all form fields to the FormData object
  Object.keys(formData).forEach((key) => {
    formDataToSend.append(key, formData[key]);
  });

  // Append selected files to the FormData object
  selectedFiles.forEach((file) => {
    if (file instanceof File) {
      formDataToSend.append("images[]", file);
    } else {
      formDataToSend.append("existingImages[]", file); // Send existing images as well
    }
  });

  // console.log("updateHouse.js: 'The formDataToSend is:'");
  // console.log(formDataToSend);

  try {
    const response = await fetch(
      `http://localhost/rosemont/backend/api/house/updateHouseById.php?houseId=${houseId}`,
      {
        method: "POST",
        credentials: "include",
        body: formDataToSend,
      }
    );

    if (!response.ok) {
      throw new Error("Failed to update house");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error updating house:", error);
    throw error;
  }
}
// ----------------------------------------------------------------------------

// DELETE FUNCTIONS
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
