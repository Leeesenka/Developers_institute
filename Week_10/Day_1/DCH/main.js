//Daily Challenge : HTML Form
const formElement = document.getElementById('form1'); 
formElement.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const lastName = document.getElementById('lastname').value;
    const formData = {
        name: name,
        lastName: lastName
    };
    var jsonData = JSON.stringify(formData);
    console.log(jsonData);
  });
  
  // Daily Challenge : True Or False


// allTruthy(true, true, true) ➞ true

// allTruthy(true, false, true) ➞ false

// allTruthy(5, 4, 3, 2, 1, 0) ➞ false

function allTruthy(val1, val2, val3){
    let valAll = []
    valAll.push(val1, val2, val3)
    
    let allTrue = valAll.every(nam => nam === true)
    return allTrue
}
console.log(allTruthy(5, 4, 3, 2, 1, 0)) 