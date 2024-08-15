// Real Estate Agency Functions

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

// export async function fetchAgencyById(agencyId) {
//   try {
//     const response = await fetch(
//       `http://localhost/rosemont/backend/api/agency/getAgencyById.php?id=${agencyId}`,
//       {
//         method: "GET",
//         credentials: "include", // Include cookies in the request
//       }
//     );

//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }

//     const agency = await response.json();
//     return agency;
//   } catch (error) {
//     console.error("Error fetching agency:", error);
//     throw error;
//   }
// }
