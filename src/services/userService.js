// User Entity CRUD Functionality

// CREATE FUNCTIONS
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------

// READ FUNCTIONS
// ----------------------------------------------------------------------------
// Get User By Id
export async function getUserById(userId) {
  const response = await fetch(
    `http://localhost/rosemont/backend/api/user/getUserById.php?userId=${userId}`,
    {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch user's details");
  }

  return response.json();
}
// ----------------------------------------------------------------------------

// UPDATE FUNCTIONS
// ----------------------------------------------------------------------------
// Update User Details
export async function updateUser(fields) {
  const response = await fetch(
    "http://localhost/rosemont/backend/api/user/updateUserBySessionUserId.php",
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
    throw new Error("Failed to update user");
  }

  return response.json();
}
// ----------------------------------------------------------------------------

// DELETE FUNCTIONS
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
