// let arr = [2,4,4,1]
// function birthdayCakeCandles(arr) {
//     let maxNum = Math.max(...arr);
//     let filter = arr.filter(value => {
//         return value === maxNum
//     })

// return filter.length;
// }
// let haw_many = birthdayCakeCandles(arr);
// console.log(haw_many);

// let arr = [2,5,3,7,2,3,6,8,6];

// function minimumDistances(a){
//     let distances = [];
//     for (let i=0; i < a.length; i++){
//         if (a.indexOf(a[i] !== a.lastIndexOf(a[i]))){
//             let minDistance = a.lastIndexOf(a[i]) - a.indexOf(a[i])
//             distances.push(minDistance)

//         }
           
//         }
//         return(distances)
//     }


// let smallest = minimumDistances(arr)
// console.log(smallest)

// let a = 1;
// let b = [2,4]
// let arr2 = [5, 6, 7]
// let arr3 = [b, ...arr2]
// console.log(arr3);


// let arr = [2,5,3,7,2,3,6,8,6]
// const [a, b, c, ...rest] = arr
// console.log(a,b,c,rest)

// function x(a,b, ...rest){
//     console.log(a);
//     console.log(rest);

// }
// x(arr)

// const population = {
//     tokyo: 37833000,
//     delhi: 24953000,
//     shanghai: 22991000
// }

// const {tokyo,delhi } = population
// console.log(tokyo, delhi)

// const  obj3 = {...population, tokyo:0, telaviv: 22}
// // console.log(obj3)

// let obj2 = {
//     tokyo: 4444,
// }
// const obj3 = {...obj2, ...population}
// console.log(obj3)

// let {tokyo} = population;
// let population_tokyo = tokyo;
// let {tokyo} = obj3


// class

// class NameOfClass {
//     constructor(param1, param2){
//         this.a = 'b'
//         this.b = param1
//         this.c = param2
//     }
//     getName(){
//         return this.a + this.b + this.c
//     }
//     setA(param){
//         this.a = param
//     }
// }
// let abc = new NameOfClass('c', 'd')
// let bca = new NameOfClass('r', 't')

// console.log(abc.getName())
// console.log(bca.getName())


class Animal {
    constructor(name){
        this.name = name;
    }
    speak(){
        console.log(`${this.name} makes a noise`);

    }
}
class Dog extends Animal {
    constructor(name, color){
        super(name)
        this.color = color
    }
    speak(){
        console.log(`${this.name} ${this.color} bark`);
    }
    getColor(){
        return this.color
    }
}
const dog = new Animal('Buddy', 'Black');
// const dog = new Animal('Dog');
dog.speak()

// const cat = new Animal('Cat')
// cat.speak()