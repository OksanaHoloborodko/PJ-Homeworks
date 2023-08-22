'use strict';

//Homework 3

//Even number output
const value = prompt('Enter a number');

if(isNaN(value)) {
    console.log('Error, it\'s not a number');
} else {
    for(let i = 0; i < value; i++) {
        if(i % 2 == 0) {
            console.log(i);
        }
    }
}

//Number reversal
const currentMaxValue = 4589;
let reverseMaxValue = +currentMaxValue.toString().split("").reverse().join("");

console.log(reverseMaxValue);
console.log(typeof reverseMaxValue);

//Finding the product of an array
const resultsArray = [1, 2, [3, [4]]];
const modifiedArray = resultsArray.flat(Infinity);
let productOfArray = 1;

for(let i = 0; i < modifiedArray.length; i++) {
    productOfArray *= modifiedArray[i];
}

console.log(productOfArray);


/*Homework 2

//Password checker
let password = prompt('Enter your password');

console.log(password.length > 7 && !isNaN(password[0]));

//UAH to USD converter
let rate = 0.027;
let valueUah = prompt('Enter value in UAH');
let valueUsd = +(valueUah * rate).toFixed(2);

console.log(valueUsd);

//Calculating cost of petrol
let numOfLiters = +prompt('How many liters of petrol do you want to buy?');
let costPerLiter = +prompt('Enter the cost per liter of petrol');
let calculatedCost = (numOfLiters * costPerLiter).toFixed(2);

console.log(`You have to pay ${calculatedCost}`);


Homework 1
let a = 100;
let b = 5;

let sum = a + b;
console.log(`sum: ${sum}`);

let subtraction = a - b;
console.log(`subtraction: ${subtraction}`);

let multiplication = a * b;
console.log(`multiplication: ${multiplication}`);

let division = a / b;
console.log(`division: ${division}`);

let exponentiation = a ** b;
console.log(`exponentiation: ${exponentiation}`);*/
