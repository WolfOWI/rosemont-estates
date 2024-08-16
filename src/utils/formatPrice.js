export function formatPrice(price) {
  // Convert string to a number
  const numericValue = parseInt(price);

  // Format the number to 'en-ZA' - for South Africa Rand
  const formattedValue = numericValue.toLocaleString("en-ZA");

  return `R${formattedValue}`;
}
