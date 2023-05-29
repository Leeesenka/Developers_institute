// function makeAllCaps(arr){

//     return new Promise((resolve, reject) => {
//     if(arr.every(elem =>typeof elem == "string")){
//         resolve(arr.map(val => val.toUpperCase()))
        
//     }
//     else{
//         reject("it's not a string")
//     }
// });
// }
// function sortWords(arr){
//     return new Promise((resolve, reject) => {
//         if(arr.length > 4){
//             resolve(arr.sort())
//         }
//         else{
//             reject("it's not a string with 4 elements")
//         }
// })
// }
// makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
//       .then((arr) => sortWords(arr))
//       .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
//       .catch(error => console.log(error))

      const morse = `{
        "0": "-----",
        "1": ".----",
        "2": "..---",
        "3": "...--",
        "4": "....-",
        "5": ".....",
        "6": "-....",
        "7": "--...",
        "8": "---..",
        "9": "----.",
        "a": ".-",
        "b": "-...",
        "c": "-.-.",
        "d": "-..",
        "e": ".",
        "f": "..-.",
        "g": "--.",
        "h": "....",
        "i": "..",
        "j": ".---",
        "k": "-.-",
        "l": ".-..",
        "m": "--",
        "n": "-.",
        "o": "---",
        "p": ".--.",
        "q": "--.-",
        "r": ".-.",
        "s": "...",
        "t": "-",
        "u": "..-",
        "v": "...-",
        "w": ".--",
        "x": "-..-",
        "y": "-.--",
        "z": "--..",
        ".": ".-.-.-",
        ",": "--..--",
        "?": "..--..",
        "!": "-.-.--",
        "-": "-....-",
        "/": "-..-.",
        "@": ".--.-.",
        "(": "-.--.",
        ")": "-.--.-"
      }`
function toJs(){
    let morseJS = JSON.parse(morse);
    return new Promise((resolve, reject) => {
        if(Object.keys(morseJS).length === 0){
            reject('error')
        }
        else{
            resolve(morseJS)
        }
    })
}

// let morseJS = JSON.parse(morse);

function toMorse(morseJS) {
    let word = prompt("Please enter a word");
    return new Promise((resolve, reject) => {
        let morseTranslation = [];
        for (let val of word.toLowerCase()) {
            if (val in morseJS) {
            morseTranslation.push(morseJS[val]);
    
            } else {
                reject(`The character "${val}" doesn't exist in the Morse code`);
                return;
            }
        }
        resolve(morseTranslation);
        console.log(morseTranslation)
    });
    
}

function joinWords(morseTranslation) {
    let joinedWords = morseTranslation.join('\n');
    const div = document.getElementById('main')
    div.textContent = joinedWords; 
    
}

toJs()
.then((morseJS) => toMorse(morseJS)) 
.then((result) => joinWords(result))
.catch(error => console.log(error))