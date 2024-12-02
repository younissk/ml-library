/**
 * Calculates the factorial of a non-negative integer n.
 *
 * Formula: n! = n * (n-1) * (n-2) * ... * 1
 * Special Case: 0! = 1 by definition.
 *
 * @param {number} n - The number to calculate the factorial for (must be a non-negative integer).
 * @returns {number} - The factorial of n.
 * @throws {Error} - If n is negative, as factorials are not defined for negative numbers.
 * @example
 * // Example usage:
 * factorial(5); // Returns 120 (5 * 4 * 3 * 2 * 1)
 * factorial(0); // Returns 1 (special case for 0!)
 */ export function factorial(n: number): number {
  if (n < 0) throw new Error("Factorial is not defined for negative numbers.");

  if (n === 0) return 1;

  let product = 1;

  for (let i = n; i > 0; i--) {
    product *= i;
  }

  return product;
}
