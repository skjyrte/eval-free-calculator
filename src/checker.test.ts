const testFunction = require("./calculator.ts");

describe("initial test", () => {
  test("adds 125 + 5 to equal 130", () => {
    expect(testFunction("=", "125+5")).toBe("130");
  });
});
