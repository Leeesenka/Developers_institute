// Exercise 1 : Find The Sum

// const addition_fourth = (a, b) => a+b
// addition_fourth(5,7)
// console.log(addition_fourth(5,7))


// 🌟 Exercise 2 : Kg And Grams
// let grams = 1000
// const addition_fourth = (kilograms) => kilograms*grams

// console.log(addition_fourth(5))

// // Function declaration
// function declaration(kilograms) {
//     return kilograms * grams;
//   }
//   console.log(declaration(5));


//   // Function expression
//   const expression = function(kilograms) {
//     return kilograms * grams;
//   };
//   console.log(expression(5));


// Exercise 3 : Fortune Teller


// (function(numberOfChildren, partnerName, geographicLocation, jobTitle) {
//   const sentence_1 = `You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnerName} with ${numberOfChildren} kids.`;
//   const sentence = document.getElementById('sentence');
//   sentence.textContent = sentence_1;
// })(2, 'Artem', 'Tel-Aviv', 'Developer');


// 🌟 Exercise 4 : Welcome

// (function(userName) {
//     const userProfile = document.getElementById('userProfile');
//     const profileDiv = document.createElement('div');
//     profileDiv.classList.add('nav-link');
    
//     const nameElement = document.createElement('span');
//     nameElement.textContent = userName;
    
//     const profileImg = document.createElement('img');
//     profileImg.src = 'https://klike.net/uploads/posts/2019-07/medium/1564314059_1.jpg';
//     profileImg.classList.add('rounded-circle');

//     profileImg.style.width = '40px';
//     profileImg.style.height = '40px';
//     profileDiv.appendChild(nameElement);
//     profileDiv.appendChild(profileImg);
//     userProfile.appendChild(profileDiv);
//   })('Kitten');
  

//   🌟 Exercise 5 : Juice Bar
// function once(fn) {
//     let executed = false;
//     let result;
  
//     return function(...args) {
//       if (!executed) {
//         executed = true;
//         result = fn.apply(this, args);
//       }
//       return result;
//     };
//   }
  
// function makeJuice(size){
//     const ingredients = []
//     function addIngredients(firstUngredient, secondIngredient, thirdIngredient){
//         ingredients.push(firstUngredient, secondIngredient, thirdIngredient)
       
        

// function displayJuice(){
//     const sentence_1 = `The client wants a ${size} juice, containing ${ingredients.join(", ")}.`
//         const sentence = document.getElementById('sentence');
//         sentence.textContent = sentence_1;
        
//         console.log(ingredients)
        
// }displayJuice()
// }
// addIngredients("strawberry", "mango", "pineapple");
// addIngredients("cola", "gin", 'vodka')

//     }
// const executeOnce = once(makeJuice);
// executeOnce('large');


