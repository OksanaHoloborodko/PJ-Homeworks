'use strict';

let button = document.getElementById('switcher__button');
let text = document.getElementById('switcher__timer');
let body = document.getElementsByTagName('body')[0];


function getConfig() {
    let config = localStorage.getItem('theme');
    let theme = 'light'; 
    let date = null;

    if (config) {
        theme = JSON.parse(config).theme;
        date = JSON.parse(config).date;
        text.textContent = date;
    }

    if (theme == 'dark') {
        body.classList.add('dark');
    }
    return [theme, date];
}

let [theme, date] = getConfig();

function normalizeDate(num) {
    return num < 10 ? `0${num}` : `${num}`;
}

button.addEventListener('click', () => {
    const clickTime = new Date();
    const year = clickTime.getFullYear();
    const month = normalizeDate(clickTime.getMonth() + 1);
    const day = normalizeDate(clickTime.getDate());
    const hour = normalizeDate(clickTime.getHours());
    const minutes = normalizeDate(clickTime.getMinutes());
    const seconds = normalizeDate(clickTime.getSeconds());

    body.classList.toggle('dark');
    
    if(theme == 'light') {
        button.textContent = 'Turn on';
        text.textContent = `Last turn off: ${day}-${month}-${year} ${hour}:${minutes}:${seconds}`;
        theme = 'dark';
    } else {
        button.textContent = 'Turn off';
        text.textContent = `Last turn on: ${day}-${month}-${year} ${hour}:${minutes}:${seconds}`;
        theme = 'light';
    }

    localStorage.setItem('theme', JSON.stringify({theme: theme, date: text.textContent}));
});