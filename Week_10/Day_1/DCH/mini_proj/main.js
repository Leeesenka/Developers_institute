const quoteAll = [
    {
        id: 0,
        author: "Frank Zappa",
        quote: "So many books, so little time."
    }, 
    {
        id: 1,
        author: "Albert Einstein",
        quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."
    }, 
    {
        id: 2,
        author: 'Marcus Tullius Cicero',
        quote: 'A room without books is like a body without a soul.'
    }
];

const elements = document.getElementById('quote'); 
const button = document.querySelector('button')
console.log(button)

function my_func() {
   
let num = Math.floor(Math.random() * quoteAll.length);
console.log(num)
let randomElement = quoteAll[num];
elements.innerText = randomElement.quote
console.log(randomElement.quote)
  
}
button.addEventListener('click', my_func);

