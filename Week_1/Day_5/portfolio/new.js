// let arr = [1,2,3,4,5,6,7,8];
// let newArr = [];
// for(let i = 0; i < arr.length; i++){
//     if(i % 2){
//         newArr.push(Math.pow(arr[i], 2));
//     }
// }
// console.log(newArr)


// add = function(newArr) {
//     return newArr.reduce((a, b) => a + b, 0);
// };
 
// let sum = add(newArr);
// console.log(sum)
// Напишите функцию, которая пишет в консоль число в заданном диапазоне, в случае, если оно успешно 
// делится или не делится с остатком или без остатка в зависимости от параметров.
// const arr = [2,3,4,5]
// const newFunc = function(start, end) {
//     let evenArray = [];
//         for(let i=start; i<=end; i++){
//             if(i%2 === 0){
//                 evenArray.push(i)
//         }
   
        
//         }
//         return evenArray;
// }
// console.log(newFunc(1,5))

// for (let i = 0; i < 5; i++) { //! Эту строку можно изменить
//     for (let j = 0; j < 6; j++) {
//       if (i === 5 && j === 5) {
//         //! Эту строку можно изменить
//       }
   
//       console.log(i, j);
//     }
//    }

// Яблоко стоит 1.15, апельсин стоит 2.30. Сколько они стоят 
// вместе – чему равна сумма 1.15 + 2.30 с точки зрения JavaScript?

// const apple = 1.15;
// const orange = 2.30;
// let a= apple+orange

// console.log(a)

// Завершите функцию, которая принимает два аргумента и возвращает все 
// числа, которые делятся на данный делитель. Первый аргумент - это массив чисел, а второй - делитель.

// Пример


function oddCount(n) {
    return Math.floor(n / 2);
}

console.log(oddCount(7));  // Outputs: 3
console.log(oddCount(15)); // Outputs: 7
alert( 5 % 2 ); // 1, остаток от деления 5 на 2
alert( 8 % 3 ); // 2, остаток от деления 8 на 3
alert( 8 % 4 ); // 0, остаток от деления 8 на 4

function convertToNumbers(arr) {
    return arr.map(item => +item);
}

console.log(convertToNumbers(['1', 2, '3', 4, '5'])); // Ожидается: [1, 2, 3, 4, 5]


// Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий только уникальные числа из исходного массива. 
// Например, unique([1, 2, 2, 3, 4, 4, 5]) должна вернуть [1, 2, 3, 4, 5].


let unique = [1, 2, 2, 3, 4, 4, 5];

function uniqueArr(arr){
    let newArr = Array.from(new Set(arr));
    return newArr;
}

console.log(uniqueArr(unique)); // Выведет: [1, 2, 3, 4, 5]

// Напишите функцию, которая принимает строку в качестве аргумента и возвращает её в обратном порядке. 
// Например, reverseString("Hello") должна возвращать "olleH".



// function reverseString(str) {
//     let reversed = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed += str[i];
//     }
//     return reversed;
// }

// console.log(reverseString('Hello'));  // Outputs: 'olleH'

// Факториал:

// Напишите функцию, которая принимает число и возвращает его факториал. 
// Факториал числа n (обозначается как n!) — это произведение всех целых чисел от 1 до n. Например, 
// factorial(5) должна возвращать 120, потому что 5! = 5 * 4 * 3 * 2 * 1 = 120.

// function factorial(n){
//     let result = 1;
//     for(let i = 1; i <= n; i++){
//         result *= i;
//     }
//     return result;
// }
// console.log(factorial(5));  // Outputs: 120

// Палиндром:

// Напишите функцию, которая проверяет, является ли заданная строка палиндромом. 
// Палиндром — это слово или фраза, которые одинаково читаются слева направо и справа налево. Функция должна игнорировать пробелы и регистр. 
// Например, isPalindrome("A man a plan a canal Panama") должна возвращать true.
// function isPalindrome(str){
//     newstr = ''
//     oldstr = ''
//     for (let i = str.length-1; i>=0; i--){
//         if(str[i]!==' '){
//             newstr +=str[i]
           
//         }
//     }
//     for(let i=0; i<str.length;i++){
//         if(str[i]!==' '){
//             oldstr +=str[i]
       
