// ## Activity
// # catAgeCalculator

const calcCatAge = (catAge) => {
    if (typeof catAge !== "number") {
      return null;
    }
  
    if (catAge <= 0) {
      return 0;
    }
  
    if (catAge < 1) {
      return 15 * catAge;
    }
  
    if (catAge === 1) {
      return 15;
    }
  
    if (catAge === 2) {
      return 15 + 9;
    }
  
    if (catAge > 2 && catAge <= 30) {
      return 15 + 9 + (catAge - 2) * 4;
    }
  
    return "Test with a realistic number Bruce! The average lifespan for a pet cat is probably around 13 to 14 years. However, although their lifespan varies, a well cared for cat may commonly live to 15 or beyond, some make it to 18 or 20 and a few extraordinary felines even pass 25 or 30 years of age.";
  };

  module.exports = { calcCatAge };