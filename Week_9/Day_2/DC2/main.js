let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        payed : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

let items;
const displayGroceries = () => {
   items = groceries.fruits
   
  }
displayGroceries()
console.log(items) 

const cloneGroceries = () => {
    const user = client;
    client = "Betty";
    const shopping = { ...groceries };
    shopping.totalPrice = "35$"; 
    shopping.other.payed = false; 
    console.log(user); 
    console.log(shopping); 
  
    return shopping;
  };
  

  cloneGroceries();

  