import Matrix from "./Matrix.ts";
import Sum from "./Sum.ts";

/**
 * Calculates the p-norm of a given matrix.
 *
 * The p-norm is a generalized mathematical concept to measure the size or magnitude of a matrix.
 * For a matrix \( A \), the p-norm is defined as:
 *
 * \[
 * ||A||_p = \left( \sum_{i=1}^{m} \sum_{j=1}^{n} |a_{ij}|^p \right)^{1/p}
 * \]
 *
 * Special cases include:
 * - p = 1: L1 norm (sum of absolute values of elements).
 * - p = 2: L2 norm (Euclidean norm or Frobenius norm for matrices).
 * - p = Infinity: Maximum norm (largest absolute value).
 *
 * @param {Matrix} matrix - The input matrix for which the norm is to be calculated.
 * @param {number} p - The order of the norm (must be greater than 0). Common values are 1, 2, or Infinity.
 * @returns {number} - The calculated p-norm of the matrix.
 * @throws {Error} - Throws an error if p <= 0 or if the input is not a valid matrix.
 *
 * @example
 * // Example: Calculate L1 norm
 * const matrix = new Matrix([
 *   [1, 2, 3],
 *   [4, 5, 6]
 * ]);
 * console.log(Norm(matrix, 1)); // Outputs: 21
 *
 * @example
 * // Example: Calculate L2 norm (Frobenius norm)
 * console.log(Norm(matrix, 2)); // Outputs: ~9.539392
 *
 * @example
 * // Example: Calculate Infinity norm
 * console.log(Norm(matrix, Infinity)); // Outputs: 6
 */
export default function Norm(matrix: Matrix, p: number): number {
  if (p <= 0) {
    throw new Error("p must be a positive number.");
  }

  const allNumbersInMatrix = matrix.flatten();

  const normFunction = (index: number): number =>
    Math.pow(Math.abs(allNumbersInMatrix[index]), p);

  // Calculate the sum of all |x|^p
  const sum = Sum(0, allNumbersInMatrix.length - 1, normFunction);

  // Return the p-th root of the sum
  return Math.pow(sum, 1 / p);
}

/**
 * Calculates the L1 norm (Manhattan norm).
 * @param matrix - The matrix for which the L1 norm is computed.
 * @returns The L1 norm of the matrix.
 */
export function L1Norm(matrix: Matrix): number {
  return Norm(matrix, 1);
}

/**
 * Calculates the L2 norm (Euclidean norm or Frobenius norm for matrices).
 * @param matrix - The matrix for which the L2 norm is computed.
 * @returns The L2 norm of the matrix.
 */
export function L2Norm(matrix: Matrix): number {
  return Norm(matrix, 2);
}

/**
 * Calculates the Infinity norm (maximum absolute value).
 * @param matrix - The matrix for which the Infinity norm is computed.
 * @returns The Infinity norm of the matrix.
 */
export function InfinityNorm(matrix: Matrix): number {
  // Special case: Infinity norm corresponds to max absolute value
  return Math.max(...matrix.flatten().map((x) => Math.abs(x)));
}
