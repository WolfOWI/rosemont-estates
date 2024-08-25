// Turn a number into a million (example: 56 => 56,000,000)
// Often used for price filtering
export function millionify(number) {
  return parseInt(number) * 1000000;
}
