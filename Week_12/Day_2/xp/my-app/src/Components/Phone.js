import React from "react";


class Phone extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            brand: "Samsung",
            model: "Galaxy S20",
            color: "black",
            year: 2020
          };

    
        }
        changeColor = () => {
            this.setState({color: "blue"});
          }
    render(){
       
        return(
            <div>
              <h2>My phone is {this.state.brand}</h2>
              <h3>It is {this.state.color} {this.state.model} from {this.state.year}</h3>
              <button
          type="button"
          onClick={this.changeColor}
        > Change color</button>

            </div>
        )
    }
}
export default Phone;
