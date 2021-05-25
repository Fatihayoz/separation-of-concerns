'use strict';

/* .removeChild

  you can remove children from an element

*/


// add an element
const headerEl = document.createElement('h1');
headerEl.innerHTML = 'Welcome!';

const divEl = document.createElement('div');
divEl.appendChild(headerEl);

console.log(divEl.nodeName, divEl.cloneNode(true));
console.assert(divEl.childElementCount === 1, 'Test: before remove');
/*
DIV <div>
      <h1>Welcome!</h1>
    </div>
*/

// remove the element
divEl.removeChild(headerEl);

console.log(divEl.nodeName, divEl.cloneNode(true));

/*
DIV <div>

    </div>
*/
console.assert(divEl.childElementCount === 0, 'Test: after remove');
