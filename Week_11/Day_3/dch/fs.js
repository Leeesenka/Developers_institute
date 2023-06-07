// const fs = require('fs');
// const steps = [];

// add = function(arr) {
//     return arr.reduce((a, b) => a + b, 0);
// };
// // fs.readFile('RightLeft.txt','utf-8', (err, data)=>{
// //     let data_new = data.split('');
// //         if(err){
// //             console.log(err);
// //         }
// //         else{
// //             for(let i=0; i< data_new.length; i++){
// //                 if(data[i] === '>'){
// //                     steps.push(1)
// //                 }
// //                 else{
// //                     steps.push(-1)
                    
// //                 }
// //             }
// //             console.log(data_new);
// //             console.log(add(steps));

// //         }
// //     })

// const fs = require('fs');
//     fs.readFile('RightLeft.txt','utf-8', (err, data)=>{
//         let data_new = data.split('');
//         if(err){
//             console.log(err);
//         }

//         else {
//             let steps = 0;
//             let position = 0;
//             let charge = false;
        
//             for (let i = 0; i < data.length; i++) {
//               if (data[i] === '>') {
//                 steps++;
//                 position++;
//               } else if (data[i] === '<') {
//                 steps++;
//                 position--;
//                 if (position === -1 && !charge) {
//                   console.log(`First time in left side is in: ${steps} steps`);
//                   charge = true;
//                 }
//               }
//             }
        
//             console.log(`Total steps: ${position}`);}
//         })
           
        