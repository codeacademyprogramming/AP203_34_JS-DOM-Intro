

let menu = document.getElementById('menu')
menu = document.querySelector('#menu')
let item = document.querySelector('.menu-item');
let menuItems = document.getElementsByTagName('li')
menuItems = document.getElementsByClassName('menu-item')
menuItems = document.querySelectorAll('li.menu-item')



// [...menu].array.forEach(element => {
//     console.log(element.innerText)
// });


// document.getElementById('menu').removeChild(item)


menuItems.forEach(element => {
    console.log(element.innerHTML)
});

let li = document.querySelector('li:first-child');

li.innerHTML = '<b>Salam</b>';

console.log(menu)

function show(){
    alert('Hello AP203!')
}

let btn = document.getElementById('showBtn');
btn.onclick = function(){
    alert('Hello AP203!')
}




