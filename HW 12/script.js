'use strict';

let button = document.getElementById('switcher__button');
let text = document.getElementById('switcher__timer');
let body = document.getElementsByTagName('body')[0];


function getConfig() {
    let config = localStorage.getItem('theme');
    let theme = 'light'; 
    let date = null;

    if (config) {
        const parsedConfig = JSON.parse(config);
        theme = parsedConfig.theme;
        date = parsedConfig.date;
        text.textContent = theme == 'light' ? `Last turn off: ${date}`: `Last turn on: ${date}`;
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

function formatDate(date) {
    const year = date.getFullYear();
    const month = normalizeDate(date.getMonth() + 1);
    const day = normalizeDate(date.getDate());
    const hour = normalizeDate(date.getHours());
    const minutes = normalizeDate(date.getMinutes());
    const seconds = normalizeDate(date.getSeconds());
    
    return `${day}-${month}-${year} ${hour}:${minutes}:${seconds}`;
}

button.addEventListener('click', () => {
    const formattedDate = formatDate(new Date());

    body.classList.toggle('dark');
    
    if(theme == 'light') {
        button.textContent = 'Turn on';
        text.textContent = `Last turn off: ${formattedDate}`;
        theme = 'dark';
    } else {
        button.textContent = 'Turn off';
        text.textContent = `Last turn on: ${formattedDate}`;
        theme = 'light';
    }

    localStorage.setItem('theme', JSON.stringify({theme, date: formattedDate}));
});
