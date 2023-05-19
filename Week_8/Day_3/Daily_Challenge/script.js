function song(){
    let userNumber;
        userNumber=parseFloat(prompt("Enter a number to begin counting down bottles:"));
        console.log("We start the song at", userNumber, "bottles")
        
    for (let i = 0; i < userNumber; i++){
        let a= userNumber-i
        let one = i+1
        if (one==1 && a==userNumber){
            console.log("Take", one,  "down, pass it around")
            console.log("We have now", userNumber-one, "bottles")
        }
        else{
            console.log("then, Take", one,  "down, pass them around")
            console.log("We have now", userNumber-one, "bottles")
        }
        
        
            
        }
        
    } 

song()