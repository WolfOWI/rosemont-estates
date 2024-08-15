export async function getSession() {
  try {
    const response = await fetch("http://localhost/rosemont/backend/api/auth/getSession.php", {
      method: "GET",
      credentials: "include", // Include cookies in the request
    });

    if (!response.ok) {
      throw new Error("Failed to fetch session data");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching session:", error);
    throw error;
  }
}
