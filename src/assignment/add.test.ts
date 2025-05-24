import add from "./add";

describe("String calculator", () => {
  // Steps
  // 1. Wrote this test to check the existence of the function
  // 2. Test failed because the function was not defined, so wrote the very basic function to make it pass
  // 3. Now that the function is defined, we can move ahead with modifying the same test to take an argument according to our need since the function will only be able to take up the argument if it is already in existence, and there won't be any need of any additional test to check for the existence of the function
  // 4. The test fails again because the function does not take any argument, so we add the argument to the function
  // 5. Now the function takes an argument, we need to make sure that the argument is a string, so we add that check to the test

  test("add argument must be a string", () => {
    //eslint-disable-next-line
    expect(() => add(123 as any)).toThrow("Invalid argument: not a string");
  });

  // 1. The test fails because function is not performing any explicit type checking
  // 2. We add the explicit type checking in the function to make the test pass
});
