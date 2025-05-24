function add(numbers: string) {
  //if the string is empty or contains any number of only white space then return 0
  if (typeof numbers !== "string") {
    throw new Error("Invalid argument: not a string");
  }
  return numbers
    .split(/,|\n/)
    .map((num) => Number(num))
    .reduce((sum, cur) => sum + cur, 0);
}
export default add;
