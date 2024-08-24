// Agent Entity CRUD Functionality

// CREATE FUNCTIONS
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------

// READ FUNCTIONS
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------

// UPDATE FUNCTIONS
// ----------------------------------------------------------------------------
// Update Agent Details
export async function updateAgent(fields) {
  const response = await fetch("http://localhost/rosemont/backend/api/agent/updateAgent.php", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(fields),
  });

  if (!response.ok) {
    throw new Error("Failed to update agent");
  }

  return response.json();
}
// ----------------------------------------------------------------------------

// DELETE FUNCTIONS
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
