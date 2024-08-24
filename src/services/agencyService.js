// Real Estate Agencies CRUD Functionality

// CREATE FUNCTIONS
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------

// READ FUNCTIONS
// ----------------------------------------------------------------------------
// Get All Real Estate Agencies
export async function fetchAllAgencies() {
  try {
    const response = await fetch("http://localhost/rosemont/backend/api/agency/getAgencies.php", {
      method: "GET",
      credentials: "include", // Include cookies in the request
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const agencies = await response.json();
    return agencies;
  } catch (error) {
    console.error("Error fetching agencies:", error);
    throw error;
  }
}

// Get Real Estate Agency By Id
export async function getAgencyById(agencyId) {
  const response = await fetch(
    `http://localhost/rosemont/backend/api/agency/getAgencyById.php?agencyId=${agencyId}`,
    {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch agency details");
  }

  return response.json();
}
// ----------------------------------------------------------------------------

// UPDATE FUNCTIONS
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------

// DELETE FUNCTIONS
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
