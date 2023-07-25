// QUERYSELECTOR //
var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px #ccc';

var input = document.querySelector('input');
input.value = "Hello World";

var submit = document.querySelector('input[type="submit"]');
submit.value = "Send";

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.backgroundcolor = 'green'

// var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.visibility = 'hidden'

// var titles = document.querySelectorAll('.title');

// console.log(titles);
// titles[0].textContent= "Hello";

 var items = document.querySelectorAll('.list-group-item')
 items[1].style.color= 'green';

 var odd = document.querySelectorAll('li:nth-child(odd)');

 for(var i=0; i<odd.length;i++)
 {
    odd[i].style.backgroundColor='green';
 }




