// Star Wars Web App Using AJAX API
async function fetchCharacter(id) {
    let url = `https://www.swapi.tech/api/people/${id}/`;
    console.log(url)
    let response = await fetch(url);

    if (response.ok) {
        let data = await response.json();
        return data.result.properties;
    } else {
        throw new Error("Failed to fetch character");
    }
}
document.getElementById('button').addEventListener('click', loading);
async function loading() {
    document.getElementById('name').innerHTML = '<i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i> <p>Loading...</p>'
    document.getElementById('height').innerText = ""
    document.getElementById('gender').innerText = ""
    document.getElementById('birth-year').innerText = ""
    
    let random = Math.floor(Math.random() * 83) + 1; 

    try {
        let character = await fetchCharacter(random);
        displayInfo(character);
    } catch (error) {
        console.error(`Error: ${error}`);
        document.getElementById('name').innerText = "Oh No! That person isnt avialable."
        document.getElementById('height').innerText = ""
        document.getElementById('gender').innerText = ""
        document.getElementById('birth-year').innerText = ""
  
}}

async function fetchHome(character) {
    let url = character.homeworld;
    console.log(url)
    let response = await fetch(url);

    if (response.ok) {
        let data = await response.json();
        console.log(data.result.properties.name)
        return data.result.properties.name;
    } else {
        throw new Error("Failed to fetch homeworld");
    }
}

function displayInfo(character) {
    document.getElementById('name').innerText = character.name;
    document.getElementById('height').innerText = "Height: " + character.height;
    document.getElementById('gender').innerText = "Gender: " + character.gender;
    document.getElementById('birth-year').innerText ="Birth Year: " + character.birth_year;
   
}

function displayHome(homeworldName) {
    document.getElementById('home-world').innerText = "Home World: " + homeworldName;
}

