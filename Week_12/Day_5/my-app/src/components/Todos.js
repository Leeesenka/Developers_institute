import React, { useState } from "react";
import './Todos.css';

function Todos() {
    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        setTasks(prevTasks => [...prevTasks, inputValue]);
        setInputValue(''); 
    }

    const result = tasks.map((element, index) => {
        return (
            <div 
                className="collection-item" 
                key={index} 
                onClick={() => remove(index)}
            >
                {element}
            </div>
        );
    });


    function remove(index) {
        setTasks([...tasks.slice(0, index), ...tasks.slice(index + 1)]);
     }

    return (
        <div className="text">
            <h1>Todo's</h1>
            <div class="todos collection">
                {result}
            </div>
           
            <p>Add a new todo:</p>
            <form onSubmit={handleFormSubmit}>
                <input 
                    type="text" 
                    name='task' 
                    value={inputValue}
                    onChange={handleInputChange} 
                />
            </form>
        </div>
    )
}

export default Todos;
