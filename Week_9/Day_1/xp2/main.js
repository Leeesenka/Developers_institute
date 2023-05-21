// 🌟 Exercise 1: Timer
// function x(){
//     alert('Hello World')
// }
// setTimeout(function(){
//     x();
// },2000)
// const div = document.getElementById('container');
// const new_p = document.createElement('p');
// function add_p(){
    
//     new_p.textContent = 'Hello World';
//     div.appendChild(new_p)
// }
// setTimeout(function(){
//     add_p();
// },2000)


// var button = document.getElementById("clear");
// var intervalId;

// function addParagraph() {
//     var paragraph = document.createElement("p");
//     paragraph.textContent = "Hello World";
//     div.appendChild(paragraph);

//     if (div.querySelectorAll("p").length === 5) {
//         clearInterval(intervalId);
//     }
// }

// intervalId = setInterval(addParagraph, 2000);

// button.addEventListener("click", function() {
//     clearInterval(intervalId);
// });


// Exercise 2 : Move The Box

// var square = document.getElementById('animate');
// var big_square = document.getElementById('container');
// var intervalId;

// function animation() {
//     var containerWidth = big_square.offsetWidth;
//     var squareWidth = square.offsetWidth;
//     var currentPosition = 0;

//     intervalId = setInterval(function() {
//         currentPosition += 1;
//         square.style.left = currentPosition + 'px';

//         if (currentPosition >= containerWidth - squareWidth) {
//             clearInterval(intervalId);
//         }
//     }, 1);
// }

// function myMove() {
//     animation();
// }