const robots = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      image: 'https://robohash.org/1?200x200'
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      image: 'https://robohash.org/2?200x200'
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      image: 'https://robohash.org/3?200x200'
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      image: 'https://robohash.org/4?200x200'
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      image: 'https://robohash.org/5?200x200'
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      image: 'https://robohash.org/6?200x200'
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      image: 'https://robohash.org/7?200x200'
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      image: 'https://robohash.org/8?200x200'
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      image:'https://robohash.org/9?200x200'
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      image:'https://robohash.org/10?200x200'
    }
    ];

for(let i = 0; i< robots.length; i++ ){
const div = document.createElement('div')
div.className = "card"
document.querySelector('.main').appendChild(div)
}
let parentElements = document.querySelectorAll('.card');
parentElements.forEach(function(parentElement) {
    let childElement = document.createElement('div');
    childElement.classList.add('photo');
    parentElement.appendChild(childElement);
});

let parentElements1 = document.querySelectorAll('.photo');
parentElements1.forEach(function(vol, index){
    const image = document.createElement('img')
    image.src = robots[index].image
    vol.appendChild(image)
    image.style.width = '200px';

})
let parentElements2 = document.querySelectorAll('.card');
parentElements2.forEach(function(parentElement) {
    let childElement = document.createElement('div');
    childElement.classList.add('text');
    parentElement.appendChild(childElement);
});

let parentElements3 = document.querySelectorAll('.text');
parentElements3.forEach(function(vol, index){
    const text = document.createElement('h3')
    const email = document.createElement('p')
    text.innerText = robots[index].name
    email.innerText = robots[index].email
    vol.appendChild(text)
    vol.appendChild(email)
    email.style.fontSize = '18px'
    text.style.fontSize = '20px'
    text.style.fontWeight = 'bold'
})


const searchBox = document.getElementById('search-box');

searchBox.addEventListener('input', () => {
  const searchText = searchBox.value.toLowerCase();

  robots.forEach((robot, index) => {
    const card = document.querySelectorAll('.card')[index];
    const name = robot.name.toLowerCase();

    if (name.includes(searchText)) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
});





