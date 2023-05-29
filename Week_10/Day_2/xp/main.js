// 🌟 Exercise 1 : Comparison

// const compareToTen = num => {
// return new Promise((res, rej) => {
//     if(num <10){
//             res(num + " " + 'is less then 10')
//         }
//     else{
//         rej(num + " " + 'is greater or equal to 10')
//     }
//     })
// }
// compareToTen(8)
//   .then(result => console.log(result))
//   .catch(error => console.log(error))

// 🌟 Exercise 2 : Promises

// let getM = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("success");
//     }, 4000);
// });

// getM.then((value) => {
//     console.log(value); 
// });

// let getM = Promise.resolve(
//     setTimeout(() => {
//         console.log("success");
//     }, 4000)
// );
// let getM = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("success");
//     }, 4000);
// });

// getM
//     .then((value) => {
//         console.log(value);
//     })
//     .catch((error) => {
//         console.log('Ooops something went wrong', error); 
//     });

// 🌟 Exercise 3 : Resolve & Reject

// let getM = Promise.resolve(3)
//     getM.then((v) => {
//         console.log(v === 3);
//     })

// let getM = Promise.reject("Boo!")
//     getM.catch((err) => {
//         console.log(err);
//     })

