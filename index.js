// Add answers here 

let nameOfCity = (str) => str.toLowerCase().startsWith("los") || str.toLowerCase().startsWith("new") ? `${str}` : "The city name does not begin with Los or New";

// console.log(nameOfCity("New York"));
// console.log(nameOfCity("los angeles"));
// console.log(nameOfCity("Valletta"));
// console.log(nameOfCity("los almost"));
// console.log(nameOfCity("newcastle"));


let isDivisible = (num) => num%100 === 0 ? true : false;

// console.log(isDivisible(100));
// console.log(isDivisible(1000));
// console.log(isDivisible(1));
// console.log(isDivisible(48));
// console.log(isDivisible(10000));


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

// console.log(missingAngle(45,45));
// console.log(missingAngle(10,10));
// console.log(missingAngle(90,45));

let isRaining = function(bool){
    if(bool){
        return `wet day - you need an umbrella!`
    }else{
        return `dry day - leave your umbrella at home!`
    }
}

// console.log(isRaining(false));


let geometricalSequence = function(){
    let str = "";
    for (let i = 0; i < 9; i++) {
        if(i<8){
        str += `${2**i} `;
        }else{
            str += `${2**i}`;
        }
    }
    return str;
}

// console.log(geometricalSequence());

let multiplesOfThree = () => {
    let str = "";
    for (let i = 1; i <= 5; i++) {
        if(i<5){
        str += `${3*i} `;
        }else{
            str += `${3*i}`;
        }
    }
    return str;
}

// console.log(multiplesOfThree());

let powerOf = (num) => Math.pow(num,num);

// console.log(powerOf(3));
// console.log(powerOf(2));
// console.log(powerOf(4));
// console.log(powerOf(9));


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

// console.log(vowelCount("aeiou"));
// console.log(vowelCount("AEIOU"));
// console.log(vowelCount("bhjpg"));
// console.log(vowelCount("hello"));
// console.log(vowelCount("initialization"));


// DO NOT EDIT below this line - This will result in an automatic fail
module.exports = {nameOfCity, isDivisible, missingAngle, isRaining, geometricalSequence, multiplesOfThree, powerOf, vowelCount};

