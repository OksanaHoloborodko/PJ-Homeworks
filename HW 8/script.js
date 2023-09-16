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