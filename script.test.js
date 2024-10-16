const { describe } = require('node:test');
const { calculateDogAge, calcCatAge,  yards2Inches } = require('./script.js');
// const { TypeRegistry } = require('@sinclair/typebox');

describe('calculateDogAge', () => {
    it('should be a function', () => {
        expect(typeof calculateDogAge).toEqual('function');
        expect(typeof calculateDogAge).toBe('function');
        expect( calculateDogAge).toBeInstanceOf(Function);
    })

    it('should return a string', () => {
        expect(typeof calculateDogAge()).toBe('string');
    })

    it('should return correct dog age', () => {
        expect(calculateDogAge(7)).toBe('Your dog age is 49 in human years.');
    })

    it('should return the right dog age with different years', () => {
        expect(calculateDogAge(3)).toBe('Your dog age is 21 in human years.');
        expect(calculateDogAge(5)).toBe('Your dog age is 35 in human years.');
        expect(calculateDogAge(9)).toBe('Your dog age is 63 in human years.');
    })
})

describe('calcCatAge', () => {
    it('should be a function', () => {
        expect(calcCatAge).toBeInstanceOf(Function)
    })

    it('should return a number, if the cat age is below 30', () => {
        for(let age = 1; age <= 30; age++){
            expect(typeof calcCatAge(age)).toEqual('number');
        }
    })

    it('should return a message if the cat age is above 30', () => {
        for(let age = 1; age > 30; age++){
            const expectMessage = "Test with a realistic number Bruce! The average lifespan for a pet cat is probably around 13 to 14 years. However, although their lifespan varies, a well cared for cat may commonly live to 15 or beyond, some make it to 18 or 20 and a few extraordinary felines even pass 25 or 30 years of age."
            expect(calcCatAge(31).toBe(expectMessage));
        }
    })

    it('should return the correct cat age', () => {
        expect(calcCatAge(1)).toBe(15);
        expect(calcCatAge(2)).toBe(24);
        expect(calcCatAge(3)).toBe(28);
        expect(calcCatAge(4)).toBe(32);
        expect(calcCatAge(31)).toBe("Test with a realistic number Bruce! The average lifespan for a pet cat is probably around 13 to 14 years. However, although their lifespan varies, a well cared for cat may commonly live to 15 or beyond, some make it to 18 or 20 and a few extraordinary felines even pass 25 or 30 years of age.")
    })
})

describe('yards2Inches', () => {
    it('should be a function', () => {
        expect(typeof yards2Inches).toEqual('function');
    })

    it('should return string', () => {
        expect(typeof yards2Inches()).toBe('string');
    })

    it('should return the correct number in inches', () => {
        expect(yards2Inches(2)).toBe('Given 2 yard(s), you have 72 inches.');
    })

    it('should return the correct number for each cases', () => {
        expect(yards2Inches(8)).toBe('Given 8 yard(s), you have 288 inches.');
        expect(yards2Inches(12)).toBe('Given 12 yard(s), you have 432 inches.');
        expect(yards2Inches(26)).toBe('Given 26 yard(s), you have 936 inches.');
    })
    
})
