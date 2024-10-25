// # dogAgeCalculator

function calculateDogAge(age) {
  const dogAgeCalculator = age * 7;
  return `Your dog age is ${dogAgeCalculator} in human years.`;
}

console.log(calculateDogAge(7));
console.log(calculateDogAge(3));
console.log(calculateDogAge(5));
console.log(calculateDogAge(9));
// Your dog age is 49 in human years.
// Your dog age is 21 in human years.
// Your dog age is 35 in human years.
// Your dog age is 63 in human years.

// ## Activity
// # yardsToInches

function yards2Inches(yards) {
  const yardsToInches = yards * 36;
  return `Given ${yards} yard(s), you have ${yardsToInches} inches.`;
}

console.log(yards2Inches(2));
// returns Given 2 yard(s), you have 72 inches
console.log(yards2Inches(8));
// returns Given 8 yard(s), you have 288 inches
console.log(yards2Inches(12));
// returns Given 12 yard(s), you have 432 inches
console.log(yards2Inches(26));
// returns Given 26 yard(s), you have 936 inches

module.exports = { calculateDogAge, yards2Inches };
