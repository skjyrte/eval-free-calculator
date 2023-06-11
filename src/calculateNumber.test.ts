import { calculateNumber } from "./calculator";

describe("initial test", () => {
  test("Passes if string is correct calculation string", () => {
    expect(calculateNumber("125+5")).toBe("130");
  });
  test("Fails if string contains non-operable characters", () => {
    expect(calculateNumber("125eewr")).toBe("INTERNAL ERROR");
  });
});
