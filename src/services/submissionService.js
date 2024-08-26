// House Submissions (By Users) CRUD Functionality

// CREATE FUNCTIONS
// ----------------------------------------------------------------------------
// Create a new submission entity by session user Id
export async function createSubmission(submissionData) {
  console.log("Received submissionData:");
  console.log(submissionData);
  try {
    const response = await fetch(
      `http://localhost/rosemont/backend/api/submission/createSubmissionBySessionUserId.php`,
      {
        method: "POST",
        credentials: "include",
        body: submissionData,
      }
    );

    if (!response.ok) {
      throw new Error("Couldn't create submission entity");
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Failed to create submission entity: ", error);
    throw error;
  }
}
// ----------------------------------------------------------------------------

// READ FUNCTIONS
// ----------------------------------------------------------------------------
// Get all submissions
export async function fetchAllSubmissions() {
  try {
    const response = await fetch(
      "http://localhost/rosemont/backend/api/submission/getSubmissions.php",
      {
        method: "GET",
        credentials: "include", // Include cookies in the request
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const submissions = await response.json();
    return submissions;
  } catch (error) {
    console.error("Error fetching submissions:", error);
    throw error;
  }
}

// Get Submissions by logged in user's id
export async function getSubmissionBySessionUserId() {
  try {
    const response = await fetch(
      `http://localhost/rosemont/backend/api/submission/getSubmissionBySessionUserId.php`,
      {
        method: "GET",
        credentials: "include",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch submitted houses by users.");
    }

    const submissions = await response.json();
    return submissions;
  } catch (error) {
    console.error("Error fetching user house submissions:", error);
    throw error;
  }
}
// ----------------------------------------------------------------------------

// UPDATE FUNCTIONS
// ----------------------------------------------------------------------------
// Update Submission details with houseId
export async function updateSubmissionByHouseId(houseId, fields) {
  // console.log(houseId);
  // console.log(fields);
  const response = await fetch(
    `http://localhost/rosemont/backend/api/submission/updateSubmissionByHouseId.php?houseId=${houseId}`,
    {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fields),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to update submission");
  }

  return response.json();
}
// ----------------------------------------------------------------------------

// DELETE FUNCTIONS
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
