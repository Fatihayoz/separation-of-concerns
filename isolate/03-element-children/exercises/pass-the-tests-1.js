'use strict';

const ulEl = document.createElement('ul');
ulEl.innerHTML = `
  <li> toad </li>
  <li>Frog</li>
  <li>salad</li>
`;
console.log(ulEl.nodeName, ulEl.cloneNode(true));

// --- write some code ---
/*
const toadLi = ulEl.children[0];
toadLi.innerHTML = 'toad';

const frogLi = ulEl.children[1];
frogLi.innerHTML = 'frog';

const saladLi = ulEl.children[2];
saladLi.innerHTML = 'salamander';
*/

let newLi = ['toad', 'frog', 'salamander'];
for(let i = 0; i < newLi.length; i++) {
  ulEl.children[i].innerHTML = newLi[i];
}

// --- --- --- --- --- ---

console.log(ulEl.nodeName, ulEl.cloneNode(true));

const expectedInnerHTMLs = ['toad', 'frog', 'salamander'];
for (let i = 0; i < expectedInnerHTMLs.length; i++) {
  const actual = ulEl.children[i].innerHTML;
  const expected = expectedInnerHTMLs[i];
  console.assert(actual === expected, `Test child ${i}`);
}
