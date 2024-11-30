import { Matrix } from "./src/core/Matrix.ts";

const matrix = new Matrix([
  [1, 2, 3, 5, 1],
  [4, 5, 6, 7, 8],
  [7, 8, 9, 10, 11],
]);

console.log(matrix.prettyPrint());
