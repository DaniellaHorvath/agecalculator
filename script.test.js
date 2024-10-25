const { describe } = require("node:test");
const { calculateDogAge, yards2Inches } = require("./script.js");

describe("calculateDogAge", () => {
  it("should be a function", () => {
    expect(typeof calculateDogAge).toEqual("function");
    expect(typeof calculateDogAge).toBe("function");
    expect(calculateDogAge).toBeInstanceOf(Function);
  });

  it("should return a string", () => {
    expect(typeof calculateDogAge()).toBe("string");
  });

  it("should return correct dog age", () => {
    expect(calculateDogAge(7)).toBe("Your dog age is 49 in human years.");
  });

  it("should return the right dog age with different years", () => {
    expect(calculateDogAge(3)).toBe("Your dog age is 21 in human years.");
    expect(calculateDogAge(5)).toBe("Your dog age is 35 in human years.");
    expect(calculateDogAge(9)).toBe("Your dog age is 63 in human years.");
  });
});

describe("yards2Inches", () => {
  it("should be a function", () => {
    expect(typeof yards2Inches).toEqual("function");
  });

  it("should return string", () => {
    expect(typeof yards2Inches()).toBe("string");
  });

  it("should return the correct number in inches", () => {
    expect(yards2Inches(2)).toBe("Given 2 yard(s), you have 72 inches.");
  });

  it("should return the correct number for each cases", () => {
    expect(yards2Inches(8)).toBe("Given 8 yard(s), you have 288 inches.");
    expect(yards2Inches(12)).toBe("Given 12 yard(s), you have 432 inches.");
    expect(yards2Inches(26)).toBe("Given 26 yard(s), you have 936 inches.");
  });
});
