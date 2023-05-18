// let b= 3, d = b, u=b;
// const tree = ++d * d*b * b++ +
// + --d+ + +b-- +
// + +d*b+ + 
// u
// console.log(tree);

// 4*4*3*3
// 3+4
// 3*3
// 3

// var a =3;
// // let b =5;
// var a = 5;
// console.log(a)

// for(let i=0; i<5; i++){

// }

// console.log(i);

// let a = 6;
// {
//     let a=9;
//     console.log(a)

// }
// console.log(a)
// function getName(param1, param2){
//     console.log(param1, param2);
// }
// getName('Marry', 'John')


// function getAge(a, b){
   
//     // console.log((a*b)+c);
//     return (a*b);
// }

// let age = getName(3,5)
// console.log(age)

// function myAge(param1){
//     console.log("My age:",param1, "My mum age", (param1*2), "My father age", ((param1*2)*1.2))
// }
// myAge(35)

// function myAge(a){
   
        
//         return (a*2);
//     }
    
// let age = myAge(35)
// console.log(age)


// function getage(){

//     return "ddd";
// }


// const x = (a,b) => a*b
    
// console.log(x(2,3));


// let pokemon = {
//     firstname: 'Pika',
//     lastname: 'Chu',
//     fullname: function(){
//         return this.firstname+this.lastname
//     }
// }

// let pikachu = pokemon.fullname()
// console.log(pikachu);


// let x = 5;
// function foo() {
//     let x =1
//     console.log(this.x);
// }
// foo()
// let obj = {
//     x:2
// }
// obj.a = foo;

// // console.log(obj)
// console.log(obj.a());

// var name = 'John'
// function getName(){
//     return this.name
// }
// console.log(getName());

// let obj = {
//     name: "Marry",
//     getName: function(){
//         return this.name
//     }
// }
// console.log(obj.getName())
// let div = document.getElementById("outerdiv");
// console.log(div.getAttribute('class'))

// let div = document.getElementsByTagName('div');
// console.log(div[0], div[1]);

// let divs = document.getElementsByClassName('a')
// let h1 = divs[1];
// h1.innerText = "Learning DOM"
// h1.textContent= "DOM "

// console.log(divs)


// let div = document.querySelector('#outerdiv.a .a')
// console.log(div.firstElementChild);

// console.log(div.lastElementChild);
// console.log(div.parentNode);

let root = document.getElementById('root');
let img = document.createElement('img');
img.setAttribute('src', 'https://cs14.pikabu.ru/post_img/big/2021/10/01/10/1633104919166938375.jpg')
root.appendChild(img)