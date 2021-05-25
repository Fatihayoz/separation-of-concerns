'use strict';

/* element.nodeName

  .nodeName will tell you what kind of element something is
  it's kind of like typeof for DOM elements

*/


// you can create an element with lower or upper case letters
const divEl = document.createElement('Div');
// but the .nodeName will be in all capitals
console.log(divEl.nodeName, divEl);     // returns DIV <div></div>  

// you can't modify the .nodeName property of an element
try {
  divEl.nodeName = '!potato!';
} catch (err) {                     // TypeError
  console.log(err);
}

const pEl = document.createElement('P');
console.log(pEl.nodeName, pEl); // P <p></p>

const buttonEl = document.createElement('bUTTOn');
console.log(buttonEl.nodeName, buttonEl); // BUTTON <button></button>

const liEl = document.createElement('LI');
console.log(liEl.nodeName, liEl); // LI <li></li>

const sectionEl = document.createElement('SeCtIoN');
console.log(sectionEl.nodeName, sectionEl); // SECTION <section></section>

const inputEl = document.createElement('InpuT');
console.log(inputEl.nodeName, inputEl); // INPUT <input></input>
