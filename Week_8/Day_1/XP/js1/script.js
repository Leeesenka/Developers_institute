// Exercise 1 : List Of People

const people = ["Greg", "Mary", "Devon", "James"];
// let first = people.shift()
// console.log(people);
// const index = people.indexOf("James");

// if (index !== -1) {
//     people[index] = 'Jason';
// }
// console.log(people);

// let new_name = people.push("Anna");
// console.log(people);

// let index = people.indexOf("Mary")
// console.log(index);

// let slice = people.slice(2,4);
// console.log(slice);
// let arr =[slice];
// console.log(arr);

// let index = people.indexOf("Foo")
// console.log(index);


// let name = people.push("last");
// console.log(people);

// for(let i=0; i<people.length; i++){
//     console.log(people[i]);
//     if (people[i]==="James") {
//         break;
    
// }}

// 🌟 Exercise 2 : Your Favorite Colors

// const colors = ['violet', 'scarlet', 'citric', 'purple', 'beige'];
// let suffix = ['st', 'nd', 'rd', 'th', 'th']
// for(let i=0; i<colors.length; i++){
//         console.log("My #", i+1, suffix[i], "choice is", colors[i]);
// }

// Exercise 3 : Repeat The Question

// let res = prompt("Please enter a number")
// const number = parseFloat(res);
// console.log(typeof number);

// if(number<10){
//         console.log(true)
//     }
//     else{
//         console.log(false);
//     }

// Exercise 4 : Building Management

// const building = {
//     numberOfFloors: 4,
//     numberOfAptByFloor: {
//         firstFloor: 3,
//         secondFloor: 4,
//         thirdFloor: 9,
//         fourthFloor: 2,
//     },
//     nameOfTenants: ["Sarah", "Dan", "David"],
//     numberOfRoomsAndRent:  {
//         sarah: [3, 990],
//         dan:  [4, 1000],
//         david: [1, 500],
//     },
// }

// console.log(building.numberOfAptByFloor);
// console.log(building.numberOfAptByFloor.firstFloor, building.numberOfAptByFloor.thirdFloor);
// console.log(building.nameOfTenants[1], building.numberOfRoomsAndRent.dan[0])

// if ((building.numberOfRoomsAndRent.sarah[1]+building.numberOfRoomsAndRent.david[1])>building.numberOfRoomsAndRent.dan[1]){
//     console.log(true)
//     building.numberOfRoomsAndRent.dan[1] = 1200;
//     console.log(building.numberOfRoomsAndRent.dan[1])
// }
//     else{
//             console.log(false);
//         }
// Exercise 5 : Family
// const family = {
//     mother: "Anna",
//     father: "Alex",
//     daughter: "Nina",

// };
// let text = "";
// for (let x in family) {
//     text = text+ " " + family[x]
// }
// console.log(text)


// let text = "";
// for (let x in family) {
//     text = text+ " " + x
// }
// console.log(text)

// Exercise 6 : Rudolf
// const details = {
//     my: 'name',
//     is: 'Rudolf',
//     the: 'raindeer'
//   }

//   let text = "";
//   for (let x in details) {
//     text = text+ " " + x + " " + details[x] + " "
//   }
//   console.log(text)


//   Exercise 7 : Secret Group

// const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

// const firstLetters = [];
// for (let i = 0; i < names.length; i++) {
//   const firstLetter = names[i][0];
//   firstLetters.push(firstLetter);
// }
// firstLetters.sort();
// const secret_society = firstLetters.join("");
// console.log(secret_society);


// const sentence = "The movie is not that bad, I like it";
// const wordNot = sentence.indexOf("not");
// console.log(wordNot);

// const wordBad = sentence.indexOf("bad");
// console.log(wordBad);
// let new_string = ""
// if (wordBad > wordNot) {
//     let slice = sentence.slice(13,25);
//     console.log(slice)
//     new_string= sentence.replace(slice, "good")
//     console.log(new_string)
// }


// Daily Challenge: Stars
// let pattern = '';
// for (let i =0; i<7; i++){
//     pattern+='* ';
//     console.log(pattern);
// }


