import React from "react";


class Events extends React.Component {
    constructor(){
        super();
        this.state = {
        isToggleOn: true,
          };

       
    }
    handleClick = () => {
        this.clickMe()
    }
    clickMe = ()=> {
        alert('I was clicked')
        
    }
    handleClick = () => {
        this.setState((item) => ({
          isToggleOn: !item.isToggleOn,
        }));
      };
    handleKeyDown = (event) => {
        if (event.key === "Enter") {
          alert(`The Enter was pressed, your input is: ${event.target.value}`);
        }
      }; 
   
    render(){
        const { isToggleOn } = this.state;
        return(
            <div>
                <input type="text" onKeyDown={this.handleKeyDown} placeholder="Type something and press Enter" />
            
                <button onClick={this.clickMe}>Add</button>
                <button onClick={this.handleClick}> {isToggleOn ? "ON" : "OFF"}</button>
                                                    
    
            </div>
        )
    }
}
export default Events;
