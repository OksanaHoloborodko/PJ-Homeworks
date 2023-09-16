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