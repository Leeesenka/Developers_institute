import logo from './logo.svg';
import './App.css';
// import Parent from './components/Perent';
// import Child from './components/Child';
// import Counter from './components/Counter';
// import ErrorBoundary from './ErrorBoundary';
import { useState} from 'react'

function App() {
  const [name, setName] = useState('John')
  const handleSubmit = (e)=>{
    e.preventDefault()
    const form = e.target
    const formData = new FormData(form)
    console.log('formData=>', formData)
    // fetch('/some-api', {mathod:form.method, body: formData})
    const formJson = Object.fromEntries(formData.entries())
    console.log(formJson)

    fetch('/some-api',{
      method:form.method,
      body:{
        name:e.target.name.value,
        username: e.target.username.value,
      }
    })
  }
  return (
    <div className="App">
      <header className="App-header">
        
        <form onSubmit={handleSubmit} method='POST'>
          <label>
          name: <input type='text' name='name'/>
          </label>
          <label>
          username: <input type='text' name='username'/>
          </label>
          <input type="submit" value="Send" />
        </form>

      </header>
    </div>
  );
}

export default App;
