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