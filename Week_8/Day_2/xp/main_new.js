// var res2 = prompt("Say 5 words");
// var res = res2.split(" ");
// var res_first = "";
// console.log(res)

// for (var i = 0; i < res.length; i++) {
//   if (res[i].length > res_first.length) {
//     res_first = res[i];
//   }
// }


//   var star = "*".repeat(res_first.length+5)
//   console.log(star) 
//   for (var i = 0; i < res.length; i++){
//     if (res_first.length > res[i].length){
//         var space = res_first.length-res[i].length
     
//         var star_space = " ".repeat(space)
        
//         }
//       else {
        
//        var star_space = ""  
//       }
//       console.log("*", res[i], star_space, "*")
//     }
//     console.log(star)  

        
// console.log(isBlank('')); --> true
// console.log(isBlank('abc')); --> false
// Exercise 1 : Is_Blank
// function isBlankfunc(arg){
//   for (var i = 0; i <= arg.length; i++){
//     if (arg.length == 0){
//     return true
//   }
//     else{
//     return false
//   }
//   }
// }
// a = isBlankfunc('kyfghiklj')
// console.log(a)



// Exercise 4 : Omnipresent Value
// console.log(abbrevName("Robin Singh")); --> "Robin S."

// function abbrevName(arg){
//  var arr = arg.split(" ")
// console.log(arr)
//     var a = (arr[0] +" " +arr[1].slice(0,1)+".")
//     return a
// }
// name_q = abbrevName("Artem Frolov")
// console.log(name_q)



// Exercise 4 : Omnipresent Value
// [[3, 4], [8, 3, 2], [3], [9, 3], [5, 3], [4, 3]]
// 3 exists in every element inside this array, so is omnipresent.
// 
// 

function isOmnipresent(){
  var arr = [[3, 4], [8, 3, 2], [3], [9, 3], [5, 3], [4, 3]];
  for (var i = 0; i < arr.length; i++){
    copi = arr.i
    console.log(copi)
    for (var y = 0; y < copi.length; y++){
      if (copi.y == 3){
        return true
      }
      else{
        return false
      }
    }

}
}
isOmnipresent()
