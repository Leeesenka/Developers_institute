let quoteAll = [
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

const formElement = document.getElementById('form1'); 
formElement.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameAuthor = document.getElementById('name').value;
    const quoteNew = document.getElementById('quote_form').value;
    const formData = {
        id: quoteAll.length,
        author: nameAuthor,
        quote: quoteNew
    };
    let jsonData = JSON.stringify(formData);
    quoteAll.push(formData);
    console.log(jsonData);
    console.log(quoteAll);
  });
  console.log(quoteAll)