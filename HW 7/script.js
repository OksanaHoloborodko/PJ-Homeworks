'use strict';

//Task 1
function addThemAll(...args) {
    return args.reduce((acc, currentNum) => acc + currentNum, 0);
}