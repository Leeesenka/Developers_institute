// //🌟 Exercise 1 : Giphy API
// const getArtwork = () => {
    
//     fetch("https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My")
//         .then((response) => {
//             if(response.ok == true){
//                 return response.json()
//             } else {
//                 throw new Error("Wrong artwork")
//             }
//         })
//         .then((obj) => {
//             console.log(obj.data);
           
//         })
//         .catch(function (error) {
//             console.log(`We got the error ${error}`)
//         });
//     console.log("Work Done ...")
// }
// getArtwork()



// 🌟 Exercise 2 : Giphy API
// const url = "https://api.giphy.com/v1/gifs/search?q=sun&limit=10&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"


// const getArtwork = () => {
    
//     fetch(url)
//         .then((response) => {
//             if(response.ok == true){
//                 return response.json()
//             } else {
//                 throw new Error("Wrong artwork")
//             }
//         })
//         .then((obj) => {
//             console.log(obj.data);
           
//         })
//         .catch(function (error) {
//             console.log(`We got the error ${error}`)
//         });
//     console.log("Work Done ...")
// }
// getArtwork()


// 🌟 Exercise 3 : Async Function
// const url = "https://www.swapi.tech/api/starships/9/"

// const detJson = (response) => new Promise((resolve, reject) => {
//     if(response.ok == true){
//     resolve(response.json())
// }
//     else {
//     reject("Wrong artwork")
//     }
// })


// const getArtwork = async () => {
//     let response = await fetch(url);
//     let json = await detJson(response);
//     let objectStarWars = await json.result
//     console.log(objectStarWars);
// };   

// getArtwork();


// 🌟 Exercise 4: Analyze

// function resolveAfter2Seconds() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('resolved');
//         }, 2000);
//     });
// }

// async function asyncCall() {
//     console.log('calling');
//     let result = await resolveAfter2Seconds();
//     console.log(result);
// }

// asyncCall();
//the code reaches let result = await resolveAfter2Seconds();. Here, the function resolveAfter2Seconds is invoked, which returns a Promise. This Promise will be resolved after 2 seconds. The await keyword causes execution of the asyncCall function to pause until the Promise is resolved.
//When the Promise resolves (after 2 seconds), its value ("resolved") is assigned to the variable result.
