// Get date now in the format: DD-MM-YYYY
export function dateNow() {
  const date = new Date();

  let day = String(date.getDate()).padStart(2, "0");
  let month = String(date.getMonth() + 1).padStart(2, "0"); // Add 1 to month since getMonth() returns 0-11
  let year = date.getFullYear();

  return `${day}-${month}-${year}`;
}
