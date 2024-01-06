import {divideMultiply} from "../calculate";

describe("Basic multiply, divide, add test", () => {
  test("125 + 5 + 50 - 20 + 15", () => {
    expect(divideMultiply("125+5+50-20+15")).toBe("175");
  });
  test("125 + 5 = 130", () => {
    expect(divideMultiply("125+5")).toBe("130");
  });
  test("125 - 5 = 120", () => {
    expect(divideMultiply("125-5")).toBe("120");
  });
  test("125 * 5 = 625", () => {
    expect(divideMultiply("125*5")).toBe("625");
  });
  test("125 / 5 = 25", () => {
    expect(divideMultiply("125/5")).toBe("25");
  });
  test("- 13 / 5 = 2.6", () => {
    expect(divideMultiply("-13/5")).toBe("-2.6");
  });
  test("120/20 - 30 + 40/3*7 = 69.33333333333334", () => {
    expect(divideMultiply("120/20-30+40/3*7")).toBe("69.33333333333334");
  });
});
