import React from 'react';

class Vote extends React.Component {
    constructor(props){
        super(props)
         
        this.state = {
            languages : [
                {name: "Php", votes: 0},
                {name: "Python", votes: 0},
                {name: "JavaSript", votes: 0},
                {name: "Java", votes: 0}
            ]
        }
    }
    handleClick = () => {
        this.setState({votes: this.state.languages[0].votes ++})
    }
    handleClick1 = () => {
        this.setState({votes: this.state.languages[1].votes ++})
    }
    handleClick2 = () => {
        this.setState({votes: this.state.languages[2].votes ++})
    }

    render(){
     
        return(
            <div style={{display: 'flex', flexDirection: 'column', margin: '5px'}}>
             <div className='one' style={{border: '1px', backgroundColor: 'yellow', width: '300px', display: 'flex', flexDirection: 'row',  justifyContent: 'space-between', margin: '5px'}}>
             <h2 style={{margin: '10px'}}>{this.state.languages[0].votes} {this.state.languages[0].name}</h2>
             <h2 style={{margin: '10px'}} onClick={this.handleClick}>Click here</h2> 
             </div>
        
             <div className='two' style={{border: '1px', backgroundColor: 'yellow', width: '300px', display: 'flex', flexDirection: 'row',  justifyContent: 'space-between', margin: '5px'}}>
             <h2 style={{margin: '10px'}}>{this.state.languages[1].votes} {this.state.languages[1].name}</h2>
             <h2 style={{margin: '10px'}} onClick={this.handleClick1}>Click here</h2> 
             </div>

             <div className='two' style={{border: '1px', backgroundColor: 'yellow', width: '300px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: '5px'}}>
             <h2 style={{margin: '10px'}}>{this.state.languages[2].votes} {this.state.languages[2].name}</h2>
             <h2 style={{margin: '10px'}} onClick={this.handleClick2}>Click here</h2> 
             </div>
        
                
            </div>
        )
    }
}
export default Vote