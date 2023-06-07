// Some Text To See
const fs = require('fs');
fs.readFile('file.txt', 'utf-8', (err, data)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(data)
    }
})
console.log('the file has been read');