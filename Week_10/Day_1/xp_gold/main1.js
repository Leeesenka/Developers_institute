
const paramsString = window.location.search
const searchParams = new URLSearchParams(paramsString);
console.log(searchParams)

console.log(searchParams.get("name"));
console.log(searchParams.get("lastname"));
const name = searchParams.get("name");
const lasName = searchParams.get("lastname")



var div = document.getElementById('myDiv');
console.log(div)
div.textContent = name + " " + lasName