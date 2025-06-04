import add from "./add";

describe("String calculator", () => {
  // Steps
  // 1. Wrote this test to check the existence of the function
  // 2. Test failed because the function was not defined, so wrote the very basic function to make it pass
  // 3. Now that the function is defined, we can move ahead with modifying the same test to take an argument according to our need since the function will only be able to take up the argument if it is already in existence, and there won't be any need of any additional test to check for the existence of the function
  // 4. The test fails again because the function does not take any argument, so we add the argument to the function
  // 5. Now the function takes an argument, we need to make sure that the argument is a string, so we add that check to the test
  // 6. There isn't a need to write to test to insure that there is only one argument, since even if there were more that one argument, the function will only take the first one

  // We are here operating under following assumptions, which was given to us in the assignment
  // 1. The numbers inside the string are always going to be integers

  test("add: argument must be a string", () => {
    //eslint-disable-next-line
    expect(() => add(123 as any)).toThrow("Invalid argument: not a string");
  });

  // 1. The test fails because function is not performing any explicit type checking
  // 2. We added the explicit type checking in the function to make the test pass
  // 3. Now since our code and tests work together, we will move on to writing the test for our first valid argument i.e and empty string
  // 4. since the function doesn't return anything as of now, we get undefined back but we expect a 0, so our test fails
  // 5. We added the return statement in the function to make the test pass

  test("add: empty string", () => {
    expect(add("")).toBe(0);
  });

  // 1. Now creating a test to check the function for a our next valid argument i.e a string with only one number

  test("add: single number returns the number", () => {
    expect(add("24")).toBe(24);
  });

  // 1. Updated the function to return the number instead of undefined
  // 2. Now creating a test to check the function for a our next valid argument i.e a string with two numbers

  test("add: multiple numbers(two numbers)", () => {
    expect(add("1,20")).toBe(21);
  });

  // 1. Now as expected the test fails, now updating the function to return the sum of the numbers.
  // 2. Test passed, moving on to the next case i.e a string with any number of numbers

  test("add: multiple numbers(any number of numbers)", () => {
    expect(add("1,234,3,4,53")).toBe(295);
  });

  // 1. Now as expected the test fails, now updating the function to return the sum of the numbers.
  // 2. Test passed, moving on to the next case, default support for "\n" and "," delimiters

  test("add: default support for \n and , delimiters", () => {
    expect(add("1\n2,332,23")).toBe(358);
  });

  // 1. Now as expected the test fails, now updating the function to provide the support for "\n" and "," by adding a regex
  // 2. Test passed, moving on to the next case, support for custom delimiters, writing the test for the same first, now here as per our understanding of the assignment, \n is being used as a syntax character while providing the support for a custom delimiter, it is not being used as an optional default delimiter like in the previous case

  // Here we are making some assumptions which are as follows
  // 1. The delimiter is a single character
  // 2. \n always follows the delimiter

  // As per our expectation the test will fail, and after writing the test, we will update the function definition to make the test pass.

  test("add: support for custom delimiters", () => {
    expect(add("//;\n1;2")).toBe(3);
    expect(add("//&\n&&&&1&2&35&533&&&")).toBe(571);
    expect(add("//*\n1*2")).toBe(3); // For characters like "*","." which are also used as regex characters
  });

  // 1. Moving on to the next case, adding the support for rejecting negative numbers

  test("add: support for negative numbers", () => {
    expect(() => add("-1,-2,-3")).toThrow(
      "negative numbers not allowed <-1, -2, -3>"
    );
    expect(() => add("-46433,34,0,-32563")).toThrow(
      "negative numbers not allowed <-46433, -32563>"
    );
  });
  test("Another input", () => {
    expect(() => add("1,232,df,34,df,2")).toThrow(
      "string are not allowed <df, df>"
    );
  });
});
