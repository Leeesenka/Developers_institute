import logo from './logo.svg';
import './Apps.css';
import Hello from '../my-app/src/Hello';

function App() {
    return (
        <div className='App'>
            <header className='App-header'>
                <Hello />
                <Hello />
                <Hello />
            </header>
        </div>
    )
}

export default App;