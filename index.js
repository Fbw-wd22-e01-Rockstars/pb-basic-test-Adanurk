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

let nameOfCity = (str) => str.toLowerCase().startsWith("los") || str.toLowerCase().startsWith("new") ? "true" : "The city name does not begin with Los or New";

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

let isDivisible = (num) => num%100 === 0 ? true : false;

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

//loops

// test('return a geometrical sequence', () => {
//     expect(geometricalSequence()).toBe("1 2 4 8 16 32 64 128 256");
// })

let geometricalSequence = function(){
    for (let i = 0; i < 9; i++) {
        console.log(2**i);
    }
}

geometricalSequence();

// test('returns first five multiples of three', () => {
//     expect(multiplesOfThree()).toBe("3 6 9 12 15");
// })

let multiplesOfThree = () => {
    for (let i = 1; i <= 5; i++) {
        console.log(3*i);
    }
}

multiplesOfThree();

// describe('powerOf', () => {
//     test.each`
//     input| expected 
//     ${3} | ${27}
//     ${2} | ${4}
//     ${4} | ${256}
//     ${9} | ${387420489}
//     `('$input to the power of $input should be $expected', ({input, expected}) => {
//             expect(powerOf(input)).toBe(expected);
//         });
// });

let powerOf = (num) => num**num;

console.log(powerOf(3));
console.log(powerOf(2));
console.log(powerOf(4));
console.log(powerOf(9));

// describe('vowelCount', () => {
//     test.each`
//     input| expected 
//     ${"aeiou"} | ${5}
//     ${"AEIOU"} | ${5}
//     ${"bhjpg"} | ${0}
//     ${"hello"} | ${2}
//     ${"initialization"} | ${8}
//     `('$input has $expected vowels', ({input, expected}) => {
//             expect(vowelCount(input)).toBe(expected);
//         });
// });

let vowelCount = function(str){
    let myArr = str.toLowerCase().split("");
    let vowels = ["a", "e", "i", "o", "u"];
    let counter = 0;
    for (const chars of myArr) {
        for (const item of vowels) {
            if(chars === item){
                counter += 1;
            }
        }
    }
    return counter;
}

console.log(vowelCount("aeiou"));
console.log(vowelCount("AEIOU"));
console.log(vowelCount("bhjpg"));
console.log(vowelCount("hello"));
console.log(vowelCount("initialization"));


// DO NOT EDIT below this line - This will result in an automatic fail
// module.exports = {nameOfCity, isDivisible, missingAngle, isRaining, geometricalSequence, multiplesOfThree, powerOf, vowelCount};

