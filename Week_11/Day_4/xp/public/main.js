const inputLogin = document.querySelectorAll('.loginInput');
const inputRegister = document.querySelectorAll('.registerInput');
const inputLoginButton = document.getElementById('loginButton');
const inputRegisterButton = document.getElementById('registerButton');
const form1 = document.getElementById('form1');

const form2 = document.getElementById('form2');

form1.addEventListener('submit', getFormValue);
form2.addEventListener('submit', getFormValue);

function getFormValue(event) {
    event.preventDefault();
    const data = {
        username: inputLogin[0].value,
        password: inputLogin[1].value,
        firstName: inputRegister[0].value,
        lastName: inputRegister[1].value,
        email: inputRegister[2].value,
        username1: inputRegister[3].value,
        password1: inputRegister[4].value,
    };
    console.log(data);
    
}

inputLogin.forEach(input => input.addEventListener('keyup', checkLoginFields));
inputRegister.forEach(input => input.addEventListener('keyup', checkRegisterFields));

function checkLoginFields() {
    const isLoginEmpty = Array.from(inputLogin).some(input => input.value === '');
    inputLoginButton.disabled = isLoginEmpty;
}

function checkRegisterFields() {
    const isRegisterEmpty = Array.from(inputRegister).some(input => input.value === '');
    inputRegisterButton.disabled = isRegisterEmpty;
}
function render(data) {
    const dataElement = document.getElementById('data');
    dataElement.textContent = JSON.stringify(data);
}

const getMyData = async () => {
    try {
        const res = await fetch('http://localhost:3030/api/data');
        
        const data = await res.json();
        console.log(data);
        render(data)
    }
    catch (e) {
        console.log(e);
    }
}
getMyData()
