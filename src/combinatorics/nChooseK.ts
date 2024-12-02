import { factorial } from "../utils/factorials.ts";

/**
 * Calculates the binomial coefficient C(n, k), which represents the number of ways
 * to choose k items from a set of n items without regard to order.
 *
 * Formula: C(n, k) = n! / (k! * (n - k)!)
 *
 * @param {number} n - The total number of items in the set (must be a non-negative integer).
 * @param {number} k - The number of items to choose from the set (must be a non-negative integer and k <= n).
 * @returns {number} - The binomial coefficient C(n, k), representing the number of combinations.
 * @throws {Error} - If k > n, as it is not possible to choose more items than are available.
 * @example
 * // Example usage:
 * nChooseK(10, 5); // Returns 252
 */
export default function nChooseK(n: number, k: number): number {
  if (k > n)
    throw new Error(
      "Your k is larger than your k. That's like saying out of 10 candies I want to choose 20",
    );

  const numerator = factorial(n);

  const denominator = factorial(k) * factorial(n - k);

  return numerator / denominator;
}
