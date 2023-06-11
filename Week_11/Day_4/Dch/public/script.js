const inputLogin = document.querySelectorAll('.loginInput');
const inputLoginButton = document.querySelector('#loginButton');
const form1 = document.getElementById('form1');

form1.addEventListener('submit', getFormValueLogin);

async function getFormValueLogin(event) {
  event.preventDefault();
  const login = {
    username: inputLogin[0].value,
    password: inputLogin[1].value,
  };
  console.log(login);

    const res = await fetch('http://127.0.0.1:3030/login', {
      method: 'POST',
      body: JSON.stringify(login),
      headers: {
        'Content-Type': 'application/json',
      },
    });

}

inputLogin.forEach((input) => input.addEventListener('keyup', checkLoginFields));

function checkLoginFields() {
  const isLoginEmpty = Array.from(inputLogin).some((input) => input.value === '');
  inputLoginButton.disabled = isLoginEmpty;
}

checkLoginFields();
