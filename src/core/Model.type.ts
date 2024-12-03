import Matrix from "../math/Matrix.ts";
import Vector from "../math/Vector.ts";

export default interface Model {
  fit(features: Matrix, labels: Vector): void;
  predict(features: Matrix): Vector;
  // TODO: Evaluate
}
