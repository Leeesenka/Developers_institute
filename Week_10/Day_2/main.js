// function getX(){
//    setTimeout(() =>{
//     return 5
//    }, 1) 
    
// }
// function getY(){
//     return 6
// }

// function getXY(){
//     let x = getX();
//     let y = getY();
//     console.log(x + y);
// }
// getXY()
//  const flip = () => {
//     const coin = Math.floor(Math.random()*3);
//     return (coin < 2) ?
//             (coin == 0) ? 'head' : 'tail' : 'side';
//  }
//  console.log(flip())


//  const flopCoin = new Promise((resolve, reject) =>{
//     const flipResult = flip();
//     if(flipResult == 'head' || flipResult == 'tail') {
//         resolve(flipResult)
//     }
//     else{
//         reject(flipResult)
//     }
//  })

//  console.log('flippung a coin...');

//  flopCoin
//  .then((res) =>{
//     console.log('resolve', res)
//  })
//  .catch((e) =>{
//     console.log('reject', e)
//  })

//  const getX = ()=> {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             res(5)
//         }, 2000)
//     })
//  }

//  const getY = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(6)
//         }, 2000)
//     })
//  }

//  const getXY = () => {
//     let x = getX();
//     console.log('x =>', x);
//     x.then(x => {
//         console.log(x);
//         let y = getY()
//         console.log('y =>', y)
//         y.then(y => {
//             console.log(x + y);
//         })
//     })
//  }
//  console.log('before')
//  getXY()
//  console.log('after')

//  const flip = (val) => {
//     const coin = val;
//     return (coin < 10) ?
//             (coin == 0) ? 'number is 0' : 'number is less than 10, success!!!' : 'number is greater or equal to 10, error!!!';
//  }
//  console.log(flip(9))


//    const flopCoin = new Promise((resolve, reject) =>{
//         const flipResult = flip();
//         if(flipResult == 'number is 0' || flipResult == 'number is greater or equal to 10, error!!!') {
//             resolve(flipResult)
//         }
//         else{
//             reject(flipResult)
//         }
//      })

// console.log('flippung a coin...');

// const testNum = num => {
//     return new Promise((res, rej) => {
//         if(num <10){
//             res(num + 'is less then 10')
//         }
//     else{
//         rej(num + 'is greater or equal to 10')
//     }
//     })
// }

// testNum(5)
// .then(res => {
//     console.log(res)
// })
// .catch(err=>{
//     console.log(err)
// })

// let goodGrades = true;

// let endSemester = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         if (goodGrades) {
//             resolve("I will get a gift");
//         } else {
//             reject("I won't get the gift");
//         }
//     }, 1000);
// });

// console.log(endSemester)

// let goodGrades = 83;

// let endSemester = new Promise(function (resolve, reject) {
//     if (goodGrades > 90) {
//         resolve("Computer");
//     } else if (goodGrades > 80 && goodGrades <= 89) {
//         resolve("Phone");
//     } else {
//         reject("I won't get the gift");
//     }
// });


// endSemester.then(function (value) {
//     console.log("I got an amazing gift : A ", value);
// });

// endSemester.catch(function (value) {
//     console.log("Booo", value);
// });

// endSemester.finally(function () {
//     console.log(`No matter if I get a gift or not, 
//                 I want to have good grades`);
// });

// console.log(endSemester)

let goodGrades = 95;

let endSemester = new Promise((resolve, reject) => {
    console.log("test1")
    if (goodGrades > 90) {
        resolve("Computer");
    } else if (goodGrades => 80 && goodGrades <= 89) {
        resolve("Phone");
    } else {
        reject("I won't get the gift");
    }
    console.log("test2")
})

endSemester.then(value => console.log("Yeahhh I got a gift"))
endSemester.finally(() => console.log(`No matter if I get a gift or not,
                               I want to have good grades`))
console.log("test3");