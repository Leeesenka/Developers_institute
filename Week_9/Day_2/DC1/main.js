// Daily Challenge : Go Wildcats

const gameInfo = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
   ];

const usernames = []
for (let i =0; i < gameInfo.length; i++){

const user = gameInfo[i]
const username = user.username
usernames.push(username)
}
console.log(usernames)
usernames.forEach((item,i, arr2)=>{
    
        arr2[i]= item  + "!" 
         } )
console.log(usernames)  


const winners = []
gameInfo.forEach((player) => {
  if (player.score > 5) {
    winners.push(player.username);
  }
});

console.log(winners);
