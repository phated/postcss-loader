// eslint-disable-next-line import/no-named-as-default, import/no-named-as-default-member
import src from "../src";
import cjs from "../src/cjs";

describe("cjs", () => {
  it("should exported", () => {
    expect(cjs).toEqual(src);
  });
});
