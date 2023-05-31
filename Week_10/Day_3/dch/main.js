const apiKey = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

async function fetchGif(category) {
    let url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${category}`;
    console.log(url)
    let response = await fetch(url);

    if (response.ok) {
        let data = await response.json();
        console.log(data)
        return data.data.images.original.url;
    } else {
        throw new Error("Failed to fetch the gif");
    }
}


document.getElementById('submit').addEventListener('click', async (event) => {
    event.preventDefault();
    let category = document.getElementById('gif').value;
   
    try {
        let gifUrl = await fetchGif(category);
        let gifElement = displayGif(gifUrl);
        displayDeleteButton(gifElement);
    } catch (error) {
        console.error(`Error: ${error}`);
    }
});

function displayGif(url) {
    let gifElement = document.getElementById('gifs');
    let images = document.createElement('img')
    images.src = url;
    gifElement.appendChild(images)
    return images
}

function displayDeleteButton(gifElement){
    let newButton = document.createElement("button");
    newButton.innerHTML = "Delete";
    newButton.setAttribute("type", "button"); 
    newButton.addEventListener('click', function() {
        gifElement.remove(); 
        newButton.remove(); 
    });
    document.body.appendChild(newButton);
}

