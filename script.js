// # dogAgeCalculator

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
// # catAgeCalculator

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

// ## Activity
// # yardsToInches

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
