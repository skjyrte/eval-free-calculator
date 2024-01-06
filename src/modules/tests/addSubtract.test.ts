import {addSubtract} from "../calculate";

describe("Basic multiply, divide, add test", () => {
  test("125 + 5 + 50 - 20 + 15", () => {
    expect(addSubtract("125+5+50-20+15")).toBe("175");
  });
  test("125 + 5 = 130", () => {
    expect(addSubtract("125+5")).toBe("130");
  });
  test("125 - 5 = 120", () => {
    expect(addSubtract("125-5")).toBe("120");
  });
  test("125 * 5 = 625", () => {
    expect(addSubtract("125*5")).toBe("INTERNAL ERROR");
  });
  test("125 / 5 = 25", () => {
    expect(addSubtract("125/5")).toBe("INTERNAL ERROR");
  });
  test("- 13 / 5 = 2.6", () => {
    expect(addSubtract("-13/5")).toBe("INTERNAL ERROR");
  });
  test("120/20 - 30 + 40/3*7 = 69.33333333333334", () => {
    expect(addSubtract("120/20-30+40/3*7")).toBe("INTERNAL ERROR");
  });
});
