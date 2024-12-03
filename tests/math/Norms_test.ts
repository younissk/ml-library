import { assertEquals } from "https://deno.land/std@0.200.0/testing/asserts.ts";
import { L1Norm, L2Norm, InfinityNorm } from "../../src/math/Norms.ts";
import Matrix from "../../src/math/Matrix.ts";

const matrix = new Matrix([
  [1, -2, 3],
  [4, 5, -6],
]);

Deno.test("L1 Norm Test", () => {
  const result = L1Norm(matrix);
  assertEquals(result, 21, "L1 norm calculation failed");
});

Deno.test("L2 Norm Test (Frobenius Norm)", () => {
  const result = L2Norm(matrix);
  const expected = Math.sqrt(91);
  assertEquals(
    result.toFixed(2),
    expected.toFixed(2),
    "L2 norm calculation failed",
  );
});

Deno.test("Infinity Norm Test", () => {
  const result = InfinityNorm(matrix);
  assertEquals(result, 6, "Infinity norm calculation failed");
});
