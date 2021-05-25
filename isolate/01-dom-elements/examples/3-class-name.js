'use strict';

/* element.className

  .className allows you to change the class of an element
  this is useful for dynamic styling

*/



const divEl = document.createElement('div');
divEl.className = 'dark-widget';
console.log(divEl.nodeName, divEl); // DIV <div class='dark-widget'></div>

const pEl = document.createElement('p');
pEl.className = 'social-media-thumbnail'; 
console.log(pEl.nodeName, pEl); // P <p class='social-media-thumbnail'>/<p>

const buttonEl = document.createElement('button');
buttonEl.className = 'dark-text';
console.log(buttonEl.nodeName, buttonEl); // BUTTON <button class='dark-text'></button>


const h1El = document.createElement('h1');
h1El.className = 'titles';
console.log(h1El.nodeName, h1El); // H1 <h1 class='titles'></h1>

const spanEl = document.createElement('span');
spanEl.className = 'note';
console.log(spanEl.nodeName, spanEl); // SPAN <span class='note'></span>

