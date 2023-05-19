var count = "";
var res = 0;
function number(num){
        count +=num
        console.log(count)
         
}
function operator(operator){
    count +=operator
    console.log(count)
    
}
function equal(){
   res = eval(count)
   count = ""
   console.log(res)

}

function clear_d(){
    count = ""
    console.log(count)
}

function reset_d(){
    do  {

        var i = count.length;
        result= count.slice(i-1,i)
        
        if (isNaN(result)== false){
            let count2 = count.slice(0,i-1);
            count = count2
            console.log(count)
        }
        else {

            console.log(count)
        break
        }
    }
    while (i>0)
}


