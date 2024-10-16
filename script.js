// # dogAgeCalculator

// ## Activity Directions
// You know how old your dog is in human years, but what about dog years? Calculate it!

// Write a function named calculateDogAge that:

// 1. Takes 1 argument: your dog’s age.
// 2. Calculates your dog’s age based on the conversion rate of:
// - 1 human year to 7 dog years.
// 3. Return a string describing your dog’s age (see below).
// 4. Run your code.

function calculateDogAge(age){
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
// Do you know how old your cat is in human years, but what about dog years? Calculate it!

// Write a function named calculateCatAge that:

// 1. Takes 1 argument: your cat’s age.
// 2. Calculates your cat’s age based on the conversion rate of:
//The first year of a cat's life is equal to 15 human years, while the second year 
// is equal to an additional nine years. After the second year of a cat's life, 
// each additional year is equal to about four human years
// - 1 human year to 7 dog years.
// - 1 human year to 15 cat years.
// - 2 human year increased by 9 cat years.
// - 3 human years increased by 4 cat years.
// - 4 human years increased by 4 cat years and so on ...
// Molly cat is 10 years old in 
// 3. Return a Number (Optional: string describing your dog’s age (see below).)
// 4. Run your code.
// 6. Test your code.

const calcCatAge = (catAge) => {
    if(catAge === 1){
        return 15;
    }else if(catAge === 2){
        return 15 + 9;
    }else if(catAge > 2 && catAge <= 30){
        return 15 + 9 + (catAge - 2) * 4;
    }else{
        return "Test with a realistic number Bruce! The average lifespan for a pet cat is probably around 13 to 14 years. However, although their lifespan varies, a well cared for cat may commonly live to 15 or beyond, some make it to 18 or 20 and a few extraordinary felines even pass 25 or 30 years of age."
    }
}
const mollyCatAge = calcCatAge(23); 
console.log(mollyCatAge); // returns 108


// # yardsToInches

// ## Activity Directions
// 1. Declare a function named yards2Inches that will take a number of yards as input.
// 2. Your function is to do the following:
// - Convert the yards to inches
// - NOTE: 1 yard = 36 inches
// - Return a string that says “Given XX yard(s), you have YY inches”
// 3. Run your code.
// 4. Test your code.

function yards2Inches(yards){
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


module.exports = { calculateDogAge, calcCatAge,  yards2Inches };