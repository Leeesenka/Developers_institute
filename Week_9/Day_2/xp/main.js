// 🌟 Exercise 1 : Scope

// // #1
// function funcOne() {
//     let a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(`inside the funcOne function ${a}`);
    
// }


// // #1.1 - run in the console:
// funcOne()

// // #1.2 What will happen if the variable is declared 
// // with const instead of let ?
// // In the funcOne function, the variable "a" is initialized with a value of 5.
// // Then, the if condition checks if "a" is greater than 1.
// // Since the value of "a" is 5, the condition evaluates to true and the variable "a" is reassigned a new value of 3.
// // The alert statement displays the message "inside the funcOne function" followed by the value of "a", which is 3.

// // #1.2 What will happen if the variable is declared with const instead of let?
// // If the variable is declared with const instead of let, there will be an error because the value of a const variable cannot be changed after initialization.
// // In this case, if we declare the variable "a" with const, the line "a = 3;" will throw an error as we are trying to modify the value of "a" that was set during initialization.
// // This will result in an error and the code will not execute.




// //#2
// let a = 0;
// function funcTwo() {
//     a = 5;
// }

// function funcThree() {
//     alert(`inside the funcThree function ${a}`);
// }

// // #2.1 - run in the console:
// funcThree()
// funcTwo()
// funcThree()
// #2.2 What will happen if the variable is declared 
// with const instead of let ?
// //If the variable is declared with const instead of let, there will be an error because the value of a const variable cannot be changed after initialization.
// //In this case, if we declare the variable "a" with const, the line "a = 5;" in funcTwo will throw an error as we are trying to modify the value of "a" that was set during initialization.
// //This will result in an error and the code will not execute.

// //#3
// function funcFour() {
//     window.a = "hello";
// }


// function funcFive() {
//     alert(`inside the funcFive function ${a}`);
// }

// // #3.1 - run in the console:
// funcFour()
// funcFive()
// //When a variable is declared without the var, let, or const keywords, it becomes a property of the global object (in the browser environment, the global object is the window object). Therefore, window.a can be accessed anywhere in the code.


// //#4
// let a = 1;
// function funcSix() {
//     let a = "test";
//     alert(`inside the funcSix function ${a}`);
// }


// // #4.1 - run in the console:
// funcSix()
// // #4.2 What will happen if the variable is declared 
// // with const instead of let ?
// //If the variable is declared with const instead of let, the behavior will be the same. 




// //#5
// let a = 2;
// if (true) {
//     let a = 5;
//     alert(`in the if block ${a}`);
// }
// alert(`outside of the if block ${a}`);

// // #5.1 - run the code in the console
// // #5.2 What will happen if the variable is declared 
// // with const instead of let ?



// // If the variable is declared with const instead of let, the behavior will be the same. 


// 🌟 Exercise 2 : Ternary Operator

// function winBattle(){
//     return true;
// }


// const winBattle = () => true;


// const experiencePoints = winBattle() ? 10 : 1;
// console.log(experiencePoints);


// 🌟 Exercise 3 : Is It A String ?

// const isString = (a) => (typeof a === 'string' ? true : false);

// console.log(isString('hello')); 
// console.log(isString([1, 2, 4, 0])); 


// 🌟 Exercise 4 : Colors
// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// colors.forEach((item, i, arr2)=>{
     
//      arr2[i]= i+1 + "#" + " "+ "choice is" + " " + item 
//  })
//  console.log(colors)


//  if (colors.some((value) => value.includes("Violet"))) {
//     console.log("Yeah");
//   } else {
//     console.log("No...");
//   }


// //   🌟 Exercise 5 : Colors #2
// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// const ordinal = ["th","st","nd","rd"];

// colors.forEach((item, i, arr2)=>{
//     if (colors.some((value) => value ==="Blue")) {
//         arr2[i]= i+1 + ordinal[1] + " " + "choice is" + " " + item 

//          } 
        
//     else if (colors.some((value) => value === "Green")) {
//         arr2[i]= i+1 + ordinal[2] + " " + "choice is" + " " + item 
    
//              }  
//     else if (colors.some((value) => value === "Red")) {
//         arr2[i]= i+1 + ordinal[3] + " " + "choice is" + " " + item 
            
//          }             
//     else           
//          {
//         arr2[i]= i+1 + ordinal[0] + " " + "choice is" + " " + item 
//          }
//     })
// console.log(colors)

// Exercise 6 : Bank Details
let bankAmount = 10000;
let amount_of_VAT = 0.17;

const details = ["+200", "-100", "+146", "+167", "-2900"]

const myFunc1 = () => {
    let new_bankAmount = bankAmount;
    for (let i =0; i < details.length; i++){
    const expense = parseFloat(details[i]);
    new_bankAmount += expense * amount_of_VAT;
  }
  console.log(new_bankAmount);
  return new_bankAmount;
};

bankAmount = myFunc1();
console.log(bankAmount);

    

