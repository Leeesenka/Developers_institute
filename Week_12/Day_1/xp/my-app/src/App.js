// import logo from './logo.svg';
import './App.css';
import { ReactDOM } from "react";
// import Love from './Love'
// import UserFavoriteAnimals from './UserFavoriteAnimals';
import Exercise4 from './Exercise4'

const user = {
  firstName: 'Bob',
  lastName: 'Dylan',
  favAnimals : ['Horse','Turtle','Elephant','Monkey']
};
function App() {

    return (
        <div>
            <header>
              
              <Exercise4 />
                {/* // <h1>I do not use JSX</h1>    ex xp1 */}
              {/* <h3>{user.firstName}</h3>
              <h3>{user.lastName}</h3>
              <UserFavoriteAnimals favAnimals = {user.favAnimals} /> */}
               
              {/* /* <Love />
              <h2>React is <Love /> times better with JSX</h2>  */ }
          
            
            </header>
        </div>
    )
}

export default App;
