'use strict';
//Task 1
const movies = [
	{
		movieName: 'The Thing',
		releaseYear: 1982,
		directedBy: 'Carpenter',
		runningTimeInMinutes: 109,
	},
	{
		movieName: 'Aliens',
		releaseYear: 1986,
		directedBy: 'Cameron',
		runningTimeInMinutes: 137,
	},
	{
		movieName: 'Men in Black',
		releaseYear: 1997,
		directedBy: 'Sonnenfeld',
		runningTimeInMinutes: 98,
	},
	{
		movieName: 'Predator',
		releaseYear: 1987,
		directedBy: 'McTiernan',
		runningTimeInMinutes: 107,
	},
];

function byProperty(property, direction) {
	if(direction === '>') {
        return (a, b) => {
            return a[property] - b[property];
        };
    } else if(direction === '<') {
        return (a, b) => {
            return b[property] - a[property];
        };
    }
}

console.log(movies.sort(byProperty('releaseYear', '>')));
console.log(movies.sort(byProperty('runningTimeInMinutes', '<')));
console.log(movies.sort(byProperty('movieName', '>')));

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