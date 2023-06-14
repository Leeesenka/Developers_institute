import React, { useState } from 'react';
import './App.css';

function App() {
  const [product, setProduct] = useState(null);

  const update = async(e) => {
    e.preventDefault();

    let dataToSend = {
      key1: 'myusername',
      email: 'mymail@gmail.com',
      name: 'Isaac',
      lastname: 'Doe',
      age: 30
    }

    try {
        const res = await fetch('https://webhook.site/41356580-08e4-4a41-a0ce-6472d57cd27c', {
          method: 'post',
          mode: 'no-cors',
          headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json' 
          },
          body: JSON.stringify(dataToSend) 
        });

        
        console.log(res);
    }
    catch (e) {
        console.log(e);
    }
  }

  return (
    <div className="App">
      <button onClick={update}>Send data</button>
    </div>
  );
}

export default App;
