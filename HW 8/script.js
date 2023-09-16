'use strict';

//Task 1
function detonatorTimer(delay) {
    let count = delay;

    const intervalId = setInterval(() => {
        if (count > 0) {
            console.log(count);
            count--;
        } else {
            clearInterval(intervalId);
            console.log('BOOM!');
        }
    }, 1000);
}

//Task 2
function detonatorTimer(delay) {
    let count = delay;

    const timerId = setTimeout(function tick() {
        if (count > 0) {
            console.log(count);
            count--;
            setTimeout(tick, 1000);
        } else {
            clearTimeout(timerId);
            console.log('BOOM!');
        }
    }, 1000);
}

//Task 3
let phone = {
    brand: 'iphone',
    model: 14,
    color: 'deep purple',
    memory: '512 GB',
    year: 2022,
    price: 1000,
    description() {
        console.log(`Introducing the ${this.brand} ${this.model} in a stunning ${this.color} hue. This sleek and powerful device boasts an impressive ${this.memory} of memory, ensuring you have ample space for all your apps, photos, and videos. `);
    },
    forecast() {
        console.log(`The new model will cost ${this.price * 1.2} dollars and will be released in ${this.year + 1}.`);
    }
}

//Task 4
let securedDescription = phone.description.bind(phone);
let securedForecast = phone.forecast.bind(phone);

setTimeout(securedDescription, 1000);
setTimeout(securedForecast, 2000);