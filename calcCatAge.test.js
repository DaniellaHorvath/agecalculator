const { calcCatAge } = require("./calcCatAge.js");

describe("calcCatAge", () => {
    it("should be a function", () => {
      expect(calcCatAge).toBeInstanceOf(Function);
      expect(typeof calcCatAge).toBe("function");
    });
  
    it("should return a number, if the cat age is below 30", () => {
      for (let age = 1; age <= 30; age++) {
        expect(typeof calcCatAge(age)).toEqual("number");
      }
    });
  
    it("should return null if no arguments are provided", () => {
      expect(calcCatAge()).toBeNull();
      expect(calcCatAge(" ")).toBeNull();
      expect(calcCatAge("dani")).toBeNull();
    });
  
    it("should return a message if the cat age is above 30", () => {
      for (let age = 1; age > 30; age++) {
        const expectMessage =
          "Test with a realistic number Bruce! The average lifespan for a pet cat is probably around 13 to 14 years. However, although their lifespan varies, a well cared for cat may commonly live to 15 or beyond, some make it to 18 or 20 and a few extraordinary felines even pass 25 or 30 years of age.";
        expect(calcCatAge(31).toBe(expectMessage));
      }
    });
  
    it("has not been born yet", () => {
      expect(calcCatAge(0)).toBe(0);
      expect(calcCatAge(-2)).toBe(0);
    });
  
    it("is less than 1 year old", () => {
      expect(calcCatAge(0.5)).toBe(7.5);
    });
  
    it("should return the correct cat age", () => {
      expect(calcCatAge(1)).toBe(15);
      expect(calcCatAge(2)).toBe(24);
      expect(calcCatAge(3)).toBe(28);
      expect(calcCatAge(4)).toBe(32);
      expect(calcCatAge(31)).toBe(
        "Test with a realistic number Bruce! The average lifespan for a pet cat is probably around 13 to 14 years. However, although their lifespan varies, a well cared for cat may commonly live to 15 or beyond, some make it to 18 or 20 and a few extraordinary felines even pass 25 or 30 years of age."
      );
    });
  });