//         }
//         console.log((oldstr))
//     }
//     if(oldstr.toLowerCase() == newstr.toLowerCase()){
//         return true
// }
// else false
//     }

// console.log(isPalindrome("A man a plan a canal Panama"))

// FizzBuzz:

// Напишите функцию, которая проходит по числам от 1 до n. Для каждого числа она должна:

// Выводить "Fizz", если число делится на 3.
// Выводить "Buzz", если число делится на 5.
// Выводить "FizzBuzz", если число делится как на 3, так и на 5.
// Выводить само число, если оно не делится ни на 3, ни на 5.
// Например, fizzBuzz(15) должна выводить:


// function fizzBuzz(value){
//     for(let i = 1; i <= value; i++){
//         if(i % 3 === 0 && i % 5 === 0){
//             console.log("FizzBuzz");
//         } else if(i % 3 === 0){
//             console.log("Fizz");
//         } else if(i % 5 === 0){
//             console.log("Buzz");
//         } else {
//             console.log(i);
//         }
//     }
// }

// fizzBuzz(15);


// Последовательность Фибоначчи:

// Напишите функцию, которая принимает число n и возвращает n-й элемент последовательности Фибоначчи.
//  Последовательность Фибоначчи — это последовательность чисел, в которой каждое следующее 
//  число равно сумме двух предыдущих. Первые два числа — 0 и 1. Например, fibonacci(5) 
// должна вернуть 3, потому что первые 5 чисел последовательности Фибоначчи — это 0, 1, 1, 2, 3

// function fibonacci(n) {
//     if (n <= 2) return n - 1;
//     return fibonacci(n - 1) + fibonacci(n - 2);
// }

// console.log(fibonacci(3));  // Выводит: 3

// function fib(n) {
//     return n <= 1 ? n : fib(n - 1) + fib(n - 2);
//   }
  
//   alert( fib(5) ); // 3
//   alert( fib(10) ); // 34

// const fib = n => {
//     let prev = 0, next = 1;
//     for(let i = 0; i < n; i++){
//       let temp = next;
//       next = prev + next;
//       prev = temp;
//     }
//     return prev;
//   }
// console.log(fib(6))


// Четные числа в массиве:

// Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий 
// только четные числа из исходного массива. Например, evenNumbers([1, 2, 3, 4, 5]) должна вернуть [2, 4].

// const evenNumbers = n =>{
//     let newarr=[]
//     for(let i=0; i<n.length; i++){
//         if(n[i]%2===0){
//             newarr.push(n[i])
//         }
//     }return newarr
// }

// console.log(evenNumbers([1, 2, 3, 4, 5]))

// Перевод строки в верблюжий регистр (camelCase):

// Напишите функцию, которая принимает строку, состоящую из нескольких слов, 
// разделенных пробелами или дефисами, и возвращает новую строку в верблюжьем регистре (camelCase). 
// Например, toCamelCase("Hello World") должна вернуть helloWorld, а toCamelCase("first-name") — firstName.

// const toCamelCase = str => {
//     let words = str.split(' ');  // Разбиваем строку на слова
//     for(let i = 0; i < words.length; i++){
//         words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1).toLowerCase();
//     }
//     words[0] = words[0].toLowerCase();  // Первое слово должно начинаться с маленькой буквы
//     return words.join('');  // Объединяем слова без пробелов
// }

// console.log(toCamelCase("Hello World"));  // Выводит: "helloWorld"


// const toCamelCase = str => {
//     return str
//         .toLowerCase()  // приводим всю строку к нижнему регистру
//         .replace(/[-\s]\w/g, (match) => match[1].toUpperCase()); // заменяем пробелы или дефисы, за которыми следует буква, на эту букву в верхнем регистре
// }

// console.log(toCamelCase("Hello World"));  // Выводит: "helloWorld"


// Удаление элемента из массива:

// Напишите функцию, которая принимает массив и элемент, удаляет все вхождения этого элемента из массива и возвращает новый массив. 
// Например, removeElement([1, 2, 3, 2, 4], 2) должна вернуть [1, 3, 4].

const removeElement = (arr, temp) => {
    let newArr = [];
    for(let i=0; i< arr.length; i++){
        if(arr[i]!== temp){
            newArr.push(arr[i])
        }
    else{
        
    }
        
    }
    return newArr
}

console.log(removeElement([1, 2, 3, 2, 4], 2))