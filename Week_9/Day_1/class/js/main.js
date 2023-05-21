// function handleClick(e) {
//     console.log(e.target, e.type);

// }

// function handleInput(e){
//     console.log(e.target.name);
// }

// function handleDivClick(e){
//     let div = e.target;
//     console.log(div.children);

// }
// let root = document.createElement('root');
// let butA = document.getElementById('butA');
// butA.addEventListener('click', function(e){

//     x(e);
//     y();
// })
// let butB = document.createElement('button');
// butB.innerText = 'Click Me B!'
// root.appendChild(butB);
// butB.addEventListener('click', function(){
//     console.log(e.target, 'rgdrsgdg');
// })


// const div1 = document.getElementById('div1')
// const div2 = document.getElementById('div2')
// const but = document.getElementById('but')

// div1.addEventListener('click', function(e){
//     alert('DIV 1!')
// })
// div2.addEventListener('click', function(e){
//     alert('DIV 2!')
// })
// but.addEventListener('click', function(e){
//     alert('BUT!');
//     e.stopPropagation()
// })
// const frm = document.forms.form_one;
// const elems = frm.elements
// console.log(elems);
// // elems.username.value= 'Hello'

// function handleSubmut(e){
//     e.preventDefault()

//     let val = elems.username.value
//     console.log(val)
//     let username = frm.elements.username.value;
//     username = username.replaceAll(' ', '');
//     username = username.trim();
//     if(username.length <= 0){
//         alert('Please give a valid username');
//         return false;
//     }
//     let password = elems.password.value;
//     if(password.length > 6) {
//         alert("Password should not be more than 6 characters");
//         return false;
//     }
    

// }

// frm.addEventListener('submit', handleSubmut);

// const frm = document.forms.form_one;
// // frm.elements.fruits.selected = 1

// function handleSubmut(e){
//     e.preventDefault()
//     const fruit = frm.elements.fruits.value
//     console.log(fruit.trim());

// }

// function x(){
//     console.log('hello')
// }
// setTimeout(function(){
//     x();
// },1000*3)
// let counter = 0;
// let id = setInterval(function(){
//     counter++
//     if(counter>5){
//         clearInterval(id)
//     }
// },1000*1)

// const div1 = document.getElementById('outer')
// console.log(div1)
// const div2 = document.getElementById('inner')
// console.log(div2)
// if(div2.addEventListener('click', function(){
//     ch
let id;
let pos = 1;

function move(){
    let box = document.getElementById('inner');
    
    
    id = setInterval(function(){
        if (pos == 350 && direction == 1) {
            direction = -1;
          } else if (pos == 0 && direction == -1) {
            direction = 1; 
          }
          pos += direction;},5)
}

function stop(){
  clearInterval(id);
}