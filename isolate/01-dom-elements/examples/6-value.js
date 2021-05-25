'use strict';

/* element.value

  .value is how you can read/write from input elements

*/


// the "input" element
const inputEl = document.createElement('input');
inputEl.value = 'hello :)';
console.log(inputEl.nodeName, inputEl); // INPUT <input>
console.log('.value:', inputEl.value);  // .value: hello :)


// the "textarea" element
const textAreaEl = document.createElement('textarea');
textAreaEl.value = 'good bye :(';
console.log(textAreaEl.nodeName, textAreaEl); // TEXTAREA <textarea></textarea>
console.log('.value:', textAreaEl.value); // .value: good bye :(


/* the 'input' element
const inputEl = document.createElement('input')
input.value = 'My name is: ';
console.log(inputEl, input.value); // <input> My name is: 
*/

// https://stackoverflow.com/questions/31225901/difference-between-innerhtml-and-value-in-js
