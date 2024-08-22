// House Submissions (By Users) Functions

// GET FUNCTIONS
// ----------------------------------------------------------------------------
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
