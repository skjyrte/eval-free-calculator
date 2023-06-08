//import { checker } from "./calculator";
import checker from "./calculator";

describe("initial test", () => {
  test("adds 125 + 5 to equal 130", () => {
    expect(checker("=", "125+5")).toBe("130");
  });
});
