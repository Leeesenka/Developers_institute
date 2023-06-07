const fs = require('fs');
// const data = 'Some Text To See'
// fs.writeFileSync('file.txt', data , 'utf-8', (err) =>{
//     if(err){
//         console.log(err)
//     }
// })

// fs.readFileSync('file.txt', 'utf-8', (err, data)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log(data)
//     }
// })


const data = 'Some Text To See'
fs.writeFileSync('fs.js', data , 'utf-8', (err) =>{
    if(err){
        console.log(err)
    }
})