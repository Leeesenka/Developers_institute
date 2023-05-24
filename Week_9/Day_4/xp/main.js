// 🌟 Exercise 1 : Location

// const person = {
//     name: 'John Doe',
//     age: 25,
//     location: {
//         country: 'Canada',
//         city: 'Vancouver',
//         coordinates: [49.2827, -123.1207]
//     }
// }

// const {name, location: {country, city, coordinates: [lat, lng]}} = person;

// console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);


// 🌟 Exercise 2: Display Student Info
// function displayStudentInfo(objUser){
//     const {first, last} = objUser;
//     console.log(`Your full name is ${first} ${last}`)
// }

// displayStudentInfo({first: 'Elie', last:'Schoppik'});

//output : 'Your full name is Elie Schoppik'

// 🌟 Exercise 3: User & Id

// const users = { user1: 18273, 
//                 user2: 92833, 
//                 user3: 90315 }

// let arr = Object.entries(users)                

//     arr.forEach((number) => {
//         number[1]=number[1]*2
//     })
//  console.log(arr)

// Exercise 4 : Person Class

// class Person {
//     constructor(name) {
//       this.name = name;
//     }
//   }
  
//   const member = new Person('John');
//   console.log(typeof member);
// The output indicates that typeof member is 'object', which is the expected result for instances of classes in JavaScript. Instances of classes are considered objects.


// 🌟 Exercise 5 : Dog Class
// class Dog {
//     constructor(name) {
//       this.name = name;
//     }
//   };

// Analyze the options below. Which constructor will successfully extend the Dog class?
  // 1
// class Labrador extends Dog {
//   constructor(name, size) {
//     this.size = size;
//   }
// };
// This option is incorrect because it does not call the super() function 

  // 2
//   class Labrador extends Dog {
//     constructor(name, size) {
//       super(name);
//       this.size = size;
//     }
//   };
  //This option is correct. It extends the Dog class using the extends keyword and calls the super(name) within the Labrador constructor.

    // 3
// class Labrador extends Dog {
//     constructor(size) {
//       super(name);
//       this.size = size;
//     }
//   };
  //This option is incorrect because it tries to call super(name), but the name variable is not defined in the Labrador constructor. The super() function should be called with the necessary arguments from the derived class's constructor.
 // 4
//  class Labrador extends Dog {
//     constructor(name, size) {
//       this.name = name;
//       this.size = size;
//     }
//   };
  //This option is incorrect because it does not call super(name) to invoke the parent class's constructor. The super() function must be called in the derived class's constructor to properly initialize the inherited properties.

//   Exercise 6 : Challenges

// [2] === [2] //false
// {} === {} //false

// const object1 = { number: 5 }; 
// const object2 = object1; 
// const object3 = object2; 
// const object4 = { number: 5};

// object1.number = 4;
// console.log(object2.number)//4
// console.log(object3.number)//4
// console.log(object4.number)//5


class Animal {
    constructor(name, type, color){
        this.name = name;
        this.type = type;
        this.color = color;
    }
}
class Mamal extends Animal {
    constructor(name, type, color){
        super(name, type, color)
        
        
    }
    sound(sound1){
        
        console.log(`${sound1} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`)

    }
}
let newAnimal = new Mamal("Rex", "Mamal", "Black")
let farmerCow = new Mamal("Lily", "cow", "black and white")
newAnimal.sound("wow")
farmerCow.sound('Moooooo')
