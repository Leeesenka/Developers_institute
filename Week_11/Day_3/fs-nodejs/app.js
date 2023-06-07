// const fs = require('fs');
const fs = require('fs').promises;
// const data = 'this is my hello file'

// const products = [
//     {id: 102, name: 'iphone', price: 800},
//     {id: 103, name: 'iphoneMax', price: 900},

// ]
// fs.writeFileSync('product.json',JSON.stringify(products), 'utf-8', (err, data)=>{
//    if(err){
//     console.log(data)
// }
// })


// fs.writeFileSync('hello.txt', data, 'utf-8', (err)=>{
//     if(err){
//         console.log(err)
//     }
// })


// try{

// const data = fs.readFileSync('info', 'utf-8')
// console.log(data);
// }
// catch(e){
//     console.log(e.message)
// }

// fs.readFile('product.json','utf-8', (err, data)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(JSON.parse(data));
//     }
// })
// console.log('the file has been read');

// fs.appendFile('hello.txt', ' ksfjlfjsd', 'utf-8', (err)=>{
//     if(err){
//         console.log(err)
//     }
// })

// const loopproduct = (arr) => {
//     arr.forEach((item, i)=> {
//         console.log(item.name);
//     });
// }

// fs.copyFile('hello.txt', 'hello1.txt', (err) => {
//     if(err){
//         return console.log(err)
//     }
//     console.log('file cpied')
// })
// fs.unlink('hello1', (err) =>{

// })

// const start = async()=> {
//     const data = await fs.readFile('hello.txt', 'utf-8')
//     console.log(data);
// }
// start()