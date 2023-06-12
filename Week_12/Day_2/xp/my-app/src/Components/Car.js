import React from "react";
import Garage from "./Garage";


class Car extends React.Component {
    constructor(props){
        super(props);

        this.state = {color: 'red'};
       
    }
   
    render(){
        const {name, model} = this.props.carinfo;
        return(
            <div>
                <h2>This car is {name} {model}</h2>
                <h1>This car is {this.state.color} {model}</h1>
                <Garage size="small" />
            
            </div>
        )
    }
}
export default Car;
