import React, { useState, useEffect } from 'react';
import './App.css';


function App() {
  const [data, setData] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [responseText, setResponseText] = useState(''); 


  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3030/api/hello');
      const textData = await response.text();
      setData(textData);
    }
    fetchData();
  }, []); 
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('/api/hello', {
      method: 'POST',
      body: JSON.stringify({text: inputValue}),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const responseData = await response.text();
    setData(responseData);
  }
 

  async function handleSubmit2(event) {
    event.preventDefault();
    let inputText2 = document.getElementById('your-input-field-id').value;
    const response = await fetch('http://localhost:3030/api/word', {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain'
      },
      body: inputText2
    });
  
    if (response.ok) {
      const jsonResponse = await response.json(); 
      setResponseText(jsonResponse.message);
    } else {
      console.error(`Response was not OK ${response}`);
    }
  };

  return (
    <div className='main'>
    <header>
      <h1>{data}</h1>
      <h1>POST to server</h1>
      <form onSubmit={handleSubmit2}>
        <input type='text' name='text'id='your-input-field-id' value={inputValue} onChange={handleInputChange}></input>
        <button type='submit'>Submit</button>
      </form>
      <p>{responseText}</p> 
    </header>
  </div>
);
}

export default App;
