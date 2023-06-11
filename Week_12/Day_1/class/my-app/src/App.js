// import logo from './logo.svg';
import './App.css';
import UserClass from './usersClass';
import Hello from './Hello';
import robots from './users.json' 

console.log(robots)
function App() {

  const users = [


    // {id:1, name:'Alesya', email: 'alesya@gmail.com'},
    // {id:2, name:'Anna', email: 'anna@gmail.com'},
    // {id:3, name:'Artem', email: 'artem@gmail.com'},
    // {id:3, name:'Alex', email: 'alex@gmail.com'},

  ]
    return (
        <div>
            <header>
              {
                robots.map(item => {
                  return <UserClass userinfo={item} />
                })
              }
                
            </header>
        </div>
    )
}

export default App;
