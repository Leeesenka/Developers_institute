import logo from './logo.svg';
import './App.css';
import Counter from './components/counter';
import CounterC from './components/counterC';
import UserListC from './components/userListC';
import User from './components/User';

function App() {
  return (
    <div className="tc">
      <header className="App-header">
       <UserListC />
      </header>
    </div>
  );
}

export default App;
