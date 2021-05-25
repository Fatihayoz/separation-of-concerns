'use strict';

// you can use a for ... of loop to access children

// create a div with 3 children
const divEl = document.createElement('div');
divEl.innerHTML = '<h1>hello</h1>';
divEl.innerHTML += '<h2>goodbye</h2>';
divEl.innerHTML += '<h3>...</h3>';
console.log(divEl.nodeName, divEl.cloneNode(true));
/*
DIV <div>
      <h1>hello</h1>
      <h2>goodbye</h2>
      <h3>...</h3>
    </div>
*/
console.log('.childElementCount', divEl.childElementCount); // .childElementCount 3

// update each child using a for loop
for (const child of divEl.children) {
  child.innerHTML += '!';
}

// the changes are visible in the parent
console.log(divEl.nodeName, divEl.cloneNode(true));
/*
DIV <div>
      <h1>hello!</h1>
      <h2>goodbye!</h2>
      <h3>...!</h3>
    </div>
*/
console.log('.childElementCount', divEl.childElementCount); // .childElementCount 3
