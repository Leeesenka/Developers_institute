function playTheGame(){
     
    if (confirm("do you want to play the game?")) {
        txt = "You pressed OK!";
      } else {
        alert("No problem, Goodbye");
      }
        let userNumber;
        userNumber=parseFloat(prompt("Enter a number between 0 and 10:"));
  
        if (userNumber== " "){
            alert("Sorry Not a number, Goodbye")
        }
        while (isNaN(userNumber) || userNumber < 0 || userNumber > 10) {
            alert(userNumber < 0 || userNumber > 10 ? "Sorry it’s not a good number, Goodbye" : "Sorry Not a number, Goodbye");
            userNumber = prompt("Enter a number between 0 and 10");
        } 
        computerNumber = Math.floor(Math.random() * 11) 
        compareNumbers(userNumber,computerNumber) 
       
        }    
        
function compareNumbers(userNumber, computerNumber) {
    for (let i = 0; i < 3; i++) {
        if (userNumber == computerNumber) {
            alert("WINNER");
            return;
        } else if (userNumber > computerNumber) {
            userNumber = parseFloat(prompt("Your number is bigger then the computer’s, guess again"));
        } else if (userNumber < computerNumber) {
            userNumber = parseFloat(prompt("Your number is smaller then the computer’s, guess again"));
        }
    }
    alert("Out of chances");
}
    
 


    
    