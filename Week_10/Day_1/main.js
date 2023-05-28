// 🌟 Exercise 1 : HTML Form
//The data submitted using a GET request will appear in the URL of the page specified in the 
//The data is structured as key=value pairs, with each pair separated by an & character. The keys correspond to the name attribute of the input elements in the form. Note that special characters, like spaces in our message, are URL-encoded for transmission. In the example above, the space becomes +.


// 🌟 Exercise 2 : HTML Form #2

//Unlike the GET method, POST method does not append form data to the URL. The data submitted via POST method is sent as part of the HTTP request body, not in the URL.

// 🌟 Exercise 3 : JSON Mario

const marioGame = {
    detail : "An amazing game!",
    characters : {
        mario : {
          description:"Small and jumpy. Likes princesses.",
          height: 10,
          weight: 3,
          speed: 12,
        },
        bowser : {
          description: "Big and green, Hates princesses.",
          height: 16,
          weight: 6,
          speed: 4,
        },
        princessPeach : {
          description: "Beautiful princess.",
          height: 12,
          weight: 2,
          speed: 2,
        }
    },
  }

  let jsonMario = JSON.stringify(marioGame);
  alert(typeof jsonMario);
  alert(jsonMario);

  let marioGameJson = JSON.stringify(marioGame, null, 2);
  console.log(marioGameJson)
