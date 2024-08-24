// House Submissions (By Users) CRUD Functionality

// CREATE FUNCTIONS
// ----------------------------------------------------------------------------
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
// ----------------------------------------------------------------------------

// DELETE FUNCTIONS
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
