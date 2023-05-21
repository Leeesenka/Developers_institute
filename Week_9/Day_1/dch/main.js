const frm = document.getElementById('libform');

const nounInput = document.getElementById('noun');
const adjectiveInput = document.getElementById('adjective');
const personInput = document.getElementById('person');
const verbInput = document.getElementById('verb');
const placeInput = document.getElementById('place');

function randomSubmit(e) {
    e.preventDefault();

    if (nounInput.value === "" || adjectiveInput.value === "" || personInput.value === "" || verbInput.value === "" || placeInput.value === "") {
        alert('Please fill in all the fields');
        return;
    }

    let story;
    const random_story = Math.floor(Math.random() * 3);
    if (random_story === 0) {
        story = personInput.value + ' ' + verbInput.value + ' ' + nounInput.value + ' ' + adjectiveInput.value + ' ' + placeInput.value
    } else if (random_story === 1) {
        story = adjectiveInput.value + ' ' + personInput.value + ' ' + placeInput.value + ' ' + nounInput.value + ' ' + verbInput.value;
    } else {
        story = verbInput.value + ' ' + nounInput.value + ' ' + adjectiveInput.value + ' ' + placeInput.value + ' ' + personInput.value;
    }
    
    console.log(story);
    document.getElementById('story').textContent = story;
}

function handleSubmit(e) {
    e.preventDefault();

    if (nounInput.value === "" || adjectiveInput.value === "" || personInput.value === "" || verbInput.value === "" || placeInput.value === "") {
        alert('Please fill in all the fields');
        return;
    }

    
    const story = nounInput.value + ' ' + adjectiveInput.value + ' ' + personInput.value + ' ' + verbInput.value + ' ' + placeInput.value;
    
    
    console.log(story);
    document.getElementById('story').textContent = story;
}

function ranButtonClick() {
    randomSubmit(event);
    console.log("Button clicked!");
}

var ranButton = document.getElementById("random");
ranButton.addEventListener("click", ranButtonClick);


function libButtonClick() {
    handleSubmit(event);
    console.log("Button clicked!");
}

var libButton = document.getElementById("lib-button");
libButton.addEventListener("click", libButtonClick);