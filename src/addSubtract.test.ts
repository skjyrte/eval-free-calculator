import { addSubtract } from "./calculator";

describe("Basic subtract, add test", () => {
  test("125 + 5 + 50 - 20 + 15", () => {
    expect(addSubtract("125+5+50-20+15")).toBe("175");
  });
  test("Checks if multiply, division was made properly in previous step", () => {
    expect(addSubtract("125*5")).toBe("INTERNAL ERROR");
  });
});
