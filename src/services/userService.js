// Update User Details
export async function updateUser(fields) {
  const response = await fetch("http://localhost/rosemont/backend/api/user/updateUser.php", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(fields),
  });

  if (!response.ok) {
    throw new Error("Failed to update user");
  }

  return response.json();
}
