async function fetchConverter(val1, val2) {
    let url = `https://v6.exchangerate-api.com/v6/4b0fa0de29dd640f37152e29/pair/${val1}/${val2}`
    console.log(url)
    let response = await fetch(url);

    if (response.ok) {
        let data = await response.json();
        console.log(data.conversion_rate)
        return data.conversion_rate;
    } else {
        throw new Error("Failed to fetch character");
    }
}


document.getElementById('button').addEventListener('click', async (event) => {
    event.preventDefault();
    let val1 = document.getElementById('select1').value.slice(0,3);
    let val2 = document.getElementById('select2').value.slice(0,3);

    try {
        let rate = await fetchConverter(val1, val2);
        let amount = document.getElementById('number').value;
        let result = rate * amount;
        document.getElementById('res').innerHTML = result;
    } catch (error) {
        console.error(`Error: ${error}`);
    }
})


async function addSelect(){
    let response = await fetchSelect();
    let conversion_rates = response.supported_codes;
    let keys = Object.values(conversion_rates);
    
    let select1 = document.getElementById("select1");
    let select2 = document.getElementById("select2");
    
    for(let key of keys) {
        let option1 = document.createElement('option');
        option1.value = key;
        option1.text = key;
        select1.add(option1);

        let option2 = document.createElement('option');
        option2.value = key;
        option2.text = key;
        select2.add(option2);
    }

}
addSelect()
async function fetchSelect() {
    let url =  'https://v6.exchangerate-api.com/v6/4b0fa0de29dd640f37152e29/codes';
    console.log(url)
    let response = await fetch(url);

    if (response.ok) {
        let data = await response.json();
        console.log(data)
        return data;
    } else {
        throw new Error("Failed to fetch homeworld");
    }
}
fetchSelect()


document.getElementById('change').addEventListener('click', change);
function change(){

let val1 = document.getElementById('select1').value;
document.getElementById('select1').value = document.getElementById('select2').value
document.getElementById('select2').value = val1

}