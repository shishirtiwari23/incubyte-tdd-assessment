function add(nums: string) {
  if (typeof nums !== "string") {
    throw new Error("Invalid argument: not a string");
  }
}
export default add;
