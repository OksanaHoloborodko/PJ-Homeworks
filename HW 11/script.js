'use strict';

let textElement = document.getElementById('headerTwo');

let firstSection = document.getElementsByTagName('section')[0];

let listItems = document.querySelectorAll('li')
let listItem = null;

for (let i = 0; i < listItems.length; i++) {
  if (listItems[i].textContent === 'Пункт 5') {
    listItem = listItems[i];
  }
}

let divWithClass = document.querySelector('.hatredLevelBlock');

console.log(textElement);
console.log(firstSection);
console.log(listItem);
console.log(divWithClass);
