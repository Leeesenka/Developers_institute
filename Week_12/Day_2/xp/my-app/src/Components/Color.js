import React from "react";


class Color extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            favoriteColor: 'red'
          };
        }
        componentDidMount() {
            setTimeout(() => {
              this.setState({ favoriteColor: 'yellow' });
            }, 5000);
          }
          changeColor = () => {
            this.setState({favoriteColor: "blue"});
          }
    render(){
       
        return(
            <div>
                <h1>My Favorite Color is {this.state.favoriteColor}</h1>
                <button
          type="button"
          onClick={this.changeColor}
        > Change color</button>
            </div>
        )
    }
}
export default Color;
