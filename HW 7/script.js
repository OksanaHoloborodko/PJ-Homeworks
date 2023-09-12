'use strict';

//Task 1
function addThemAll(...args) {
    return args.reduce((acc, currentNum) => acc + currentNum, 0);
}

//Task 2
function multiply(a) {
    return function(b) {
        return a * b;
    }
}