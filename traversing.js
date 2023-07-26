//Traversing the DOM
var itemList = document.querySelector('#items');
// parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor="grey"
// console.log(itemList.parentNode.parentNode.parentNode);

// parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor="grey"
// console.log(itemList.parentElement.parentElement.parentElement);


// childNodes
//console.log(itemList.childNodes);
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor='yellow'

// FirstChild
// console.log(itemList.firstChild);

// FirstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent= "Hello 1"

// LastChild
// console.log(itemList.lastChild);

// LastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent= "Hello 4"

// nextSibling
// console.log(itemList.nextSibling);

// nextElementSibling
// console.log(itemList.nextElementSibling);

// previousSibling
//  console.log(itemList.previousSibling);

// previousElementSibling
//  console.log(itemList.previousElementSibling);
//  itemList.previousElementSibling.style.color="green";

// CreateElement

// Create a div
var newDiv = document.createElement('div');

// Add class
newDiv.className = 'hello';

// Add id
newDiv.id = 'hello1';

// Add attr
newDiv.setAttribute('title', 'Hello Div')

// Create text node
var newDivText = document.createTextNode('Hello World')

// Add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1')

console.log(newDiv);

container.insertBefore(newDiv, h1);

var container1 = document.querySelector('body .list-group');
var li = document.querySelector('ul li');

container1.insertBefore(newDiv, li);