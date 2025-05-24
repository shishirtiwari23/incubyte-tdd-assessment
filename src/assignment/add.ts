function add(numbers: string) {
  if (typeof numbers !== "string") {
    throw new Error("Invalid argument: not a string");
  }
  if (numbers === "") return 0;

  let del: RegExp = /,|\n/;

  if (numbers.startsWith("//")) {
    del = new RegExp(numbers[2]);
    // Since delimiter will always be at index 2
    numbers = numbers.slice(4);
    // Removing everything before and including "\n"
  }

  const numArray: number[] = numbers
    .split(del)
    .map((num: string) => Number(num));

  const negatives: number[] = numArray.filter((num: number) => num < 0);

  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed <${negatives.join(", ")}>`);
  }

  return numArray.reduce((sum: number, cur: number) => sum + cur, 0);
}
export default add;
