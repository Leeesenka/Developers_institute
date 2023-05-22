// {
//     let x = 0;
// }
// console.log(x);

// for(var i =0; i<5; i++){
    
// }
// console.log(i)

// let x = 9;
// let x = 7;

// function y(){
//     let x=9;
//     console.log(x)
// }
// y()
// console.log(x)
// let x
// if (x<10){
//     x=7;
// }
// else{
//     x = 5
// }
// x = (x < 10) ? (x===5) ? 8:5;

// let str = "Hello";
// let str1 = 'student, please join the meet at the time, because it is making me crazy'; 
// let str2 = 'first thing in the morning';

// let str4 = str + " " + str1 + "\n" + str2;
// let str5 = `${str} ${str1} ${str2}`
// console.log(str5)


// name_of_the_Function("John")
// function name_of_the_Function(first_name = "Marry",last_name = "Gofer"){
//     console.log(first_name, last_name)
// }
// name_of_the_Function("John")

// const sum = function(x,y){
//     return x + y;
// }

// const fullname = (x, y)=>  x + " " + y;

// fullname("aaa", "bbb")

// setTimeout(function(){

// }, 5000)

// setTimeout(()=>{

// }, 5000)


let arr = ['a', 'b', 'c', 'd', 'e'];
// let len = arr.length
// for (let i =4; i < len; i++) {
//     console.log(arr[i]);
// }
// for (let i = arr.length-1; i >=0; i--) {
//     console.log(arr[i]);
// }

// for(x of arr){
//     console.log(x)
// }

// for(x in arr){
//     console.log(x, arr[x])
// }


// const x = (name) => {
//     return name;
// }
// arr.forEach((item)=>{
//     console.log(item)
// })
// console.log(arr)




// arr.forEach((item, i, arr2)=>{
    
//     arr2[i]=item + "#"
// })
// console.log(arr)

// (5) ['a#', 'b#', 'c#', 'd#', 'e#']


//some()-> true or false
//every()-> true or false

// let even = arr.some((item)=>{
//     return item === 'f';
// })
//    console.log(even);
   
   
// let even = arr.every((item)=>{
//     return item === 'a';
// })
//    console.log(even);
   
// const str = 'word in a given String';
// var str_new = str.split(' ');
// console.log(str_new)

// for (i=0; i < str_new.length; i++){
//     // console.log(str_new[i])
//     var str2= str_new[i]
//     for (let i = str2.length-1; i >=0; i--){
//         var new_q = str2[i]
//         console.log(new_q) 
       
//     }
//     console.log(new_q) 
// }

// function reversWord(str){
//     let ret = "";
//     for(let i = str.length-1; i >=0; i--){
//         ret+=str[i];

//     }
//     return ret
// }
// function reversAll(str){
//     let arr = str.split(" ")
//     arr.forEach((item, i, ret) => {
//         ret[i] = reversWord(item)
//     });
// return arr.join(' ');
// }

// let str =  reversAll('word in a given String')
// console.log(str)

// function x(){
//     let name = 'Marry'
//     function y(){
//         console.log(name);
//     }
//     return y
// }

// let a = x();
// console.log(a());


// function addSquardes(a,b){
//     function sqare(x){
//         return x * x
//     }
//     return sqare(a) + sqare(b)
// }

// let a = addSquardes(2, 3)
// console.log(a)

// function out(x){
//     function inn(y){
//         return x + y
//     }
//     return inn;
// }
// let a = out(3);
// let b= a(6)
// console.log(a)
// console.log(b)

// const out = (x) => {
//     return(y) => {
//         return x + y
//     }
// }
// function (x, y) {
//     return x * y
// }

// const vat = vat => y =>  vat * y;
// let vatis = vat(1,17)
// console.log(vatis(20));
// console.log(vatis(49));




// const x = (a,b) => (c) => {
//     return a(b(c));
// }

// const sum2 = num => num *2;
// const sum = num => num + 1;

// let a = x(sum,sum2)(6);
// console.log(a);

// let a = 5;
// b = a;
// b++
// console.log(a,b)

// let arr1 = [1,2,3];
// let arr2 = [...arr1];
// const arr3 = [].concat(arr1)
// arr2[1]=5;
// console.log(arr1)
// console.log(arr2)

// let obj1 = {a:1, b:3,c:  {d:4}}
// let obj2 = {...obj1}
// let obj3= Object.assign({}.obj1)
// obj1.c.d = 44;
// console.log(obj1);
// console.log(obj2);


// let obj1 = {a:1, b:3,c:  {d:4}}
// let str = JSON.stringify(obj1)
// let obj2 = JSON.parse(str)
// obj1.c.d = 44;
// console.log(obj1);
// console.log(str);
// let obj2 = {...obj1}


let obj1 = {a:1, b:3,c: function(){return 5}}
let obj2 = {...obj1}
console.log(obj1);