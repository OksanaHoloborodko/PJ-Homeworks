'use strict';

//Task 2
function someFunction(str, n) {
    const result = str.repeat(n);
    console.log(result);
    return result;
}

function slower(func, seconds) {
    return function(...args) {
        const miliseconds = seconds * 1000;
        const numberOfSeconds = seconds > 1 ? 'seconds' : 'second';
        setTimeout(() => {
            func.apply(this, args);
        }, miliseconds);
        console.log(`Chill out, you will get your result in ${seconds} ${numberOfSeconds}`);
    }
}

let slowedSomeFunction = slower(someFunction, 5);
slowedSomeFunction('Hi', 3);