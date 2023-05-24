// Exercise 1 : Analyzing
// const fruits = ["apple", "orange"];
// const vegetables = ["carrot", "potato"];

// const result = ['bread', ...vegetables, 'chicken', ...fruits];
// console.log(result);

// const country = "USA";
// console.log([...country]);


// let newArray = [...[,,]];
// console.log(newArray);


// 🌟 Exercise 2 : Employees

// const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
//              { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
//              { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
//              { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
//              { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
//              { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
//              { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];


// const students = []
// users.forEach((name) => {
//     students.push(name.firstName);  
//   })
// console.log(students)  

// const welcomeStudents = students.map((val) => {
//     return  "Hello " + val   

// })
// console.log(welcomeStudents)


// const residents = users.filter(user => user.role === 'Full Stack Resident');
// console.log(residents)

// const lastNames = users.filter(user => user.role === 'Full Stack Resident')
// .map(user => user.lastName)
// console.log(lastNames)


// Exercise 3 : Star Wars

// const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
//                {name: "Liam", course: "Computer Science", isPassed: false}, 
//                {name: "Jenner", course: "Information Technology", isPassed: true}, 
//                {name: "Marco", course: "Robotics", isPassed: true}, 
//                {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
//                {name: "Jamie", course: "Big Data", isPassed: false}];


// const  studentsPassed = students.filter(item => item.isPassed === true); 
// console.log(studentsPassed)    


// const congratulate = []
// studentsPassed.forEach((name) => {
//     congratulate.push(name.name); 
//     congratulate.push(name.course); 
//     console.log("Good job " + name.name + ", you passed the course in " + name.course)  


// })

// Exercises XP Gold
// Exercise 1 : Analyzing The Map Method


// [1, 2, 3].map(num => {
//     if (typeof num === 'number') return num * 2;
//     return ;
//   });
// [2, 4, 6]

// Exercise 4 : Nested Arrays

// const array = [[1],[2],[3],[[[4]]],[[[5]]]]
// // [1,2,3,[4],[5]]
// let newArray = array.flat(2)
// console.log(newArray)
// const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
// // ["Hello young grasshopper!","you are","learning fast!"].
// let newSent = ''

// greeting.forEach(element => {
//     let str = ''
//     element.forEach(items => {
//         str = str + " " + items + " "
//     })
//     newSent = newSent + str
// });
// console.log(newSent)

// const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]]
// const three = trapped.flat(25)
// console.log(three)

// Exercises XP Ninja
// Exercise 1 : Dog Competition
// const data = [
//     {
//       name: 'Butters',
//       age: 3,
//       type: 'dog'
//     },
//      {
//       name: 'Cuty',
//       age: 5,
//       type: 'rabbit'
//     },
//     {
//       name: 'Lizzy',
//       age: 6,
//       type: 'dog'
//     },
//     {
//       name: 'Red',
//       age: 1,
//       type: 'cat'
//     },
//     {
//       name: 'Joey',
//       age: 3,
//       type: 'dog'
//     },
//     {
//       name: 'Rex',
//       age: 10,
//       type: 'dog'
//     },
//   ];

//   const ageDog = []
//   data.forEach((age) => {
//     ageDog.push(age.age);  
    
//  })
// console.log(ageDog)  

// let sum = 0;
// function count() {
//     for (i = 0; i < ageDog.length; i++) {
//         sum += ageDog[i];
//     }
// }
// count()
// console.log(sum)


// add = function(arr) {
//     return arr.reduce((a, b) => a + b, 0);
// };
 
// let sum2 = add(ageDog);
// console.log(sum2)


// Exercise 2 : Email
// const userEmail3 = ' cannotfillemailformcorrectly@gmail.com '
// const mail = userEmail3.split()
// console.log(mail)
// let newStr = userEmail3.trim()
// console.log(newStr)

// Exercise 3 : Employees #3
// const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
//              { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
//              { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
//              { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
//              { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
//              { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
//              { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

// const elem = {}
// const new_arr = []

// users.forEach((user) => {
//     new_arr.push(user.firstName)
//     new_arr.push(user.lastName)
//   })
// function chunkArray(array, size) {
//     const chunkedArray = [];
//     for (let i = 0; i < array.length; i += size) {
//       const chunk = array.slice(i, i + size);
//       chunkedArray.push(chunk);
//     }
//     return chunkedArray;
//   }
//   const chunkedArray = chunkArray(new_arr, 2);
//   console.log(chunkedArray);
  

//   const new_arr2 = []
// users.forEach((user) => {
//     new_arr2.push(user.role)
//   })
//   console.log(new_arr2)

// const keyValuePairs = chunkedArray.reduce((acc, key, index) =>{
//     acc[key] = new_arr2[index];
//     return acc;
// }, {});
// console.log(keyValuePairs)

const letters = ['x', 'y', 'z', 'z'];

// { x: 1, y: 1, z: 2 };
const keyValuePairs = letters.reduce((acc, value) =>{
    acc[key] = index;
    return acc;
}, {});
