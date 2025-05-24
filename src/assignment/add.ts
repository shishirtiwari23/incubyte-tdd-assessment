function add(numbers: string) {
  if (typeof numbers !== "string") {
    throw new Error("Invalid argument: not a string");
  }
  if (numbers === "") return 0;

  let del = /,|\n/;

  if (numbers.startsWith("//")) {
    del = new RegExp(numbers[2]);
    console.log(numbers);
    numbers = numbers.slice(4);
    // Removing everything before and including "\n"
    console.log(numbers);
  }
  return numbers
    .split(del)
    .map((num) => Number(num))
    .reduce((sum, cur) => sum + cur, 0);
}
export default add;
