import { describe, it, expect } from "vitest";
import { parseMemberSlackIds } from "../src/reminder";

describe("parseMemberSlackIds", () => {
  it("should return correct IDs for a input list", () => {
    const input = `
a:A
b:B

c:C
invalid
d:D
`;
    const expectedOutput = [
      "A",
      "B",
      /* empty line is ignored */
      "C",
      /* invalid line is ignored */
      "D",
    ];
    expect(parseMemberSlackIds(input)).toEqual(expectedOutput);
  });

  it("should return an empty array for an empty input list", () => {
    const input = "";
    const expectedOutput: string[] = [];
    expect(parseMemberSlackIds(input)).toEqual(expectedOutput);
  });
});
