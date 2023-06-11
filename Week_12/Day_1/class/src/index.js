import React from 'reakt'
import ReactDom from 'react-don/client'
import './index.css';
import App from './App'
import reportWebVitals from './reportWebVitals';
const root = ReactDom.createroot(document.getElementById('root'));
// const str = 'blabl'
// const imgurl = 'http://mau'
// const element = (<div>
//     <h1>My furst JSX Element</h1>

// </div>)

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

reportWebVitals()