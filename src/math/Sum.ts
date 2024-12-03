export default function Sum(
  lowerBound: number,
  upperBound: number,
  sumFunction: (index: number) => number,
): number {
  let sum: number = 0;

  for (let i = lowerBound; i <= upperBound; i++) {
    sum += sumFunction(i);
  }

  return sum;
}
