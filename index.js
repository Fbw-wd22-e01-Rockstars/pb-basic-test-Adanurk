// Add answers here 

// describe('nameOfCity', () => {
//     test.each`
//     input| expected 
//     ${"Los Angeles"} | ${"Los Angeles"}
//     ${"New York"} | ${"New York"}
//     ${"newcastle"} | ${"newcastle"}
//     ${"Valletta"} | ${"The city name does not begin with Los or New"}
//     ${"los almost"} | ${"los almost"}
//     `('check if $input contains `los` or `new`: $expected', ({input, expected}) => {
//             expect(nameOfCity(input)).toBe(expected);
//         });

let nameOfCity = function(str){
    return str.toLowerCase().startsWith("los") || str.toLowerCase().startsWith("new") ? "true" : "The city name does not begin with Los or New"
}

console.log(nameOfCity("New York"));
console.log(nameOfCity("los angeles"));
console.log(nameOfCity("Valletta"));
console.log(nameOfCity("los almost"));
console.log(nameOfCity("newcastle"));

// describe('isDivisible', () => {
//     test.each`
//     input| expected 
//     ${100} | ${true}
//     ${1000} | ${true}
//     ${1} | ${false}
//     ${48} | ${false}
//     ${10000} | ${true}
//     `('check if $input is divisible by 100: $expected', ({input, expected}) => {
//             expect(isDivisible(input)).toBe(expected);
//         });
// });

let isDivisible = function(num){
    return num%100 === 0 ? true : false
}

console.log(isDivisible(100));
console.log(isDivisible(1000));
console.log(isDivisible(1));
console.log(isDivisible(48));
console.log(isDivisible(10000));

// describe('missingAngle', () => {
//     test.each`
//     angleOne| angleTwo| expected 
//     ${45} | ${45} | ${"right angle"}
//     ${10} | ${10} | ${"obtuse"}
//     ${90} | ${45} | ${"acute"}
//     `('first angle: $angleOne°, second angle: $angleTwo° so third angle is $expected', ({angleOne, angleTwo, expected}) => {
//             expect(missingAngle(angleOne, angleTwo)).toBe(expected);
//         });
// });

let missingAngle = function(ang1,ang2){
    let ang3 = 180 - ang1 - ang2;
    if(ang3 === 90){
        return "right angle"
    }else if(ang3 < 90){
        return "acute"
    }else if(ang3 >=120){
        return "obtuse"
    }
}

console.log(missingAngle(45,45));
console.log(missingAngle(10,10));
console.log(missingAngle(90,45));

// describe('isRaining', () => {
//     test.each`
//     input| expected 
//     ${true} | ${"wet day - you need an umbrella!"}
//     ${false} | ${"dry day - leave your umbrella at home!"}
//     `('Is it raining today?: if $input then $expected', ({input, expected}) => {
//             expect(isRaining(input)).toBe(expected);
//         });
// });

let isRaining = function(bool){
    if(bool){
        return `wet day - you need an umbrella!`
    }else{
        return `dry day - leave your umbrella at home!`
    }
}

console.log(isRaining(false));

// DO NOT EDIT below this line - This will result in an automatic fail
// module.exports = {nameOfCity, isDivisible, missingAngle, isRaining, geometricalSequence, multiplesOfThree, powerOf, vowelCount};

