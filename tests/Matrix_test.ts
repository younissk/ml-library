import { Matrix } from "../src/core/Matrix.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

const A = new Matrix([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
const B = new Matrix([
  [9, 8, 7],
  [6, 5, 4],
  [3, 2, 1],
]);

Deno.test("Matrix Initialize", () => {
  const matrix = new Matrix([
    [1, 2],
    [3, 4],
  ]);

  const expectedDimensions = [2, 2];
  assertEquals(matrix.dimensions, expectedDimensions);
});

Deno.test("Matrix PrettyPrint", () => {
  const matrix = new Matrix([
    [1, 2, 3, 5, 1],
    [4, 5, 6, 7, 8],
    [7, 8, 9, 10, 11],
  ]);

  const expectedPrettyPrint = `┌───┬───┬───┬───┬────┬────┐
│   │ 0 │ 1 │ 2 │  3 │  4 │
├───┼───┼───┼───┼────┼────┤
│ 0 │ 1 │ 2 │ 3 │  5 │  1 │
│ 1 │ 4 │ 5 │ 6 │  7 │  8 │
│ 2 │ 7 │ 8 │ 9 │ 10 │ 11 │
└───┴───┴───┴───┴────┴────┘`;

  assertEquals(matrix.prettyPrint(), expectedPrettyPrint);
});

Deno.test("Matrix Add", () => {
  const expectedAdditionOutput = new Matrix([
    [10, 10, 10],
    [10, 10, 10],
    [10, 10, 10],
  ]);

  assertEquals(A.add(B), expectedAdditionOutput);
});

Deno.test("Matrix Subtract", () => {
  const expectedSubtractionOutput = new Matrix([
    [-8, -6, -4],
    [-2, 0, 2],
    [4, 6, 8],
  ]);
  assertEquals(A.subtract(B), expectedSubtractionOutput);
});

Deno.test("Matrix Dot", () => {
  const expectedDotProductOutput = new Matrix([
    [30, 24, 18],
    [84, 69, 54],
    [138, 114, 90],
  ]);

  assertEquals(A.dot(B), expectedDotProductOutput);
});

Deno.test("Matrix Transpose", () => {
  const A_transpose = new Matrix([
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
  ]);

  const B_transpose = new Matrix([
    [9, 6, 3],
    [8, 5, 2],
    [7, 4, 1],
  ]);

  assertEquals(A.transpose(), A_transpose);
  assertEquals(B.transpose(), B_transpose);
});

Deno.test("Matrix Determinant", () => {
  const expectedDeterminantOutput = 0;

  assertEquals(A.determinant(), expectedDeterminantOutput);
});
