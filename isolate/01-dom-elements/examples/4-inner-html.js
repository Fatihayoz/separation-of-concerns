'use strict';

/* element.innerHTML

  .innerHTML will let you read and write what is inside an element

*/


const divEl = document.createElement('Div');
divEl.innerHTML = "div time!";
console.log(divEl.nodeName, divEl); // DIV <div>div time!</div>
console.log('.innerHTML:', divEl.innerHTML, '\n\n');

const pEl = document.createElement('P');
pEl.innerHTML = "i'm a p";
console.log(pEl.nodeName, pEl); // P <p>i'm a p</p>
console.log('.innerHTML:', pEl.innerHTML, '\n\n');

const buttonEl = document.createElement('bUTTOn');
buttonEl.innerHTML = "big time sun";
console.log(buttonEl.nodeName, buttonEl); // BUTTON <button>big time sun</button>
console.log('.innerHTML:', buttonEl.innerHTML, '\n\n');

const liEl = document.createElement('LI');
liEl.innerHTML = 'third thing';
console.log(liEl.nodeName, liEl); // LI <li>thrid thing</li>
console.log('.innerHTML:', liEl.innerHTML, '\n\n');

const sectionEl = document.createElement('SeCtIoN');
sectionEl.innerHTML = ':)';
console.log(sectionEl.nodeName, sectionEl); // SECTION <section>:)</section>
console.log('.innerHTML:', sectionEl.innerHTML, '\n\n');


const h2El = document.createElement('h2');
h2El.innerHTML = 'Most Populated Cities in Belgium';
h2El.className = 'city';
console.log(h2El);  // <h2 class='city'>Most Populated Cities in Belgium</h2>
