import { Matrix } from "./Matrix";

export default class Vector extends Matrix {
  constructor(data: number[][]) {
    if (data.length !== 1 && data[0].length !== 1)
      throw new Error(
        "A vector must be either a single row or a single column.",
      );
    super(data);
  }
}
