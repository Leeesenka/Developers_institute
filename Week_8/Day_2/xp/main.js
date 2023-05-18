// Exercise 1 : Find The Numbers Divisible By 23
//function isDivisible(){
//     let sum = 0;
//     for(let i=0; i<500; i++){

//         if (i%23=== 0) {
//             console.log('Outcome :', i);
//             sum+=i
//         }
//     } 
//     console.log('Sum :', sum);}
// isDivisible()

// function isDivisible(divisor){
//     let sum = 0;
//     for(let i=0; i<500; i++){

//         if (i%divisor=== 0) {
//             console.log('Outcome :', i);
//             sum+=i
//         }
//     } 
//     console.log('Sum :', sum);}

// isDivisible(3)

// Exercise 2 : Shopping List

// const stock = { 
//     "banana": 6, 
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry":1
// }  

// const prices = {    
//     "banana": 4, 
//     "apple": 2, 
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry":10
// } 

// const shoppingList = [
//     "banana",
//     "orange",
//     "apple"
// ]

// function myBill(){
//     let sum = 0;
//     for(let i=0; i<shoppingList.length; i++){
//         const bag = shoppingList[i];

        
//         if (bag in stock && stock[bag]>0){
//             sum+=prices[bag];
//             stock[bag]
//                 }
// }
//     return sum
// }
// const total_price = myBill();
// console.log("Price:", total_price);
// console.log("Updated stock:", stock);

// Exercise 3 : What’s In My Wallet ?
// const arr = [0.25, 0.10, 0.05, 0.01]
// function changeEnough(itemPrice, amountOfChange){
//     for(let i=0; i<arr.length; i++){
//         const a = arr[i];

//         for(let i=0; i<amountOfChange.length; i++){
//             if (a*amountOfChange[i]>itemPrice){
//             return true
            
//             }
//             else 
//             return false
            
//         }

//     }
// }

// changeEnough(0.75, [0,0,20,5])
// console.log(changeEnough(0.75, [0,0,20,5]))

// Exercise 4 : Vacations Costs

// function hotelCost(){
//     let res;
//         do {
//             res=prompt("How many nights do you want to stay at the hotel");
//         } while (isNaN(res)== true || res == '');

//         return res * 140;
// }
// // console.log(hotelCost());

// function planeRideCost(){
//     let res1;
//     do {
//         res1=prompt("Where are you destination: ");
//     } while (isNaN(res1) == '');

//     if (res1 === "London") 
//     return (183)

//     if (res1 === "Paris")
//     return (220)

//     else
//     return (300)

// }
// // console.log(planeRideCost())

// function rentalCarCost(){
//     let res2;
//     do {
//         res2=prompt("How many days do you want to rent a car: ");
//     } while (isNaN(res2)== true || res2 == '');

//     if (res2 > 10)
//     return ((res2*40)*0.95)
//    else
//    return res2 *40

// }
// // console.log(rentalCarCost())

// function totalVacationCost(){
//     const a = hotelCost()
//     console.log(a)
//     const b = planeRideCost()
//     console.log(b)
//     const c = rentalCarCost()
//     console.log(c)
//     const total_sum = (a) + (b) + (c)
//     return total_sum


// }
// console.log(totalVacationCost())


// Exercise 5 : Users
// let div = document.getElementById("container");
// console.log(div)
// let div1 = document.getElementsByClassName("list")
// console.log(div1[0])
// div1[0].lastElementChild.innerText = "Richard"

// var div2 = document.getElementsByTagName('li');
// for(var i = 0; i < div2.length; i++) {
//     if(div2[i].textContent == 'Sarah') {
//         div2[i].remove();
//         break;
//     }
// }

// var div3 = document.getElementsByClassName("list");
// for(var i = 0; i < div3.length; i++) {
//     if(div3[i].children.length > 0) {
//         div3[0].children[0].textContent = 'Anna';
//         div3[1].children[0].textContent = 'Alex';
//     }
// }

// for(var i = 0; i < div3.length; i++) {
//     div3[i].classList.add('student_list');
// }


// if (div3.length > 0)  {
//     div3[0].classList.add("university");
//     div3[0].classList.add("attendance")

// }

// for(var i = 0; i < div2.length; i++) {
//     if(div2[i].textContent == 'Dan') {
//         div2[i].style.display = 'none';
//         break;
//     }
// }

// for(var i = 0; i < div2.length; i++) {
//     if(div2[i].textContent == 'Richard') {
//         div2[i].style.border = '1px solid red';
//         break;
//     }
// }


// document.body.style.fontSize = '20px';

// document.body.style.backgroundColor = 'lightblue';
// div.style.padding = '20px';


// Exercise 6 : Change The Navbar
// var div = document.getElementById("navBar")
// div.setAttribute('id', 'socialNetworkNavigation')


// var div1 = document.createElement('li');

// var div2 = document.createTextNode('Logout');


// div1.appendChild(div2);
// var div3 = div.getElementsByTagName('ul')[0];
// div3.appendChild(div1);

// var a= div3.firstElementChild;
// var b = div3.lastElementChild;
// console.log(a.textContent)
// console.log(b.textContent)

// Exercise 4 : My Book List
// var allBooks = [ {
//     title: 'Twilight',
//     author: 'Stephenie Meyer',
//     image: 'https://images-na.ssl-images-amazon.com/images/I/615ZIxEDozL._AC_UL210_SR210,210_.jpg',
//     alreadyRead: true
// },
// {
//     title: 'New Moon',
//     author: 'Stephenie Meyer',
//     image: 'https://target.scene7.com/is/image/Target/GUEST_987f24c0-1d82-444a-b7fb-44d68df41b4a?wid=488&hei=488&fmt=pjpeg',
//     alreadyRead: false
// } ]

// var book = document.querySelector('.listBooks');
// for (var i = 0; i < allBooks.length; i++) {
//     var books = allBooks[i];
    

//     var div = document.createElement('div');

//     var Details = document.createElement('p');
//             Details.textContent = books.title + ' written by ' + books.author;
            
//             if (books.alreadyRead) {
//                 Details.style.color = 'red';
//             }
    
           
//             var bookImage = document.createElement('img');
//             bookImage.src = books.image;
//             bookImage.style.width = '100px';
    
           
//             div.appendChild(Details);
//             div.appendChild(bookImage);
    
           
//             book.appendChild(div);
//         }
    

// Daily Challenge: Planets
 
    
// var planets = [
//     { name: 'Mercury', color: 'gray', moons: 0 },
//     { name: 'Venus', color: 'yellow', moons: 0 },
//     { name: 'Earth', color: 'blue', moons: 1 },
//     { name: 'Mars', color: 'red', moons: 2 },
    
//   ];
  
  
//     var listPlanets = document.querySelector('.listPlanets');
  
//     for (var i = 0; i < planets.length; i++) {
//       var planet = planets[i];
  
     
//       var planetDiv = document.createElement('div');
//       planetDiv.className = 'planet';
//       planetDiv.style.backgroundColor = planet.color;
  
//       for (var j = 0; j < planet.moons; j++) {
//         var moonDiv = document.createElement('div');
//         moonDiv.className = 'moon';
  
        
//         moonDiv.style.left = 100 + j * 40 + 'px';
  
//         planetDiv.appendChild(moonDiv);
//       }
  
//       listPlanets.appendChild(planetDiv);
//     }
  
  