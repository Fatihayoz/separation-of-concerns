'use strict';

// you can access child elements and directly modify them

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

// access a child by index and update it
const goodbyeHeader = divEl.children[1];
goodbyeHeader.innerHTML = 'floating in space';
console.log(goodbyeHeader.nodeName, goodbyeHeader.cloneNode(true)); // H2 <h2>floating in space</h2>

// the changes are visible in the parent
console.log(divEl.nodeName, divEl.cloneNode(true));
/*
DIV <div>
      <h1>hello</h1>
      <h2>floating in space</h2>
      <h3>...</h3>
    </div>
*/
console.log('.childElementCount', divEl.childElementCount); // .childElementCount 3
