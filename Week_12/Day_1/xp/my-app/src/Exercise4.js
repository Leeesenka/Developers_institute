import React from 'react';
import './Exercise4.css'
const style_header = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };
const Exercise4 = (props) =>{
    let {header, paragraf, link, form, list} = props
    return (
        <div style={{textAlign: 'center', padding: '20px'}}>
        <h1 style={style_header}>This is a {header}header </h1>
        <h2 className='para'>It is {paragraf} paragraf</h2>
        <a href='https://codeforgeek.com/render-html-file-expressjs/' style={{marginBottom: '20px'}}>It is a link {link}</a>
        <form action="/action_page.php">
            <label htmlFor="fname">First Name {form}</label>
            <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>
            <button>Click</button>
        </form>
        <img src='https://robohash.org/9'></img>
        <ul>
            <li>{list}list</li>
            <li>{list}list</li>
            <li>{list}list</li>

        </ul>

        </div>
    )
}
export default Exercise4
