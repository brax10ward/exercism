import { isLeap } from "./leap";

describe("A leap year", () => {
  test("year not divisible by 4: common year", () => {
    expect(isLeap(2015)).toBe(false);
  });

  test("year divisible by 4, not divisible by 100: leap year", () => {
    expect(isLeap(2016)).toBe(true);
  });

  test("year divisible by 100, not divisible by 400: common year", () => {
    expect(isLeap(2100)).toBe(false);
  });

  test("year divisible by 400: leap year", () => {
    expect(isLeap(2000)).toBe(true);
  });

  test("year divisible by 200, not divisible by 400: common year", () => {
    expect(isLeap(1800)).toBe(false);
  });

  test("year 1997: common year", () => {
    expect(isLeap(1997)).toBe(false);
  });

  test("year 1900: common year", () => {
    expect(isLeap(1900)).toBe(false);
  });

  test("year 1996: leap year", () => {
    expect(isLeap(1996)).toBe(true);
  });

  test("year 2000: leap year", () => {
    expect(isLeap(2000)).toBe(true);
  });
});
