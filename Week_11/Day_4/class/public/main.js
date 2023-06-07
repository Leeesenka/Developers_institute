const getMyProducts = async () => {
    try {
        const res = await fetch('http://localhost:3030/api/products/');
        const data = await res.json();
        console.log(data);
        render(data)
    }
    catch (e) {
        console.log(e);
    }
}
const render = (arr) => {
    const html = arr.map(item => {
        return `<div 
        style="display:inline-block; border: 1px solid black; padding:20px; margin:10px">
        <h2>${item.name}</h2>
        <h2>${item.price} </h2>
        </div>`
    })
    console.log(html)
document.getElementById('root').innerHTML =html.join('')
}

getMyProducts()