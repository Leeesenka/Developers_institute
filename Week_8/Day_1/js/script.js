// console.log('hi from script');

// 1
// 1.2
// -1

// "1"
// 'hi'

// true
// false

// var
// let (new in ECMAScript 6)
// const (new in ECMAScript 6)

// let a = 9;
// console.log(a);
// let name;
// console.log('name', name);

// const COLOR_BLACK = '#000000';
// a = 10

// var a=null;
// var b;
// b='John';
// let arr = [1,2,3];
// let b = [...arr];
// b[0] = 22
// arr = ['dssd']

// const arr = 'abcd';

// for (var i=0; i< arr.length; i++) {arr[i]='s'}

// console.log(arr);
// let txt = 'ABCDEFGIJ';
// let len = txt.length;
// console.log(len)

// let str = "Please locate where 'locate' occirs";
// let pos = str.lastIndexOf('locate');
// console.log(pos)

// let str = "Apple, Banana, Kiwi";
// let res = str.substr(7,2);
// console.log(res)

// let str = 'Please visit';
// let str1 = 'Microsoft';
// console.log(str+ " "+ str1+ " " + "fsfksdfjsklf");
// let str2 = str.concat(" ", str1, " ", "djgksgnsdkgnsdfklsdn")
// let str3 = `${str} ${str1}`

// let str = "Hello Word";
// let res = isNaN("10");
// console.log(res);

// console.log(str.charAt(0), str.charCodeAt(0));

// let x = 10;
// let str = x.toString();
// console.log(str);

// let res = prompt("Please enter a number")
// console.log(typeof res);

// let res = confirm("Please enter a number")
// console.log(res);

// let arr = [1,'a',[1,2,3], 3,4];
// console.log(arr.length);

// let arr1 = new Array();
// console.log(arr,arr1)

// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// // console.log(fruits.toString());
// // let str = "abcdefg"
// // console.log(str.split(' '));
// // let last = fruits.pop()
// fruits[fruits.length+1] = 'Kiwi';
// console.log(fruits);

// let myGirls = ['Cecilie', 'Lone'];
// let myBoys = ['Emil', 'Tobias', 'Linus'];
// let arr = [11,11];
// console.log(myGirls.concat(myBoys, arr));
// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// let slice = fruits.slice(1,3);
// console.log(slice);
// console.log(fruits);
// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// let slice = fruits.splice(1,2);
// console.log(slice);
// console.log(fruits);


// let obj = {
//     a: 1,
//     b: 2,
//     name: 'John',
//     arr: [1,2,3],
//     x: {a:10},
//     f: function(){alert('hello')}

// }
// // let obj1 = new Object();
// delete obj.a
// console.log(obj)

// if(1=='1'){
//     console.log('true');
// }
// else if("2"=="2"){
//     console.log('2');
// }
// else{
//     console.log('else')
// }
// let page = 'shop'
// switch (page) {
//     case 'home':
//         console.log('home');
//         break;
//     case 'shop':
//         console.log('shop');
//         break;
//     default:
//         console.log('404');


// }

// if(1==1){
//     console.log(1)
// }
// else{
//     console.log(2);
// }
// (1==1) ? console.log(1): console.log(2);
// let x = (1==2) ? 1:(3==3) ? 3:4;
// console.log(x);

// let a =2;
// let b= 2;
// let c =5;
// if(a==c &&  b<c){
//     console.log(1)
// }
// else{
//     console.log(2);
// }

// let arr = ['a', 'b', 'c', 'd']
// for(let i=0; i<arr.length; i++){
//     console.log(i, arr[i]);
// }
// let x = 0;
// while(x< arr.length){
    
    
//     x++;
// }
let x = 0
do {
    console.log('Do first and check the condition')
    x++
}
while(x<0)
// let obj = {
//     a:222,
//     b:333
// }
// for(let x in obj) {
//     console.log(x, obj[x])
// }