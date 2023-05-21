// Exercise 1 : Change The Article
// let h1 = document.querySelector('h1');
// console.log(h1.textContent);


// const element = document.querySelector('article');
// let last_element = element.lastElementChild;
// if (last_element.tagName.toLowerCase() === 'p') {
//     if (last_element.textContent === "But what effect does eating chocolate have on our health?"){
//         console.log('The last paragraph has the expected text.');
//   } else {
//         console.log('The last paragraph does not have the expected text.');
//     }    

// last_element.remove()
// }

// var title
// title = document.querySelector('h2')
// function clikColor(){
//         title.style.backgroundColor = 'red';
   
// }
// title.addEventListener('click', clikColor)


// var h3
// h3 = document.querySelector('h3')
// function hide(){
//     h3.style.display = 'none';
// }
// h3.addEventListener('click', hide)




// let article = document.querySelector('article');
// function go_bold(){
    
//     article.style.fontWeight = 'bold';
// }




// let h1_size = document.querySelector('h1');
// function random_size(){
//     h1_size.style.fontSize = Math.floor(Math.random() * 101)+ 'px';
// }
// h1_size.addEventListener('mouseover', random_size)




// Exercise 2 : Work With Forms

// let form = document.forms;
// console.log(form)

// var firstNameInput = document.getElementById('fname');
// var lastNameInput = document.getElementById('lname');
// var submitButton = document.getElementById('submit');

// console.log(firstNameInput);
// console.log(lastNameInput);
// console.log(submitButton);


// const firstNameInputByName = document.querySelector('input[name="fname"]');
// const lastNameInputByName = document.querySelector('input[name="lname"]');
// console.log(firstNameInputByName, lastNameInputByName);

// document.addEventListener('DOMContentLoaded', function() {

//     const frm = document.forms[0];

//     const firstNameInput = document.querySelector('#fname');
//     const lastNameInput = document.querySelector('#lname');

//     function handleSubmit(e){
//         e.preventDefault();
        
//         if(firstNameInput.value && lastNameInput.value) {
//             const usersAnswer = document.querySelector('.usersAnswer');
//             const firstNameLi = document.createElement('li');
//             const lastNameLi = document.createElement('li');
            
//             firstNameLi.textContent = firstNameInput.value;
//             lastNameLi.textContent = lastNameInput.value;
            
//             usersAnswer.appendChild(firstNameLi);
//             usersAnswer.appendChild(lastNameLi);
//         } else {
//             alert('Both fields must be filled out!');
//         }
//     }


//     frm.addEventListener('submit', handleSubmit);
// });


// 🌟 Exercise 3 : Transform The Sentence

// var allBoldItems = [];
// function getBold_items(){
//     var text = document.querySelector('p')
//     console.log(text.textContent)
//     var bold = document.querySelectorAll('strong')
//     console.log(bold)
//     for (let i = 0; i < bold.length; i++) {
//         allBoldItems.push(bold[i].textContent);
//     }
//     console.log(allBoldItems);

// }
// getBold_items();



// function highlight(){
//     var text = document.querySelector('p')
//     console.log(text.textContent)
//     var bold = document.querySelectorAll('strong')
//     console.log(bold)
//     for (let i = 0; i < bold.length; i++) {
//         allBoldItems.push(bold[i].style.color = 'blue')
//     }
// }
// highlight()

// function return_normal(){
//     var text = document.querySelector('p')
//     console.log(text.textContent)
//     var bold = document.querySelectorAll('strong')
//     console.log(bold)
//     for (let i = 0; i < bold.length; i++) {
//         allBoldItems.push(bold[i].style.color = 'black')
//     }
// }
// return_normal()

// document.querySelector('p').addEventListener("mouseover", highlight);
// document.querySelector('p').addEventListener("mouseout", return_normal);


// 🌟 Exercice 4 : Volume Of A Sphere

// V = (4/3) * π * r^3


// const radiusNameInput = document.querySelector('#radius');
// const volumeNameInput = document.querySelector('#volume');
// console.log(radiusNameInput)
// console.log(volumeNameInput)
// function handleSubmit(e) {
//     e.preventDefault();
    
//     if (radiusNameInput.value === "") {
//         alert('Please write radius');
//     } else {
//         const radius = parseFloat(radiusNameInput.value);
//         const volume = (4/3) * Math.PI * Math.pow(radius, 3);
//         volumeNameInput.value = volume.toFixed(2); 
//     }
// }

// const form = document.querySelector('#MyForm');
// form.addEventListener('submit', handleSubmit);


// Exercise 5 : Event Listeners

// var circle;
// circle = document.getElementById("circle")
// console.log(circle)
// function change_place(){

//     circle.style.right = "500px"

// }
// circle.addEventListener('click', change_place);


// function change_color(){

//     circle.style.backgroundColor = "red"

// }
// circle.addEventListener('mouseover', change_color);

// function change_size(){

//     circle.style.width = "150px"
//     circle.style.height = "150px"
//     circle.style.borderRadius = "75px"
// }
// circle.addEventListener('dblclick', change_size);

