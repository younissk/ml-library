export class Matrix {
  public data: number[][];
  public dimensions: [number, number];
  private columns: number;
  private rows: number;

  constructor(data: number[][]) {
    this.data = data;
    this.dimensions = [data.length, data[0].length];
    this.columns = data[0].length;
    this.rows = data.length;
  }

  add(matrix: Matrix): Matrix {
    if (
      this.dimensions[0] !== matrix.dimensions[0] ||
      this.dimensions[1] !== matrix.dimensions[1]
    ) {
      throw new Error("Matrices must have the same dimensions for addition.");
    }

    const newMatrix = new Matrix(
      this.data.map((row, i) =>
        row.map((value, j) => value + matrix.data[i][j]),
      ),
    );
    return newMatrix;
  }

  subtract(matrix: Matrix): Matrix {
    if (
      this.dimensions[0] !== matrix.dimensions[0] ||
      this.dimensions[1] !== matrix.dimensions[1]
    ) {
      throw new Error(
        "Matrices must have the same dimensions for subtraction.",
      );
    }

    const newMatrix = new Matrix(
      this.data.map((row, i) =>
        row.map((value, j) => value - matrix.data[i][j]),
      ),
    );
    return newMatrix;
  }

  dot(matrix: Matrix): Matrix {
    if (this.data[0].length !== matrix.data.length) {
      throw new Error(
        "Number of columns of the first matrix must equal the number of rows of the second matrix.",
      );
    }

    const result = this.data.map((row, i) =>
      matrix.data[0].map((_, j) =>
        row.reduce((sum, value, k) => sum + value * matrix.data[k][j], 0),
      ),
    );

    return new Matrix(result);
  }

  transpose(): Matrix {
    const transposedData = this.data[0].map((_, colIndex) =>
      this.data.map((row) => row[colIndex]),
    );
    return new Matrix(transposedData);
  }

  determinant(): number {
    if (this.rows !== this.columns) {
      throw new Error(
        "Determinant can only be calculated for square matrices.",
      );
    }

    const calculateDet = (matrix: number[][]): number => {
      const n = matrix.length;

      // Base case for 2x2 matrix
      if (n === 2) {
        return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
      }

      // Recursive case for larger matrices
      let det = 0;
      for (let col = 0; col < n; col++) {
        const minor = matrix
          .slice(1)
          .map((row) => row.filter((_, index) => index !== col));
        det += matrix[0][col] * calculateDet(minor) * (col % 2 === 0 ? 1 : -1);
      }
      return det;
    };

    return calculateDet(this.data);
  }

  prettyPrint(): string {
    const colWidths = Array(this.columns).fill(0);
    for (let j = 0; j < this.columns; j++) {
      colWidths[j] = Math.max(
        ...this.data.map((row) => row[j].toString().length),
        j.toString().length,
      );
    }

    const rowIndexWidth = Math.max(
      ...this.data.map((_, i) => i.toString().length),
      "".length,
    );

    const topBorder =
      "┌" +
      "─".repeat(rowIndexWidth + 2) +
      "┬" +
      colWidths.map((w) => "─".repeat(w + 2)).join("┬") +
      "┐";

    const header =
      "│ " +
      "".padStart(rowIndexWidth) +
      " │" +
      colWidths.map((w, j) => ` ${j.toString().padStart(w)} `).join("│") +
      "│";

    const separator =
      "├" +
      "─".repeat(rowIndexWidth + 2) +
      "┼" +
      colWidths.map((w) => "─".repeat(w + 2)).join("┼") +
      "┤";

    const rows = this.data.map((row, i) => {
      const rowIndex = ` ${i.toString().padStart(rowIndexWidth)} `;
      const rowData = row
        .map((val, j) => ` ${val.toString().padStart(colWidths[j])} `)
        .join("│");
      return `│${rowIndex}│${rowData}│`;
    });

    const bottomBorder =
      "└" +
      "─".repeat(rowIndexWidth + 2) +
      "┴" +
      colWidths.map((w) => "─".repeat(w + 2)).join("┴") +
      "┘";

    return [topBorder, header, separator, ...rows, bottomBorder].join("\n");
  }
}
