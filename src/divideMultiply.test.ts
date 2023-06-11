import { processInput } from "./calculator";

describe("initial test", () => {
  test("125 + 5 = 130", () => {
    expect(processInput("=", "125+5")).toBe("130");
  });
  test("125 - 5 = 120", () => {
    expect(processInput("=", "125-5")).toBe("120");
  });
  test("125 * 5 = 625", () => {
    expect(processInput("=", "125*5")).toBe("625");
  });
  test("125 / 5 = 25", () => {
    expect(processInput("=", "125/5")).toBe("25");
  });
  test("- 13 / 5 = 2.6", () => {
    expect(processInput("=", "-13/5")).toBe("-2.6");
  });
  test("120/20 - 30 + 40/3*7 = 69.33333333333334", () => {
    expect(processInput("=", "120/20-30+40/3*7")).toBe("69.33333333333334");
  });
});
