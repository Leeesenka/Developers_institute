import React from 'react';
import { connect } from 'react-redux';
import './Search.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class Search extends React.Component {
  constructor (props) {
    super(props);
    this.state = { };
  }


  
  render() {

  
    return (
        <div className='search'>
        <input 
            className="pa3 ba b--green bg-lightest-blue" 
            type="search" 
            
          />
          <button type="button" className="btn btn-dark">Search</button>
        </div>
    )
      
    
  }
}

export default Search


