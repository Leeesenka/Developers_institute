function welcomeUser() {
    console.log("Hello new student, you are starting to learn Node.js")
}

welcomeUser()

let currentDate = require('./date.js');
console.log(currentDate.myDate())

let currentDate = require('./date.js');
console.log(`Hello ${currentDate.username} the current date is ${currentDate.myDate()}`)